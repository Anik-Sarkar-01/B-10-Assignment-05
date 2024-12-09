// common function to get the donation amount
function getDonateAmountById(id) {
    const donateAmount = document.getElementById(id).value;
    const donateAmountNumber = parseFloat(donateAmount);
    const totalMoneyOnAccount = getTotalMoneyOnAccountById("total-money-on-account");
    if ((donateAmountNumber < 0) || (isNaN(donateAmountNumber)) || (donateAmount > totalMoneyOnAccount)) {
        alert('Invalid Donation Amount');
        return null;
    }
    else {
        return donateAmountNumber;
    }

}

// common function to get the existing amount
function getExistingAmountById(id) {
    const existingAmount = document.getElementById(id).innerText;
    const existingAmountNumber = parseFloat(existingAmount);
    return existingAmountNumber;
}

// common function to get the total amount on account
function getTotalMoneyOnAccountById(id) {
    const totalMoneyOnAccount = document.getElementById(id).innerText;
    const totalMoneyOnAccountNumber = parseFloat(totalMoneyOnAccount);
    return totalMoneyOnAccountNumber;
}

// common function for transaction history page
function getTransactionHistoryPageById() {
    const transactionHistoryPage = document.getElementById('transaction-history-page');
    let newDiv = document.createElement('div');
    let currentDateTime = new Date();
    return { transactionHistoryPage, newDiv, currentDateTime}
}

// common function for modal
function getModalById(id) {
    const modal = document.getElementById(id);
    modal.classList.remove('hidden');
    document.getElementById('closeModal').addEventListener('click', function () {
        modal.classList.add('hidden');
    })
}