require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock brand ten index remember mad pudding hover praise army gas'; 
let testAccounts = [
"0x79b6a5a440d1e142401b7f29d46debe9fd38a1bdae75c9e53ad133bb5eb471be",
"0x4e28388c9333007d852eb5eda81350d38c0b91083798852dc198b1a6f25cc69e",
"0xe14f345e927af66042a15044fdb2334a9af284569b48c87655670b49f0c1e3f0",
"0xd4a78bd1cfce7fdf79251e15ee5b9c0b755cb14dfad0b238694b911ee38f5efd",
"0xef80673fb1fd4774c20f171ad72d4e1facaf0b65778075273754cfc0b9341472",
"0xea916ee1e89a24ba947bf1d4852b03642fe9f1e6382159fb73dca47ebba31c0e",
"0x00fa53a867d9209fbb6a2d58c7f9a433c8d630ebfaecc2210eba0bd2e335d840",
"0xb66962bc2a1e145970cce36f006172085e5668df70d2403853495f3cc7791e24",
"0x0daa542111667d18489a9ee21f1c322fd42444939728526c7aea5f5a6fabf3a9",
"0x78754f8a1ed35600e85c2eb56ce20266b3ca6255fd662c01c18aef295aff3214"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

