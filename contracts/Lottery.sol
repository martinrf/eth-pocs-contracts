pragma solidity >=0.4.22 <0.6.0;

contract Lottery {
  address public manager;
  address[] public players;

  constructor() public {
    manager = msg.sender;
  }

  function enter() public payable {
      require(msg.value > .01 ether);
      players.push(msg.sender);
  }

  function random() private view returns (uint) {
      return uint(keccak256(abi.encodePacked(block.difficulty, now, players)));
  }

  function pickWinner() public restricted {
      uint index = random() % players.length;
      address payable winner = address(uint160(players[index]));
      winner.transfer(address(this).balance);
      players = new address[](0);
  }

  modifier restricted() {
      require(msg.sender == manager);
      _;
  }

  function getPlayers() public view returns(address[] memory){
      return players;
  }
}
