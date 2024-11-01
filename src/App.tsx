import { useState } from "react";
import { Mnemonic } from "tbc-lib-js";

const App = () => {
  const [mnemonicPhrase, setMnemonicPhrase] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [publicKey, setPublicKey] = useState("");
  const [wif, setWif] = useState("");
  const [address, setAddress] = useState("");

  const generateKeys = () => {
    const mnemonic = Mnemonic.fromRandom();
    setMnemonicPhrase(mnemonic.phrase);

    const HDPrivateKey = mnemonic.toHDPrivateKey('', 'livenet');
    const DerivationPath = "m/44'/236'/0'/1/0";
    const derivedHDPrivateKey = HDPrivateKey.deriveChild(DerivationPath);
    const privateKey = derivedHDPrivateKey.privateKey;

    setPrivateKey(privateKey.toString());
    setPublicKey(privateKey.toPublicKey().toString());
    setWif(privateKey.toWIF());
    setAddress(privateKey.toAddress().toString());
  };

  return (
    <div>
      <button onClick={generateKeys}>Generate Keys</button>
      <h2>Generated Keys:</h2>
      <p><strong>Mnemonic:</strong> {mnemonicPhrase}</p>
      <p><strong>Private Key:</strong> {privateKey}</p>
      <p><strong>Public Key:</strong> {publicKey}</p>
      <p><strong>WIF Private Key:</strong> {wif}</p>
      <p><strong>Address:</strong> {address}</p>
    </div>
  );
}

export default App;
