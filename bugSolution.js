function getBalance() {
  return new Promise(async (resolve, reject) => {
    try {
      const balance = await contract.methods.balanceOf(account).call();
      resolve(balance);
    } catch (error) {
      reject(error);
    }
  });
}

// ... later in the code ...
getBalance()
  .then((balance) => {
    // Use the balance safely here
  })
  .catch((error) => {
    console.error('Error fetching balance:', error);
  });