
let spsmb = 0; /*susenky ano*/
let multiplaier1 = 1; /*nasobic kliku*/
let multiplaierpocet = 0; /*vlastneno ano*/
let tlacitko = 0; /*promenna na onkeydown*/
let multiplaier115 = 50* Math.pow(1.15,multiplaierpocet); /**/

/*text s fotkou ucitele dat nad buttonuton*/

document.addEventListener("keypress", onkeydown);



    function multiplaier() {
        if (spsmb >= multiplaier115) { /*upravit ceny*/

            spsmb += -multiplaier115;
            multiplaier1 = multiplaier1 * 2;
            multiplaierpocet += 1;
            multiplaier115 = 50* Math.pow(1.15,multiplaierpocet);
            document.getElementById("text").innerHTML = "Máš " + Math.round(spsmb) + " SPS Kokiez";
            document.title = spsmb;
            document.getElementById("multiplaierpocet").innerHTML = "Multiplaier 2x <br> Vlastněno: " +  multiplaierpocet + "<br>" + "Zaplať: " + multiplaier115;
        }
    }


/*funkce na autorun na sipku dolu nejdrazsi, pridat if a buy menu*/


    function onkeydown() {
        if(tlacitko==0) {
            if(spsmb>49) {
                document.getElementById("text").innerHTML ="Máš " + spsmb + " SPS Kokiez";
                document.title = spsmb;
                tlacitko = 1;
                spsmb += -49;

            }
        }
        else{
            spsmb += multiplaier1;
            document.getElementById("text").innerHTML ="Máš " + spsmb + " SPS Kokiez";
            document.title = spsmb;
        }




    }

    function plussusenky(){
        spsmb += multiplaier1;
        document.getElementById("text").innerHTML = "Máš " + Math.round(spsmb) + " SPS Kokiez";
        document.title = Math.round(spsmb);


    }

setInterval(ulozit,1000)
function ulozit(){
    localStorage.setItem("spsmb", spsmb);
    localStorage.setItem("multiplaier1", multiplaier1);
    localStorage.setItem("multiplaier115", multiplaier115);
    localStorage.setItem("tlacitko", tlacitko);
    localStorage.setItem("multiplaierpocet", multiplaierpocet);

}
window.onload = function nacist(){
    spsmb = localStorage.getItem("spsmb");
    spsmb = parseInt(spsmb);
    multiplaier1 = localStorage.getItem("multiplaier1");
    multiplaier1 = parseInt(multiplaier1);
    tlacitko = localStorage.getItem("tlacitko");
    tlacitko = parseInt(tlacitko);
    multiplaierpocet = localStorage.getItem("multiplaierpocet");
    multiplaierpocet = parseInt(multiplaierpocet);
    multiplaier115 = localStorage.getItem("multiplaier115");
    multiplaier115 = parseInt(multiplaier115);
    document.getElementById("multiplaierpocet").innerHTML = "Multiplaier 2x <br> Vlastněno: " +  multiplaierpocet + "<br>" + "Zaplať: " + multiplaier115;

    document.getElementById("text").innerHTML ="Máš " + spsmb  + " SPS Kokiez";
    document.title = spsmb;

}
function resetbutton(){
        localStorage.clear();
        spsmb = 0;
    multiplaier1 = 1;
    multiplaierpocet = 0;
    tlacitko = 0;
    multiplaier115 = 50* Math.pow(1.15,multiplaierpocet);
    document.getElementById("text").innerHTML ="Máš " + spsmb  + " SPS Kokiez";
    document.getElementById("multiplaierpocet").innerHTML = "Multiplaier 2x <br> Vlastněno: " +  multiplaierpocet + "<br>" + "Zaplať: " + multiplaier115;



}


