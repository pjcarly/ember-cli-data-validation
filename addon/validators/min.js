import Ember from 'ember';
import Validator from 'ember-cli-data-validation/validator';
import {
  isNumeric
}
from 'ember-cli-data-validation/utils';

/**
 * Validator that could be used to validate minimum length,
 * if the attribute is String, or to validate the minimum value
 * if the Attribute is a Number.
 *
 * @class  MinValidator
 * @extends {Validator}
 */
export default Validator.extend({
  /**
   * Min value for the validator.
   *
   * @property min
   * @type {Number}
   * @default null
   */
  min: null,

  validate: function(name, value, attribute) {
    var type = attribute.type,
      minValue = this.get('min');

    Ember.assert('You must define a `min` for MinValidator', Ember.isPresent(minValue));

    var invalid = true;

    if (isNumeric(value)) {
      invalid = this.validateNumber(value, maxValue);
    } else {
      invalid = this.validateString(value, maxValue);
    }

    if (invalid) {
      return this.format(minValue);
    }
  },

  validateString: function(value, min) {
    if (typeof value !== 'string') {
      return true;
    }

    var length = value && value.length || 0;

    return length < min;
  },

  validateNumber: function(value, min) {
    value = parseFloat(value, 10);

    if (isNaN(value)) {
      return true;
    }

    return value < min;
  }
});