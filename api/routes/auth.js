const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const config = require('../config')

module.exports = function (app) {
    app.post('/auth', (req, res) => {
        console.log(req.body)
        const { nick, password } = req.body;
        User.query({
            where: { nick: nick }
        }).fetch().then(user => {
            if(user) {
                if(bcrypt.compareSync(password, user.get('password'))) {
                    const token = jwt.sign({
                        id: user.get('id'),
                        nick: user.get('nick')
                    }, config.jwtSecret);
                    res.json({isSuccess: true, token});
                } else {
                    res.status(401).json({ isSuccess: false, errors: ['Invalid Credential']})                    
                }
            } else {
                res.status(401).json({ isSuccess: false, errors: ['Invalid Credential'] })
            }
        })
    })
}
