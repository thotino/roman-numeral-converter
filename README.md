# ROMAN-NUMERAL-CONVERTER
Welcome to the roman numeral converter backend module!
This module aims to:
* provide a server that helps to convert a number to roman numerals
 
# INSTALL
To install this module and its dependencies, use this set of commands : 

```sh
git clone git@github.com:thotino/roman-numeral-converter.git
cd roman-numeral-converter
yarn install
```

# USE
## REQUIREMENTS
* NodeJS (version 14.5.0) with NPM (version 6.14.5)
* Docker (Highly recommanded)

## EXECUTION PROCEDURE
```
yarn install
yarn run serverstart
```
This server will use the port 3000.

## EXECUTION PROCEDURE WITH DOCKER
```
docker build -t server .
docker run -p 3000:3000 server
```
## TESTS FOR THE SERVER
# TESTS
To run the unit tests, use the following command :
```sh
yarn test
```
This will the conversion to the roman numerals.