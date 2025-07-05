const hre = require("hardhat");
const fs = require("fs");

(async function () {

    async function _deploy(name) {
        const factory = await hre.ethers.getContractFactory(name);
        const contract = await factory.deploy();
        await contract.deployed();

        const contractsDir = __dirname + "/../../client/contracts";
        if (!fs.existsSync(contractsDir)) {fs.mkdirSync(contractsDir);}
        
        fs.writeFileSync(
            contractsDir + `/${name.toLowerCase()}-address.json`,
            JSON.stringify({ address: contract.address }, null, 2)
        );

       const artifact = hre.artifacts.readArtifactSync(name);

        fs.writeFileSync(
            contractsDir + `/${name.toLowerCase()}-abi.json`,
            JSON.stringify({ abi: artifact.abi }, null, 2)
        );
    
    }

    await hre.run("compile");

    await _deploy("Character");
    await _deploy("Game");

})().then(() => process.exit(0)).catch((err) => {
    console.error(err);
    process.exit(1);
});