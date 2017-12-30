// import { ExtractJwt, Strategy, fromAuthHeader } from "passport-jwt";
import jwt from "jsonwebtoken";
import passport from "passport";
import SECRET_KEY from "./secretkey";
// import JwtService from "./jwt.service";
import UserService from "../../user/user.service";

class JwtController {
  // constructor() {
  // }
  login(req, res, next) {
    let jwtOptions = {
      // jwtFromRequest: fromAuthHeader,
      secretOrKey: SECRET_KEY
    };

    if (req.body.name && req.body.password) {
      let password = req.body.password;

      new Promise((resolve, reject) => {
        UserService.findOneByName(req.body.name, (err, user) => {
          if (!user) {
            reject();
          } else {
            resolve(user);
          }
        });
      })
        .then(user => {
          if (user.password === password) {
            //FIXME:  implement Scrypt for password before verify
            const payload = { id: user.id }; //TODO: possibly add ACL roles in payload
            const token = jwt.sign(payload, SECRET_KEY);

            return res.json({ message: "ok", token: token });
          } else {
            return res.status(401).json({ message: "passwords did not match" });
          }
        })
        .catch(err => {
          return res.status(401).json({ message: "no such user found" });
        });
    }
  }
  testsecret(req, res, next) {
    return res.json({ message: "ok" });
  }
  unauthenticatedRequestsHandler(err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401).redirect('/app/login/');
    }
    // next();
  }
}

export default new JwtController();
