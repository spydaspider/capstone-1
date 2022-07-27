

const speakersSection = [
    {
      id: '001',
      image: './images/male-one.jpg',
      name: 'Spencer Jeff',
      occupation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, tempora?',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ratione beatae obcaecati provident ipsam.',
    },
    {
        id: '002',
        image: './images/male-two.jpg',
        name: 'Joseph Reece',
        occupation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, tempora?',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ratione beatae obcaecati provident ipsam.',
    },
    {
        id: '003',
        image: './images/female-three.jpg',
        name: 'Magaret Stroutroup',
        occupation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, tempora?',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ratione beatae obcaecati provident ipsam.',
    },
    {
        id: '004',
        image: './images/male-three.jpg',
        name: 'Derick Johnson',
        occupation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, tempora?',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ratione beatae obcaecati provident ipsam.',
    },
    {
        id: '005',
        image: './images/female-two.jpg',
        name: 'Amanda Holmes',
        occupation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, tempora?',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ratione beatae obcaecati provident ipsam.',
    },
    {
        id: '006',
        image: './images/female-one.jpg',
        name: 'Mercy Tex',
        occupation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, tempora?',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ratione beatae obcaecati provident ipsam.',
    },
  ];

  function loadSpeakers()
  {
    const speaker = document.querySelector('.speaker-wrapper');
    speakersSection.forEach((i) => {
        speaker.insertAdjacentHTML(
            'beforeend',
            `
            <div class = "speaker">
            <div class = "img-container">
                <img src = "${i.image}" alt = "image of speaker">
            </div>
            <div class = "s-content">
                <h5>${i.name}</h5>
                <h6>${i.occupation}</h6>
                <p class = "speaker-desc text-muted">${i.description}</p>
            </div>
        </div>
        `

        );
    });

}
//Add DOMContentLoaded event to the function call.
document.addEventListener('DOMContentLoaded', () => {
     loadSpeakers();
})

const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const ex = document.querySelector('.ex');
hamburger.addEventListener('click',() => {
    mobileMenu.classList.add('active');
    
})
ex.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
})
