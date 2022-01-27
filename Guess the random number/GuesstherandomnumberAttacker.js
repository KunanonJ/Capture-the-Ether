import web3 from 'web3'; 
// address of deployed contract
var contractAddress = '0xDd56dCD052548Ac005563f42d13B4D502deCd379';
// get storage at slot 0
var storageAt0;
web3.eth.getStorageAt(contractAddress, 0, (err, res) => { 
  // convert to uint
  console.log(`0: uint8: ${web3.toDecimal(res)}`);
});