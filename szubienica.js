let hasla = [
    "Bez pracy nie ma kołaczy",
    "Kto rano wstaje",
    "Co dwie głowy to nie jedna",
    "Lepszy wróbel w garści",
    "Nie ma tego złego",
    "Darowanemu koniowi nie zagląda się w zęby",
    "Gdzie kucharek sześć",
    "Jak sobie pościelesz",
    "Cicha woda brzegi rwie",
    "Mądry Polak po szkodzie"
];
 
let los = Math.floor(Math.random() * hasla.length);
 
let haslo = hasla[los].toUpperCase();
 
let dlugosc = haslo.length;
let haslo1 = "";
let ile_skuch = 0;
 
let yes = new Audio("yes.wav");
let no = new Audio("no.wav");
 
for (let i = 0; i < dlugosc; i++)
{
    if (haslo.charAt(i) == " ")
        haslo1 += " ";
    else
        haslo1 += "-";
}
 
function wypisz_haslo()
{
    document.getElementById("plansza").innerHTML = haslo1;
}
 
window.onload = start;
 
let litery = [
    'A', 'Ą', 'B', 'C', 'Ć', 'D', 'E', 'Ę',
    'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Ł',
    'M', 'N', 'Ń', 'O', 'Ó', 'P', 'Q', 'R',
    'S', 'Ś', 'T', 'U', 'V', 'W', 'X', 'Y',
    'Z', 'Ź', 'Ż'
];
 
function start()
{
    let tresc_diva = "";
 
    for (let i = 0; i < litery.length; i++)
    {
        tresc_diva += '<div class="litera" onclick="sprawdz(' + i + ')" id="lit' + i + '">';
        tresc_diva += litery[i];
        tresc_diva += '</div>';
 
        if ((i + 1) % 7 == 0)
            tresc_diva += '<div style="clear:both"></div>';
    }
 
    document.getElementById("alfabet").innerHTML = tresc_diva;
 
    wypisz_haslo();
}
 
function sprawdz(nr)
{
    let haslo2 = "";
    let trafiona = false;
 
    for (let i = 0; i < dlugosc; i++)
    {
        if (haslo.charAt(i) == litery[nr])
        {
            haslo2 += litery[nr];
            trafiona = true;
        }
        else
        {
            haslo2 += haslo1.charAt(i);
        }
    }
 
    let klikniety_div = document.getElementById("lit" + nr).style;
 
    if (trafiona == true)
    {
        klikniety_div.background = "#003300";
        klikniety_div.color = "#00C000";
        klikniety_div.border = "3px solid #00C000";
 
        haslo1 = haslo2;
        wypisz_haslo();
 
        yes.play();
    }
    else
    {
        klikniety_div.background = "#330000";
        klikniety_div.color = "#C00000";
        klikniety_div.border = "3px solid #C00000";
 
        ile_skuch++;
 
        document.getElementById("szubienica").innerHTML =
            '<img src="s' + ile_skuch + '.jpg" alt="">';
 
        no.play();
    }
 
    klikniety_div.cursor = "default";
 
    document.getElementById("lit" + nr).setAttribute("onclick", ";");
 
    // Sprawdzenie wygranej
    if (haslo == haslo1)
    {
        document.getElementById("alfabet").innerHTML =
            "Podano prawidłowe hasło:<br>" + haslo + '<br><br>';
 
        document.getElementById("alfabet").innerHTML +=
            '<span class="reset" onclick="location.reload()">JESZCZE RAZ</span>';
    }
 
  
    if (ile_skuch >= 9)
    {
        document.getElementById("alfabet").innerHTML =
            "Prawidłowe hasło:<br>" + haslo + '<br><br>';
 
        document.getElementById("alfabet").innerHTML +=
            '<span class="reset" onclick="location.reload()">JESZCZE RAZ</span>';
    }
}