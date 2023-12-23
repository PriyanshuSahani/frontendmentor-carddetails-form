// const fields = document.querySelectorAll('.field-input');
const accountField = document.querySelector('#card-input');

fields.forEach((f) => {
    f.addEventListener('focusout', function (e) {
        // console.log("Focus out");
        if (e.target.value === '') {
            e.target.parentElement.querySelector('.required').style.display =
                'block';
        } else {
            e.target.parentElement.querySelector('.required').style.display =
                'none';
        }
    });
});

accountField.addEventListener('input', (e) => {
    const no = e.target.value;

    const regex = /^\d+$/;

    if (!regex.test(no) && no) {
        e.target.parentElement.querySelector('.num-only').style.display =
            'block';
    } else {
        e.target.parentElement.querySelector('.num-only').style.display =
            'none';
    }
});
