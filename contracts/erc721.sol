// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract MyToken is ERC721URIStorage {
    uint currentIndex = 0;

    constructor() ERC721("MyToken", "MTK") {
    
    }

    function mintToken(string memory _tokenURI, address _for) public {
        ++currentIndex;
        _mint(_for, currentIndex);
        _setTokenURI(currentIndex, _tokenURI);
    }

    function changeTokenURI(string memory _tokenURI, uint _index) public {
        _setTokenURI(_index, _tokenURI);
    }
}
