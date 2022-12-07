var readlineSync = require("readline-sync");
function Klant(voornaam, familienaam, straat, huisnummer, postcode, gemeente) {
  this.voornaam = voornaam;
  this.familienaam = familienaam;
  this.straat = straat;
  this.huisnummer = huisnummer;
  this.postcode = postcode;
  this.gemeente = gemeente;
}
const nieuweKlant = new Klant(
  readlineSync.question("Voornaam?"),
  readlineSync.question("familienaam?"),
  readlineSync.question("huisnummer?"),
  readlineSync.question("postcode?"),
  readlineSync.question("gemeente?")
);

console.log(nieuweKlant());
