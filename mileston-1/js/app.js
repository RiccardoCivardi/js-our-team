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
    iamge: 'wayne-barnett-founder-ceo.jpg'
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    iamge: 'angela-caroll-chief-editor.jpg'
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    iamge: 'walter-gordon-office-manager.jpg'
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    iamge: 'angela-lopez-social-media-manager.jpg'
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    iamge: 'scott-estrada-developer.jpg'
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    iamge: 'barbara-ramos-graphic-designer.jpg'
  }
];

/* Stampare su console le informazioni di nome, ruolo e la stringa della foto */

for (let person of team) {
  for(let index in person) {
    console.log(`${index}: ${person[index]}`);
  }
  console.log('----------------------')
} 