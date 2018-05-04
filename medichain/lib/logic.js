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
 * @param {org.medichain.mvp.SampleTransaction} sampleTransaction
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
 * A medical practicioner GRANTS access to Data Accessors / Other participants
 * @param {org.medichain.mvp.GrantAccess} grantAccess - the function to grant access
 * @transaction
 */

function GrantAccess(grantAccess) {

    var me = getCurrentParticipant();

    console.log('**** AUTH: ' + me.getIdentifier + 'granting access to ' + grantAccess.accessorId)

    if(!me) {
        throw new Error('A participant/certificate mapping does not exist.');
    }

    // if the member is not already authorized, we authorize them
    var index = -1;

    if(!me.authorized) {
        me.authorized = [];
    }
    else {
        index = me.authorized.indexOf(grantAccess.accessorId);
    }

    if(index < 0) {
        me.authorized.push(grantAccess.accessorId);

        return getParticipantRegistry('org.medichain.mvp.DataAccessor')
        .then(function (memberRegistry) {

            // emit an event
            var event = getFactory().newEvent('org.medichain.mvp', 'MemberEvent');
            event.permissionControl = grantAccess;
            emit(event);

            // persist the state of the member
            return memberRegistry.update(me);
        });
    }
}
 

/**
 * A medical practicioner REVOKES access to Data Accessors / Other participants
 * @param {org.medichain.mvp.RevokeAccess} revoke - the RevokeAccess to be processed
 * @transaction
 */
function revokeAccess(revoke) {

    var me = getCurrentParticipant();
    console.log('**** REVOKE: ' + me.getIdentifier() + ' revoking access to ' + revoke.accessorId );

    if(!me) {
        throw new Error('A participant/certificate mapping does not exist.');
    }

    // if the member is authorized, we remove them
    var index = me.authorized ? me.authorized.indexOf(revoke.accessorId) : -1;

    if(index>-1) {
        me.authorized.splice(index, 1);

        return getParticipantRegistry('org.medichain.mvp.DataAccessor')
        .then(function (memberRegistry) {

            // emit an event
            var event = getFactory().newEvent('org.medichain.mvp', 'MemberEvent');
            event.permissionControl = revoke;
            emit(event);

            // persist the state of the member
            return memberRegistry.update(me);
        });
    }
}
