//taking element from html
// very important to add this event listener so as to wrap the contents inside
//the dom
//otherwise it doesnt work 
//pro tip

document.addEventListener("DOMContentLoaded", function(){
const inputField = document.querySelector(".inputField");
const main = document.querySelector(".resume-builder");
const outputContainer = document.querySelector(".output_container");

console.log(inputField);
console.log(main);
console.log(outputContainer);


let isHidden = true;
function hide(){
    if(isHidden){
        main.style.display="none";
        isHidden=false;

        outputContainer.style.display="block";
        outputContainer.innerHTML=`
        <div class="output">
            <div class="heading">
                <h1>${inputField["name"].value}</h1>
                <h4>${inputField["title"].value}</h4>
            </div>
            <div class="info">
            <div class="left">
            <div class="box">
                <h2> objective </h2>
                <p>${inputField["objective"].value}</p>
               
                </div>
                <div class="box">
                <h2>skills</h2>
                <p>${inputField["skills"].value}</p>
               
                </div>
            <div class="box">
                <h2>academic details</h2>
                <p>${inputField["academic_details"].value}</p>
               
                </div>
                <div class="box">
                    <h2>contact Information</h2>
                    <p>${inputField["contact"].value}</p>
                </div>
                </div>
              
                    <div class="right">
                    <div class="box">
                        <h2>work experience</h2>
                        <p>${inputField["work_experience"].value}</p>

                    </div>

                    <div class="box">
                <h2>achievements</h2>
                <p>${inputField["achievements"].value}</p>
                </div>

                <div class="box">
                <h2>projects</h2>
                <p>${inputField["projects"].value}</p>
               
                         </div>
                     </div>
        
                </div>
           </div>
          
 <button onclick="print()"> Print Resume </button>
`;
}
else{
    main.style.display="block";
    isHidden=true;
    
    outputContainer.style.display="none";
    outputContainer.innerHTML="";
}
 }
 window.hide = hide;
});
