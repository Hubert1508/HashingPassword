
window.onload= function(){

  oncontextmenu = function(event){
    event.preventDefault();
    this.alert("Na tej stronie prawy przycisk myszy nie działa... expect us")
  }

  const video = document.querySelector('video');

  video.playbackRate = 1;

  confirm("This page will show you what your hashed password looks like in the database.");

}

const button = document.querySelector("#button");

button.onclick = function(){

  const pass = document.getElementById("password").value;

  document.cookie = pass;
  
  hashRead(pass);

}

async function hashRead(pass){

  const msgUint8 = new TextEncoder().encode(pass);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

  const text = "Hash password : ";

  const spanText = document.querySelector('span');

  (pass!='') ? spanText.innerHTML=text+hashHex : alert("Enter the password!");

  return hashHex;
}

const cls = document.getElementById('cls');

  cls.onclick=function(){
    const spanText = document.querySelector('span');
    spanText.innerHTML = 'Your hashed password will be appear here';
  } 
