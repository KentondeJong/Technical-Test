const form = document.querySelector('form');
const dialog = document.querySelector('dialog')

form.addEventListener('submit', (e) => {
    let name = form.querySelector('input[name="name"').value;
    name = email.split(' ')[0];

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

dialog.addEventListener('click', (e) => {
    const rect = e.target.getBoundingClientRect();
    if (rect.left > e.clientX ||
        rect.right < e.clientX ||
        rect.top > e.clientY ||
        rect.bottom < e.clientY
    ) {
        dialog.close();
    }
})
