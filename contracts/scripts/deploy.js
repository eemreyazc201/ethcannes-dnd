const hre = require("hardhat");
const fs = require("fs");

(async function () {

    async function _deploy(name) {
        const factory = await hre.ethers.getContractFactory(name);
        const contract = await factory.deploy();
        await contract.deployed();
        
        try {
            data = JSON.parse(fs.readFileSync(__dirname + "/../tests/info.json", "utf8"));
        } catch (error) {
            data = {};
        }

        if (!data[name]) {data[name] = {};}
        data[name].abi = hre.artifacts.readArtifactSync(name).abi;
        data[name][hre.network.name] = contract.address;

        fs.writeFileSync(__dirname + "/../../client/contracts/info.json", JSON.stringify(data, null, 2));
        fs.writeFileSync(__dirname + "/../tests/info.json", JSON.stringify(data, null, 2));
    }

    await hre.run("compile");

    await _deploy("Character");
    await _deploy("Game");

})().then(() => process.exit(0)).catch((err) => {
    console.error(err);
    process.exit(1);
});