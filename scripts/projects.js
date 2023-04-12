const SPACING_PERCENTAGE = 110;
const  PROJECT_CARDS = document.getElementsByClassName("p__card")

/**
 * projectSetup
 * 
 * Method called to initialize the project cards with their starting spacing and
 * sizing.
 */
function projectSetup(){
    
    const totalCards = PROJECT_CARDS.length
    const halfCards = Math.floor(totalCards/2)
    let currentSpacing = -1 * (halfCards * SPACING_PERCENTAGE)

    for(let i = 0; i < totalCards; i++) {
        const transform = PROJECT_CARDS[i].classList.contains("inactive") ? `translateX(${currentSpacing}%) scale(0.9)`  : `translateX(${currentSpacing}%) scale(1.0)`
        PROJECT_CARDS[i].style.transform = transform
        currentSpacing += SPACING_PERCENTAGE
    }
}

function leftArrowClick(){
    CLICK_SFX.play()
    const activeCardID =  document.getElementsByClassName("active")[0].id
    if(activeCardID == "project-1"){
        document.getElementById("project-left-arrow").disabled = true
    }
    else if(activeCardID == "project-4"){
        document.getElementById("project-right-arrow").disabled = false
    }
    shiftDeckLeft(Math.floor(activeCardID.substring(activeCardID.indexOf("-")+1))) 
}

function shiftDeckLeft(id){
    const totalCards = PROJECT_CARDS.length;
    document.getElementById(`project-${id}`).classList.remove("active")
    document.getElementById(`project-${id}`).classList.add("inactive")
    document.getElementById(`project-${id-1}`).classList.remove("inactive")
    document.getElementById(`project-${id-1}`).classList.add("active")

    for(let i = 0; i < totalCards; i++) {
        let percentAmount = PROJECT_CARDS[i].style.transform.substring(PROJECT_CARDS[i].style.transform.indexOf("(") + 1)
        percentAmount = Math.floor(percentAmount.substring(0,percentAmount.indexOf("%")))
        const transform = PROJECT_CARDS[i].classList.contains("inactive") ? `translateX(${percentAmount + 110}%) scale(0.9)`  : `translateX(${percentAmount + 110}%) scale(1.0)`
        PROJECT_CARDS[i].style.transform = transform
    }
}

function rightArrowClick(){
    CLICK_SFX.play()
    const activeCardID =  document.getElementsByClassName("active")[0].id
    if(activeCardID == "project-0"){
        document.getElementById("project-left-arrow").disabled = false
    }
    else if(activeCardID == "project-3"){
        document.getElementById("project-right-arrow").disabled = true
    }
    shiftDeckRight(Math.floor(activeCardID.substring(activeCardID.indexOf("-")+1))) 
}

function shiftDeckRight(id){
    const totalCards = PROJECT_CARDS.length;
    document.getElementById(`project-${id}`).classList.remove("active")
    document.getElementById(`project-${id}`).classList.add("inactive")
    document.getElementById(`project-${id+1}`).classList.remove("inactive")
    document.getElementById(`project-${id+1}`).classList.add("active")

    for(let i = 0; i < totalCards; i++) {
        let percentAmount = PROJECT_CARDS[i].style.transform.substring(PROJECT_CARDS[i].style.transform.indexOf("(") + 1)
        percentAmount = Math.floor(percentAmount.substring(0,percentAmount.indexOf("%")))
        const transform = PROJECT_CARDS[i].classList.contains("inactive") ? `translateX(${percentAmount - 110}%) scale(0.9)`  : `translateX(${percentAmount - 110}%) scale(1.0)`
        PROJECT_CARDS[i].style.transform = transform
    }
}

function shiftDeckCard(id){
    if(document.getElementById(id).classList.contains("inactive")){

        const currentCard = document.getElementsByClassName("active")[0].id;
        const currentCardValue = Math.floor(currentCard.substring(currentCard.indexOf("-")+1))
        console.log(currentCardValue);
        if(Math.floor(id.substring(id.indexOf("-")+1)) < currentCardValue){
            for(let i = Math.floor(id.substring(id.indexOf("-")+1)); i < currentCardValue; i++){
                leftArrowClick()
            }

        }else{
            for(let i = Math.floor(id.substring(id.indexOf("-")+1)); i > currentCardValue; i--){
                rightArrowClick()
            }
        }
    }
}

projectSetup();

