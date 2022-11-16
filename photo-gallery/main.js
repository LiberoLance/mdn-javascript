const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const N = 5; //number of photos

/* Declaring the array of image filenames */
const filenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
/* Declaring the alternative text for each image file */
const altTxt = {pic1:"Closeup of a human eye", pic2:"Desert landscape", pic3:"Purple and white flowers", pic4:"Egyptian art", pic5:"Moth on a leaf"};
/* Looping through images */
let i = 0;
let alttxt = Object.values(altTxt);
for(filename of filenames) {
  const img = document.createElement('img');
  img.src = 'images/' + filename;
  img.className = 'tbimg';
  img.alt = alttxt[i++];
  thumbBar.appendChild(img);
}

const tb = document.querySelector('.thumb-bar');
tb.addEventListener('click', (e) => {
  displayedImage.src = e.target.src;
  displayedImage.alt = e.target.alt;
});

let dark = false;
/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
  if(dark){
    dark = false;
    overlay.style.backgroundColor = 'rgba(0,0,0, .0)';
  }
  else{
    overlay.style.backgroundColor = 'rgba(0,0,0, .25)';
    dark = true;
  }
});
