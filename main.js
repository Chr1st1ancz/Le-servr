
let spsmb = 0;
let multiplaier1 = 1;
let keyhack = 0
let tlacitko = 0;
document.addEventListener("keypress", onkeypress);

    function multiplaier() {
        if (spsmb >= 49) { /*upravit ceny*/
            spsmb += -49;
            multiplaier1 = multiplaier1 + 1;
            document.getElementById("text").value = spsmb;
            document.title = spsmb;
        }
    }


/*funkce na autorun na sipku dolu nejdrazsi, pridat if a buy menu*/
    function onkeypress() {
        if(spsmb>49) {
            tlacitko = 1;
            spsmb += -49;
        }
        if(tlacitko>0) {

            spsmb += multiplaier1;
            document.getElementById("text").value = spsmb;
            document.title = spsmb;
        }


    }

    function plussusenky(){
        spsmb += multiplaier1;
        document.getElementById("text").value = spsmb;
        document.title = spsmb;

    }

setInterval(ulozit,1000)
function ulozit(){
    localStorage.setItem("spsmb", spsmb);

}
function nacist(){
    spsmb = localStorage.getItem("spsmb");
    spsmb = parseInt(spsmb); /*finally to nespamuje misto pricitani jednicky lmao*/
    document.getElementById("text").value = spsmb;
    document.title = spsmb;

}