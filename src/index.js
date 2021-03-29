const messages = [
    "Patrick",
    "Bruno",
    "Elizabeth",
    "Rodolfo",
    "Chabela",
    "Taz",
    "Mariela",
    "Keila",
    "Monica"
];

//Funcion que hara el random
const randomMsg = () => {
    //Math.floor() => regresa el primer valor redondeado de otra
    //funcion de Math que sera random()
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };