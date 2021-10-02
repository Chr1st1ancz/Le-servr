/*To Do*/
/*Rozsvítí se buy tlačítko když na to máš peňáze*/
/*Dat stepanovou do okna a jak mele odkaz v odkazu a pak rickroll ez*/



let spsmb = 0; /*susenky ano*/
let multiplaier1 = 1; /*nasobic kliku*/
let multiplaierpocet = 0; /*vlastneno multiplier*/
let tlacitko = 0; /*promenna na onkeydown*/
let multiplaier115 = 50; /*cena*/
let cenaAutoKliq = 30; /*cena autokliqu*/
let AutoKliqPocet = 0; /*vlastneno autokliqu*/

/*text s fotkou ucitele dat nad buttonuton*/

document.addEventListener("keypress", onkeydown);








function plussusenky(){
    spsmb += multiplaier1;
    document.getElementById("text").innerHTML = "Máš " + Math.round(spsmb) + " SPS Kokiez";
    document.title = Math.round(spsmb);
    document.title = spsmb;

}



    function multiplaier() {
        if (spsmb >= multiplaier115) { /*upravit ceny*/

            spsmb += -multiplaier115;
            multiplaier1 *= 2;
            multiplaierpocet++;
            multiplaier115 = 50* Math.pow(1.15,multiplaierpocet);
            document.getElementById("text").innerHTML = "Máš " + Math.round(spsmb) + " SPS Kokiez";
            document.title = spsmb;
            document.getElementById("multiplaierpocet").innerHTML = " <img src=\"obrazky/esch2.png\" draggable=\"false\" style=\"width: 7vw\"> <br>Mr.Doutníčkář <br> IP Adresy Multiplier x" + multiplaier1 + " <br> Vlastněno: " +  multiplaierpocet + "<br>" + "Zaplať: " + Math.round(multiplaier115);
            let audio = new Audio('./obrazky/IPAdresy.mp3');
            audio.play();
        }
    }


/*funkce na autorun na sipku dolu nejdrazsi, pridat if a buy menu*/


    function onkeydown() {
        if(tlacitko===0) {
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
    function koupitAutoKliq(){
        if(spsmb>=cenaAutoKliq){
                spsmb += -cenaAutoKliq;
                AutoKliqPocet++;
                cenaAutoKliq = 30 * Math.pow(1.15, AutoKliqPocet);
                document.getElementById("text").innerHTML = "Máš " + Math.round(spsmb) + " SPS Kokiez";
            document.getElementById("AutoKliq").innerHTML = "<img src=\"obrazky/mr.catia.png\" draggable=\"false\"> <br>Mr.Catia <br>+1SKPS" + " <br> Vlastněno: " + AutoKliqPocet + " <br> Zaplať: " + Math.round(cenaAutoKliq);
            document.title = spsmb;


        }
    }
setInterval(AutoKliq, 1000)
function AutoKliq(){
    spsmb+= AutoKliqPocet;
    document.getElementById("text").innerHTML = "Máš " + Math.round(spsmb) + " SPS Kokiez";
    document.title = spsmb;
}

setInterval(ulozit,1000)
function ulozit(){
    localStorage.setItem("spsmb", spsmb);
    localStorage.setItem("multiplaier1", multiplaier1);
    localStorage.setItem("tlacitko", tlacitko);
    localStorage.setItem("multiplaierpocet", multiplaierpocet);
    localStorage.setItem("AutoKliqPocet", AutoKliqPocet);
    localStorage.setItem("multiplaier115", multiplaier115);
    localStorage.setItem("cenaAutoKliq", cenaAutoKliq);



}
window.onload = function nacist(){
    if (localStorage.length > 0){

        spsmb = localStorage.getItem("spsmb");
        spsmb = parseInt(spsmb);
        multiplaier1 = localStorage.getItem("multiplaier1");
        multiplaier1 = parseInt(multiplaier1);
        tlacitko = localStorage.getItem("tlacitko");
        tlacitko = parseInt(tlacitko);
        multiplaierpocet = localStorage.getItem("multiplaierpocet");
        multiplaierpocet = parseInt(multiplaierpocet);
        AutoKliqPocet = localStorage.getItem("AutoKliqPocet");
        AutoKliqPocet = parseInt(AutoKliqPocet);
        multiplaier115 = localStorage.getItem("multiplaier115");
        multiplaier115 = parseInt(multiplaier115);
        cenaAutoKliq = localStorage.getItem("cenaAutoKliq");
        cenaAutoKliq = parseInt(cenaAutoKliq);
        document.getElementById("multiplaierpocet").innerHTML = "<img src=\"obrazky/esch2.png\" draggable=\"false\" style=\"width: 7vw\"><br>Mr.Doutníčkář <br>IP Adresy Multiplier x" + multiplaier1 + "<br> Vlastněno: " +  multiplaierpocet + "<br>" + "Zaplať: " + Math.round(multiplaier115);
        document.getElementById("AutoKliq").innerHTML = "<img src=\"obrazky/mr.catia.png\" draggable=\"false\"> <br>Mr.Catia <br>+1SKPS" + " <br> Vlastněno: " + AutoKliqPocet + " <br> Zaplať: " + Math.round(cenaAutoKliq);
        document.getElementById("text").innerHTML = "Máš " + spsmb + " SPS Kokiez";
        document.title = spsmb;

   }
    else{
        localStorage.setItem("spsmb", spsmb);
        localStorage.setItem("multiplaier1", multiplaier1);
        localStorage.setItem("tlacitko", tlacitko);
        localStorage.setItem("multiplaierpocet", multiplaierpocet);
        localStorage.setItem("AutoKliqPocet", AutoKliqPocet);
        localStorage.setItem("multiplaier115", multiplaier115);
        localStorage.setItem("cenaAutoKliq", cenaAutoKliq);
        document.getElementById("text").innerHTML ="Máš " + spsmb  + " SPS Kokiez";
        document.getElementById("AutoKliq").innerHTML = "<img src=\"obrazky/mr.catia.png\" draggable=\"false\"> <br>Mr.Catia<br>+1SKPS" + " <br> Vlastněno: " + AutoKliqPocet + " <br> Zaplať: " + Math.round(cenaAutoKliq);
        document.getElementById("multiplaierpocet").innerHTML = "<img src=\"obrazky/esch2.png\" draggable=\"false\" style=\"width: 7vw\"><br>Mr.Doutníčkář <br>IP Adresy Multiplier x" + multiplaier1 + "<br> Vlastněno: " +  multiplaierpocet + "<br>" + "Zaplať: " + Math.round(multiplaier115);

    }





}
function resetbutton(){
        localStorage.clear();
        spsmb = 0;
        multiplaier1 = 1;
        multiplaierpocet = 0;
        tlacitko = 0;
        AutoKliqPocet = 0;
        multiplaier115 = 50;
        cenaAutoKliq = 30;
        document.getElementById("text").innerHTML ="Máš " + spsmb  + " SPS Kokiez";
        document.getElementById("AutoKliq").innerHTML = "<img src=\"obrazky/mr.catia.png\" draggable=\"false\"> <br>Mr.Catia<br>+1SKPS" + " <br> Vlastněno: " + AutoKliqPocet + " <br> Zaplať: " + Math.round(cenaAutoKliq);
        document.getElementById("multiplaierpocet").innerHTML = "<img src=\"obrazky/esch2.png\" draggable=\"false\" style=\"width: 7vw\"><br>Mr.Doutníčkář <br>IP Adresy Multiplier x" + multiplaier1 + "<br> Vlastněno: " +  multiplaierpocet + "<br>" + "Zaplať: " + Math.round(multiplaier115);



}


