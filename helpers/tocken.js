var config = require('../config');
var jwt = require('jsonwebtoken');



  const  createToken=(objData) => {
        const secret = config.secretKeyAuthorization;
        let {oauthData ,header}=objData
        //let objData = { username: 'mohib', password: '123456' };
        const createToken = jwt.sign({
            auth: objData,
            //agent: headers['user-agent'],
            exp: Math.floor(new Date().getTime() / 1000) + 7 * 24 * 60 * 60 // Note: in seconds!
        }, secret);
        return createToken;
    }
 const decodeToken =(getToken,)=>{
        const secret = config.secretKeyAuthorization;
       // var getToken = createToken;
        var decoded = jwt.verify(getToken, secret);
        var auth=decoded.auth;
        return decoded;
      };

      exports.createToken = createToken;
      exports.decodeToken = decodeToken;
