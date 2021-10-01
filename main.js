
let spsmb = 0; /*susenky ano*/
let multiplaier1 = 1; /*nasobic kliku*/
let multiplaierpocet = 0; /*vlastneno ano*/
let tlacitko = 0; /*promenna na onkeydown*/
let multiplaier115 = 50* Math.pow(1.15,multiplaierpocet); /**/



document.addEventListener("keypress", onkeydown);



    function multiplaier() {
        if (spsmb >= multiplaier115) { /*upravit ceny*/

            spsmb += -multiplaier115;
            multiplaier1 = multiplaier1 * 2;
            multiplaierpocet += 1;
            multiplaier115 = 50* Math.pow(1.15,multiplaierpocet);
            document.getElementById("text").value = Math.round(spsmb);
            document.title = spsmb;
            document.getElementById("multiplaierpocet").value = multiplaierpocet;
        }
    }


/*funkce na autorun na sipku dolu nejdrazsi, pridat if a buy menu*/


    function onkeydown() {
        if(tlacitko==0) {
            if(spsmb>49) {
                document.getElementById("text").value =spsmb;
                document.title = spsmb;
                tlacitko = 1;
                spsmb += -49;

            }
        }
        else{
            spsmb += multiplaier1;
            document.getElementById("text").value=spsmb;
            document.title = spsmb;
        }




    }

    function plussusenky(){
        spsmb += multiplaier1;
        document.getElementById("text").value = Math.round(spsmb);
        document.title = spsmb;


    }

setInterval(ulozit,1000)
function ulozit(){

    localStorage.setItem("spsmb", spsmb);

}
window.onload = function(){
    spsmb = localStorage.getItem("spsmb");
    spsmb = parseInt(spsmb);
    document.getElementById("text").value = spsmb;
    document.title = spsmb;

}


