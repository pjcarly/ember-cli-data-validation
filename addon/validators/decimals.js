import Validator from 'ember-cli-data-validation/validator';

/**
 * Validator that checks if the Attribute value
 * is a number.
 *
 * @class NumberValidator
 * @extends {Validator}
 */

var preDecimals = function(num) {
  var preInt = parseInt(num);
  return preInt.toString().length;
}

export default Validator.extend({
	validate: function(name, value, attributes) {
		if (!isNaN(value) && (preDecimals(value) > attributes.options.validation.length)) {
			return this.format(attributes.options.validation.length);
		}
	}
});
