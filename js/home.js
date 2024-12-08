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
        <div class="card bg-base-100 border border-gray-300 w-3/4 mx-auto">
            <div class="card-body">
               <p class="font-bold"> ${donateAmount} Taka is Donated for Flood-2024 at Noakhali, Bangladesh</p>
               <p> Date: ${dateTimeString} (${timeZone}) </p>
            </div>
        </div>
    `
    transactionHistoryPage.appendChild(newDiv);

})

document.getElementById('donate-btn-feni').addEventListener('click', function () {
    const donateAmount = getDonateAmountById('donate-amount-feni');
    const existingAmount = getExistingAmountById('total-amount-feni');
    const totalAmount = donateAmount + existingAmount;
    document.getElementById('total-amount-feni').innerText = totalAmount;

    const totalMoneyOnAccount = getTotalMoneyOnAccountById('total-money-on-account');
    const totalMoneyOnAccountAfterDonation = totalMoneyOnAccount - donateAmount;
    document.getElementById('total-money-on-account').innerText = totalMoneyOnAccountAfterDonation;

    const transactionHistoryPage = document.getElementById('transaction-history-page');
    let newDiv = document.createElement('div');
    

    let currentDateTime = new Date();
    let dateTimeString = currentDateTime.toLocaleString();
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    newDiv.innerHTML = `
        <div class="card bg-base-100 border border-gray-300 w-3/4 mx-auto">
            <div class="card-body">
               <p class="font-bold"> ${donateAmount} Taka is Donated for Flood-2024 at Noakhali, Bangladesh</p>
               <p> Date: ${dateTimeString} (${timeZone}) </p>
            </div>
        </div>
    `
    transactionHistoryPage.appendChild(newDiv);

})


document.getElementById('donate-btn-quota-movement').addEventListener('click', function () {
    const donateAmount = getDonateAmountById('donate-amount-quota-movement');
    const existingAmount = getExistingAmountById('total-amount-quota-movement');
    const totalAmount = donateAmount + existingAmount;
    document.getElementById('total-amount-quota-movement').innerText = totalAmount;

    const totalMoneyOnAccount = getTotalMoneyOnAccountById('total-money-on-account');
    const totalMoneyOnAccountAfterDonation = totalMoneyOnAccount - donateAmount;
    document.getElementById('total-money-on-account').innerText = totalMoneyOnAccountAfterDonation;

    const transactionHistoryPage = document.getElementById('transaction-history-page');
    let newDiv = document.createElement('div');

    let currentDateTime = new Date();
    let dateTimeString = currentDateTime.toLocaleString();
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    newDiv.innerHTML = `
        <div class="card bg-base-100 border border-gray-300 w-3/4 mx-auto">
            <div class="card-body">
               <p class="font-bold"> ${donateAmount} Taka is Donated for Flood-2024 at Noakhali, Bangladesh</p>
               <p> Date: ${dateTimeString} (${timeZone}) </p>
            </div>
        </div>
    `
    transactionHistoryPage.appendChild(newDiv);

})

document.getElementById('history-btn').addEventListener('click', function () {
    const transactionHistoryPage = document.getElementById("transaction-history-page");
    transactionHistoryPage.classList.remove('hidden');
    const cardsSection = document.getElementById('cards-section');
    cardsSection.classList.add('hidden');
})

document.getElementById("donation-btn").addEventListener('click', function(){
    const transactionHistoryPage = document.getElementById("transaction-history-page");
    transactionHistoryPage.classList.add('hidden');
    const cardsSection = document.getElementById('cards-section');
    cardsSection.classList.remove('hidden');
})