import Ember from 'ember';
import Validator from 'ember-cli-data-validation/validator';
import {
  hasValue, isNumeric
}
from 'ember-cli-data-validation/utils';

/**
 * Validator that could be used to validate maximum length,
 * if the attribute is String, or to validate the maximum value
 * if the Attribute is a Number.
 *
 * @class  MaxValidator
 * @extends {Validator}
 */
export default Validator.extend({

  /**
   * Max value for the validator.
   *
   * @property max
   * @type {Number}
   * @default null
   */
  max: null,

  validate: function(name, value, attribute) {
    var type = attribute.type,
      maxValue = this.get('max');

    Ember.assert('You must define a `max` for MaxValidator', Ember.isPresent(maxValue));

    if (!hasValue(value)) {
      return;
    }

    var invalid = true;

    if (isNumeric(value)) {
      invalid = this.validateNumber(value, maxValue);
    } else {
      invalid = this.validateString(value, maxValue);
    }

    if (invalid) {
      return this.format(maxValue);
    }
  },

  validateString: function(value, max) {
    if (typeof value !== 'string') {
      return true;
    }

    var length = value && value.length || 0;

    return length > max;
  },

  validateNumber: function(value, max) {
    value = parseFloat(value, 10);

    if (isNaN(value)) {
      return true;
    }

    return value > max;
  }
});