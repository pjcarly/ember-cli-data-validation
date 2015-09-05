import Ember from 'ember';

/**
 * Determines whether or not a value is empty
 *
 * @param  {*}  value
 * @return {Boolean}
 */
export function hasValue(value) {
	return Ember.isPresent(value) || !Ember.isEmpty(value);
}

/**
 * Determines whether or not a belongsToRelationship isEmpty
 *
 * @param  {*}  value
 * @return {Boolean}
 */
export function hasBelongsToValue(value) {
	return Ember.isPresent(value) && value.hasOwnProperty('content') && !Ember.isEmpty(value.content);
}

/**
 * Determines if the value is Boolean.
 *
 * @param  {*}  obj
 * @return {Boolean}
 */
export function isBoolean(obj) {
	return obj === true || obj === false || Object.prototype.toString.call(obj) === '[object Boolean]';
}
