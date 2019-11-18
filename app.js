const body = document.querySelector('body');
const about = document.querySelector('#about');
const arrow = document.querySelector('.js-arrow');

// Event delegation, event listener is added to one parent. That event listener analyzes bubbled events to find a match on child elements. Performance ++ 
document.addEventListener('click', e => {
    e.preventDefault();
    
    if (e.target.nodeName == "A") {
        window.open(e.target.href, '_blank');
    }
    
    if (e.target.className.includes('js-arrow')) {
        about.scrollIntoView();
    }

    if (e.target.className.includes('next')) {
        right();
    }

    if (e.target.className.includes('prev')) {
        left();
    }
});

// Hero content
const heroData = [
    {
        img: "https://i.imgur.com/avPG1hl.jpg",
        header: "Worldwide leadership conference",
        paragraph: "It's like being inside an enormous Fox's Glacier Mint. Which, again, to me is a bonus."
    },
    {
        img: "https://i.imgur.com/KUa0fUD.jpg",
        header: "Slide 2",
        paragraph: "Swallow is a detective who tackles vandalism. Bit of a maverick, not afraid to break the law if he thinks it’s necessary."
    },
    {
        img: "https://i.imgur.com/YcDB1hY.jpg",
        header: "Slide 3",
        paragraph: "He’s not a criminal, but he will, perhaps, travel 80mph on the motorway if he, for example, he wants to get somewhere quickly…"
    }

];

// Generate hero markup
for (let i = 0; i < heroData.length; i++) {
    const hero = document.querySelector(".hero");
    const {img, header, paragraph} = heroData[i];
    const slideData = `
        <div class="hero__slide ${i == 0 ? 'hero__slide--visible' : ''}"data-slide="slide-${i}">
            <div class="hero__img-container" style="background-image:url('${img}')"></div>

            <div class="hero__text-container">
                <div class="hero__text">
                    <h1 class="hero__header">${header}</h1>
                    <p class="paragraph paragraph--invert">${paragraph}</p>
                </div>
            </div>
        </div>
    `;
    hero.innerHTML += slideData;
}

const slides = document.querySelectorAll(".hero__slide");
let currentSlide = 0;

const right = () => {
    slides[currentSlide].classList.remove("hero__slide--visible");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("hero__slide--visible");
}

const left = () => {
    slides[currentSlide].classList.remove("hero__slide--visible");
    
    if (currentSlide > 0) {
        currentSlide = (currentSlide - 1) % slides.length;
    } else {
        currentSlide = slides.length - 1;
    }

    slides[currentSlide].classList.add("hero__slide--visible")
}