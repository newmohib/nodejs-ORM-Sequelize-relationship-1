
const crypto = require('crypto');
var jwt = require('jsonwebtoken');

const ENCRYPTION_KEY = "MY ENCR KEY1111MY ENCR KEY1111MY";//process.env.ENCRYPTION_KEY; // Must be 256 bytes (32 characters)
const IV_LENGTH = 16; // For AES, this is always 16

function encrypt(text) {
  let iv = crypto.randomBytes(IV_LENGTH);
  let cipher = crypto.createCipheriv('aes-256-cbc', new Buffer(ENCRYPTION_KEY), iv);
  let encrypted = cipher.update(text);

  encrypted = Buffer.concat([encrypted, cipher.final()]);

  return iv.toString('hex') + ':' + encrypted.toString('hex');
}

function decrypt(text) {
  let textParts = text.split(':');
  let iv = new Buffer(textParts.shift(), 'hex');
  let encryptedText = new Buffer(textParts.join(':'), 'hex');
  let decipher = crypto.createDecipheriv('aes-256-cbc', new Buffer(ENCRYPTION_KEY), iv);
  let decrypted = decipher.update(encryptedText);

  decrypted = Buffer.concat([decrypted, decipher.final()]);

  return decrypted.toString();
}

// var hw = encrypt(JSON.stringify({text:"Some serious stuff"}));
// console.log(hw)
// console.log(decrypt(hw))

var myServerKey = "im the private key";

var token = jwt.sign({ foo: 'bar' }, myServerKey);
console.log(token)
var decoded = jwt.verify(token, myServerKey);
console.log(decoded);