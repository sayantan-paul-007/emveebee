function validateForm() {
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let valid = true;
    if (fname === '') {
      alert('Enter First Name');
        valid = false;
    }
    if (lname === '') {
        alert('Enter Last Name');
        valid = false;
    }

    if (email === '') {
        emailError.innerHTML = 'Email is required';
        valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        emailError.innerHTML = 'Invalid email address';
        valid = false;
    }

    if (message === '') {
        alert('Enter a message');
        valid = false;
    } 

    if (valid) {
         setTimeout(function () {
            alert('Message Sent')
        }, 2000);
    }

    return false;
}