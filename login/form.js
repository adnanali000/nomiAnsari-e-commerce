
const name = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('number');
const address = document.getElementById('address');
const message = document.getElementById('message');

const subBut = document.getElementById('subButton');


const database = firebase.database();

subBut.addEventListener('click',(e)=>{
    e.preventDef;

    var key = Math.random() * 9992421;
    var flkey = Math.floor(key)

    database.ref('users/' + flkey).set({
        name:name.value,
        email:email.value,
        number:number.value,
        address:address.value,
        message:message.value
    });

    name.value = "";
    email.value = "";
    number.value = "";
    address.value = "";
    message.value = "";
});

