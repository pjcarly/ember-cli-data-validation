import Ember from 'ember';
import Validator from 'ember-cli-data-validation/validator';

/**
 * Validator that could be used to validate Strings and Numbers.
 *
 * If the value is a String it's length should be in the defined range.
 * If it is a Number, it's value should be in defined range.
 *
 * @class  RangeValidator
 * @extends {Validator}
 */
export default Validator.extend({
	/**
	 * Number representing the starting point
	 * of the range validation.
	 *
	 * @property from
	 * @type {Number}
	 * @default null
	 */
	from: null,

	/**
	 * Number representing the ending point
	 * of the range validation.
	 *
	 * @property to
	 * @type {Number}
	 * @default null
	 */
	to: null,

	validate: function(name, value, attribute, model) {
		var type = attribute.type,
			fromValue = this.get('from'),
			toValue = this.get('to');

		Ember.assert('You must define a `from` for RangeValidator', Ember.isPresent(fromValue));
		Ember.assert('You must define a `to` for RangeValidator', Ember.isPresent(toValue));

		var invalid = false;

		if (type === 'string') {
			value = value.length || 0;
		}

		if (type === 'number' && (value < fromValue || value > toValue)) {
			invalid = true;
		} else if (type === 'string' && (value < fromValue || value > toValue)) {
			invalid = true;
		} else {
			// it is invalid cause it should be a number or a string
			invalid = true;
		}

		if(invalid) {
			var label = this.formatAttributeLabel(name, attribute, model);

			return this.format(label, fromValue, toValue);
		}
	}
});