import './App.css';
import Web3 from 'web3';
import { contractAbi, contractAddress } from './utils/constants';
import { useEffect, useState } from 'react';

function App() {


  const web3 = new Web3("ws://localhost:8545")
  const HelloContract = new web3.eth.Contract(contractAbi, contractAddress);
  const [newGreetings, setNewGreetings] = useState("");
  const [greetings, setGreetings] = useState("")

  useEffect(() => async () => {
    const helloMsg = await greetMe()
    setGreetings(helloMsg);
  }, [])

  const greetMe = async () => {
    const helloMsg = await HelloContract.methods.get().call();
    return helloMsg;
  }

  const updateGreets = async () => {
    const helloMsg = await HelloContract.methods.set(newGreetings).send(
      { from: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266' }
    )
    setGreetings(await greetMe())
  }

  return (
    <div style={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div>
        <input placeholder="New greetings" type="text" value={newGreetings}
          onChange={(e) => setNewGreetings(e.target.value)}
        />
        <button onClick={() => updateGreets()}>
          Update Greetings
        </button>
        <h2>
          Current Greetings:
          <span style={{ color: "blueviolet" }}>
            {greetings}
          </span>
        </h2>
      </div>
    </div>
  );
}

export default App;
