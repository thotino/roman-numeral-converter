const { When, Then } = require('@cucumber/cucumber')
const expect = require('chai').expect

const axios = require('axios')

/**
 * This function makes a request to the back converter app
 * @param {Number} decimalNumber - The number to be converted
 * @returns {*} response - The response of the request
 */
const requestConversion = async function ({ decimalNumber }) {
  try {
    const { data: response } = await axios({
      baseURL: 'http://localhost:3000',
      url: 'convert-to-roman-numbers',
      params: {
        number_to_convert: decimalNumber
      }
    })
    return response
  } catch (error) {
    return Promise.reject(error.message)
  }
}

/**
 * The step describing the interaction of the user
 */
When('the user inputs {int}', async function (inputNumber) {
  this.output = await requestConversion({ decimalNumber: inputNumber })
})

/**
 * The step describing the expected result
 */
Then('the converter should return {string}', function (expectedResult) {
  expect(this.output.result).to.equal(expectedResult)
})
