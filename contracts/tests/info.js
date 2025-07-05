const { ethers } = require('ethers');
require('dotenv').config({path: __dirname + '/../.env'});

const info = require('./info.json');

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETH_RPC = process.env.ETH_RPC;
const RONIN_RPC = process.env.RONIN_RPC;
    
const eth_provider = new ethers.providers.JsonRpcProvider(ETH_RPC);
const eth_wallet = new ethers.Wallet(PRIVATE_KEY, eth_provider);
const eth_game_contract = new ethers.Contract(
    info.Game.ethereum,
    info.Game.abi,
    eth_wallet
); const eth_character_contract = new ethers.Contract(
    info.Character.ethereum,
    info.Character.abi,
    eth_wallet
);

const ronin_provider = new ethers.providers.JsonRpcProvider(RONIN_RPC);
const ronin_wallet = new ethers.Wallet(PRIVATE_KEY, ronin_provider);
const ronin_game_contract = new ethers.Contract(
    info.Game.ronin,
    info.Game.abi,
    ronin_wallet
); const ronin_character_contract = new ethers.Contract(
    info.Character.ronin,
    info.Character.abi,
    ronin_wallet
);

module.exports = {
    eth_game_contract,
    eth_character_contract,
    ronin_game_contract,
    ronin_character_contract
};