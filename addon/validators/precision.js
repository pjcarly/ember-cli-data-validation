import Validator from 'ember-cli-data-validation/validator';

/**
 * Validator that checks if the Attribute value
 * is a number.
 *
 * @class NumberValidator
 * @extends {Validator}
 */

var amountOfDigits = function(num) {
  return (num + '').replace('.', '').length;;
}

export default Validator.extend({
	validate: function(name, value, attributes) {
		if (!isNaN(value) && (amountOfDigits(value) > attributes.options.validation.precision)) {
			return this.format();
		}
	}
});
