Package.describe({
  name: 'avalanche:api',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'express': '4.13.3',
  'body-parser': '1.14.1',
  'basic-auth': '1.0.3',
  'jwt-simple': '0.3.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');

  api.use([
    'ecmascript',
    'webapp',
    'telescope:posts@0.25.0',
    'avalanche-authentication',
    'mongo'

  ]);

  api.addFiles([
    'lib/server/api.js'
  ], ['server']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('avalanche:api');
  api.addFiles('api-tests.js');
});
