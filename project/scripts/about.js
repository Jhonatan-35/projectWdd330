document.getElementById("copyright-year").innerHTML = new Date().getFullYear();
let oLastModif = new Date(document.lastModified);
let text = document.lastModified; document.getElementById("demo").innerHTML = text;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');


hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('show');
  hambutton.classList.toggle('show');
});
 


let hideText_btn = document.getElementById('hideText_btn');

let hideText = document.getElementById('hideText');

hideText_btn.addEventListener('click',toggleText);

function toggleText(){
  hideText.classList.toggle('how');

  if(hideText.classList.contains('how')){
    hideText_btn.innerHTML = 'Read less';
  }
  else{
    hideText_btn.innerHTML = 'Read More';
  }

}

let ideText_bt = document.getElementById('ideText_bt');

let rideText = document.getElementById('rideText');

ideText_bt.addEventListener('click',toggleText);

function toggleText(){
  rideText.classList.toggle('sho');

  if(rideText.classList.contains('sho')){
    rideText_bt.innerHTML = 'Read less';
  }
  else{
    rideText_bt.innerHTML = 'Read More';
  }

}