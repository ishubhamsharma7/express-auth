// const { verifyToken } = require('../utils/jwt');

function authenticate(req, res, next) {
//   const token = req.headers.authorization?.split(' ')[1];
//   if (!token) {
//     return res.status(401).send('Access Denied: No Token Provided!');
//   }

//   try {
//     const verified = verifyToken(token);
//     req.user = verified;
//     next();
//   } catch (err) {
//     res.status(400).send('Invalid Token');
//   }
    req.user = {
        id: 1,
        name: 'John Doe',
        email: 'p5V9f@example.com'
    };
    next();
}


export default authenticate;