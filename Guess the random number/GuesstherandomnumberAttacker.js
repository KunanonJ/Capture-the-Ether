
// transaction hash of contract deploy
var txHash = '0x276ccf310d6c75cc2ecdd5a76b69dd1df74ad6b9d300c2d81a7c51f92f235b3c';
// get transaction
web3.eth.getTransaction('0x276ccf310d6c75cc2ecdd5a76b69dd1df74ad6b9d300c2d81a7c51f92f235b3c', (err, tx) => {
  console.log(tx);
  
  var blockNumber = tx.blockNumber;
  web3.eth.getBlock(blockNumber, (err, block) => {
    console.log(block);
    
    var timestamp = block.timestamp;
    var parentHash = block.parentHash;
    var hash = web3.sha3(parentHash + web3.padLeft(timestamp.toString(16), 64),  {encoding: 'hex'});
    console.log(web3.toDecimal(hash.slice(-2)));
  });
});