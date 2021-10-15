const {
    check
} = require('express-validator')

module.exports = {

    validateConfirmPassword: check('confirmPassword')

        // To delete leading and triling space
        .trim()

        // Validate minimum length of password
        // Optional for this context
        .isLength({
            min: 8,
            max: 16
        })

        // Custom message
        .withMessage('Password must be between 8 to 16 characters')

        // Custom validation
        // Validate confirmPassword
        .custom(async (confirmPassword, {
            req
        }) => {
            const password = req.body.password

            // If password and confirm password not same
            // don't allow to sign up and throw error
            if (password !== confirmPassword) {
                throw new Error('Passwords must be same')
            }
        }),
    validator: function(req, res, next) {

        req.checkBody('email')
            .notEmpty()
            .withMessage('Email field is required')
            .isEmail()
            .withMessage('Enter a valid email address')

        req.checkBody('password').notEmpty().withMessage('Password field is required');
        req.checkBody('passwordConfirm').notEmpty().withMessage('Retyp password field is required');

        req.checkBody('password').isEqual(req.body.retype_password).withMessage('Password and confirm password did not match.');


        req.asyncValidationErrors().then(function() {
            next();
        }).catch(function(errors) {
            req.flash('errors', errors);
            res.status(500).redirect('back');
        });

    }
}