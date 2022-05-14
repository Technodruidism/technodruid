window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
    document.getElementById("TechnologyDesign").style.display = "none";
    document.getElementById("Whatisit").style.display = "none";
    document.getElementById("Howitworks").style.display = "none";
    document.getElementById("Designs").style.display = "none";
    document.getElementById("Feasibledesign").style.display = "none";
    document.getElementById("Stateoftheart").style.display = "none";
    document.getElementById("Futuristicconcept").style.display = "none";
    document.getElementById("Culturechange").style.display = "none";
    document.getElementById("Creators").style.display = "none";
  }
}

function showBackToTopButtonOnScroll() {    
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

function openTD(){

  document.getElementById("TechnologyDesign").style.display = "block";
 
}

function openWI(){

  document.getElementById("Whatisit").style.display = "block";
 
}

function openHW(){

  document.getElementById("Howitworks").style.display = "block";
 
}

function openD(){

  document.getElementById("Designs").style.display = "block";
 
}

function openFD(){

  document.getElementById("Feasibledesign").style.display = "block";
 
}

function openSA(){

  document.getElementById("Stateoftheart").style.display = "block";
 
}

function openFC(){

  document.getElementById("Futuristicconcept").style.display = "block";
 
}

function openCC(){

  document.getElementById("Culturechange").style.display = "block";
 
}

function openC(){

  document.getElementById("Creators").style.display = "block";
 
}




  

// ScrollReveal({
//   origin: 'top',
//   distance: '30px',
//   duration: 700
// }).reveal(`
//   #home, 
//   #home img,  
//   #TechnologyDesign,
//   #Whatisit,
//   #Howitworks,
//   #Designs, 
//   #Feasibledesign, 
//   #Stateoftheart,
//   #Futuristicconcept,
//   #Culturechange
//   #Creators`)
