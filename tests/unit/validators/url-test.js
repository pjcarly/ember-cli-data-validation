import Ember from 'ember';
import Validator from 'ember-cli-data-validation/validators/url';

var validator = Validator.create({
	message: '%@ must be a valid URL'
});

var attribute = {
	options: {},
	name: 'url'
};

module('url Validator test');

test('validate', function() {
	deepEqual(validator.validate('url', 'http://domain.net', attribute, {}), undefined);
	deepEqual(validator.validate('url', 'http://domain.net.eu', attribute, {}), undefined);
	deepEqual(validator.validate('url', 'http://sub.domain.com', attribute, {}), undefined);
	deepEqual(validator.validate('url', 'https://domain.net/page.html', attribute, {}), undefined);
	deepEqual(validator.validate('url', 'https://domain.net.eu', attribute, {}), undefined);
	deepEqual(validator.validate('url', 'https://sub.domain.com', attribute, {}), undefined);

	deepEqual(validator.validate('url', 'vlada.spasic@gmail.com', attribute, {}), 'Url must be a valid URL');
	deepEqual(validator.validate('url', 'vlada.1234.e@dev.dom.net', attribute, {}), 'Url must be a valid URL');
	deepEqual(validator.validate('url', null, attribute, {}), 'Url must be a valid URL');
	deepEqual(validator.validate('url', false, attribute, {}), 'Url must be a valid URL');
	deepEqual(validator.validate('url', undefined, attribute, {}), 'Url must be a valid URL');
	deepEqual(validator.validate('url', 'some value', attribute, {}), 'Url must be a valid URL');
});