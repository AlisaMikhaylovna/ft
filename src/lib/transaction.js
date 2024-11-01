"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var tbc_lib_js_1 = require("tbc-lib-js");
// const privateKey = PrivateKey.fromString("L1u2TmR7hMMMSV9Bx2Lyt3sujbboqEFqnKygnPRnQERhKB4qptuK");
// const publicKey = privateKey.toPublicKey();
// const address = publicKey.toAddress();
// const transaction = new Transaction();
// const utxo = {
//     txId: '936d1be6963f243c49a93fc0ff00b73a3a650c2467776758060f9ed3ad9c3096',
//     outputIndex: 1,
//     script: "76a9142158ccfe3dc673b74e67c1ffd77842fd8bc4361c88ac",
//     satoshis: 3250000000
// };
// transaction.from(utxo);
// const toAddress = new Address(address.toString());
// const amount = 10000;
// transaction.to(toAddress, amount);
// const changeAddress = new Address(address.toString());
// transaction.change(changeAddress);
// const fee = 1000;
// transaction.fee(fee);
// transaction.sign(privateKey);
// const serializedTransaction = transaction.serialize();
// console.log('Serialized Transaction:', serializedTransaction, transaction.toObject());
/**
 * Step 1: Set up the wallet private key and address.
 * This private key will be used to sign the transaction.
 */
var privateKeyA = tbc_lib_js_1.PrivateKey.fromString('L3RiSmpoZBYdksyx1fFqx4W5GJ9CftGfmcquoL1eHNoHPEu2Pkkb');
var publicKeyA = tbc_lib_js_1.PublicKey.fromPrivateKey(privateKeyA);
var addressA = tbc_lib_js_1.Address.fromPrivateKey(privateKeyA).toString();
/**
 * Step 2: Define token parameters.
 */
var ftName = 'test_usdt';
var ftSymbol = 'test_usdt';
var ftDecimal = 10;
var ftAmount = 2.1;
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var newToken, mintTX, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    newToken = new tbc_lib_js_1.FT({
                        name: ftName,
                        symbol: ftSymbol,
                        amount: ftAmount,
                        decimal: ftDecimal
                    });
                    return [4 /*yield*/, newToken.MintFT(privateKeyA, addressA)];
                case 1:
                    mintTX = _a.sent();
                    return [4 /*yield*/, newToken.broadcastTXraw(mintTX)];
                case 2:
                    _a.sent(); // Step 4.2: Broadcast mint transaction
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error('Error:', error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
main();
