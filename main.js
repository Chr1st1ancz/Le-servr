
let spsmb = 0;
let multiplaier1 = 1;
let keyhack = 0
let tlacitko = 0;
document.addEventListener("keypress", onkeydown);


    function multiplaier() {
        if (spsmb >= 49) { /*upravit ceny*/
            spsmb += -49;
            multiplaier1 = multiplaier1 + 1;
            document.getElementById("text").value = spsmb;
            document.title = spsmb;
        }
    }


/*funkce na autorun na sipku dolu nejdrazsi, pridat if a buy menu*/


    function onkeydown() {
        if(tlacitko==0) {
            if(spsmb>49) {
                document.getElementById("text").value = spsmb;
                document.title = spsmb;
                tlacitko = 1;
                spsmb += -49;

            }
        }
        else{
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
window.onload = function(){
    spsmb = localStorage.getItem("spsmb");
    spsmb = parseInt(spsmb); /*finally to nespamuje misto pricitani jednicky lmao*/
    document.getElementById("text").value = spsmb;
    document.title = spsmb;
}


