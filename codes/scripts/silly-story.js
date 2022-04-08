console.log("This is a silly story generator");

/*
    Description:


*/

const data = {
    tempInFahr : 94, 
    xarr : ["Willy the Goblin","Big Daddy","Father Christmas"],
    yarr : ["the soup kitchen","Disneyland","the White House"],
    zarr : ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"]
}


const calculateRandomIndex = (arr) => {
    return arr[Math.floor(arr.length * Math.random())];
}

const getRandomVars = (region, subjectName) => {
    const rndx = calculateRandomIndex(data.xarr);
    const rndy = calculateRandomIndex(data.yarr);
    const rndz = calculateRandomIndex(data.zarr);

    // console.log(rndx, rndy, rndz);

    const regionalTemperature = region == "US"?data.tempInFahr+" fahrenheit": Number((5/9)* data.tempInFahr-32).toFixed(2)+" celsius";   
    let storyText = `It was ${regionalTemperature} outside, so ${rndx} went for a walk. When they got to ${rndy}, they stared in horror for a few moments, then ${rndz}. ${subjectName} saw the whole thing, but was not surprised — ${rndx} weighs 300 pounds, and it was a hot day.`;
    // console.log(storyText);
    return storyText;
}

// states
let subjectName = '';
let selectedRegion = '';

// components
const customname = document.getElementById("customname");
customname.addEventListener("input",(e)=>{
    subjectName = e.target.value;
});

const usElement = document.getElementById("us");
usElement.addEventListener("click",(e)=>{
    selectedRegion = "US";
});

const ukElement = document.getElementById("uk");
ukElement.addEventListener("click",(e)=>{
    selectedRegion = "UK";
});

const generateButton = document.getElementById("generate");
const textBody = document.getElementById("story");
generateButton.addEventListener("click", ()=>{
    // console.log(subjectName, selectedRegion);
    const text = getRandomVars(selectedRegion, subjectName);
    console.log("story", text);
    textBody.style.visibility="visible";
    textBody.innerHTML = text;
})







