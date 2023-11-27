const editContactButton = document.getElementById('editContact');
const emailSpan = document.getElementById('email');
const phoneSpan = document.getElementById('phone');

editContactButton.addEventListener('click', () => {
    const newEmail = prompt('Digite o novo email:');
    const newPhone = prompt('Digite o novo telefone:');

    if (newEmail && newPhone) {
        emailSpan.textContent = newEmail;
        phoneSpan.textContent = newPhone;
    }
});
