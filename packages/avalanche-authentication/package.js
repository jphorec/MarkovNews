Package.describe({
    summary: "Avalanche authentication method",
    version: '0.1.0',
    name: "avalanche-authentication"
});

Npm.depends({
    'body-parser': '1.14.1',
    'basic-auth': '1.0.3'
});

Package.onUse(function (api) {

    api.use([
        'ecmascript',
        'webapp'
    ]);

    api.addFiles([
        'lib/server/authenticate.js'
    ], ['server']);
    api.export("AuthenticateAdminUser", ['server']);
});