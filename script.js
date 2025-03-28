const data = [
    {
      "titre": "J'ai encore reve d'elle",
      "auteur": "Il etais une fois"
    },
    {
      "titre": "Cote ouest",
      "auteur": "47Ter"
    },
    {
      "titre": "Confessions nocturnes",
      "auteur": "Diam's & Vitaa"
    },
    {
      "titre": "Me Too",
      "auteur": "Meghan Trainor"
    },
    {
      "titre": "Made You Look",
      "auteur": "Meghan Trainor"
    },
    {
      "titre": "Un autre monde",
      "auteur": "Telephone"
    },
    {
      "titre": "Dans un autre monde",
      "auteur": "La reine des neiges 2"
    },
    {
      "titre": "Mamma Mia",
      "auteur": "Mamma Mia 2"
    },
    {
      "titre": "Elephant Love Medley",
      "auteur": "Moulin Rouge"
    },
    {
      "titre": "Creep",
      "auteur": "Radiohead"
    },
    {
      "titre": "New York avec toi",
      "auteur": "Telephone"
    },
    {
      "titre": "Jeune et con",
      "auteur": "Damien Saez"
    },
    {
      "titre": "Ca c'est vraiment toi",
      "auteur": "Telephone"
    },
    {
      "titre": "The Time Of My Life",
      "auteur": "Bill Medley & Jennifer Warnes"
    },
    {
      "titre": "Summer Nights",
      "auteur": "John Travolta & Olivia Newton-John"
    },
    {
      "titre": "Pour que tu m'aimes encore",
      "auteur": "Celine Dion"
    },
    {
      "titre": "Someone Like You",
      "auteur": "Adele"
    },
    {
      "titre": "If I Ain't Got You",
      "auteur": "Alicia Keyes"
    },
    {
      "titre": "Mon Coeur mon amour",
      "auteur": "Anais"
    },
    {
      "titre": "Priere paienne",
      "auteur": "Celine Dion"
    },
    {
      "titre": "Ma philosophie",
      "auteur": "Amel Bent"
    },
    {
      "titre": "Mon Papa a Moi est un Gangster",
      "auteur": "Stomy Bugsy"
    },
    {
      "titre": "Derniere Danse",
      "auteur": "Kyo"
    },
    {
      "titre": "Call me Maybe",
      "auteur": "Carly Rae jepsen"
    },
    {
      "titre": "A thousand miles",
      "auteur": "Vanessa Carlton"
    },
    {
      "titre": "Dis moi",
      "auteur": "BB Brunes"
    },
    {
      "titre": "Oops!..I did it again",
      "auteur": "Britney Spears"
    },
    {
      "titre": "Il jouait du piano debout",
      "auteur": "France Gall"
    },
    {
      "titre": "Mienteme",
      "auteur": "Tini & Maria Becerra"
    },
    {
      "titre": "Tes yeux noirs",
      "auteur": "Indochine"
    },
    {
      "titre": "Indigo",
      "auteur": "Camilo, Evaluna Montaner"
    },
    {
      "titre": "Mala Fama",
      "auteur": "Danna Paola"
    },
    {
      "titre": "Tu ne m'as pas laisse le temps",
      "auteur": "David Hallyday"
    },
    {
      "titre": "Ce reve bleu",
      "auteur": "Aladdin"
    },
    {
      "titre": "Emmenew-moi",
      "auteur": "Charls Aznavour"
    },
    {
      "titre": "For me Formidable",
      "auteur": "Charls Aznavour"
    },
    {
      "titre": "Si demain Turn around",
      "auteur": "Bonnie Tyler & Kareen Antonn"
    },
    {
      "titre": "Thank you",
      "auteur": "dido"
    },
    {
      "titre": "Jeune demoiselle",
      "auteur": "Diam's"
    },
    {
      "titre": "Bim bam toi",
      "auteur": "Carla"
    },
    {
      "titre": "Je sais pas jouer",
      "auteur": "Pierpoljak"
    },
    {
      "titre": "Baby one more time",
      "auteur": "Britney Spears"
    },
    {
      "titre": "Parle a ma main",
      "auteur": "Fatal Bozooka feat Yelle"
    },
    {
      "titre": "Wannabe",
      "auteur": "Spice girls"
    },
    {
      "titre": "New Rules",
      "auteur": "Dua Lupa"
    },
    {
      "titre": "Propuesta Indecente",
      "auteur": "Romeo Santos"
    },
    {
      "titre": "Havana",
      "auteur": "Camila Cabello feat Young Thug"
    },
    {
      "titre": "Shallow",
      "auteur": "Lady Gaga & Bradley Cooper"
    },
    {
      "titre": "Every breath You take",
      "auteur": "The police"
    },
    {
      "titre": "Voila",
      "auteur": "Barbara Pravi"
    },
    {
      "titre": "Chacun fait c'qui lui plait",
      "auteur": "Chagrin d'amour"
    }
  ]

  const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");
const morceau = document.getElementById("titre-spin");
const auteur = document.getElementById("auteur-spin");
const popup = document.querySelector('.popup');
const value = Math.ceil(Math.random()*3600)

const generateWheel = () => {
  wheel.innerHTML= '';
  data.forEach( (chanson, index) => {
    const pieContainer = document.createElement("div");
    const content = document.createElement('div');
    const titre = document.createElement('div');
 
    titre.className = 'titre'
    titre.textContent = chanson.titre
 
    content.className = 'content'
    pieContainer.className = 'pie-container'
    pieContainer.id = index;
    pieContainer.style.transform = `rotate(${(360/data.length)*index}deg)`
 
    content.appendChild(titre);
    pieContainer.appendChild(content)
    wheel.appendChild(pieContainer);
  });  
}

spinBtn.onclick = () => {
  const value = Math.ceil(Math.random()*3600)
  wheel.style.transform = `rotate(${value}deg)`
  setTimeout(detect, 2001)
}

popup.onclick = () => {
  popup.classList.remove('slide-in-blurred-top')
  popup.classList.add('slide-in-blurred-top-reverse')
}


const detect = () => {
  const targetElement = document.querySelector('.marker');
  const rect = targetElement.getBoundingClientRect();
  // Calculate the center of the element (or any specific point you want)
  const x = rect.left + 1 ; // Horizontal center
  const y = rect.top; // Vertical center
 
  // Use elementFromPoint to find the element under the target element's position
  const elementUnder = document.elementFromPoint(x, y);

  morceau.innerHTML = ''
  auteur.innerHTML = ''

  if (elementUnder.className === 'titre'){

    const cherche_titre = data.filter( chanson => chanson.titre === elementUnder.textContent)

    morceau.textContent = cherche_titre[0].titre
    auteur.textContent = cherche_titre[0].auteur

    data.splice(data.indexOf(cherche_titre[0]), 1)
    
  } else if (elementUnder.className === 'pie-container') {
  
    morceau.textContent = data[elementUnder.id].titre
    auteur.textContent = data[elementUnder.id].auteur

    data.splice(elementUnder.id, 1)


  }

  popup.classList.remove('slide-in-blurred-top-reverse')
  popup.classList.add('slide-in-blurred-top')

  generateWheel()

  // Log or return the element under the target element
}


generateWheel()