function getBalance() {
  const balance = await contract.methods.balanceOf(account).call();
  return balance;
}

// ... later in the code ...
const balance = await getBalance();
// Unexpectedly, balance is sometimes 0, even though there should be tokens.