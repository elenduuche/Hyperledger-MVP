/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Sample transaction
 * @param {org.medichain.mvp.SampleTransaction} tx
 * @transaction
 */
async function sampleTransaction(tx) {
    // Save the old value of the asset.
    const oldValue = tx.asset.value;

    // Update the asset with the new value.
    tx.asset.value = tx.newValue;

    // Get the asset registry for the asset.
    const assetRegistry = await getAssetRegistry('org.medichain.mvp.SampleAsset');
    // Update the asset in the asset registry.
    await assetRegistry.update(tx.asset);

    // Emit an event for the modified asset.
    let event = getFactory().newEvent('org.medichain.mvp', 'SampleEvent');
    event.asset = tx.asset;
    event.oldValue = oldValue;
    event.newValue = tx.newValue;
    emit(event);
}

/******* MEDICHAIN TP FUNCTIONS START HERE ****************** */

/**
 * Custom Errors
 * InvalidParticipantType: "Thrown when the participant if not of type MedicalPractitioner"
 */
function InvalidParticipantType(message) {
    this.name = 'InvalidParticipantType';
    this.message = (message || '');
    this.innerError = '';
}
InvalidParticipantType.prototype = Error.prototype;

/**
 * Custom Errors
 * AlreadyGrantedAccess Error: "Thrown when the DataAccessor has already been granted access"
 */
function AlreadyGrantedAccess(message) {
    this.name = 'AlreadyGrantedAccess';
    this.message = (message || '');
    this.innerError = '';
}
AlreadyGrantedAccess.prototype = Error.prototype;

/**
 * Custom Errors
 * InsufficientRight Error: "Thrown when the Medical Practitioner is not the Practice Doctor of the patient"
 */
function InsufficientRight(message) {
    this.name = 'InsufficientRight';
    this.message = (message || '');
    this.innerError = '';
}
InsufficientRight.prototype = Error.prototype;

/**
 * GRANT Access to DataAccessor transaction - A medical practicioner GRANTS access to Data Accessors / Other participants
 * @param {org.medichain.mvp.GrantAccess} grantAccess - the function to grant access
 * @transaction
 */
async function grantAccess(grantAccess) {
    //1a Define variables and DataAccessor Registry
    var me = getCurrentParticipant();
    var dataAccessor = grantAccess.accessorId;
    var patient = grantAccess.patientId;
    const NS = 'org.medichain.mvp';
    const mpType = 'MedicalPractitioner';
    const daType = 'DataAccessor';

    //2b Throw Error "A participant/certificate mapping does not exist." is the no participant was found
    if(!me) {
        throw new Error('A participant/certificate mapping does not exist.');
    }
    //2a Check that the current participant is a "Medical Practitioner"
    if(me.getType()!=='MedicalPractitioner'){
        //2c Throw the error "Invalid Participant Type Error"
        throw new InvalidParticipantType('Expected participant to be type Medical Practitioner');
    }

    //3a Check that the "DataAccessor" has not been already authorized
    if(dataAccessor.authorized!==undefined){
        let index = dataAccessor.authorized.indexOf(patient.getIdentifier());
        //3b Throw "Already Granted Access Error"
        if(index>-1){
            throw new AlreadyGrantedAccess('Access already granted to the accessor');
        }
    }
    else {
        dataAccessor.authorized = [];
    }
    if(me.authorized!==undefined){
        let index = me.authorized.indexOf(grantAccess.accessorId.getIdentifier());
        //3b Throw "Already Granted Access Error"
        if(index>-1){
            throw new AlreadyGrantedAccess('Access already granted to the accessor');
        }
    }
    else {
        me.authorized = [];
    }
    //4a Check that the medical practitioner participant is the medical doctor of the patient
    if(patient.patientDoctor.getIdentifier()!== me.$identifier){
        //4b Throw "Insufficient Right Error"
        throw new InsufficientRight('Participant is not the Medical Doctor of the patient.');
    }
    //5a Add the PatientId to the authorized array of the DataAccessor
    dataAccessor.authorized.push(patient.getIdentifier());
    //6a Add the DataAccessorId to the authorized array of the Medical Practitioner
    me.authorized.push(grantAccess.accessorId.getIdentifier());
    //7a Update the Medical Practitioner in the Registry
    const mpRegistry = await getParticipantRegistry(NS+'.'+mpType);
    await mpRegistry.update(me);
    //8a Update the DataAccessor in the Registry
    const daRegistry = await getParticipantRegistry(NS+'.'+daType);
    await daRegistry.update(dataAccessor);
    //9a Emit the MemberAccessPermissionEvent
    // Emit an event for the modified asset.
    const factory = getFactory();
    let event = factory.newEvent(NS, 'MemberAccessPermissionEvent');
    event.action = 'GRANTED';
    event.practitionerId = factory.newRelationship(NS, mpType, me.$identifier);
    event.accessorId = factory.newRelationship(NS, daType, dataAccessor.$identifier);
    event.patientId = factory.newRelationship(NS, 'Patient', grantAccess.patientId.$identifier);
    emit(event);
}

/**
 * REVOKE Access to DataAccessor transaction -A medical practicioner REVOKES access to Data Accessors / Other participants
 * @param {org.medichain.mvp.RevokeAccess} revokeAccess - the RevokeAccess to be processed
 * @transaction
 */
async function revokeAccess(revokeAccess) {
    //1a Define variables and DataAccessor Registry
    var me = getCurrentParticipant();
    var dataAccessor = revokeAccess.accessorId;
    var patient = revokeAccess.patientId;
    const NS = 'org.medichain.mvp';
    const mpType = 'MedicalPractitioner';
    const daType = 'DataAccessor';

    //2b Throw Error "A participant/certificate mapping does not exist." is the no participant was found
    if(!me) {
        throw new Error('A participant/certificate mapping does not exist.');
    }
    //2a Check that the current participant is a "Medical Practitioner"
    if(me.getType()!=='MedicalPractitioner'){
        //2c Throw the error "Invalid Participant Type Error"
        throw new InvalidParticipantType('Expected participant to be type Medical Practitioner');
    }

    //3a Check that the "DataAccessor" has not been already revoked
    if(dataAccessor.authorized!==undefined){
        let index = dataAccessor.authorized.indexOf(revokeAccess.patientId.getIdentifier());
        //3b Throw "Already Granted Access Error"
        if(index===-1){
            throw new AlreadyGrantedAccess('Access already granted to the accessor');
        }
    }
    else {
        dataAccessor.authorized = [];
    }
    if(me.authorized!==undefined){
        let index = me.authorized.indexOf(revokeAccess.accessorId.getIdentifier());
        //3b Throw "Already Granted Access Error"
        if(index===-1){
            throw new AlreadyGrantedAccess('Access already granted to the accessor');
        }
    }
    else {
        me.authorized = [];
    }
    //4a Check that the medical practitioner participant is the medical doctor of the patient
    if(patient.patientDoctor.$identifier!== me.$identifier){
        //4b Throw "Insufficient Right Error"
        throw new InsufficientRight('Participant is not the Medical Doctor of the patient.');
    }
    //5a Remove the PatientId from the authorized array of the DataAccessor
    //console.debug('@5a Removing patientId from dataAccessor');
    let idx = dataAccessor.authorized.indexOf(revokeAccess.patientId.getIdentifier());
    dataAccessor.authorized.splice(idx, 1);
    //6a Remove the DataAccessorId from the authorized array of the Medical Practitioner
    //console.debug('@6a Removing accessorId from dataAccessor');
    let idx0 = me.authorized.indexOf(revokeAccess.accessorId.getIdentifier());
    me.authorized.splice(idx0, 1);
    //7a Update the Medical Practitioner in the Registry
    //console.debug('@7a Done removing. Now to Update Medical Practitioner in the registry...');
    const mpRegistry = await getParticipantRegistry(NS+'.'+mpType);
    await mpRegistry.update(me);
    //8a Update the DataAccessor in the Registry
    //console.log('@8a Done removing. Now to Update DataAccessor in the registry...');
    const daRegistry = await getParticipantRegistry(NS+'.'+daType);
    await daRegistry.update(dataAccessor);
    //9a Emit the MemberAccessPermissionEvent
    const factory = getFactory();
    let event = factory.newEvent(NS, 'MemberAccessPermissionEvent');
    event.action = 'REVOKED';
    event.practitionerId = factory.newRelationship(NS, mpType, me.$identifier);
    event.accessorId = factory.newRelationship(NS, daType, dataAccessor.$identifier);
    event.patientId = factory.newRelationship(NS, 'Patient', revokeAccess.patientId.$identifier);
    emit(event);
}
