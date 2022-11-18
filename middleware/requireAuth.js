import jwt from 'jsonwebtoken';

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.send('internal error occured');
      } else {
        req.body.userId = decodedToken.id;
        res.locals.userId = decodedToken.id;
        
        next();
      }
    });
  } else {
    res.send('access denied, please login first');
  }
};

export default requireAuth;