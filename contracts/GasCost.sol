pragma solidity ^0.5.0;

contract GasCost {
   bytes32 _byteArray;
   string _name;
   string _ownerName;
   address _owner;
   mapping(address => uint) collection;

  constructor() public {
      _owner=msg.sender;
      collection[msg.sender]=0xFF;
  }

  event NameEvent(string evPram);
  event OwnerNameEvent(string evPram) ;

  function createInstance() public {
    new Contract();
  }

  modifier onlyOwner() {
    require(msg.sender == _owner);

    _;
  }

  function processBytes(bytes32 ba) public returns (bytes32)
  {
    _byteArray=ba;

      return _byteArray;
  }
  function setConstant() public {
    _name="hello word";
    emit NameEvent(_name);
  }
  function setName(string memory name) public {
    _name=name;
    emit NameEvent(_name);
  }
  function changeOwnerName(string memory name) public onlyOwner {
      _ownerName=name;
      emit OwnerNameEvent(_ownerName);
  }
  function changeAll(
    string memory ownerName
    ,string memory name
    ,bytes32 bt
  ) public onlyOwner {
      _ownerName=ownerName;
      _name=name;
      _byteArray=bt;
      emit OwnerNameEvent(_ownerName);
      emit NameEvent(_name);
  }

  function changeAllTwice (
    string memory ownerName
    ,string memory name
    ,bytes32 bt
  ) public onlyOwner {
      _ownerName=ownerName;
      _name=name;
      _byteArray=bt;
      _ownerName=ownerName;
      _name=name;
      _byteArray=bt;
      emit OwnerNameEvent(_ownerName);
      emit NameEvent(_name);
  }

  function executeSetName(string memory name) public {
    setName(name);
  }

  function executeChangeOwnerName(string memory name) public onlyOwner {
    changeOwnerName(name);
  }

  function changeMapping(uint value) public {
    collection[msg.sender]=value;
  }
}

contract Contract {
  constructor() public {}
}