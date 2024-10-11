/*
console.log ("sono nella console")

/*
1)definisco una variabile kmNumber per impostare quanti km vogliio percorrere
*/
const kmNumber = document.getElementById('km-number');

/*
2) definisco una variabile userAge per impostare l'età 
*/
const userAge = document.getElementById("user-age");


/*3) Salvo in una variabile kmPrice il prezzo a km 0.21€ al km;*/

const kmPrice = 0.21;


/*3a) Salvo in una variabile underAge un valore che definisce l'utente minorenne =18;*/
const underAge = 18;
/*3b) salvo in una variabile overAge il valore che determina l'età che definisce un utente over - 65;*/
const overAge = 65;

//4) salvo una variabile il valore di sconto -20 /in percentiale

const underDiscount = 20;

//5) salvo in una variabile il valore di sconto -40 /in percentuale

const overDiscount = 40;

//# Logica di calcolo con condizionali 
//4) Definisco una varibile price e salvo il valore del calcolo kmNumber * price all'interno della variabile;



const myForm = document.getElementById("myForm");
const showResult = document.getElementById("result")

/* Inizio la logica di calcolo.
*/

myForm.addEventListener("submit", function (event){

    event.preventDefault();
    
    const kmNumber = document.getElementById('km-number');
    const userAge = document.getElementById("user-age");
    let price = kmNumber.value * kmPrice;

    if (userAge.value < underAge) {
        console.log('utente minorenne calcolo lo sconto del 20%');

        price = price - (price * (underDiscount) / 100);

    } else if (userAge.value > overAge) {
        console.log("L'utente ha più di 65 anni calcolo sconto 40%");
        price = price - (price * (overDiscount) / 100);
    }
    
    let total = price.toFixed(2);

    showResult.classList.remove("d-none");
    let totalPrice = document.getElementById('totalPrice');
    totalPrice.innerText = total;
})
