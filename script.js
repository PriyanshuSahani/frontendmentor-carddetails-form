const form = document.querySelector('.form');
const accpetPage = document.querySelector('.page-accept');
const errorBlocks = form.querySelectorAll('.error-msg');
const fields = document.querySelectorAll('.field-input');

const validate = () => {
    fields.forEach((f) => {
        if (f.value === '') {
            f.parentElement.querySelector('.required').style.display = 'block';
        } else {
            f.parentElement.querySelector('.required').style.display = 'none';
        }
    });
};

// Reset input when pages refreshed

window.addEventListener('load', function () {
    document.querySelectorAll('.field-input').forEach((element) => {
        element.value = '';
    });
});

const submitButton = form.querySelector('.submit-btn');
submitButton.addEventListener('mouseover', (e) => {
    console.log('Hovered...');
    validate();
    e.target.classList.remove('disabled');
    errorBlocks.forEach((block) => {
        console.log(block);
        if (block.style.display == 'block') {
            console.log('Disabling...');
            e.target.classList.add('disabled');
            return;
        }
    });
});

window.addEventListener('click', (e) => {
    e.preventDefault();

    if (!submitButton.classList.contains('disabled')) {
        form.classList.toggle('hidden');
        accpetPage.classList.toggle('hidden');
    }
});
