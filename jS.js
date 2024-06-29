const signUpBtn = document.getElementById('signUpBtn');
const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');
const signUpContainer = document.querySelector('.sign-up-container');
const signInContainer = document.querySelector('.sign-in-container');

signUpBtn.addEventListener('click', () => {
    console.log('Sign up button clicked');
    signInContainer.style.display = 'none';
    signUpContainer.style.display = 'block';
});

signUpForm.addEventListener('submit', (e) => {
    console.log('Sign up form submitted');
    e.preventDefault(); // prevent default form submission
    // TO DO: add validation and submission logic here
    console.log('Sign-up form submitted!');
    signInContainer.style.display = 'block';
    signUpContainer.style.display = 'none';
});