const body = document.querySelector('body');
const about = document.querySelector('#about');
const arrow = document.querySelector('.js-arrow');

body.addEventListener('click', e => {
    e.preventDefault();

    if (e.target.nodeName == "A") {
        window.open(e.target.href, '_blank');
    }

    if (e.target == arrow) {
        about.scrollIntoView();
    }
});

const sliderData = [
    {
      img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
      name: "The Avengers",
      desc: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity."
    },
    {
      img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
      name: "Iron Man",
      desc: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil."
    },
    {
      img: "https://images-na.ssl-images-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
      name: "Thor",
      desc: "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders."
    },
    {
      img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_SY1000_CR0,0,674,1000_AL_.jpg",
      name: "Guardians of the Galaxy",
      desc: "A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe."
    },
    {
      img: "https://images-na.ssl-images-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
      name: "Doctor Strange",
      desc: "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts."
    },
    {
      img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SY1000_CR0,0,640,1000_AL_.jpg",
      name: "Captain America",
      desc: 'Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization'
    }
  ];
  
  for (let i = 0; i < sliderData.length; i++) {
    const slider = document.querySelector(".slider");
    const {img, name, desc} = sliderData[i];
    const slideData = `
      <div class="slide ${i == 0 ? 'visible' : ''}" data-slide="slide-${i}">
        <div class="slide-image">
         <img src="${img}" />
        </div>
        <div class="slide-caption">
          <div class="slide-caption-content">
            <div class="title-bg">
              <h1>${name}</h1>
            </div>
            <p>${desc}</p>
          </div>
        </div>
      </div>
    `;
    slider.innerHTML += slideData;
  }
  
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;
  const slideInterval = setInterval(() => {
    slides[currentSlide].classList.remove("visible");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("visible");
  }, 5000);
  