require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune silver shock rifle smile push inflict arctic success silver'; 
let testAccounts = [
"0x707f6d815aebb80f15315f1b7d60accaca5d53de9f6830ed2a86a794d3049282",
"0x70bf3178723d77fa5fa11b67bf7468b964ef71add2ed1d08abc531380721ac2a",
"0xb42e97195abd4fc1e6821ae0815fecc5b2546848ff593c96104509e704430066",
"0x51b4500c165b6d59c14021f894be609a7a3e8adc04447905ace097fb3d7f88b5",
"0x563014815a9791036def5925b520a6ae0af6a856346d729c7f471272a8bc281f",
"0xc991cc8ed54d63bc7ef1385ad929301c08bb660dfdf5facdd93317609a225629",
"0x909bca97dc9565383cd4d4412ab0114ac30d10ad0df4a0c1e8a6fc4347c963dc",
"0xa6cfb3dc239390692759bd6c61ac076cf6665bcf81c0b7a2214b8e6f0d9a3fcc",
"0x97c57130fd70c0bfbd4240fc783146a8984cb9460a618668043c0d5dacd9cc4c",
"0xfd0b0d66442ab0392ff390ac95bf140e3edebc25a9d473f1b1b8cdb86e0daad0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

