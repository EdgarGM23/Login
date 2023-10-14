import './firebase.js'
import { createUserWithEmailAndPassword, getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { app } from './firebase.js';

let wrapper = document.querySelector('.wrapper'),
    signUpLink = document.querySelector('.link .signup-link'),
    signInLink = document.querySelector('.link .signin-link');

signUpLink.addEventListener('click', () =>{
    wrapper.classList.add('animated-signin');
    wrapper.classList.remove('animated-signup');
});
signInLink.addEventListener('click', () =>{
    wrapper.classList.add('animated-signup');
    wrapper.classList.remove('animated-signin');
});

/*
    const signupForm = document.querySelector('#form-signup')

    signupForm.addEventListener('submit', async(e) => {
        e.preventDefault()

        const usuario = signupForm['usu-signup'].value
        const email = signupForm['email-signup'].value
        const password = signupForm['pass-signup'].value
        const spassword = signupForm['spass-signup'].value

        try {
            console.log(usuario,email, password, spassword)
            const credenciales = await createUserWithEmailAndPassword(auth, email, password)
        } catch (error) {
            console.log(error)
        }
        
    })
*/

const auth=getAuth(app) //ERROR

//Sin funcion
document.getElementById('form-signup').addEventListener('submit', function(e) {
    e.preventDefault();
    var email = document.getElementById('email-signup').value;
    var password = document.getElementById('pass-signup').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(function(userCredential) {
            // Registro exitoso
            var user = userCredential.user;
            console.log('Usuario registrado:', user);
        })
        .catch(function(error) {
            // Si hay un error, se ejecutará este código
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error('Error:', errorMessage);
        });
});