// Card Number

const cardNoDes = document.querySelector('#live-card-no');
const cardNoSrc = document.querySelector('#card-input');

function updateCardNo() {
    if (cardNoSrc.value == '') {
        cardNoDes.innerText = '0000 0000 0000 0000';
        return;
    }

    // slice = cardNoSrc.value.slice;

    cardNoDes.innerText =
        cardNoSrc.value.slice(0, 4) +
        ' ' +
        cardNoSrc.value.slice(4, 8) +
        ' ' +
        cardNoSrc.value.slice(8, 12) +
        ' ' +
        cardNoSrc.value.slice(12, 16);
}

cardNoSrc.addEventListener('input', updateCardNo);

// Account holder's name

const nameSrc = document.querySelector('#name-input');
const nameDes = document.querySelector('#live-name');

nameSrc.addEventListener('input', function () {
    if (nameSrc.value == '') {
        nameDes.innerText = 'Jane Appleseed';
        return;
    }
    nameDes.innerText = nameSrc.value;
});

// Expiry Month

const monthSrc = document.querySelector('#month-input');
const yearSrc = document.querySelector('#year-input');
const expiryDes = document.querySelector('#live-expiry');

monthSrc.addEventListener('input', function () {
    if (monthSrc.value === '') {
        expiryDes.innerText = '00' + expiryDes.innerText.slice(2, 5);
        return;
    }

    var m = monthSrc.value;
    // console.log(typeof(m));
    if (m.length == 1) {
        m = '0' + m;
    }
    expiryDes.innerText = m + expiryDes.innerText.slice(2, 5);
});

yearSrc.addEventListener('input', function () {
    if (yearSrc.value === '') {
        expiryDes.innerText = expiryDes.innerText.slice(0, 3) + '00';
        return;
    }

    var y = yearSrc.value;
    if (y.length == 1) {
        y = '0' + y;
    }
    expiryDes.innerText = expiryDes.innerText.slice(0, 3) + y;
});

// CVV number

const cvvSrc = document.querySelector('#cvv-input');
const cvvDes = document.getElementById('live-cvv');

cvvSrc.addEventListener('input', function () {
    if (cvvSrc.value == '') {
        cvvDes.innerText = '000';
    } else {
        cvvDes.innerText = cvvSrc.value;
    }
});
