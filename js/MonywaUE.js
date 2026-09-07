// ===============================
// Fade-in Animation on Scroll
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:0.15

});

document.querySelectorAll(".glass, .card, .gallery img, .hero img")
.forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});


// ===============================
// Gallery Image Lightbox
// ===============================

const galleryImages = document.querySelectorAll(".gallery-box img");

galleryImages.forEach(image=>{

    image.addEventListener("click",()=>{

        const lightbox=document.createElement("div");

        lightbox.className="lightbox";

        lightbox.innerHTML=`

            <span class="close">&times;</span>

            <img src="${image.src}" alt="Campus Image">

        `;

        document.body.appendChild(lightbox);

        lightbox.querySelector(".close").onclick=()=>{

            lightbox.remove();

        };

        lightbox.onclick=(e)=>{

            if(e.target===lightbox){

                lightbox.remove();

            }

        };

    });

});


// ===============================
// Hero Image Animation
// ===============================

const hero=document.querySelector(".hero img");

hero.addEventListener("mousemove",(e)=>{

    const x=(e.offsetX/hero.clientWidth-0.5)*10;

    const y=(e.offsetY/hero.clientHeight-0.5)*10;

    hero.style.transform=`rotateY(${x}deg) rotateX(${-y}deg)`;

});

hero.addEventListener("mouseleave",()=>{

    hero.style.transform="rotateY(0deg) rotateX(0deg)";

});


// ===============================
// Visit Website Button Animation
// ===============================

const button=document.querySelector(".visit-btn");

button.addEventListener("mouseenter",()=>{

    button.innerHTML='<i class="fa-solid fa-arrow-up-right-from-square"></i> Visit Official Website';

});

button.addEventListener("mouseleave",()=>{

    button.innerHTML='<i class="fa-solid fa-globe"></i> Visit Official Website';

});


// ===============================
// Floating Logo Effect
// ===============================

const logo=document.querySelector(".logo");

let angle=0;

setInterval(()=>{

    angle+=0.03;

    logo.style.transform=`translateY(${Math.sin(angle)*6}px)`;

},20);


// ===============================
// Card Hover Glow
// ===============================

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        card.style.background=`radial-gradient(circle at ${x}px ${y}px,
        rgba(61,232,255,.22),
        rgba(255,255,255,.10))`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="rgba(255,255,255,.10)";

    });

});
