const body = document.querySelector('body');
const about = document.querySelector('#About');
const arrow = document.querySelector('.js-arrow');
const aboutContent = document.querySelectorAll(".about__content");

// Event delegation. Event listener analyzes bubbled events to find a match on child elements. Performance++ 
document.addEventListener('click', e => {
    e.preventDefault();
    
    if (e.target.nodeName == "A") {
        window.open(e.target.href, '_blank');
    }

    if (e.target.className.includes('js-nav')) {
        e.path[2].classList.toggle('hero__nav-container--modal');
    }

    if (e.target.className.includes('hero__nav-container')) {
        e.target.classList.toggle('hero__nav-container--modal');
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

// Remove modal if active on larger screen
window.addEventListener('resize', e => {
    if (window.innerWidth >= 768 ) {
        let heroContainer = document.querySelector('.hero__nav-container');

        if (heroContainer.classList.contains('hero__nav-container--modal')) {
            heroContainer.classList.remove('hero__nav-container--modal');
        }
    }
})

// Hero content
const heroData = [
    {
        img: "https://i.ibb.co/GsLD1BZ/hero.jpg",
        header: "Worldwide leadership conference",
        paragraph: "It's like being inside an enormous Fox's Glacier Mint. Which, again, to me is a bonus."
    },
    {
        img: "https://i.imgur.com/KUa0fUD.jpg",
        header: "Slide 2",
        paragraph: "Swallow is a detective who tackles vandalism. Bit of a maverick, not afraid to break the law if he thinks it’s necessary."
    },
    {
        img: "https://i.imgur.com/avPG1hl.jpg",
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

// Move hero slide right
const right = () => {
    slides[currentSlide].classList.remove("hero__slide--visible");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("hero__slide--visible");
}

// Move hero slide left
const left = () => {
    slides[currentSlide].classList.remove("hero__slide--visible");
    
    if (currentSlide > 0) {
        currentSlide = (currentSlide - 1) % slides.length;
    } else {
        currentSlide = slides.length - 1;
    }

    slides[currentSlide].classList.add("hero__slide--visible")
}

var observer = new IntersectionObserver(function(entries) {
	// isIntersecting is true when element and viewport are overlapping
	// isIntersecting is false when element and viewport don't overlap
	if(entries[0].isIntersecting === true)
		console.log(this);
}, { threshold: [0.10] });

observer.observe(aboutContent[0]);
observer.observe(aboutContent[1]);