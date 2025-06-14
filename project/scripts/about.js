
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