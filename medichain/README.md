# medichain

Medichain business network

## org.medichain.mvp


# TO DO

- [ ] Fix Permision Control In Hyperledgder Model
- [ ] Add Member Class to main .cto file
- [ ] ReDeploy Business Network
- [ ] Complete Build of Angular Application
- [ ] Deploy APP to rackspace

#Test

- "test": "nyc mocha -t 0 test/*.js && cucumber-js"

docker run     -d     -e COMPOSER_CARD=${COMPOSER_CARD}     -e COMPOSER_NAMESPACES=${COMPOSER_NAMESPACES}     -e COMPOSER_AUTHENTICATION=${COMPOSER_AUTHENTICATION}     -e COMPOSER_MULTIUSER=${COMPOSER_MULTIUSER}     -e COMPOSER_PROVIDERS="${COMPOSER_PROVIDERS}"     -e COMPOSER_DATASOURCES="${COMPOSER_DATASOURCES}"     -v ~/.composer:/home/composer/.composer     --name medichain-restserver     --network composer_default     -p 3000:3000     medichain/medichain-composer-rest-server