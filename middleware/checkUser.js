import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
        if (err) {
          res.body.user = null;
          next();
        } else {
          let user = await User.findById(decodedToken.id);
          req.body.user = user;
          next();
        }
      });
    } else {
      req.body.user = null;
      next();
    }
  };

export default checkUser;