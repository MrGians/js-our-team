/*
  TRACCIA
  Creare tramite un array di oggetti un layout "Our Team" sul DOM,
  contenente delle card con i singoli membri ed i loro dati mostrati al suo interno.
*/


// Definisco variabili DOM
const ourTeamSection = document.querySelector("#our-team .col-10.d-flex");


// Definisco un array di oggetti con le informazioni di ogni persona
const ourTeamInfo = [
  {firstname: "Wayne", lastname: "Barnett", job: "Founder & CEO", photo: "wayne-barnett-founder-ceo.jpg"},
  {firstname: "Angela", lastname: "Caroll", job: "Chief Editor", photo: "angela-caroll-chief-editor.jpg"},
  {firstname: "Walter", lastname: "Gordon", job: "Office Manager", photo: "walter-gordon-office-manager.jpg"},
  {firstname: "Angela", lastname: "Lopez", job: "Social Media Manager", photo: "angela-lopez-social-media-manager.jpg"},
  {firstname: "Scott", lastname: "Estrada", job: "Developer", photo: "scott-estrada-developer.jpg"},
  {firstname: "Barbara", lastname: "Ramos", job: "Graphic Designer", photo: "barbara-ramos-graphic-designer.jpg"},
]


// ------------------------------ OUR TEAM SECTION ---------------------------- //

// Stampo le informazioni di ogni membro in console tramite un ciclo FOR con ciclo FOR IN innestato
for (let i = 0; i < ourTeamInfo.length; i++) {
  console.log(`Informazioni sul #${i + 1} membro del team:`);
  for (let key in ourTeamInfo[i]) {
    console.log(`${key}: ${ourTeamInfo[i][key]}`);
  }
};


// Stampo le informazioni di ogni membro sul DOM tramite un ciclo FOR con ciclo FOR IN innestato
for (let i = 0; i < ourTeamInfo.length; i++) {

  // Creo l'elemento <div> con classe "cs-card"
  const cardElement = document.createElement("div");
  cardElement.classList.add("cs-card");

  // Creo gli elementi <figure>, <h5> e <h6> da inserire dentro cardElement,
  // che a loro volta conterranno le informazioni di ogni membro del team.
  const photoElement = document.createElement("figure");
  const nameElement = document.createElement("h5");
  const jobElement = document.createElement("h6");
  cardElement.appendChild(photoElement);
  cardElement.appendChild(nameElement);
  cardElement.appendChild(jobElement);

  for (let key in ourTeamInfo[i]) {

    // Se la key è "firstname" allora verrà inserito il suo valore + il valore di "lastname" dentro <h5>
    if (ourTeamInfo[i][key] === ourTeamInfo[i]["firstname"]) {
      nameElement.append(`${ourTeamInfo[i]["firstname"]} ${ourTeamInfo[i]["lastname"]}`);
    }
    // Se la key è "job" allora verrà inserito il suo valore dentro <h6>
    else if (ourTeamInfo[i][key] === ourTeamInfo[i]["job"]) {
      jobElement.append(`${ourTeamInfo[i]["job"]}`);
    }
    // Se la key è "photo" allora verrà creato un elemento <img>,
    // ed inserito dentro <figure> con il relativo attributo src
    else if (ourTeamInfo[i][key] === ourTeamInfo[i]["photo"]) {
      const imageElement = document.createElement("img");
      imageElement.src = `img/${ourTeamInfo[i]["photo"]}`;
      photoElement.appendChild(imageElement);
    }
  }
  // Inserisco cardElement ed il suo contenuto al DOM
  ourTeamSection.appendChild(cardElement);
};