// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "hardhat/console.sol";

contract NftMarketPlace is ERC721URIStorage {
    //  state variables
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    Counters.Counter private _itemsSold;

    address payable public owner;
    uint256 public listingPrice = 0.0025 ether;
    mapping(uint256 => MarketItem) public idToMarketItem;
    struct MarketItem {
        uint256 tokenId;
        uint256 price;
        address payable owner;
        address payable seller;
        bool sold;
    }

    //  events
    event MarketItemCreated(
        uint256 indexed tokenId,
        uint256 price,
        address owner,
        address seller,
        bool sold
    );

    //  constructor
    constructor() ERC721("My Own NFT", "MY_NFT") {
        owner = payable(msg.sender);
    }

    // modifiers
    modifier onlyOwner() {
        require(msg.sender == owner, "Owner required");
        _;
    }

    //  functions
    function updateListNftPrice(uint256 _price) public onlyOwner {
        listingPrice = _price;
    }

    function createNft(
        string memory _tokenURI,
        uint256 _price
    ) public payable returns (uint256) {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, _tokenURI);

        createMarketItem(newTokenId, _price);
        return newTokenId;
    }

    function createMarketItem(uint256 _id, uint256 _price) public payable {
        require(_price > 0, "Price should be greater than 0");
        require(msg.value >= listingPrice, "You must pay the listing price");
        idToMarketItem[_id] = MarketItem({
            tokenId: _id,
            price: _price,
            owner: payable(msg.sender),
            seller: payable(address(this)),
            sold: false
        });

        _transfer(msg.sender, address(this), _id);

        emit MarketItemCreated(_id, _price, msg.sender, address(this), false);
    }

    /* allows someone to resell a token they have purchased */
    function resellToken(uint256 _tokenId, uint256 _price) public payable {
        require(
            idToMarketItem[_tokenId].owner == msg.sender,
            "Only item owner can perform this operation"
        );
        require(msg.value == listingPrice, "You must pay the listing price");
        idToMarketItem[_tokenId].sold = false;
        idToMarketItem[_tokenId].price = _price;
        idToMarketItem[_tokenId].seller = payable(msg.sender);
        idToMarketItem[_tokenId].owner = payable(address(this));
        _itemsSold.decrement();

        _transfer(msg.sender, address(this), _tokenId);
    }

    /* Creates the sale of a marketplace item */
    /* Transfers ownership of the item, as well as funds between buyer and seller */
    function createMarketSale(uint256 _tokenId) public payable {
        uint256 price = idToMarketItem[_tokenId].price;
        require(
            msg.value == price,
            "Please submit the asking price in order to complete the purchase"
        );
        idToMarketItem[_tokenId].owner = payable(msg.sender);
        idToMarketItem[_tokenId].sold = true;
        idToMarketItem[_tokenId].seller = payable(address(0));
        payable(owner).transfer(listingPrice);
        payable(idToMarketItem[_tokenId].seller).transfer(msg.value);
        _itemsSold.increment();
        _transfer(address(this), msg.sender, _tokenId);
    }

    /* Returns data for  unsold market items */
    function fetchMarketItems() public view returns (MarketItem[] memory) {
        uint256 itemCount = _tokenIds.current();
        uint256 unsoldItemCount = _tokenIds.current() - _itemsSold.current();
        uint256 currentIndex = 0;

        MarketItem[] memory items = new MarketItem[](unsoldItemCount);
        for (uint256 i = 0; i < itemCount; i++) {
            if (idToMarketItem[i + 1].owner == address(this)) {
                uint256 currentId = i + 1;
                MarketItem storage currentItem = idToMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    /* Returns only items that a user has purchased */
    function fetchMyNFTs() public view returns (MarketItem[] memory) {
        uint256 totalItemCount = _tokenIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idToMarketItem[i + 1].owner == msg.sender) {
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idToMarketItem[i + 1].owner == msg.sender) {
                uint256 currentId = i + 1;
                MarketItem storage currentItem = idToMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    /* Returns only items a user has listed */
    function fetchItemsListed() public view returns (MarketItem[] memory) {
        uint256 totalItemCount = _tokenIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idToMarketItem[i + 1].seller == msg.sender) {
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idToMarketItem[i + 1].seller == msg.sender) {
                uint256 currentId = i + 1;
                MarketItem storage currentItem = idToMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }
}
