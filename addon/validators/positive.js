import Ember from 'ember';
import Validator from 'ember-cli-data-validation/validator';

/**
 * Validator that checks if the Attribute value
 * is a number.
 *
 * @class NumberValidator
 * @extends {Validator}
 */

export default Validator.extend({
  validate: function(name, value) {
    if (!Ember.isBlank(value) && (isNaN(value) || (value < 0))) {
      return this.format();
    }
  }
});