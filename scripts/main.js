let myImage = document.querySelector('img');

myImage.onclick = function() 
{
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'image/COHMETX.png') {
      myImage.setAttribute('src', 'image/cohmetp.png');
    } else {
      myImage.setAttribute('src', 'image/COHMETX.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() 
{
  let myName = prompt('请输入你的名字。');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'COHMET' + myName;
}

if(!localStorage.getItem('name')) 
{
  setUserName();
} 
else 
{
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'COHMET' + storedName;
}

myButton.onclick = function() 
{
  setUserName();
}

function setUserName() 
{
  let myName = prompt('请输入你的名字。');
  if(!myName) 
  {
    setUserName();
  } 
  else 
  {
    localStorage.setItem('name', myName);
    myHeading.textContent ='COHMET' + myName;
  }
}