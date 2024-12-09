function getDonateAmountById(id) {
    const donateAmount = document.getElementById(id).value;
    const donateAmountNumber = parseFloat(donateAmount);
    const totalMoneyOnAccount = getTotalMoneyOnAccountById("total-money-on-account");
    if ((donateAmountNumber < 0) || (isNaN(donateAmountNumber)) || (donateAmount > totalMoneyOnAccount)  ) {
        alert('Invalid Donation Amount');
        return null;
    }
    else {
        return donateAmountNumber;
    }

}

function getExistingAmountById(id) {
    const existingAmount = document.getElementById(id).innerText;
    const existingAmountNumber = parseFloat(existingAmount);
    return existingAmountNumber;
}

function getTotalMoneyOnAccountById(id) {
    const totalMoneyOnAccount = document.getElementById(id).innerText;
    const totalMoneyOnAccountNumber = parseFloat(totalMoneyOnAccount);
    return totalMoneyOnAccountNumber;
}


function getModalById(id){
    const modal = document.getElementById(id);
    modal.classList.remove('hidden');
    document.getElementById('closeModal').addEventListener('click', function(){
        modal.classList.add('hidden');
    })
}