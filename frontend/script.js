//console.log(a)
//console.log(c)

/*
console.log("Hello")
console.log('Hello')
console.log(`Hel
lo`)




console.log(typeof 2)
console.log(typeof NaN)
console.log(0/0)
console.log(2.14)



console.log(true)
console.log(false)



console.log(undefined)
console.log(null)   // null a határán van annak, hogy ez pontosan primitív vagy sem

console.log(typeof undefined)
console.log(typeof null)   // null a határán van annak, hogy ez pontosan primitív vagy sem -objektum - egy objektum helyettesítő vmi
*/


        //array-tömb,  object - objekt
        //array-object különbség, az alapobjektum kulcsértékpárral működik, míg a tömb alapja egy kulcsindexxszám
        // mind a kettőt bele tudjuk rakni a másikba.
        //objektumot kapcsos zarojellel

/* 
console.log({
    "title": "Start Coding",
    "type": "solo",
    "difficulty": 4.1,
    "usefulness": 4.2 ,
    "enjoyability": 3.7,
    "materials": 3.4,
    "tasks": [
        {
            title: "Bank accounts",
            description: ""
        },
        {
            title: "100 doors",
            description: ""
        },
        {
            title: "Word filter",
            description: ""
        },

    ]
}) */


// Változók

//hoisting - két lépcsőfok --- deklarálás, a következő pedig az inicializálás (tessék itt az értéke a változónak, értékadás)
//var - hozzáférek értékadás előtt, a másik kettőhöz nem férek hozzá

/*
var a = "Hello1"
let b = "Hello2"
const c = "Hello3"

console.log(a)
console.log(b)
console.log(c)
*/

// Függvények

// scopeokban 3 különböző szint, befolyásolja hogy hozzáferünk-e vmihez vagy sem.  NEm elég vmit csak létrehozni.. a kapcsos zárójelek be tudják zárni ezeket a változókat 


/* ez a function scope */
/* function d(){
    if(1 + 1 === 2){
    }
    var a = "Hello1"
    let b = "Hello2"
    const c = "Hello3"

    
    console.log(a)
    console.log(b)
    console.log(c)
}
d() */

/* 
let e = 1
console.log(e)
e = 2
console.log(e)
e = e*2
console.log(e) */


/* 
function multiplyByTwo(num){
    console.log(num)
    return num*2
}

let f = multiplyByTwo(1)
console.log(f)
console.log(multiplyByTwo(1)); */


// return eltöri a kódot, utána nem lehet írni semmit, plusz vissszajön valamivel..
//miről ismerjük fel , hogy fut egy függvény --- kiirjuk a nevét plusz zárójel


    // Metódusok

/* let g = {
    myMethod: function () {
        console.log("Hello");
    }  
}
g.myMethod()     *///a g-n belüli myMethod futtatása  

/* csak példként, nem fog működni

let window = {
    addEventListener: function (eventName,eventFunction){
        if ( eventName === "load") {
            eventFunction()
        }
    }
}

window.addEventListener("load", loadEvent) */
/*
let h = {
    anotherMethod: function(text){
        return `You sent the following argument to this method: ${text}`
    }
}

let i = h.anotherMethod("argument")    // itt  a zárójelek között küldjük be hogy argument, stringként, a lettel elmentettem
console.log(i);
console.log(h.anotherMethod("another argument"));   // közvetlen megkérése az előző sornak
*/
//--------------------

/*
let myString = "mikkamakka";

let mySecondString = myString;  

let myThirdString = "mikkamakka";



console.log(myString);
console.log(mySecondString);
console.log(myString === mySecondString);
console.log(myString === myThirdString);   */

//  -------------------

/* let myObject = {
    myString: "mikkamakka"
}

let mySecondObject = myObject;

let myThirdObject = {
    myString: "mikkamakka"
} */

//object copy----------------------------------------------
/* mySecondObject.myString = 'domdodom';

let myFourthObject = {...myObject};

myFourthObject.myString = "Vacskamati"


console.log(myObject.myString);
console.log(myFourthObject.myString); */

/* console.log(myObject === mySecondObject);
console.log(myObject === myThirdObject);
 */





// -----------------------

/* console.log('' === '');
console.log({} === {}); */

// --------------------------------------------------------

/* window.addEventListener("load", function(){
    console.log("Az oldal betoldodott");
}) */

function loadEvent() {
    
    let rootElement = document.getElementById("root")

    let card = function(title, year, rate){
        
            return  `
            <div class="card">
                <h2> ${title} </h2>
                <time> ${year} </time>
                <div class="rate"> ${rate} </div>
            
            </div>
            `
        
    };

    let renderAllCardElements = function(incomingMoviesArray) {
        let renderedCardList = "";

        //for ciklus ami végig megy a cardsarrayen, amit paraméterként kaptunk meg
        for (const incomingMovie of incomingMoviesArray) {
            renderedCardList += `
            <div class="card">
                <h2> ${incomingMovie.title} </h2>
                <time> ${incomingMovie.year} </time>
                <div class="rate"> ${incomingMovie.rate} </div>
            
            </div>
            `
        }
        //forciklus minden lépcsőjénél hozzáadja a renderedCardList-hez az adott elemet a megfelelő div cardban
        console.log(renderedCardList);
        
        // return-li az elkészült elemekkel feltöltött cardlist-et, a forcikluson kívül
        return renderedCardList;
        
    }

    // movies.sort(function(a, b){return a.year - b.year});  sorba rendezese a filmeknek
    let newGoodMovies = [];

    for (const movieSend of movies) {
      /*   let newerThan2000 = false;

        if (movieSend.year > 2000) {
            newerThan2000 = true;
        }

        if (newerThan2000){
            rootElement.insertAdjacentHTML("beforeend",card(movieSend.title, movieSend.year, movieSend.rate) );
        } */

      //  let floorRate = Math.floor(movieSend.rate);

        if (movieSend.year > 2000 && movieSend.rate >= 8) {
            newGoodMovies.push(movieSend);
           // rootElement.insertAdjacentHTML("beforeend",card(movieSend.title, movieSend.year, floorRate) );
        }
    }  
    newGoodMovies.sort(function(a, b){return a.year - b.year});
    console.log(newGoodMovies);

    rootElement.insertAdjacentHTML("beforeend", renderAllCardElements(newGoodMovies))

   
}
window.addEventListener("load", loadEvent);

