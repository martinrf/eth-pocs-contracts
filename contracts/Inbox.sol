pragma solidity >=0.4.22 <0.6.0;

contract Inbox {
    address public manager;
    string public message;

    constructor(string memory initialMessage) public {
        manager = msg.sender;
        message = initialMessage;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}
