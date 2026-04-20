const authService = require("../Services/auth.service.js");
exports.login = async(req, res)=> {
    try {
        const data = await authService.login(req.body)
        res.json(data);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }

};
exports.register = async(req, res)=> {
    try {
        const data = await authService.register(req.body)
        res.json(data)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
};