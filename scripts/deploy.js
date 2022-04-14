const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory('scNFT');
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();
    console.log("Contract deployed to:", nftContract.address);
  
    let x =0;

    while(x<3){
      //call the contract function
      let txn = await nftContract.makeAnSCNFT()
      //wait for the NFT to be minted
      await txn.wait()
      x++;
      console.log("Minted NFT %s", x)
    }

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
  
  runMain()