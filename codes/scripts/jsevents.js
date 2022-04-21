console.log("HELLO EVENTS");

const executeMain = ()=>{

    const controller = new AbortController(); // add this as a signal to eventlistener functions

    const btn1 = document.getElementById("btn1");
    const txt1 = document.getElementById("txt1");
    const section2 = document.getElementById("section2");
    const section3 = document.getElementById("section3");
    const section4 = document.getElementById("section4");

    btn1.addEventListener("mouseover",(e)=>{
        console.log("over");
    }, {signal:controller.signal});

    btn1.addEventListener("mouseout",(e)=>{
        console.log("out");
    }, {signal:controller.signal});

    btn1.addEventListener("click",(e)=>{
        console.log("Btn Clicked");
        // event object 
        console.log("Event Object: ",e);
        controller.abort();
    });

    txt1.addEventListener("keydown",(e)=>{
        console.log("KEY PRESSED: ", e.key);
    })


    section2.addEventListener("click",(e)=>{
        console.log("Section 2 clicked");
        console.log(e.currentTarget," Triggered the event");
    });
    section3.addEventListener("click",(e)=>{
        console.log("Section 3 clicked");
        
    });
    section4.addEventListener("click",(e)=>{
        console.log("Section 4 clicked");
    });
    
};


executeMain();