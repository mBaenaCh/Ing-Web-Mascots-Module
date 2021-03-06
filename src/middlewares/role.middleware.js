const verifyRole = (req, res, next) => {
    const { role }= req.userdata;
    if (!['Admin', 'Director', 'Teacher', 'Guest'].includes(role)) return res.status(403).json({message: 'Forbidden'});
    next();
};

module.exports = {verifyRole};