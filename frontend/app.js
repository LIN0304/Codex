const tokenAddress = "0xYOUR_TOKEN_ADDRESS"; // replace after deployment
const abi = [
  "function balanceOf(address) view returns (uint256)",
  "function transfer(address to, uint amount) returns (bool)"
];
let provider;
let signer;
let token;

async function connect() {
  if (window.ethereum) {
    provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    signer = await provider.getSigner();
    token = new ethers.Contract(tokenAddress, abi, signer);
    updateBalance();
  } else {
    alert("Please install MetaMask!");
  }
}

async function updateBalance() {
  const addr = await signer.getAddress();
  const balance = await token.balanceOf(addr);
  document.getElementById("balance").innerText = ethers.formatUnits(balance, 18);
}

document.getElementById("connect").onclick = connect;
