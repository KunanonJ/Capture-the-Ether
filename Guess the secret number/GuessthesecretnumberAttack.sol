contract GuessTheSecretNumberSolver {
    bytes32 answerHash = 0xdb81b4d58595fbbbb592d3661a34cdca14d7ab379441400cbfa1b78bc447c365;
    
    function guess() public view returns(uint8) {
      for (uint8 i = 0; i < 2 ** 8; i++) {
        if (keccak256(i) == answerHash) {
            break;
        }
      }
      return i;
    }

    function keccak256Uint(uint n) public pure returns(bytes32) {
      return keccak256(n);
    }
}