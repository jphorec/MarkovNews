const bodyParser = Npm.require('body-parser');
const auth = Npm.require('basic-auth');

AuthenticateAdminUser = function(req, res, next) {
    const user = auth(req);

    if (!user || !user.name || !user.pass) {
        res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
        return res.sendStatus(403);
    }

    const dbUser = getUserInDB(user.name);

    if(dbUser) {
        const password = {digest: user.pass, algorithm: 'sha-256'};
        const authUser = Accounts._checkPassword(dbUser, password);

        if(authUser.error == null)
            if(dbUser.isAdmin) //check for admin role
                return next();//if admin then return to initiating function
    }

    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    return res.sendStatus(403);
};

var getUserInDB = function( username ) {
    const user = Meteor.users.findOne({
        "username" : username
    });
    return user;
};
