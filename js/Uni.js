// Fade in cards

const cards = document.querySelectorAll(
".card,.card1,.card2,.card3,.card4,.card5"
);

cards.forEach((card,index)=>{

card.style.opacity="0";
card.style.transform="translateY(60px)";

setTimeout(()=>{

card.style.transition="0.8s ease";

card.style.opacity="1";
card.style.transform="translateY(0)";

},index*180);

});


// Mouse glow effect

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.background=
`radial-gradient(circle at ${x}px ${y}px,
rgba(255,255,255,0.25),
rgba(255,255,255,0.10) 45%,
rgba(255,255,255,0.08))`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="rgba(255,255,255,.10)";

});

});


// Click animation

cards.forEach(card=>{

card.addEventListener("click",()=>{

card.style.transform="scale(.95)";

setTimeout(()=>{

card.style.transform="translateY(-15px) scale(1.03)";

},120);

});

});