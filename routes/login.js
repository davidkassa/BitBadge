// app/routes.js
module.exports = function(app, passport) {


	// =====================================
	// LOGIN ===============================
	// =====================================
	// show the login form
	app.get('/login', function(req, res) {

		// render the page and pass in any flash data if it exists
		res.render('login.ejs', { message: req.flash('loginMessage') }); 
	});

	// process the login form
	// app.post('/login', do all our passport stuff here);

	// =====================================
	// SIGNUP ==============================
	// =====================================
	// show the signup form
	app.get('/signup', function(req, res) {

		// render the page and pass in any flash data if it exists
		res.render('signup.ejs', { message: req.flash('signupMessage') });
	});

	// process the signup form
	// app.post('/signup', do all our passport stuff here);

	// =====================================
	// PROFILE SECTION =====================
	// =====================================
	// we will want this protected so you have to be logged in to visit
	// we will use route middleware to verify this (the isLoggedIn function)
	app.get('/profile', isLoggedIn, function(req, res) {
		res.render('profile.ejs', {
			user : req.user // get the user out of session and pass to template
		});
	});

	// =====================================
	// LOGOUT ==============================
	// =====================================
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

	// process the signup form
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/profile', // redirect to the secure profile section
		failureRedirect : '/signup', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

		// process the login form
	app.post('/login', passport.authenticate('local-login', {
		successRedirect : '/profile', // redirect to the secure profile section
		failureRedirect : '/login', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	app.post('/add-address', isLoggedIn, function(req,res) {
		var address = req.param('bitcoin-address');
		req.user.local.address =address;
		req.user.save();
		res.render('profile.ejs', {
			user : req.user // get the user out of session and pass to template
		});
	})

/*
1dice9wVtrKZTBbAZqz1XiTmboYyvpD3t
1diceDCd27Cc22HV3qPNZKwGnZ8QwhLTc
1dicegEArYHgbwQZhvr5G9Ah2s7SFuW1y
1dicec9k7KpmQaA8Uc8aCCxfWnwEWzpXE
1dice9wcMu5hLF4g81u8nioL5mmSHTApw
1dice97ECuByXAvqXpaYzSaQuPVvrtmz6
1dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDp
1dice7W2AicHosf5EL3GFDUVga7TgtPFn
1dice7fUkz5h4z2wPc1wLMPWgB5mDwKDx
1dice7EYzJag7SxkdKXLr8Jn14WUb3Cf1
1dice6YgEVBf88erBFra9BHf6ZMoyvG88
1dice6wBxymYi3t94heUAG6MpG5eceLG1
1dice6GV5Rz2iaifPvX7RMjfhaNPC8SXH
1dice6gJgPDYz8PLQyJb8cgPBnmWqCSuF
1dice6DPtUMBpWgv8i4pG8HMjXv9qDJWN
1dice61SNWEKWdA8LN6G44ewsiQfuCvge
1dice5wwEZT2u6ESAdUGG6MHgCpbQqZiy
1dice4J1mFEvVuFqD14HzdViHFGi9h4Pp
1dice3jkpTvevsohA4Np1yP4uKzG1SRLv
1dice37EemX64oHssTreXEFT3DXtZxVXK
1dice2zdoxQHpGRNaAWiqbK82FQhr4fb5
1dice2xkjAAiphomEJA5NoowpuJ18HT1s
1dice2WmRTLf1dEk4HH3Xs8LDuXzaHEQU
1dice2vQoUkQwDMbfDACM1xz6svEXdhYb
1dice2pxmRZrtqBVzixvWnxsMa7wN2GCK
1dice1Qf4Br5EYjj9rnHWqgMVYnQWehYG
*/






};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on 
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}
