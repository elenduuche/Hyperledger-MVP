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
 * Write the unit tests for your transction processor functions here
 */

const AdminConnection = require('composer-admin').AdminConnection;
const BusinessNetworkConnection = require('composer-client').BusinessNetworkConnection;
const { BusinessNetworkDefinition, CertificateUtil, IdCard } = require('composer-common');
const path = require('path');

const chai = require('chai');
chai.should();
chai.use(require('chai-as-promised'));

const namespace = 'org.medichain.mvp';
const assetType = 'SampleAsset';
const assetNS = namespace + '.' + assetType;
const participantType = 'SampleParticipant';
const participantNS = namespace + '.' + participantType;
const mppType = 'MedicalPractice';
const mppNS = namespace+'.'+mppType;
const mpType = 'MedicalPractitioner';
const mpNS = namespace+'.'+mpType;
const pType = 'Patient';
const pNS = namespace+'.'+pType;
const daType = 'DataAccessor';
const daNS = namespace+'.'+daType;
const piType = 'ProfileInformation';
const piNS = namespace+'.'+piType;


describe('#' + namespace, () => {
    // In-memory card store for testing so cards are not persisted to the file system
    const cardStore = require('composer-common').NetworkCardStoreManager.getCardStore( { type: 'composer-wallet-inmemory' } );

    // Embedded connection used for local testing
    const connectionProfile = {
        name: 'embedded',
        'x-type': 'embedded'
    };

    // Name of the business network card containing the administrative identity for the business network
    const adminCardName = 'admin';

    // Admin connection to the blockchain, used to deploy the business network
    let adminConnection;

    // This is the business network connection the tests will use.
    let businessNetworkConnection;

    // This is the factory for creating instances of types.
    let factory;

    // These are the identities for Alice and Bob.
    const aliceCardName = 'alice';
    const bobCardName = 'bob';
    const dradaCardName = 'drada';
    const zenithAdminCardName = 'zenithadmin';

    // These are a list of receieved events.
    let events;

    let businessNetworkName;

    before(async () => {
        // Generate certificates for use with the embedded connection
        const credentials = CertificateUtil.generate({ commonName: 'admin' });

        // Identity used with the admin connection to deploy business networks
        const deployerMetadata = {
            version: 1,
            userName: 'PeerAdmin',
            roles: [ 'PeerAdmin', 'ChannelAdmin' ]
        };
        const deployerCard = new IdCard(deployerMetadata, connectionProfile);
        deployerCard.setCredentials(credentials);
        const deployerCardName = 'PeerAdmin';

        adminConnection = new AdminConnection({ cardStore: cardStore });

        await adminConnection.importCard(deployerCardName, deployerCard);
        await adminConnection.connect(deployerCardName);
    });

    /**
     *
     * @param {String} cardName The card name to use for this identity
     * @param {Object} identity The identity details
     */
    async function importCardForIdentity(cardName, identity) {
        const metadata = {
            userName: identity.userID,
            version: 1,
            enrollmentSecret: identity.userSecret,
            businessNetwork: businessNetworkName
        };
        const card = new IdCard(metadata, connectionProfile);
        await adminConnection.importCard(cardName, card);
    }
    /**
     * Reconnect using a different identity.
     * @param {String} cardName The name of the card for the identity to use
     */
    async function useIdentity(cardName) {
        await businessNetworkConnection.disconnect();
        businessNetworkConnection = new BusinessNetworkConnection({ cardStore: cardStore });
        events = [];
        businessNetworkConnection.on('event', (event) => {
            events.push(event);
        });
        await businessNetworkConnection.connect(cardName);
        factory = businessNetworkConnection.getBusinessNetwork().getFactory();
    }
    /* describe('## Sample Asset & Sample Transaction Related Tests', ()=>{
        // This is called before each test is executed.
        beforeEach(async () => {
            // Generate a business network definition from the project directory.
            let businessNetworkDefinition = await BusinessNetworkDefinition.fromDirectory(path.resolve(__dirname, '..'));
            businessNetworkName = businessNetworkDefinition.getName();
            await adminConnection.install(businessNetworkDefinition);
            const startOptions = {
                networkAdmins: [
                    {
                        userName: 'admin',
                        enrollmentSecret: 'adminpw'
                    }
                ]
            };
            const adminCards = await adminConnection.start(businessNetworkName, businessNetworkDefinition.getVersion(), startOptions);
            await adminConnection.importCard(adminCardName, adminCards.get('admin'));

            // Create and establish a business network connection
            businessNetworkConnection = new BusinessNetworkConnection({ cardStore: cardStore });
            events = [];
            businessNetworkConnection.on('event', event => {
                events.push(event);
            });
            await businessNetworkConnection.connect(adminCardName);

            // Get the factory for the business network.
            factory = businessNetworkConnection.getBusinessNetwork().getFactory();

            const participantRegistry = await businessNetworkConnection.getParticipantRegistry(participantNS);
            // Create the participants.
            const alice = factory.newResource(namespace, participantType, 'alice@email.com');
            alice.firstName = 'Alice';
            alice.lastName = 'A';

            const bob = factory.newResource(namespace, participantType, 'bob@email.com');
            bob.firstName = 'Bob';
            bob.lastName = 'B';

            participantRegistry.addAll([alice, bob]);

            const assetRegistry = await businessNetworkConnection.getAssetRegistry(assetNS);
            // Create the assets.
            const asset1 = factory.newResource(namespace, assetType, '1');
            asset1.owner = factory.newRelationship(namespace, participantType, 'alice@email.com');
            asset1.value = '10';

            const asset2 = factory.newResource(namespace, assetType, '2');
            asset2.owner = factory.newRelationship(namespace, participantType, 'bob@email.com');
            asset2.value = '20';

            assetRegistry.addAll([asset1, asset2]);

            // Issue the identities.
            let identity = await businessNetworkConnection.issueIdentity(participantNS + '#alice@email.com', 'alice1');
            await importCardForIdentity(aliceCardName, identity);
            identity = await businessNetworkConnection.issueIdentity(participantNS + '#bob@email.com', 'bob1');
            await importCardForIdentity(bobCardName, identity);
        });
        it('Alice can read all of the assets', async () => {
            // Use the identity for Alice.
            await useIdentity(aliceCardName);
            const assetRegistry = await businessNetworkConnection.getAssetRegistry(assetNS);
            const assets = await assetRegistry.getAll();

            // Validate the assets.
            assets.should.have.lengthOf(2);
            const asset1 = assets[0];
            asset1.owner.getFullyQualifiedIdentifier().should.equal(participantNS + '#alice@email.com');
            asset1.value.should.equal('10');
            const asset2 = assets[1];
            asset2.owner.getFullyQualifiedIdentifier().should.equal(participantNS + '#bob@email.com');
            asset2.value.should.equal('20');
        });

        it('Bob can read all of the assets', async () => {
            // Use the identity for Bob.
            await useIdentity(bobCardName);
            const assetRegistry = await businessNetworkConnection.getAssetRegistry(assetNS);
            const assets = await assetRegistry.getAll();

            // Validate the assets.
            assets.should.have.lengthOf(2);
            const asset1 = assets[0];
            asset1.owner.getFullyQualifiedIdentifier().should.equal(participantNS + '#alice@email.com');
            asset1.value.should.equal('10');
            const asset2 = assets[1];
            asset2.owner.getFullyQualifiedIdentifier().should.equal(participantNS + '#bob@email.com');
            asset2.value.should.equal('20');
        });

        it('Alice can add assets that she owns', async () => {
            // Use the identity for Alice.
            await useIdentity(aliceCardName);

            // Create the asset.
            let asset3 = factory.newResource(namespace, assetType, '3');
            asset3.owner = factory.newRelationship(namespace, participantType, 'alice@email.com');
            asset3.value = '30';

            // Add the asset, then get the asset.
            const assetRegistry = await businessNetworkConnection.getAssetRegistry(assetNS);
            await assetRegistry.add(asset3);

            // Validate the asset.
            asset3 = await assetRegistry.get('3');
            asset3.owner.getFullyQualifiedIdentifier().should.equal(participantNS + '#alice@email.com');
            asset3.value.should.equal('30');
        });

        it('Alice cannot add assets that Bob owns', async () => {
            // Use the identity for Alice.
            await useIdentity(aliceCardName);

            // Create the asset.
            const asset3 = factory.newResource(namespace, assetType, '3');
            asset3.owner = factory.newRelationship(namespace, participantType, 'bob@email.com');
            asset3.value = '30';

            // Try to add the asset, should fail.
            const assetRegistry = await  businessNetworkConnection.getAssetRegistry(assetNS);
            assetRegistry.add(asset3).should.be.rejectedWith(/does not have .* access to resource/);
        });

        it('Bob can add assets that he owns', async () => {
            // Use the identity for Bob.
            await useIdentity(bobCardName);

            // Create the asset.
            let asset4 = factory.newResource(namespace, assetType, '4');
            asset4.owner = factory.newRelationship(namespace, participantType, 'bob@email.com');
            asset4.value = '40';

            // Add the asset, then get the asset.
            const assetRegistry = await businessNetworkConnection.getAssetRegistry(assetNS);
            await assetRegistry.add(asset4);

            // Validate the asset.
            asset4 = await assetRegistry.get('4');
            asset4.owner.getFullyQualifiedIdentifier().should.equal(participantNS + '#bob@email.com');
            asset4.value.should.equal('40');
        });

        it('Bob cannot add assets that Alice owns', async () => {
            // Use the identity for Bob.
            await useIdentity(bobCardName);

            // Create the asset.
            const asset4 = factory.newResource(namespace, assetType, '4');
            asset4.owner = factory.newRelationship(namespace, participantType, 'alice@email.com');
            asset4.value = '40';

            // Try to add the asset, should fail.
            const assetRegistry = await businessNetworkConnection.getAssetRegistry(assetNS);
            assetRegistry.add(asset4).should.be.rejectedWith(/does not have .* access to resource/);

        });

        it('Alice can update her assets', async () => {
            // Use the identity for Alice.
            await useIdentity(aliceCardName);

            // Create the asset.
            let asset1 = factory.newResource(namespace, assetType, '1');
            asset1.owner = factory.newRelationship(namespace, participantType, 'alice@email.com');
            asset1.value = '50';

            // Update the asset, then get the asset.
            const assetRegistry = await businessNetworkConnection.getAssetRegistry(assetNS);
            await assetRegistry.update(asset1);

            // Validate the asset.
            asset1 = await assetRegistry.get('1');
            asset1.owner.getFullyQualifiedIdentifier().should.equal(participantNS + '#alice@email.com');
            asset1.value.should.equal('50');
        });

        it('Alice cannot update Bob\'s assets', async () => {
            // Use the identity for Alice.
            await useIdentity(aliceCardName);

            // Create the asset.
            const asset2 = factory.newResource(namespace, assetType, '2');
            asset2.owner = factory.newRelationship(namespace, participantType, 'bob@email.com');
            asset2.value = '50';

            // Try to update the asset, should fail.
            const assetRegistry = await businessNetworkConnection.getAssetRegistry(assetNS);
            assetRegistry.update(asset2).should.be.rejectedWith(/does not have .* access to resource/);
        });

        it('Bob can update his assets', async () => {
            // Use the identity for Bob.
            await useIdentity(bobCardName);

            // Create the asset.
            let asset2 = factory.newResource(namespace, assetType, '2');
            asset2.owner = factory.newRelationship(namespace, participantType, 'bob@email.com');
            asset2.value = '60';

            // Update the asset, then get the asset.
            const assetRegistry = await businessNetworkConnection.getAssetRegistry(assetNS);
            await assetRegistry.update(asset2);

            // Validate the asset.
            asset2 = await assetRegistry.get('2');
            asset2.owner.getFullyQualifiedIdentifier().should.equal(participantNS + '#bob@email.com');
            asset2.value.should.equal('60');
        });

        it('Bob cannot update Alice\'s assets', async () => {
            // Use the identity for Bob.
            await useIdentity(bobCardName);

            // Create the asset.
            const asset1 = factory.newResource(namespace, assetType, '1');
            asset1.owner = factory.newRelationship(namespace, participantType, 'alice@email.com');
            asset1.value = '60';

            // Update the asset, then get the asset.
            const assetRegistry = await businessNetworkConnection.getAssetRegistry(assetNS);
            assetRegistry.update(asset1).should.be.rejectedWith(/does not have .* access to resource/);

        });

        it('Alice can remove her assets', async () => {
            // Use the identity for Alice.
            await useIdentity(aliceCardName);

            // Remove the asset, then test the asset exists.
            const assetRegistry = await businessNetworkConnection.getAssetRegistry(assetNS);
            await assetRegistry.remove('1');
            const exists = await assetRegistry.exists('1');
            exists.should.be.false;
        });

        it('Alice cannot remove Bob\'s assets', async () => {
            // Use the identity for Alice.
            await useIdentity(aliceCardName);

            // Remove the asset, then test the asset exists.
            const assetRegistry = await businessNetworkConnection.getAssetRegistry(assetNS);
            assetRegistry.remove('2').should.be.rejectedWith(/does not have .* access to resource/);
        });

        it('Bob can remove his assets', async () => {
            // Use the identity for Bob.
            await useIdentity(bobCardName);

            // Remove the asset, then test the asset exists.
            const assetRegistry = await businessNetworkConnection.getAssetRegistry(assetNS);
            await assetRegistry.remove('2');
            const exists = await assetRegistry.exists('2');
            exists.should.be.false;
        });

        it('Bob cannot remove Alice\'s assets', async () => {
            // Use the identity for Bob.
            await useIdentity(bobCardName);

            // Remove the asset, then test the asset exists.
            const assetRegistry = await businessNetworkConnection.getAssetRegistry(assetNS);
            assetRegistry.remove('1').should.be.rejectedWith(/does not have .* access to resource/);
        });

        it('Alice can submit a transaction for her assets', async () => {
            // Use the identity for Alice.
            await useIdentity(aliceCardName);

            // Submit the transaction.
            const transaction = factory.newTransaction(namespace, 'SampleTransaction');
            transaction.asset = factory.newRelationship(namespace, assetType, '1');
            transaction.newValue = '50';
            await businessNetworkConnection.submitTransaction(transaction);

            // Get the asset.
            const assetRegistry = await businessNetworkConnection.getAssetRegistry(assetNS);
            const asset1 = await assetRegistry.get('1');

            // Validate the asset.
            asset1.owner.getFullyQualifiedIdentifier().should.equal(participantNS + '#alice@email.com');
            asset1.value.should.equal('50');

            // Validate the events.
            events.should.have.lengthOf(1);
            const event = events[0];
            event.eventId.should.be.a('string');
            event.timestamp.should.be.an.instanceOf(Date);
            event.asset.getFullyQualifiedIdentifier().should.equal(assetNS + '#1');
            event.oldValue.should.equal('10');
            event.newValue.should.equal('50');
        });

        it('Alice cannot submit a transaction for Bob\'s assets', async () => {
            // Use the identity for Alice.
            await useIdentity(aliceCardName);

            // Submit the transaction.
            const transaction = factory.newTransaction(namespace, 'SampleTransaction');
            transaction.asset = factory.newRelationship(namespace, assetType, '2');
            transaction.newValue = '50';
            businessNetworkConnection.submitTransaction(transaction).should.be.rejectedWith(/does not have .* access to resource/);
        });

        it('Bob can submit a transaction for his assets', async () => {
            // Use the identity for Bob.
            await useIdentity(bobCardName);

            // Submit the transaction.
            const transaction = factory.newTransaction(namespace, 'SampleTransaction');
            transaction.asset = factory.newRelationship(namespace, assetType, '2');
            transaction.newValue = '60';
            await businessNetworkConnection.submitTransaction(transaction);

            // Get the asset.
            const assetRegistry = await businessNetworkConnection.getAssetRegistry(assetNS);
            const asset2 = await assetRegistry.get('2');

            // Validate the asset.
            asset2.owner.getFullyQualifiedIdentifier().should.equal(participantNS + '#bob@email.com');
            asset2.value.should.equal('60');

            // Validate the events.
            events.should.have.lengthOf(1);
            const event = events[0];
            event.eventId.should.be.a('string');
            event.timestamp.should.be.an.instanceOf(Date);
            event.asset.getFullyQualifiedIdentifier().should.equal(assetNS + '#2');
            event.oldValue.should.equal('20');
            event.newValue.should.equal('60');
        });

        it('Bob cannot submit a transaction for Alice\'s assets', async () => {
            // Use the identity for Bob.
            await useIdentity(bobCardName);

            // Submit the transaction.
            const transaction = factory.newTransaction(namespace, 'SampleTransaction');
            transaction.asset = factory.newRelationship(namespace, assetType, '1');
            transaction.newValue = '60';
            businessNetworkConnection.submitTransaction(transaction).should.be.rejectedWith(/does not have .* access to resource/);
        });
    }); */
    describe('## Grant Access & Revoke Access Tests ', ()=>{
        beforeEach(async () => {
            // Generate a business network definition from the project directory.
            let businessNetworkDefinition = await BusinessNetworkDefinition.fromDirectory(path.resolve(__dirname, '..'));
            businessNetworkName = businessNetworkDefinition.getName();
            await adminConnection.install(businessNetworkDefinition);
            const startOptions = {
                networkAdmins: [
                    {
                        userName: 'admin',
                        enrollmentSecret: 'adminpw'
                    }
                ]
            };
            const adminCards = await adminConnection.start(businessNetworkName, businessNetworkDefinition.getVersion(), startOptions);
            await adminConnection.importCard(adminCardName, adminCards.get('admin'));

            // Create and establish a business network connection
            businessNetworkConnection = new BusinessNetworkConnection({ cardStore: cardStore });
            events = [];
            businessNetworkConnection.on('event', event => {
                events.push(event);
            });
            await businessNetworkConnection.connect(adminCardName);

            // Get the factory for the business network.
            factory = businessNetworkConnection.getBusinessNetwork().getFactory();
            // Get the various participant Registries
            const mppRegistry = await businessNetworkConnection.getParticipantRegistry(mppNS);
            const mpRegistry = await businessNetworkConnection.getParticipantRegistry(mpNS);
            const pRegistry = await businessNetworkConnection.getParticipantRegistry(pNS);
            const daRegistry = await businessNetworkConnection.getParticipantRegistry(daNS);

            //# Create the various participants.
            // Create Medical Practice Participant
            const ekohospital = factory.newResource(namespace, mppType, 'eko234001');
            ekohospital.practiceName = 'Eko Hospital Lagos';
            ekohospital.practiceRegistrationNumber = 234001;

            await mppRegistry.add(ekohospital);
            //Create Medical Practitioner Participant
            const drAda = factory.newResource(namespace, mpType, 'drada2018');
            drAda.userName = 'elenduadaeze';
            drAda.firstName = 'Adaeze';
            drAda.lastName = 'Elendu';
            drAda.practicionerPlaceOfWork = factory.newRelationship(namespace, mppType, 'eko234001');

            await mpRegistry.add(drAda);
            //Create Patient Participant
            const patient = factory.newResource(namespace, pType, 'patient001');
            patient.userName = 'daresamuel';
            patient.patientDoctor = factory.newRelationship(namespace, mpType, 'drada2018');
            patient.patientPractice = factory.newRelationship(namespace, mppType, 'eko234001');

            await pRegistry.add(patient);

            //Create DataAccessor Participant
            const zenithRep = factory.newResource(namespace, daType, 'zenithadmin001');
            zenithRep.userName = 'zenithadmin';
            zenithRep.typeOfDataAccessor = 'COMMERCIAL_ENTITY';

            await daRegistry.add(zenithRep);

            //Get the various asset Registries
            //Get ProfileInformation asset
            const piRegistry = await businessNetworkConnection.getAssetRegistry(piNS);
            // Create the Profile information asset.
            const patientInfo = factory.newResource(namespace, piType, 'patient001');
            patientInfo.firstName = 'Samuel';
            patientInfo.lastName = 'Dare';
            patientInfo.sex = 'MALE';
            patientInfo.city = 'Balferm';
            patientInfo.state = 'London';
            patientInfo.country = 'England';
            patientInfo.email = 'samueldare@gmail.com';

            await piRegistry.add(patientInfo);

            // Issue the identities.
            let identity = await businessNetworkConnection.issueIdentity(mpNS + '#drada2018', 'drada');
            await importCardForIdentity(dradaCardName, identity);
            identity = await businessNetworkConnection.issueIdentity(daNS + '#zenithadmin001', 'zenithadmin');
            await importCardForIdentity(zenithAdminCardName, identity);
        });
        it('Dr Adaeze can submit grant access transaction for Zenith Bank on behalf of the patient Mr Dare', async () => {
            // Use the identity for drada.
            await useIdentity(dradaCardName);
            //Prepare the Grant Access transaction
            //const assetRegistry = await businessNetworkConnection.getAssetRegistry(assetNS);
            const grantAccessTx = factory.newTransaction(namespace, 'GrantAccess');
            grantAccessTx.accessorId = factory.newRelationship(namespace, daType, 'zenithadmin001');
            grantAccessTx.patientId = factory.newRelationship(namespace, pType, 'patient001');
            //Submit the Grant Access transaction
            await businessNetworkConnection.submitTransaction(grantAccessTx);
            // Validate the medical practitioner and DataAccessor authorized array field.
            const mpRegistry = await businessNetworkConnection.getParticipantRegistry(mpNS);
            const daRegistry = await businessNetworkConnection.getParticipantRegistry(daNS);
            //Get the Medical Practitioner and check that the authorized field has the accessorId
            var drada = await mpRegistry.get('drada2018');
            //console.log('Dr Ada is:', drada);
            var idx = drada.authorized.indexOf('zenithadmin001');
            idx.should.equal(0);
            //Get the DataAccessor and check that the authorized field has the patientId
            var zenithAdmin = await daRegistry.get('zenithadmin001');
            var idx0 = zenithAdmin.authorized.indexOf('patient001');
            idx0.should.equal(0);
        });
        it('Dr Adaeze can submit revoke access transaction for Zenith Bank on behalf of the patient Mr Dare', async () => {
            // Use the identity for drada.
            await useIdentity(dradaCardName);
            //Prepare the Grant Access transaction
            //const assetRegistry = await businessNetworkConnection.getAssetRegistry(assetNS);
            const grantAccessTx = factory.newTransaction(namespace, 'GrantAccess');
            grantAccessTx.accessorId = factory.newRelationship(namespace, daType, 'zenithadmin001');
            grantAccessTx.patientId = factory.newRelationship(namespace, pType, 'patient001');
            //Submit the Grant Access transaction
            await businessNetworkConnection.submitTransaction(grantAccessTx);

            //Revoke Access Transaction test case
            const revokeAccessTx = factory.newTransaction(namespace, 'RevokeAccess');
            revokeAccessTx.accessorId = factory.newRelationship(namespace, daType, 'zenithadmin001');
            revokeAccessTx.patientId = factory.newRelationship(namespace, pType, 'patient001');
            //Submit the Grant Access transaction
            await businessNetworkConnection.submitTransaction(revokeAccessTx);
            // Validate the medical practitioner and DataAccessor authorized array field.
            const mpRegistry = await businessNetworkConnection.getParticipantRegistry(mpNS);
            const daRegistry = await businessNetworkConnection.getParticipantRegistry(daNS);
            //Get the Medical Practitioner and check that the authorized field has the accessorId
            var drada = await mpRegistry.get('drada2018');
            //console.log('Dr Ada is:', drada);
            var idx = drada.authorized.indexOf('zenithadmin001');
            idx.should.equal(-1);
            //Get the DataAccessor and check that the authorized field has the patientId
            var zenithAdmin = await daRegistry.get('zenithadmin001');
            var idx0 = zenithAdmin.authorized.indexOf('patient001');
            idx0.should.equal(-1);

        });
    });

});
