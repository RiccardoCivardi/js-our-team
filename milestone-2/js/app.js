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

/* Stampare su console le informazioni di nome, ruolo e la stringa della foto */

for (let person of team) {
  for(let index in person) {
    console.log(`${index}: ${person[index]}`);
  }
  console.log('----------------------')
} 

/* Stampare le stesse informazioni su DOM sotto forma di stringhe */
const wrapper1 = document.querySelector('.wrapper-1');
const ol = document.createElement('ol');

// genero tutti gli elementi
for (let person of team) {
  const li = document.createElement('li');
  const ul = document.createElement('ul');

  for(let index in person) {
    const liInner = document.createElement('li');
    liInner.innerText = `${index}: ${person[index]}`;
    ul.append(liInner);
  }

  li.append(ul);
  ol.append(li);
  wrapper1.append(ol);
}


//genero tutto con template litteral contenente l'html 
const wrapper2 = document.querySelector('.wrapper-2');
let ol2 = '';
let listTemplate = '';

for (let person of team) {
  
  let li2 = '';

  for(let index in person) {
    li2 += `<li>${index}: ${person[index]}</li>`
    
  }
  
  listTemplate += `
    <li>
      <ul>
        ${li2}
      </ul>        
    </li>
  `;
  
};

ol2 = `<ol>${listTemplate}</ol>`;

wrapper2.innerHTML += ol2;