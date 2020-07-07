//PAGE DELAY ANIMATIONS

//Scroll Reveal INIT
const sr = ScrollReveal()

//GETTING ALL THE TARGETS
const navbar = document.querySelector('.navbar')
const links = document.querySelector('.navbar-nav')
const leftContent = document.querySelector('#left-top-content')
const leftAnchor = document.querySelector('.anchor-container')
const rightContent = document.querySelector('#right')
const chairperson = document.querySelector('#chairperson')
const letterText = document.querySelector('#left-side')
const letterImg = document.querySelector('#right-img')
const affinityCards = document.querySelectorAll('#affinity .card')
const catalogueCards = document.querySelectorAll('#catalogue .card ')
const mission = document.querySelector('#mission')
const vision = document.querySelector('#vision')


//SETTING ALL THE ANIMATIONS
sr.reveal(navbar, {
    delay:150
})
sr.reveal(links, {
    delay:350
})
sr.reveal(leftContent, {
    distance:'40px',
    origin:'left',
    delay:500
})
sr.reveal(rightContent, {
    distance: '40px',
    origin: 'right',
    delay: 500
})
sr.reveal(leftAnchor, {
    distance: '30px',
    origin: 'bottom',
    delay: 700
})
sr.reveal(chairperson, {
    distance: '30px',
    origin: 'top',
    delay: 800,
    viewFactor:0.24
})
sr.reveal(letterText, {
    distance: '30px',
    origin: 'left',
    delay: 800,
    viewFactor:0.35
})
sr.reveal(letterImg, {
    distance: '30px',
    origin: 'right',
    delay: 800,
    viewFactor:0.4
})
sr.reveal(affinityCards[0], {
    distance: '30px',
    origin: 'left',
    delay: 700,
    viewFactor: 0.25
})
sr.reveal(affinityCards[3], {
    distance: '30px',
    origin: 'right',
    delay: 700,
    viewFactor: 0.25
})
sr.reveal(affinityCards[1], {
    distance: '30px',
    origin: 'top',
    delay: 700,
    viewFactor: 0.25
})
sr.reveal(affinityCards[2], {
    distance: '30px',
    origin: 'top',
    delay: 700,
    viewFactor: 0.25
})
sr.reveal(catalogueCards[0], {
    distance: '30px',
    origin: 'left',
    delay: 700,
    viewFactor: 0.25
})
sr.reveal(catalogueCards[1], {
    distance: '30px',
    origin: 'top',
    delay: 700,
    viewFactor: 0.25
})
sr.reveal(catalogueCards[2], {
    distance: '30px',
    origin: 'right',
    delay: 700,
    viewFactor: 0.25
})
sr.reveal(mission, {
    distance: '30px',
    origin: 'left',
    delay: 700,
    viewFactor: 0.25
})
sr.reveal(vision, {
    distance: '30px',
    origin: 'right',
    delay: 700,
    viewFactor: 0.25
})



