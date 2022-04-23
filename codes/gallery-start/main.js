const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFilePaths = [
    "./images/pic1.jpg",
    "./images/pic2.jpg",
    "./images/pic3.jpg",
    "./images/pic4.jpg",
    "./images/pic5.jpg"
];

/* Looping through images */
for(let file in imageFilePaths)
{
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imageFilePaths[file]);
    newImage.addEventListener("click",()=>{
        displayedImage.src = imageFilePaths[file];
    })
    thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click',()=>{
    if(btn.textContent === "Darken"){
        displayedImage.className = "displayed-img overlay";
        // console.log(overlay.style);
        overlay.style.backgroundColor = `rgba(0,0,0,0.5)`;
        btn.textContent = "Lighten";
        btn.style.color = `rgba(255,255,255,255)`
    }   

    else if(btn.textContent === "Lighten"){
        displayedImage.className = "displayed-img overlay";
        // console.log(overlay.style);
        overlay.style.backgroundColor = `rgba(0,0,0,0)`;
        btn.textContent = "Darken";
        btn.style.color = `rgba(0,0,0,0)`
    }  
})