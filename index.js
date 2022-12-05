const btn = document.getElementById('hamburger-btn').addEventListener('click', showNav);

const clear = document.querySelector('.cancel').addEventListener('click', hideNav)

const list = document.querySelector('.list-item').addEventListener('click', hideList)

function showNav(){

let navigate = document.querySelector('.nav-div');

let hamburgerDiv = document.querySelector('.hamburger');

if(hamburgerDiv.style.display === 'flex'){
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

function hideList(){
  let hamburgerDiv = document.querySelector('.hamburger');
  let navigate = document.querySelector('.nav-div');
  if(navigate.style.display === 'block' ){
    navigate.style.display = 'none';
    hamburgerDiv.style.display = 'flex';
  }
}