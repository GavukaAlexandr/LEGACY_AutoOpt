import JwtService from "./jwt.service";
import UserService from "./../../user/user.service";
import { error } from "util";
// import passportJWT from "passport-jwt";
// import jwt from "jsonwebtoken";
var jwt = require("jsonwebtoken");
var passport = require("passport");
var passportJWT = require("passport-jwt");

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;
var jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader;
jwtOptions.secretOrKey = SECRET_KEY;

import SECRET_KEY from "./secretkey";
import { Error } from "mongoose";

class JwtController {
  constructor() {}
  login(req, res, next) {
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
        .then((user) => {
          console.log("then");
          if (user.password === password) {
            //FIXME:  implement Scrypt for password before verify
            const payload = { id: user.id }; //TODO: possibly add ACL roles in payload
            const token = jwt.sign(payload, jwtOptions.secretOrKey);

            return res.json({ message: "ok", token: token });
          } else {
            return res.status(401).json({ message: "passwords did not match" });
          }
        })
        .catch(err => {
          console.log("catch");
          return res.status(401).json({ message: "no such user found" });
        });
    }
  }
}

export default new JwtController();
