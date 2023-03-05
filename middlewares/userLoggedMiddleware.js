function userLoggedMiddleware(req, res, next) {
	res.locals.isLogged = false;
	res.locals.isAdmin = false

	if (req.session.userLogged) {
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged;
	}

	if (req.session.userAdmin) {
		res.locals.isAdmin = true
		res.locals.userAdmin = req.session.userAdmin
	}

	next();
}

module.exports = userLoggedMiddleware;