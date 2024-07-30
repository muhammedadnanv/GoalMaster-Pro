async function connectWallet() {
  if (window.ethereum) {
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];
      document.getElementById('walletAddress').innerText = `Connected: ${account}`;
      console.log(`Connected to account: ${account}`);
    } catch (error) {
      console.error(`Error connecting to wallet: ${error.message}`);
    }
  } else {
    alert('Please install MetaMask!');
  }
}

function calculateGoals() {
  const marketingGoal = document.getElementById('marketingGoal').value;
  const salesGoal = document.getElementById('salesGoal').value;
  const turnoverGoal = document.getElementById('turnoverGoal').value;

  const daysInYear = 365;

  const dailyMarketingGoal = (marketingGoal / daysInYear).toFixed(2);
  const dailySalesGoal = (salesGoal / daysInYear).toFixed(2);
  const dailyTurnoverGoal = (turnoverGoal / daysInYear).toFixed(2);

  document.getElementById('dailyMarketingGoal').innerText = dailyMarketingGoal;
  document.getElementById('dailySalesGoal').innerText = dailySalesGoal;
  document.getElementById('dailyTurnoverGoal').innerText = dailyTurnoverGoal;
}

document.getElementById('connectWalletButton').addEventListener('click', connectWallet);
