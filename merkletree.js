const keccak256 = require("keccak256");
const {MerkleTree} = require("merkletreejs");

const whitelist = ["0xCd53432c76E2A8D0DdFBF6A851C42d3e66C480eF",
"0x910B37E3180c8421396428Ab41E7fa98228E97a1",
"0xC06feED792F18A404cEb9D02F4f0F7EAf26bf5bF",
"0x7CaE35489249E45D88e2E2A71cb4aC3E89adE536",
"0xA628D1C686f8b7D73e4E75f081A4Ba2406761475",
"0x24D3a9501989901F159672c21bc6A6690D3Cdff6",
"0x79d6Ecfd6fDcEda8cE4B38DCEF16b1A56cFC5B67",
"0x31F5216A36696468721D77105dC71d19546dA698",
"0x5cB0292EadB953eF60392c34a83cB52FbAf50B5f",
"0xCa170Bd42b9D58F9159b7eAcBD73939F52cE469A",
"0x38e9C6904418B856a7a14D5b51A808e579B1C48D",
"0xe8a772F680048C5C0605718B5B6243A74d4720a0"];
const leaves = whitelist.map(addr => keccak256(addr));
const merkleTree = new MerkleTree(leaves, keccak256, {sortPairs: true});
const rootHash = merkleTree.getRoot().toString('hex');
console.log(`Whitelist Merkle Root: 0x${rootHash}`);
whitelist.forEach((address) => {
    const proof = merkleTree.getHexProof(keccak256(address));
    console.log(`Address: ${address} Proof: ${proof}`);
});
