const express = require('express');
const verifyProof = require('../utils/verifyProof');
const port = 1225;

const app = express();
app.use(express.json());

// TODO: hardcode a merkle root here representing the whole nice list
// --------------------------------------------
// Completed implementation of the feature

// paste the hex string in here, without the 0x prefix
const MERKLE_ROOT = 'ddd59a2ffccddd60ff47993312821cd57cf30f7f14fb82937ebe2c4dc78375aa';


app.post('/gift', (req, res) => {
  // grab the parameters from the front-end here
  const body = req.body;
  console.log(`Sto controllando che ${body.leaf} sia presente nell'albero di Merkle`)
  // TODO: prove that a name is in the list 
  // --------------------------------------------
  // Completed implementation of the feature
  
  const isInTheList = verifyProof(body.proof,body.leaf, MERKLE_ROOT);
  if(isInTheList) {
    console.log(`${body.leaf} is in the list!`)
    res.send("You got a toy robot!");
  }
  else {
    console.log(`${body.leaf} isn't in the list!`)
    res.send("You are not on the list :(");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
