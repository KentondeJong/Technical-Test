const form = document.querySelector('form');
const dialog = document.querySelector('dialog')

form.addEventListener('submit', (e) => {
    let name = form.querySelector('input[name="name"').value;
    let email = form.querySelector('input[name="email"').value;
    email = email.split('@')[1];
    email = email.split('.')[0];

    dialog.querySelector('h3 span').innerHTML = name;
    dialog.querySelector('p span').innerHTML = email;

    form.reset();
    dialog.showModal();
    e.preventDefault();
})

dialog.querySelector('.close').addEventListener('click', (e) => {
    dialog.close();
})