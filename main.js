//generate pin

document.getElementById('g-pin').addEventListener('click', function () {

    let pin = Math.round(Math.random() * 10000);

    //code for  4 random digit
    let pinStr = pin + '';//way to make any number to string

    const input = document.getElementById('input1');


    if (pinStr.length === 4) {

        input.value = pin;

    }

    else {

        let pin = Math.round(Math.random() * 10000);

        let pinStr = pin + '';

        const input = document.getElementById('input1');


        if (pinStr.length === 4) {

            input.value = pin;

        }

    }
})


//validation calculator section

//1.calculator

document.getElementById('calculator').addEventListener('click', function (event) {

    let keys = event.target.innerText;
    let input = document.getElementById('input2');

    if (isNaN(keys)) {

        //clear all from input field
        if (keys === 'C') {

            input.value = '';
        }

        //delete last digit
        else if (keys === '<') {

            let digit = input.value.split('');
            digit.pop();
            let remainingDigits = digit.join('');
            input.value = remainingDigits;


        }

    }

    //concat multiple digits
    else {

        input.value += keys;

    }

})


document.getElementById('submit').addEventListener('click', function () {

    let input1 = document.getElementById('input1');
    let value1 = input1.value;

    let input2 = document.getElementById('input2');
    let value2 = input2.value;

    if (value1 === value2) {

        document.getElementById('done').innerText = "✅ Pin Matched... Secret door is opening for you"

    }

    else {


        document.getElementById('done').innerText = "❌ Pin Didn't Match, Please try again";

    }

})