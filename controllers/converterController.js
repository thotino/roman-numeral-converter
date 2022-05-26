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
  const { number_to_convert: numberToConvert } = req.query
  if (!numberToConvert) throw new Error('ERR_NO_NUMBER_PROVIDED')
  res.send({ result: service.convertToRomanNumerals({ number: numberToConvert }) })
}

/**
 * Export the controller
 */
module.exports = {
  controller
}
