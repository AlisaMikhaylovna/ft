"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var tbc_lib_js_1 = require("tbc-lib-js");
var mnemonic = tbc_lib_js_1.Mnemonic.fromRandom();
// get HDPrivateKey from mnemonic
var HDPrivateKey = mnemonic.toHDPrivateKey('', 'livenet');
// create private key from seed with compressed format
// will sign the transaction with this private key
var DerivationPath = "m/44'/236'/0'/1/0";
var derivedHDPrivateKey = HDPrivateKey.deriveChild(DerivationPath);
var privateKey = derivedHDPrivateKey.privateKey;
// get public key from private key
var publicKey = privateKey.toPublicKey();
// get WIF private key
var wif = privateKey.toWIF();
// get address from private key
var address = privateKey.toAddress();
// print results
console.log('private key:', privateKey.toString());
console.log('public key:', publicKey.toString());
console.log('WIF private key (compressed):', wif);
console.log('mnemonic:', mnemonic.phrase);
console.log('address:', address.toString());
