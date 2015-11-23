Avalanche Authentication
=============

Exposes authentication methods for other Avalanche packages to use.

Methods

AuthenticateAdminUser
    * Parses Basic Auth request and verifies if the user is an admin or not.
    * On error sends 403.