/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Controller,
  ControllerInterface,
} from "../../../contracts/NameRegistry.sol/Controller";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract NameRegistry",
        name: "_nameRegistry",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_min_length",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_treasury",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_baseNode",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_priceFeed",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_basePrices",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_rentPrices",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "BASE_NODE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "FLAGS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "GRACE_PERIOD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MANAGER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MIN_DURATION",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MIN_LENGTH",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TREASURY",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "basePrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPrices",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTokenPrice",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]",
      },
    ],
    name: "multicall",
    outputs: [
      {
        internalType: "bytes[]",
        name: "results",
        type: "bytes[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "duration",
        type: "uint64",
      },
    ],
    name: "nameRegister",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "duration",
        type: "uint64",
      },
      {
        internalType: "uint256",
        name: "data",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "keyHashes",
        type: "uint256[]",
      },
      {
        internalType: "string[]",
        name: "values",
        type: "string[]",
      },
    ],
    name: "nameRegisterByManager",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "duration",
        type: "uint64",
      },
      {
        internalType: "uint256",
        name: "data",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "keyHashes",
        type: "uint256[]",
      },
      {
        internalType: "string[]",
        name: "values",
        type: "string[]",
      },
    ],
    name: "nameRegisterExtended",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string[]",
        name: "names",
        type: "string[]",
      },
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "duration",
        type: "uint64",
      },
    ],
    name: "nameRegisterMany",
    outputs: [
      {
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "nameRegistry",
    outputs: [
      {
        internalType: "contract NameRegistry",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "priceFeed",
    outputs: [
      {
        internalType: "contract AggregatorV3Interface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint64",
        name: "duration",
        type: "uint64",
      },
    ],
    name: "registerPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint64",
        name: "duration",
        type: "uint64",
      },
    ],
    name: "renew",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint64",
        name: "duration",
        type: "uint64",
      },
    ],
    name: "renewByManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint64",
        name: "duration",
        type: "uint64",
      },
    ],
    name: "renewPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint64",
        name: "duration",
        type: "uint64",
      },
    ],
    name: "rentPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_flags",
        type: "uint256",
      },
    ],
    name: "setFlags",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_basePrices",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_rentPrices",
        type: "uint256[]",
      },
    ],
    name: "setPrices",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200288538038062002885833981016040819052620000349162000395565b600280546004889055600380546001600160a01b0319166001600160a01b038981169190911790915589166001600160e01b03199091161761278d60a91b179055600584905560076006556200009360006200008d3390565b620000f8565b620000bf7faf290d8680820aad922855f39b306097b20e28774d6c1ad35a20325630c3a02c33620000f8565b620000cb828262000108565b5050600180546001600160a01b0319166001600160a01b0392909216919091179055506200045392505050565b620001048282620001bb565b5050565b3360009081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5602052604090205460ff166200018b5760405162461bcd60e51b815260206004820152601560248201527f63616c6c6572206973206e6f7420612061646d696e0000000000000000000000604482015260640160405180910390fd5b8151620001a09060079060208501906200025b565b508051620001b69060089060208401906200025b565b505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1662000104576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620002173390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b82805482825590600052602060002090810192821562000299579160200282015b82811115620002995782518255916020019190600101906200027c565b50620002a7929150620002ab565b5090565b5b80821115620002a75760008155600101620002ac565b6001600160a01b0381168114620002d857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200030357600080fd5b815160206001600160401b0380831115620003225762000322620002db565b8260051b604051601f19603f830116810181811084821117156200034a576200034a620002db565b6040529384528581018301938381019250878511156200036957600080fd5b83870191505b848210156200038a578151835291830191908301906200036f565b979650505050505050565b600080600080600080600060e0888a031215620003b157600080fd5b8751620003be81620002c2565b602089015160408a01519198509650620003d881620002c2565b606089015160808a01519196509450620003f281620002c2565b60a08901519093506001600160401b03808211156200041057600080fd5b6200041e8b838c01620002f1565b935060c08a01519150808211156200043557600080fd5b50620004448a828b01620002f1565b91505092959891949750929550565b61242280620004636000396000f3fe6080604052600436106101d85760003560e01c80639728538f11610102578063d05eaae011610095578063ec87621c11610064578063ec87621c14610588578063f6c58c59146105bc578063f74c6f74146105dc578063f9c03c00146105ef57600080fd5b8063d05eaae014610508578063d2192c8914610528578063d547741f14610548578063d99ca5691461056857600080fd5b8063b6a6d177116100d1578063b6a6d1771461047a578063bbd6b521146104bb578063bd9a548b146104ce578063c1a287e2146104f157600080fd5b80639728538f14610402578063a217fddf14610418578063ac9650d81461042d578063b24b17b01461045a57600080fd5b80634eb7221a1161017a578063741bef1a11610149578063741bef1a146103725780637d79ff84146103925780638e7a64a1146103a857806391d14854146103be57600080fd5b80634eb7221a146102ff5780635a7051691461031f5780635c9aed35146103325780636c04938e1461035257600080fd5b80632d2c5565116101b65780632d2c5565146102705780632f2ff15d146102a857806336568abe146102ca5780634b94f50e146102ea57600080fd5b806301ffc9a7146101dd5780630d78303714610212578063248a9ca314610240575b600080fd5b3480156101e957600080fd5b506101fd6101f83660046119db565b61060f565b60405190151581526020015b60405180910390f35b34801561021e57600080fd5b5061023261022d366004611ad4565b6106a8565b604051908152602001610209565b34801561024c57600080fd5b5061023261025b366004611b09565b60009081526020819052604090206001015490565b34801561027c57600080fd5b50600354610290906001600160a01b031681565b6040516001600160a01b039091168152602001610209565b3480156102b457600080fd5b506102c86102c3366004611b3e565b6106f0565b005b3480156102d657600080fd5b506102c86102e5366004611b3e565b61071a565b3480156102f657600080fd5b506102326107ab565b34801561030b57600080fd5b50600254610290906001600160a01b031681565b6102c861032d366004611bcb565b610830565b34801561033e57600080fd5b506102c861034d366004611b09565b610a5b565b34801561035e57600080fd5b506102c861036d366004611bcb565b610ade565b34801561037e57600080fd5b50600154610290906001600160a01b031681565b34801561039e57600080fd5b5061023260045481565b3480156103b457600080fd5b5061023260055481565b3480156103ca57600080fd5b506101fd6103d9366004611b3e565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b34801561040e57600080fd5b5061023260065481565b34801561042457600080fd5b50610232600081565b34801561043957600080fd5b5061044d610448366004611c64565b610c6b565b6040516102099190611cf6565b34801561046657600080fd5b50610232610475366004611d58565b610d86565b34801561048657600080fd5b506002546104a290600160a01b900467ffffffffffffffff1681565b60405167ffffffffffffffff9091168152602001610209565b6102326104c9366004611d9d565b610de3565b3480156104da57600080fd5b506104e3611078565b604051610209929190611e3d565b3480156104fd57600080fd5b50610232624f1a0081565b34801561051457600080fd5b506102c8610523366004611ee2565b61112b565b34801561053457600080fd5b50610232610543366004611d58565b6111d0565b34801561055457600080fd5b506102c8610563366004611b3e565b61121e565b34801561057457600080fd5b50610232610583366004611f46565b611243565b34801561059457600080fd5b506102327faf290d8680820aad922855f39b306097b20e28774d6c1ad35a20325630c3a02c81565b3480156105c857600080fd5b506102326105d7366004611d58565b6114a7565b6102326105ea366004611f46565b611520565b6106026105fd366004612010565b611571565b6040516102099190612049565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b0000000000000000000000000000000000000000000000000000000014806106a257507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b8051600754600091908111156106bd57506007545b600060076106cc600184612072565b815481106106dc576106dc612085565b600091825260209091200154949350505050565b60008281526020819052604090206001015461070b816115e4565b61071583836115f1565b505050565b6001600160a01b038116331461079d5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084015b60405180910390fd5b6107a7828261168f565b5050565b600080600160009054906101000a90046001600160a01b03166001600160a01b031663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa158015610801573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061082591906120b5565b509195945050505050565b6000600654600216116108725760405162461bcd60e51b815260206004820152600a6024820152690696e76616c6964206f760b41b6044820152606401610794565b60008383604051610884929190612105565b604080519182900382206005546020840152908201819052915060009060600160408051808303601f19018152908290528051602090910120600254635569f33d60e01b83526004830182905267ffffffffffffffff8616602484015290925082916000916001600160a01b031690635569f33d906044016020604051808303816000875af115801561091b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061093f9190612115565b9050600061098488888080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508a92506111d0915050565b9050803410156109d65760405162461bcd60e51b815260206004820152601060248201527f696e73756666696369656e7420666565000000000000000000000000000000006044820152606401610794565b6003546040516001600160a01b039091169082156108fc029083906000818181858888f19350505050158015610a10573d6000803e3d6000fd5b5080341115610a5157336108fc610a278334612072565b6040518115909202916000818181858888f19350505050158015610a4f573d6000803e3d6000fd5b505b5050505050505050565b3360009081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5602052604090205460ff16610ad95760405162461bcd60e51b815260206004820152601360248201527f63616c6c6572206973206e6f742041444d494e000000000000000000000000006044820152606401610794565b600655565b600060065460011611610b205760405162461bcd60e51b815260206004820152600a6024820152690696e76616c6964206f760b41b6044820152606401610794565b3360009081527f511473bfc0317b2ecebc3e7070288e5dde2957151ef598d1c2d01ac136128f32602052604090205460ff16610b9e5760405162461bcd60e51b815260206004820152601560248201527f63616c6c6572206973206e6f74204d414e4147455200000000000000000000006044820152606401610794565b60008383604051610bb0929190612105565b604080519182900382206005546020840152908201819052915060009060600160408051808303601f19018152908290528051602090910120600254635569f33d60e01b83526004830182905267ffffffffffffffff8616602484015290925082916000916001600160a01b031690635569f33d906044016020604051808303816000875af1158015610c47573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a519190612115565b60608167ffffffffffffffff811115610c8657610c86611a1d565b604051908082528060200260200182016040528015610cb957816020015b6060815260200190600190039081610ca45790505b50905060005b82811015610d7f5760008030868685818110610cdd57610cdd612085565b9050602002810190610cef919061212e565b604051610cfd929190612105565b600060405180830381855af49150503d8060008114610d38576040519150601f19603f3d011682016040523d82523d6000602084013e610d3d565b606091505b509150915081610d4c57600080fd5b80848481518110610d5f57610d5f612085565b602002602001018190525050508080610d7790612175565b915050610cbf565b5092915050565b815160085460009190811115610d9b57506008545b600067ffffffffffffffff84166008610db5600185612072565b81548110610dc557610dc5612085565b9060005260206000200154610dda919061218e565b95945050505050565b60008060065460021611610e265760405162461bcd60e51b815260206004820152600a6024820152690696e76616c6964206f760b41b6044820152606401610794565b600454841015610e785760405162461bcd60e51b815260206004820152600e60248201527f6e616d6520746f6f2073686f72740000000000000000000000000000000000006044820152606401610794565b60025467ffffffffffffffff600160a01b90910481169083161015610edf5760405162461bcd60e51b815260206004820152601260248201527f6475726174696f6e20746f6f20736d616c6c00000000000000000000000000006044820152606401610794565b6000610f2286868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508792506114a7915050565b905080341015610f745760405162461bcd60e51b815260206004820152601060248201527f696e73756666696369656e7420666565000000000000000000000000000000006044820152606401610794565b60025460055460405163832d975d60e01b81526000926001600160a01b03169163832d975d91610faf918b918b918b918b91906004016121ce565b6020604051808303816000875af1158015610fce573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ff29190612115565b6003546040519192506001600160a01b03169083156108fc029084906000818181858888f1935050505015801561102d573d6000803e3d6000fd5b508134111561106e57336108fc6110448434612072565b6040518115909202916000818181858888f1935050505015801561106c573d6000803e3d6000fd5b505b9695505050505050565b60608060076008818054806020026020016040519081016040528092919081815260200182805480156110ca57602002820191906000526020600020905b8154815260200190600101908083116110b6575b505050505091508080548060200260200160405190810160405280929190818152602001828054801561111c57602002820191906000526020600020905b815481526020019060010190808311611108575b50505050509050915091509091565b3360009081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5602052604090205460ff166111a95760405162461bcd60e51b815260206004820152601560248201527f63616c6c6572206973206e6f7420612061646d696e00000000000000000000006044820152606401610794565b81516111bc90600790602085019061197b565b50805161071590600890602084019061197b565b6000806111db6107ab565b90506301e13380816111ed8686610d86565b611202906a52b7d2dcc80cd2e400000061218e565b61120c9190612212565b6112169190612212565b949350505050565b600082815260208190526040902060010154611239816115e4565b610715838361168f565b600080600654600116116112865760405162461bcd60e51b815260206004820152600a6024820152690696e76616c6964206f760b41b6044820152606401610794565b3360009081527f511473bfc0317b2ecebc3e7070288e5dde2957151ef598d1c2d01ac136128f32602052604090205460ff166113045760405162461bcd60e51b815260206004820152601560248201527f63616c6c6572206973206e6f74204d414e4147455200000000000000000000006044820152606401610794565b60025460055460405163832d975d60e01b81526000926001600160a01b03169163832d975d9161133f918f918f918f918f91906004016121ce565b6020604051808303816000875af115801561135e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113829190612115565b9050841561140e576002546040517f27f189750000000000000000000000000000000000000000000000000000000081526001600160a01b03909116906327f18975906113db9089908990899089908890600401612234565b600060405180830381600087803b1580156113f557600080fd5b505af1158015611409573d6000803e3d6000fd5b505050505b86600116600103611499576002546040517f4adb50ca0000000000000000000000000000000000000000000000000000000081526001600160a01b038b811660048301526024820184905290911690634adb50ca90604401600060405180830381600087803b15801561148057600080fd5b505af1158015611494573d6000803e3d6000fd5b505050505b9a9950505050505050505050565b6000806114b26107ab565b90506301e13380816114c48686610d86565b6114d9906a52b7d2dcc80cd2e400000061218e565b6114e39190612212565b6114ed9190612212565b816114f7866106a8565b61150c906a52b7d2dcc80cd2e400000061218e565b6115169190612212565b611216919061232e565b600080600654600216116115635760405162461bcd60e51b815260206004820152600a6024820152690696e76616c6964206f760b41b6044820152606401610794565b60006113828b8b8b8b610de3565b606060005b848110156115db576115ac86868381811061159357611593612085565b90506020028101906115a5919061212e565b8686610de3565b8282815181106115be576115be612085565b60209081029190910101526115d460018261232e565b9050611576565b50949350505050565b6115ee813361170e565b50565b6000828152602081815260408083206001600160a01b038516845290915290205460ff166107a7576000828152602081815260408083206001600160a01b03851684529091529020805460ff1916600117905561164b3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16156107a7576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff166107a75761173f81611781565b61174a836020611793565b60405160200161175b929190612341565b60408051601f198184030181529082905262461bcd60e51b8252610794916004016123c2565b60606106a26001600160a01b03831660145b606060006117a283600261218e565b6117ad90600261232e565b67ffffffffffffffff8111156117c5576117c5611a1d565b6040519080825280601f01601f1916602001820160405280156117ef576020820181803683370190505b5090507f30000000000000000000000000000000000000000000000000000000000000008160008151811061182657611826612085565b60200101906001600160f81b031916908160001a9053507f78000000000000000000000000000000000000000000000000000000000000008160018151811061187157611871612085565b60200101906001600160f81b031916908160001a905350600061189584600261218e565b6118a090600161232e565b90505b6001811115611925577f303132333435363738396162636465660000000000000000000000000000000085600f16601081106118e1576118e1612085565b1a60f81b8282815181106118f7576118f7612085565b60200101906001600160f81b031916908160001a90535060049490941c9361191e816123d5565b90506118a3565b5083156119745760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610794565b9392505050565b8280548282559060005260206000209081019282156119b6579160200282015b828111156119b657825182559160200191906001019061199b565b506119c29291506119c6565b5090565b5b808211156119c257600081556001016119c7565b6000602082840312156119ed57600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461197457600080fd5b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611a5c57611a5c611a1d565b604052919050565b600082601f830112611a7557600080fd5b813567ffffffffffffffff811115611a8f57611a8f611a1d565b611aa2601f8201601f1916602001611a33565b818152846020838601011115611ab757600080fd5b816020850160208301376000918101602001919091529392505050565b600060208284031215611ae657600080fd5b813567ffffffffffffffff811115611afd57600080fd5b61121684828501611a64565b600060208284031215611b1b57600080fd5b5035919050565b80356001600160a01b0381168114611b3957600080fd5b919050565b60008060408385031215611b5157600080fd5b82359150611b6160208401611b22565b90509250929050565b60008083601f840112611b7c57600080fd5b50813567ffffffffffffffff811115611b9457600080fd5b602083019150836020828501011115611bac57600080fd5b9250929050565b803567ffffffffffffffff81168114611b3957600080fd5b600080600060408486031215611be057600080fd5b833567ffffffffffffffff811115611bf757600080fd5b611c0386828701611b6a565b9094509250611c16905060208501611bb3565b90509250925092565b60008083601f840112611c3157600080fd5b50813567ffffffffffffffff811115611c4957600080fd5b6020830191508360208260051b8501011115611bac57600080fd5b60008060208385031215611c7757600080fd5b823567ffffffffffffffff811115611c8e57600080fd5b611c9a85828601611c1f565b90969095509350505050565b60005b83811015611cc1578181015183820152602001611ca9565b50506000910152565b60008151808452611ce2816020860160208601611ca6565b601f01601f19169290920160200192915050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b82811015611d4b57603f19888603018452611d39858351611cca565b94509285019290850190600101611d1d565b5092979650505050505050565b60008060408385031215611d6b57600080fd5b823567ffffffffffffffff811115611d8257600080fd5b611d8e85828601611a64565b925050611b6160208401611bb3565b60008060008060608587031215611db357600080fd5b843567ffffffffffffffff811115611dca57600080fd5b611dd687828801611b6a565b9095509350611de9905060208601611b22565b9150611df760408601611bb3565b905092959194509250565b600081518084526020808501945080840160005b83811015611e3257815187529582019590820190600101611e16565b509495945050505050565b604081526000611e506040830185611e02565b8281036020840152610dda8185611e02565b600082601f830112611e7357600080fd5b8135602067ffffffffffffffff821115611e8f57611e8f611a1d565b8160051b611e9e828201611a33565b9283528481018201928281019087851115611eb857600080fd5b83870192505b84831015611ed757823582529183019190830190611ebe565b979650505050505050565b60008060408385031215611ef557600080fd5b823567ffffffffffffffff80821115611f0d57600080fd5b611f1986838701611e62565b93506020850135915080821115611f2f57600080fd5b50611f3c85828601611e62565b9150509250929050565b600080600080600080600080600060c08a8c031215611f6457600080fd5b893567ffffffffffffffff80821115611f7c57600080fd5b611f888d838e01611b6a565b909b509950899150611f9c60208d01611b22565b9850611faa60408d01611bb3565b975060608c0135965060808c0135915080821115611fc757600080fd5b611fd38d838e01611c1f565b909650945060a08c0135915080821115611fec57600080fd5b50611ff98c828d01611c1f565b915080935050809150509295985092959850929598565b6000806000806060858703121561202657600080fd5b843567ffffffffffffffff81111561203d57600080fd5b611dd687828801611c1f565b6020815260006119746020830184611e02565b634e487b7160e01b600052601160045260246000fd5b818103818111156106a2576106a261205c565b634e487b7160e01b600052603260045260246000fd5b805169ffffffffffffffffffff81168114611b3957600080fd5b600080600080600060a086880312156120cd57600080fd5b6120d68661209b565b94506020860151935060408601519250606086015191506120f96080870161209b565b90509295509295909350565b8183823760009101908152919050565b60006020828403121561212757600080fd5b5051919050565b6000808335601e1984360301811261214557600080fd5b83018035915067ffffffffffffffff82111561216057600080fd5b602001915036819003821315611bac57600080fd5b6000600182016121875761218761205c565b5060010190565b80820281158282048414176106a2576106a261205c565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6080815260006121e26080830187896121a5565b6001600160a01b039590951660208301525067ffffffffffffffff92909216604083015260609091015292915050565b60008261222f57634e487b7160e01b600052601260045260246000fd5b500490565b6060815284606082015260007f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff86111561226d57600080fd5b8560051b808860808501378083019050608081016020608085840301818601528187835260a08401905060a08860051b85010192508860005b8981101561231657858503609f190183528135368c9003601e190181126122cc57600080fd5b8b01848101903567ffffffffffffffff8111156122e857600080fd5b8036038213156122f757600080fd5b6123028782846121a5565b9650505091830191908301906001016122a6565b50505050604093909301939093525095945050505050565b808201808211156106a2576106a261205c565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351612379816017850160208801611ca6565b7f206973206d697373696e6720726f6c652000000000000000000000000000000060179184019182015283516123b6816028840160208801611ca6565b01602801949350505050565b6020815260006119746020830184611cca565b6000816123e4576123e461205c565b50600019019056fea26469706673582212209e4e30a3f72d88456f918dddaedca1c41e2de4dc3bfacff24db60fdccbd5bb7f64736f6c63430008110033";

type ControllerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ControllerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Controller__factory extends ContractFactory {
  constructor(...args: ControllerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _nameRegistry: PromiseOrValue<string>,
    _min_length: PromiseOrValue<BigNumberish>,
    _treasury: PromiseOrValue<string>,
    _baseNode: PromiseOrValue<BigNumberish>,
    _priceFeed: PromiseOrValue<string>,
    _basePrices: PromiseOrValue<BigNumberish>[],
    _rentPrices: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Controller> {
    return super.deploy(
      _nameRegistry,
      _min_length,
      _treasury,
      _baseNode,
      _priceFeed,
      _basePrices,
      _rentPrices,
      overrides || {}
    ) as Promise<Controller>;
  }
  override getDeployTransaction(
    _nameRegistry: PromiseOrValue<string>,
    _min_length: PromiseOrValue<BigNumberish>,
    _treasury: PromiseOrValue<string>,
    _baseNode: PromiseOrValue<BigNumberish>,
    _priceFeed: PromiseOrValue<string>,
    _basePrices: PromiseOrValue<BigNumberish>[],
    _rentPrices: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _nameRegistry,
      _min_length,
      _treasury,
      _baseNode,
      _priceFeed,
      _basePrices,
      _rentPrices,
      overrides || {}
    );
  }
  override attach(address: string): Controller {
    return super.attach(address) as Controller;
  }
  override connect(signer: Signer): Controller__factory {
    return super.connect(signer) as Controller__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ControllerInterface {
    return new utils.Interface(_abi) as ControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Controller {
    return new Contract(address, _abi, signerOrProvider) as Controller;
  }
}
