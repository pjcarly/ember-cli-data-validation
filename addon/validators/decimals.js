import Validator from 'ember-cli-data-validation/validator';
import Ember from 'ember';
import { decimalPlaces } from 'ember-cli-data-validation/utils';

/**
 * Validator that checks if the Attribute value
 * is a number.
 *
 * @class NumberValidator
 * @extends {Validator}
 */

export default Validator.extend({
	validate: function(name, value, attributes) {
		if (!Ember.isBlank(value) && !isNaN(value) && (decimalPlaces(value) > attributes.options.validation.decimals)) {
			return this.format(attributes.options.validation.decimals);
		}
	}
});
