/*
  TRACCIA
  Creare tramite un array di oggetti un layout "Our Team" sul DOM,
  contenente delle card con i singoli membri ed i loro dati mostrati al suo interno.
*/

// # MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// # MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto
// # MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// # BONUS 1:
// Trasformare la stringa foto in una immagine effettiva (le trovate in allegato)
// # BONUS 2:
// Organizzare i singoli membri in card/schede e ispirarci alle grafiche in allegato

/* # DATI

Wayne Barnett |	Founder & CEO        |	wayne-barnett-founder-ceo.jpg
Angela Caroll |	Chief Editor         |	angela-caroll-chief-editor.jpg
Walter Gordon |	Office Manager       |	walter-gordon-office-manager.jpg
Angela Lopez  |	Social Media Manager |	angela-lopez-social-media-manager.jpg
Scott Estrada |	Developer            |	scott-estrada-developer.jpg
Barbara Ramos |	Graphic Designer     |	barbara-ramos-graphic-designer.jpg

*/

// Definisco variabili DOM
const ourTeamSection = document.getElementById("our-team");


// Definisco un array di oggetti con le informazioni di ogni persona
const ourTeamInfo = [
  {firstname: "Wayne", lastname: "Barnett", job: "Founder & CEO", photo: "wayne-barnett-founder-ceo.jpg"},
  {firstname: "Angela", lastname: "Caroll", job: "Chief Editor", photo: "angela-caroll-chief-editor.jpg"},
  {firstname: "Walter", lastname: "Gordon", job: "Office Manager", photo: "walter-gordon-office-manager.jpg"},
  {firstname: "Angela", lastname: "Lopez", job: "Social Media Manager", photo: "angela-lopez-social-media-manager.jpg"},
  {firstname: "Scott", lastname: "Estrada", job: "Developer", photo: "scott-estrada-developer.jpg"},
  {firstname: "Barbara", lastname: "Ramos", job: "Graphic Designer", photo: "barbara-ramos-graphic-designer.jpg"},
]


// Stampo le informazioni di ogni membro in console tramite un ciclo FOR con ciclo FOR IN innestato
for (let i = 0; i < ourTeamInfo.length; i++) {
  console.log(`Informazioni sul #${i + 1} membro del team:`);
  for (let key in ourTeamInfo[i]) {
    console.log(`${key}: ${ourTeamInfo[i][key]}`);
  }
};

// Stampo le informazioni di ogni membro sul DOM tramite un ciclo FOR con ciclo FOR IN innestato
for (let i = 0; i < ourTeamInfo.length; i++) {
  ourTeamSection.innerHTML += (`<h4>Informazioni sul #${i + 1} membro del team:</h4>`);
  for (let key in ourTeamInfo[i]) {
    
    if (ourTeamInfo[i]["photo"] === ourTeamInfo[i][key]) {ourTeamSection.innerHTML += (`<img src="img/${ourTeamInfo[i][key]}" alt="${ourTeamInfo[i]["firstname"]} ${ourTeamInfo[i]["lastname"]}">`);}
    else {ourTeamSection.innerHTML += (`<strong>${key.toUpperCase()}:</strong> <em>${ourTeamInfo[i][key]}</em> <br>`);}
  }
};