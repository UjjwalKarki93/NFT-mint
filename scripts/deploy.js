const main = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory("myNFT");
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed();

  console.log("Contract deployed address:", nftContract.address);

  let txn = await nftContract.mintNft(); //first mint
  await txn.wait();

  txn = await nftContract.mintNft(); //second mint
  await txn.wait();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
