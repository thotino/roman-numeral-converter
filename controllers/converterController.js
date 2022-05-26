const service = require('../services/convertToRomanNumerals')

/**
 * This function defines a controller for the roman numerals conversion
 * @param {*} req - The Express request object
 * @param {*} res - The Express result object
 */
const controller = (req, res) => {
  res.send({ result: service.convertToRomanNumerals({ number: req.query.number_to_convert }) })
}

module.exports = {
  controller
}
