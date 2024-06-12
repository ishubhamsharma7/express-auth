import express from 'express';

const app = express();


function authenticateToken(req, res, next) {
    // const token = req.header('Authorization')?.split(' ')[1];
    // if (!token) return res.sendStatus(401);
  
    // jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    //   if (err) return res.sendStatus(403);
    //   req.user = user;
    //   next();
    // });
    req.user = {
        name: 'John Doe',
        id: 1
    };
    next(); 
  }
  
  module.exports = { authenticateToken };