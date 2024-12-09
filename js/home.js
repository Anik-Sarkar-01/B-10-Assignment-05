// card 1 functionality
document.getElementById('donate-btn-noakhali').addEventListener('click', function () {
    
    const donateAmount = getDonateAmountById('donate-amount-noakhali');
    const existingAmount = getExistingAmountById('total-amount-noakhali');
    const totalAmount = donateAmount + existingAmount;
    document.getElementById('total-amount-noakhali').innerText = totalAmount;

    const totalMoneyOnAccount = getTotalMoneyOnAccountById('total-money-on-account');
    const totalMoneyOnAccountAfterDonation = totalMoneyOnAccount - donateAmount;
    document.getElementById('total-money-on-account').innerText = totalMoneyOnAccountAfterDonation;

    if (donateAmount !== null) {
        const getTransactionHistoryPage = getTransactionHistoryPageById();
        getTransactionHistoryPage.newDiv.innerHTML = `
        <div class="card bg-base-100 border border-gray-300 w-3/4 mx-auto">
            <div class="card-body">
               <p class="font-bold"> ${donateAmount} Taka is Donated for Flood-2024 at Noakhali, Bangladesh</p>
               <p> Date: ${getTransactionHistoryPage.currentDateTime}</p>
            </div>
        </div>
    `
        getTransactionHistoryPage.transactionHistoryPage.appendChild(getTransactionHistoryPage.newDiv);

        getModalById('modal');
    }
})

// card 2 functionality
document.getElementById('donate-btn-feni').addEventListener('click', function () {
    const donateAmount = getDonateAmountById('donate-amount-feni');
    const existingAmount = getExistingAmountById('total-amount-feni');
    const totalAmount = donateAmount + existingAmount;
    document.getElementById('total-amount-feni').innerText = totalAmount;

    const totalMoneyOnAccount = getTotalMoneyOnAccountById('total-money-on-account');
    const totalMoneyOnAccountAfterDonation = totalMoneyOnAccount - donateAmount;
    document.getElementById('total-money-on-account').innerText = totalMoneyOnAccountAfterDonation;

    if (donateAmount !== null) {
        const getTransactionHistoryPage = getTransactionHistoryPageById();
        console.log(getTransactionHistoryPage);
        getTransactionHistoryPage.newDiv.innerHTML = `
        <div class="card bg-base-100 border border-gray-300 w-3/4 mx-auto">
            <div class="card-body">
               <p class="font-bold"> ${donateAmount} Taka is Donated for Flood Relief in Feni, Bangladesh</p>
               <p> Date: ${getTransactionHistoryPage.currentDateTime}</p>
            </div>
        </div>
    `
        getTransactionHistoryPage.transactionHistoryPage.appendChild(getTransactionHistoryPage.newDiv);

        getModalById('modal');
    }
})

// card 3 functionality
document.getElementById('donate-btn-quota-movement').addEventListener('click', function () {
    const donateAmount = getDonateAmountById('donate-amount-quota-movement');
    const existingAmount = getExistingAmountById('total-amount-quota-movement');
    const totalAmount = donateAmount + existingAmount;
    document.getElementById('total-amount-quota-movement').innerText = totalAmount;

    const totalMoneyOnAccount = getTotalMoneyOnAccountById('total-money-on-account');
    const totalMoneyOnAccountAfterDonation = totalMoneyOnAccount - donateAmount;
    document.getElementById('total-money-on-account').innerText = totalMoneyOnAccountAfterDonation;

    if (donateAmount !== null) {
        const getTransactionHistoryPage = getTransactionHistoryPageById();
        console.log(getTransactionHistoryPage);
        getTransactionHistoryPage.newDiv.innerHTML = `
        <div class="card bg-base-100 border border-gray-300 w-3/4 mx-auto">
            <div class="card-body">
               <p class="font-bold"> ${donateAmount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
               <p> Date: ${getTransactionHistoryPage.currentDateTime}</p>
            </div>
        </div>
    `
        getTransactionHistoryPage.transactionHistoryPage.appendChild(getTransactionHistoryPage.newDiv);

        getModalById('modal');
    }
})

// history button functionality
document.getElementById('history-btn').addEventListener('click', function () {
    document.getElementById('donation-btn').classList.remove('bg-lime-400', 'border-gray-400');
    document.getElementById('history-btn').classList.add('bg-lime-400');
    document.getElementById('history-btn').classList.remove('border-gray-400');
    document.getElementById('donation-btn').classList.add('border-gray-400');
    const transactionHistoryPage = document.getElementById("transaction-history-page");
    transactionHistoryPage.classList.remove('hidden');
    const cardsSection = document.getElementById('cards-section');
    cardsSection.classList.add('hidden');
})

// donation button functionality
document.getElementById("donation-btn").addEventListener('click', function () {
    document.getElementById('donation-btn').classList.add('bg-lime-400');
    document.getElementById('history-btn').classList.remove('bg-lime-400');
    document.getElementById('donation-btn').classList.remove('border-gray-400');
    document.getElementById('history-btn').classList.add('border-gray-400');
    const transactionHistoryPage = document.getElementById("transaction-history-page");
    transactionHistoryPage.classList.add('hidden');
    const cardsSection = document.getElementById('cards-section');
    cardsSection.classList.remove('hidden');
})

// blog button functionality
document.getElementById('blog-btn').addEventListener('click', function () {
    window.location.href = '../blog.html';
})