var answerHash = '0xdb81b4d58595fbbbb592d3661a34cdca14d7ab379441400cbfa1b78bc447c365';
for(var i=0; i<2000; i++) {
	if(web3.sha3(i.toString(16), {encoding: 'hex'}) == answerHash) {
		console.log('Answer Found: ' + i);
		break;
	}
}