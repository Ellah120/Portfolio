const btn = document.getElementById('hamburger-btn').addEventListener('click', showNav);

const clear = document.querySelector('.cancel').addEventListener('click', hideNav)

// const navigate = document.querySelector('.nav-div').style.display;

// const hamburgerDiv = document.querySelector('.hamburger').style.display;

function showNav(){

let navigate = document.querySelector('.nav-div');

let hamburgerDiv = document.querySelector('.hamburger');

if(hamburgerDiv.style.display === 'flex'){
  // navigate.style.display = 'block'
 navigate.style.display = 'block';
 hamburgerDiv.style.display ='none'
} 
else {
  hamburgerDiv.style.display = 'flex';
}
}

function hideNav(){
  let navigate = document.querySelector('.nav-div');

  let hamburgerDiv = document.querySelector('.hamburger');
  
  if(navigate.style.display === 'block'){
    hamburgerDiv.style.display ='flex'
   navigate.style.display = 'none';
  } 
  else {
    navigate.style.display = 'block';
  }
}