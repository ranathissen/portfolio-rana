let intro1 = document.querySelector("#intro1")
    intro1.style.backgroundColor = "lightpink";

let intro4 = document.querySelector("#intro4")
    intro4.innerHTML = "treinen zijn het beste transportmiddel ooit!";




let knop2 = document.querySelector("#knop2");
let weersvoorspelling = document.querySelector("#weersvoorspelling");
let weer = document.querySelector("#weer");

knop2.addEventListener("click", myfunc);

function myfunc(){
    console.log(weer.value);
    if (weer.value >= 18) {
        weersvoorspelling.innerText = "Het is lekker weer buiten!";
    } else {
        weersvoorspelling.innerText = "Doe een jas aan!";
}

}






