


document.addEventListener('DOMContentLoaded', () => {

    const button = document.querySelector('button')
    const input = document.getElementById('onlyInput');
    const resultText = document.querySelector('p');

    function greet(age) {
        if(age < 18 ) {
            return "Wazup, " + age +"er";
        } else {
            return "Greetings, " + age +"er";
        }
    }
    
    function onClick() {
        const age = parseInt(input.value);
        
        if(isEmpty()) {
            resultText.textContent = 'Please enter your age';
        } else if(age < 0) {
            resultText.textContent = 'Age cannot be negative!';
        } else {
            resultText.textContent = greet(age);
        }
    }
    
    function isEmpty() {
        if(input.value === '') {
            return true;
        } else {
            return false
        }
    };
    


    button.addEventListener('click', onClick);
})





