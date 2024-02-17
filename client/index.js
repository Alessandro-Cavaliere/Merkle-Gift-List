const axios = require('axios');
const MerkleTree = require('../utils/MerkleTree');
const niceList = require('../utils/niceList.json');

const serverUrl = 'http://localhost:1225';

async function main() {
  // TODO: how do we prove to the server we're on the nice list? 
  // create the merkle tree for the whole nice list
  // --------------------------------------------
  // Completed implementation of the feature
  const index= niceList.findIndex(n => n ===process.argv[2])
  if(!process.argv[2]){
    console.log("Please enter a valid name from the list and a name to send to the server, run `node client/index '<string>'`")
    process.exit()
  }

  const leaf=process.argv[2]
  const merkleTree= new MerkleTree(niceList)
  const proof =  merkleTree.getProof(index)
  console.log(`Proof # of nodes: ${proof.length}`)

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    // TODO: add request body parameters here! 
    // --------------------------------------------
    // Completed implementation of the feature
    proof,
    leaf
  });

  console.log({ gift });
}

main();