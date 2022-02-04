/*function addTwoIntegers(firstIntegers, secondIntegers) {
    console.log(firstIntegers + secondIntegers)
    return firstIntegers + secondIntregers
    return "hello"
    if(typeof firstIntegers === "number" && typeof secondIntegers === "number"){
        return firstIntegers + secondIntegers
    } else{
        return "valamelyik argumentum nem szám, ezért a művelet nem elvégezhető."
    }
}
console.log( addTwoIntegers(12, "13") );
console.log( addTwoIntegers(1920, 85) );
console.log( 0 === "0" )*/

function loadEvent(eventObject){
   // console.log(eventObject)
   const rootElement = document.getElementById("root");
   //console.dir(document);
   console.dir(rootElement);

   const listOfSectionElements = document.querySelectorAll("section");
   console.log(listOfSectionElements);

   //rootElement.classList.add("newClass");
   /*listOfSectionElements[0].classlist.add("newClass")
   listOfSectionElements[1].classlist.add("newClass")
   listOfSectionElements[1].classlist.add("newClass")
   listOfSectionElements[3].classlist.add("newClass")*/
   
   
   let anchors = "";

   for (const sectionElement of listOfSectionElements) {
     // sectionElements.classlist.add("mewClass")
     //   anchors = anchors + `<a> ${ sectionElement.id } </a>`
     anchors += `<a href="#${ sectionElement.id }"> ${ sectionElement.id } </a>`;
    }
    console.log(anchors);
    rootElement.insertAdjacentHTML("afterbegin", `<header>${ anchors }</header>`);
}
window.addEventListener("load", loadEvent)