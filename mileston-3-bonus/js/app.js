/* 
**MILESTONE 0:**
Creare l’array di oggetti con le informazioni fornite.
**MILESTONE 1:**
Stampare su console le informazioni di nome, ruolo e la stringa della foto
**MILESTONE 2:**
Stampare le stesse informazioni su DOM sotto forma di stringhe
**MILESTONE 3:**
Stampare delle card formattate contenete immagini e testo (La grafica fornita è solo un esempio ma sentitevi liberi di “graficare” come preferite)
**BONUS:**
Aggiungere degli aggettivi (più di uno) che identifichino ogni persona e stamparli nella card
 */



/* CREAZIONE ARRAY CON LE INFORMAZIONI */

const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg'
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg'
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg'
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg'
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg'
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg'
  }
];


/* **BONUS:**
Aggiungere degli aggettivi (più di uno) che identifichino ogni persona e stamparli nella card */

// per giocare genero tutto da prompt

for(let person of team){
  const numbAdjectiveForPerson = parseInt(prompt(`Quanti aggettivi vuoi assegnare a ${person.name}?`));
  const adjective = [];
  for(let i = 1; i <= numbAdjectiveForPerson; i++) {
    adjective.push(prompt(`Inserisci l\'aggetivo ${1} di ${numbAdjectiveForPerson} per ${person.name}`))
  }
  person.adjective = adjective;
}

console.log(team)


// Stampare delle card formattate contenenti immagini e testo

const row = document.querySelector('.row');

for(let person of team){

  let adjectives = ''

  for(let adjective of person.adjective){
    adjectives += `<span class="badge text-bg-primary me-2">${adjective}</span>`
  }

  console.log(adjectives);

  const img = `../assets/img/${person.image}`
  const name = person.name;
  const role = person.role;

  const card = `
    <div class="col col-4 mb-5">
      <div class="card">
        <div class="image h-25">
          <img src="${img}" class="card-img-top img" alt="${name}">
        </div>
        <div class="card-body">
          <h5 class="card-title text-center">${name}</h5>
          <h6 class="text-center">${role}</h5>
          ${adjectives}
        </div>
      </div>
    </div>
  `;

  row.innerHTML += card;

}




