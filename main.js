/*To Do*/
/*Rozsvítí se buy tlačítko když na to máš peňáze*/
/*Dat stepanovou do okna a jak mele odkaz v odkazu a pak rickroll ez*/
/*Převést všechny innerHTML z různých funnkcí do jedné funkce na výpis*/
/*Math round na title*/

let spsmb = 0; /*susenky ano*/
let multiplaier1 = 1; /*nasobic kliku*/
let multiplaierpocet = 0; /*vlastneno multiplier*/
let multiplaier115 = 1000; /*cena*/
let cenaAutoKliq = 150; /*cena autokliqu*/
let AutoKliqPocet = 0; /*vlastneno autokliqu*/
let cenaAutoKliq5 = 1800; /*cena autokliqu 5 SKPS*/
let AutoKliqPocet5 = 0; /*Pocet autkliqu 5SKPS*/
let cenaAutoKliq20 = 10000; /*cena autokliqu 20SKPS*/
let AutoKliqPocet20 = 0; /*Pocet autkliqu 20SKPS*/
let CenaBohatis = 200000; /*cena za dohrani hry*/

/*text s fotkou ucitele dat nad buttonuton*/

document.addEventListener("keypress", onkeydown);


function plussusenky() {
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
        multiplaier115 = 1000 * Math.pow(2.5, multiplaierpocet);
        document.getElementById("text").innerHTML = "Máš " + Math.round(spsmb) + " SPS Kokiez";
        document.title = spsmb;
        document.getElementById("multiplaierpocet").innerHTML = " <img src=\"obrazky/esch2.png\" draggable=\"false\" style=\"width: 7vw\"> <br>Mr.Doutníčkář <br> IP Adresy Multiplier x" + multiplaier1 + " <br> Vlastněno: " + multiplaierpocet + "<br>" + "Zaplať: " + Math.round(multiplaier115);
        let audio = new Audio('./obrazky/IPAdresy.mp3');
        audio.play();
    }
}

function koupitAutoKliq() {
    if (spsmb >= cenaAutoKliq) {
        spsmb += -cenaAutoKliq;
        AutoKliqPocet++;
        cenaAutoKliq = 150 * Math.pow(1.15, AutoKliqPocet);
        document.getElementById("text").innerHTML = "Máš " + Math.round(spsmb) + " SPS Kokiez";
        document.getElementById("AutoKliq").innerHTML = "<img src=\"obrazky/mr.catia.png\" draggable=\"false\"> <br>Mr.Catia <br>+1SKPS" + " <br> Vlastněno: " + AutoKliqPocet + " <br> Zaplať: " + Math.round(cenaAutoKliq);
        document.title = spsmb;


    }
}

function koupitAutoKliq5() {
    if (spsmb >= cenaAutoKliq5) {
        spsmb += -cenaAutoKliq5;
        AutoKliqPocet5++;
        cenaAutoKliq5 = 1800 * Math.pow(1.15, AutoKliqPocet5);
        document.getElementById("text").innerHTML = "Máš " + Math.round(spsmb) + " SPS Kokiez";
        document.getElementById("AutoKliq5").innerHTML = "<img src=\"obrazky/vofrk.png\" draggable=\"false\"> <br>Mr.VOFRK <br>+5SKPS" + " <br> Vlastněno: " + AutoKliqPocet5 + " <br> Zaplať: " + Math.round(cenaAutoKliq5);
        document.title = spsmb;


    }
}

function koupitAutoKliq20() {
    if (spsmb >= cenaAutoKliq20) {
        spsmb += -cenaAutoKliq20;
        AutoKliqPocet20++;
        cenaAutoKliq20 = 10000 * Math.pow(1.15, AutoKliqPocet20);
        document.getElementById("text").innerHTML = "Máš " + Math.round(spsmb) + " SPS Kokiez";
        document.getElementById("AutoKliq20").innerHTML = "<img src=\"obrazky/zabicka.png\" draggable=\"false\"> <br>Mrs.Žabička <br>+20SKPS" + " <br> Vlastněno: " + AutoKliqPocet20 + " <br><br>  Zaplať: " + Math.round(cenaAutoKliq20);
        document.title = spsmb;


    }
}

function bohatis() {
    if (spsmb >= CenaBohatis) {
        resetbutton();
        spsmb += -CenaBohatis;
        window.location.href = "konec.html";

    }


}

function pisnicka() {
    let audio1 = new Audio('./obrazky/frenchlol.mp3'); /*pisnicka start game*/
    audio1.play();
}

setInterval(AutoKliq, 1000)

function AutoKliq() {
    spsmb += AutoKliqPocet;
    spsmb += AutoKliqPocet5 * 5;
    spsmb += AutoKliqPocet20 * 20;
    document.getElementById("text").innerHTML = "Máš " + Math.round(spsmb) + " SPS Kokiez";
    document.title = spsmb;
}

setInterval(ulozit, 1000)

function ulozit() {
    localStorage.setItem("spsmb", spsmb);
    localStorage.setItem("multiplaier1", multiplaier1);
    localStorage.setItem("multiplaierpocet", multiplaierpocet);
    localStorage.setItem("AutoKliqPocet", AutoKliqPocet);
    localStorage.setItem("multiplaier115", multiplaier115);
    localStorage.setItem("cenaAutoKliq", cenaAutoKliq);
    localStorage.setItem("cenaAutoKliq5", cenaAutoKliq5);
    localStorage.setItem("AutoKliqPocet5", AutoKliqPocet5);
    localStorage.setItem("cenaAutoKliq20", cenaAutoKliq20);
    localStorage.setItem("AutoKliqPocet20", AutoKliqPocet20);

}

window.onload = function nacist() {
    if (localStorage.length > 0) {

        spsmb = localStorage.getItem("spsmb");
        spsmb = parseInt(spsmb);
        multiplaier1 = localStorage.getItem("multiplaier1");
        multiplaier1 = parseInt(multiplaier1);
        multiplaierpocet = localStorage.getItem("multiplaierpocet");
        multiplaierpocet = parseInt(multiplaierpocet);
        AutoKliqPocet = localStorage.getItem("AutoKliqPocet");
        AutoKliqPocet = parseInt(AutoKliqPocet);
        multiplaier115 = localStorage.getItem("multiplaier115");
        multiplaier115 = parseInt(multiplaier115);
        cenaAutoKliq = localStorage.getItem("cenaAutoKliq");
        cenaAutoKliq = parseInt(cenaAutoKliq);
        cenaAutoKliq5 = localStorage.getItem("cenaAutoKliq5");
        cenaAutoKliq5 = parseInt(cenaAutoKliq5);
        AutoKliqPocet5 = localStorage.getItem("AutoKliqPocet5");
        AutoKliqPocet5 = parseInt(AutoKliqPocet5);
        cenaAutoKliq20 = localStorage.getItem("cenaAutoKliq20");
        cenaAutoKliq20 = parseInt(cenaAutoKliq20);
        AutoKliqPocet20 = localStorage.getItem("AutoKliqPocet20");
        AutoKliqPocet20 = parseInt(AutoKliqPocet20);
        document.getElementById("multiplaierpocet").innerHTML = "<img src=\"obrazky/esch2.png\" draggable=\"false\" style=\"width: 7vw\"><br>Mr.Doutníčkář <br>IP Adresy Multiplier x" + multiplaier1 + "<br> Vlastněno: " + multiplaierpocet + "<br>" + "Zaplať: " + Math.round(multiplaier115);
        document.getElementById("AutoKliq").innerHTML = "<img src=\"obrazky/mr.catia.png\" draggable=\"false\"> <br>Mr.Catia <br>+1SKPS" + " <br> Vlastněno: " + AutoKliqPocet + " <br> Zaplať: " + Math.round(cenaAutoKliq);
        document.getElementById("AutoKliq5").innerHTML = "<img src=\"obrazky/vofrk.png\" draggable=\"false\"> <br>Mr.VOFRK <br>+5SKPS" + " <br> Vlastněno: " + AutoKliqPocet5 + " <br> Zaplať: " + Math.round(cenaAutoKliq5);
        document.getElementById("AutoKliq20").innerHTML = "<img src=\"obrazky/zabicka.png\" draggable=\"false\"> <br>Mrs.Žabička <br>+20SKPS" + " <br> Vlastněno: " + AutoKliqPocet20 + " <br><br>  Zaplať: " + Math.round(cenaAutoKliq20);
        document.getElementById("text").innerHTML = "Máš " + spsmb + " SPS Kokiez";
        document.title = spsmb;

    } else {
        localStorage.setItem("spsmb", spsmb);
        localStorage.setItem("multiplaier1", multiplaier1);
        localStorage.setItem("multiplaierpocet", multiplaierpocet);
        localStorage.setItem("AutoKliqPocet", AutoKliqPocet);
        localStorage.setItem("multiplaier115", multiplaier115);
        localStorage.setItem("cenaAutoKliq", cenaAutoKliq);
        localStorage.setItem("cenaAutoKliq5", cenaAutoKliq5);
        localStorage.setItem("AutoKliqPocet5", AutoKliqPocet5);
        localStorage.setItem("cenaAutoKliq20", cenaAutoKliq20);
        localStorage.setItem("AutoKliqPocet20", AutoKliqPocet20);
        document.getElementById("text").innerHTML = "Máš " + spsmb + " SPS Kokiez";
        document.getElementById("AutoKliq").innerHTML = "<img src=\"obrazky/mr.catia.png\" draggable=\"false\"> <br>Mr.Catia<br>+1SKPS" + " <br> Vlastněno: " + AutoKliqPocet + " <br> Zaplať: " + Math.round(cenaAutoKliq);
        document.getElementById("multiplaierpocet").innerHTML = "<img src=\"obrazky/esch2.png\" draggable=\"false\" style=\"width: 7vw\"><br>Mr.Doutníčkář <br>IP Adresy Multiplier x" + multiplaier1 + "<br> Vlastněno: " + multiplaierpocet + "<br>" + "Zaplať: " + Math.round(multiplaier115);
        document.getElementById("AutoKliq5").innerHTML = "<img src=\"obrazky/vofrk.png\" draggable=\"false\"> <br>Mr.VOFRK <br>+5SKPS" + " <br> Vlastněno: " + AutoKliqPocet5 + " <br> Zaplať: " + Math.round(cenaAutoKliq5);
        document.getElementById("AutoKliq20").innerHTML = "<img src=\"obrazky/zabicka.png\" draggable=\"false\"> <br>Mrs.Žabička <br>+20SKPS" + " <br> Vlastněno: " + AutoKliqPocet20 + " <br><br>  Zaplať: " + Math.round(cenaAutoKliq20);

    }


}

function resetbutton() {
    localStorage.clear();
    spsmb = 0;
    multiplaier1 = 1;
    multiplaierpocet = 0;
    AutoKliqPocet = 0;
    multiplaier115 = 1000;
    cenaAutoKliq = 150;
    cenaAutoKliq5 = 1800;
    cenaAutoKliq20 = 10000;
    AutoKliqPocet5 = 0;
    AutoKliqPocet20 = 0;
    document.getElementById("text").innerHTML = "Máš " + spsmb + " SPS Kokiez";
    document.getElementById("AutoKliq").innerHTML = "<img src=\"obrazky/mr.catia.png\" draggable=\"false\"> <br>Mr.Catia<br>+1SKPS" + " <br> Vlastněno: " + AutoKliqPocet + " <br> Zaplať: " + Math.round(cenaAutoKliq);
    document.getElementById("multiplaierpocet").innerHTML = "<img src=\"obrazky/esch2.png\" draggable=\"false\" style=\"width: 7vw\"><br>Mr.Doutníčkář <br>IP Adresy Multiplier x" + multiplaier1 + "<br> Vlastněno: " + multiplaierpocet + "<br>" + "Zaplať: " + Math.round(multiplaier115);
    document.getElementById("AutoKliq5").innerHTML = "<img src=\"obrazky/vofrk.png\" draggable=\"false\"> <br>Mr.VOFRK <br>+5SKPS" + " <br> Vlastněno: " + AutoKliqPocet5 + " <br> Zaplať: " + Math.round(cenaAutoKliq5);
    document.getElementById("AutoKliq20").innerHTML = "<img src=\"obrazky/zabicka.png\" draggable=\"false\"> <br>Mrs.Žabička <br>+20SKPS" + " <br> Vlastněno: " + AutoKliqPocet20 + " <br><br>  Zaplať: " + Math.round(cenaAutoKliq20);
    /* window.location.href = "index.html";*/


}


