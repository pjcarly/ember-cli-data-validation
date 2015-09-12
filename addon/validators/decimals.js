import Validator from 'ember-cli-data-validation/validator';
import Ember from 'ember';

/**
 * Validator that checks if the Attribute value
 * is a number.
 *
 * @class NumberValidator
 * @extends {Validator}
 */

var decimalPlaces = function(num) {
  var match = (''+num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  if (!match) { return 0; }
  return Math.max(0, (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0));
}

export default Validator.extend({
	validate: function(name, value, attributes) {
		if (!Ember.isBlank(value) && !isNaN(value) && (decimalPlaces(value) > attributes.options.validation.decimals)) {
			return this.format(attributes.options.validation.decimals);
		}
	}
});
