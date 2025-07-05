const {
    eth_game_contract,
    eth_character_contract,
    ronin_game_contract,
    ronin_character_contract
} = require('./info.js');

(async function sayHello() {
  const greeting = await ronin_character_contract.sayHello();
  console.log(greeting);
})();
