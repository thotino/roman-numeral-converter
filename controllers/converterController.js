'use strict'
/**
 * Import the service
 */
const service = require('../services/convertToRomanNumerals')

/**
 * This function defines a controller for the roman numerals conversion
 * @param {*} req - The Express request object
 * @param {*} res - The Express result object
 */
const controller = (req, res) => {
  try {
    // Get the provided number from the query
    const { number_to_convert: numberToConvert } = req.query

    // Check the number
    if (isNaN(numberToConvert)) throw new Error('ERR_NO_NUMBER_PROVIDED')
    if (numberToConvert < 0 || numberToConvert > 100) throw new Error('ERR_PROVIDED_NUMBER_OUT_OF_RANGE')

    // Convert the provided number and return it
    res.send({ result: service.convertToRomanNumerals({ number: numberToConvert }) })
  } catch (error) {
    // Handle errors
    console.log(error.message)
    res.status(500).send(error.message)
  }
}

/**
 * Export the controller
 */
module.exports = {
  controller
}
