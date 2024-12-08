document.getElementById('donate-btn-noakhali').addEventListener('click', function () {
    const donateAmount = getDonateAmountById('donate-amount-noakhali');
    const existingAmount = getExistingAmountById('total-amount-noakhali');
    const totalAmount = donateAmount + existingAmount;
    document.getElementById('total-amount-noakhali').innerText = totalAmount;

    const totalMoneyOnAccount = getTotalMoneyOnAccountById('total-money-on-account');
    const totalMoneyOnAccountAfterDonation = totalMoneyOnAccount - donateAmount;
    document.getElementById('total-money-on-account').innerText = totalMoneyOnAccountAfterDonation;

    const transactionHistoryPage = document.getElementById('transaction-history-page');
    let newDiv = document.createElement('div');

    let currentDateTime = new Date();
    let dateTimeString = currentDateTime.toLocaleString();
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    newDiv.innerHTML = `
        <div class="card bg-base-100 w-full shadow-xl">
            <div class="card-body">
               <p> ${donateAmount} Taka is Donated for Flood-2024 at Feni, Bangladesh</p>
               <p> Date: ${dateTimeString} (${timeZone}) </p>
            </div>
        </div>
    `
    transactionHistoryPage.appendChild(newDiv);

})

document.getElementById('donate-btn-noakhali').addEventListener('click', function () {
    const donateAmount = getDonateAmountById('donate-amount-noakhali');
    const existingAmount = getExistingAmountById('total-amount-noakhali');
    const totalAmount = donateAmount + existingAmount;
    document.getElementById('total-amount-noakhali').innerText = totalAmount;

    const totalMoneyOnAccount = getTotalMoneyOnAccountById('total-money-on-account');
    const totalMoneyOnAccountAfterDonation = totalMoneyOnAccount - donateAmount;
    document.getElementById('total-money-on-account').innerText = totalMoneyOnAccountAfterDonation;

    const transactionHistoryPage = document.getElementById('transaction-history-page');
    let newDiv = document.createElement('div');

    let currentDateTime = new Date();
    let dateTimeString = currentDateTime.toLocaleString();
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    newDiv.innerHTML = `
        <div class="card bg-base-100 w-full shadow-xl">
            <div class="card-body">
               <p> ${donateAmount} Taka is Donated for Flood-2024 at Feni, Bangladesh</p>
               <p> Date: ${dateTimeString} (${timeZone}) </p>
            </div>
        </div>
    `
    transactionHistoryPage.appendChild(newDiv);

})



document.getElementById('history-btn').addEventListener('click', function () {

})