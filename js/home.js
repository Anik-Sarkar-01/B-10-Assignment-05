document.getElementById('donate-btn-noakhali').addEventListener('click', function(){

    const donateAmount = getDonateAmountById('donate-amount-noakhali');
    const existingAmount = getExistingAmountById('total-amount-noakhali');
    const totalAmount = donateAmount + existingAmount;
    document.getElementById('total-amount-noakhali').innerText = totalAmount;
    const totalMoneyOnAccount = getTotalMoneyOnAccountById('total-money-on-account');
    const totalMoneyOnAccountAfterDonation = totalMoneyOnAccount - donateAmount;
    document.getElementById('total-money-on-account').innerText = totalMoneyOnAccountAfterDonation;
})