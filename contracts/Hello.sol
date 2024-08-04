// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Hello {
    string public storedData;

    event myEventData(string eventOutput);

    function set(string memory myText) public {
        storedData = myText;
        emit myEventData(myText);
    }

    function get() public view returns (string memory) {
        return storedData;
    }
}
