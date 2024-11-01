import { Address, PrivateKey, PublicKey, Transaction, FT } from "tbc-lib-js"

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
const privateKeyA = PrivateKey.fromString('L3RiSmpoZBYdksyx1fFqx4W5GJ9CftGfmcquoL1eHNoHPEu2Pkkb');
const publicKeyA = PublicKey.fromPrivateKey(privateKeyA);
const addressA = Address.fromPrivateKey(privateKeyA).toString();

/**
 * Step 2: Define token parameters.
 */
const ftName = 'test_usdt';
const ftSymbol = 'test_usdt';
const ftDecimal = 10;
const ftAmount = 2.1;

async function main() {
    try {

        /**
         * Step 3: Create a new token instance.
         */
        const newToken = new FT({
            name: ftName,
            symbol: ftSymbol,
            amount: ftAmount,
            decimal: ftDecimal
        });

        /**
         * Step 4: Mint new tokens and broadcast the transaction.
         */
        const mintTX = await newToken.MintFT(privateKeyA, addressA); // Step 4.1: Create mint transaction
        await newToken.broadcastTXraw(mintTX); // Step 4.2: Broadcast mint transaction


        // /**
        //  * Step 5: Initialize an existing token and perform a transfer.
        //  */
        // const Token = new FT('ee8d97e5953a6843c3269a7ce3ae4c5264b7af8539fa07764a7f0cf260bf5eb5'); // Step 5.1: Initialize token with existing TXID
        // await Token.initialize(); // Step 5.2: Initialize token parameters
        // const transferTX = await Token.transfer(privateKeyA, addressB, 0.02); // Step 5.3: Create transfer transaction
        // await Token.broadcastTXraw(transferTX); // Step 5.4: Broadcast transfer transaction


    } catch (error) {
        console.error('Error:', error);
    }
}

main();


