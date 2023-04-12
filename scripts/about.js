const TECHNICAL_HEADER = document.getElementById("a__technical-header")
const TECHNICAL_DESCRIPTION = document.getElementById("a__technical-description")
const TECHNICAL_SUBHEADER = document.getElementById("a__technical-subheader")
const TECHNICAL_SKILLS = document.getElementById("a__technical-skills")

const WEB_BUTTON = document.getElementById("web-skills")
const DESIGN_BUTTON = document.getElementById("design-skills")
const CLOUD_BUTTON = document.getElementById("cloud-skills")
const SOFTWARE_BUTTON = document.getElementById("software-skills")

const ABOUT_SKILLS = document.getElementById("about-skills")

let activeButton = 0
let swappingText = false

function showWeb(){ 
    if(activeButton !== 0 && !swappingText){
        activeButton = 0
        const title = "Ready to stand out online?\nI can help!"
        const paragraph = "I have experience utilizing modern web development languages to build out beautiful websites and complex applications."
        const subtitle = "Web Development Skills"
        const skills = "Javascript, WebGL, React, Flutter, NodeJS, Next, HTML5, CSS"
        clearSelection(title, paragraph, subtitle, skills)
        WEB_BUTTON.classList.add('active-skill')
    }

}

function showDesign(){
    if(activeButton !== 1 && !swappingText){
        activeButton = 1
        const title = "Want a clean and functional design?\nLook no further!"
        const paragraph = "Besides developing software, I have also created modern mobile and web interfaces that are optimized for development."
        const subtitle = "Design Skills"
        const skills = "Figma, Illustrator, Photoshop, After Effects, Zeplin"
        clearSelection(title, paragraph, subtitle, skills)
        DESIGN_BUTTON.classList.add('active-skill')
    }
}


function showCloud(){
    if(activeButton !== 2 && !swappingText){
        activeButton = 2
        const title = "Ready to migrate your business?\nLet me fly the rocket."
        const paragraph = "I have hundreds of hours of development experience inside Amazon Web Services and Google Cloud Platform creating powerful fullstack applcations."
        const subtitle = "Cloud Skills"
        const skills = "Lambda, DynamoDB, Route53, Cloud9, EC2, IAM, Firestore, Cloud Functions"
        clearSelection(title, paragraph, subtitle, skills)
        CLOUD_BUTTON.classList.add('active-skill')
    }
}

function showSoftware(){
    if(activeButton !== 3 && !swappingText){
        activeButton = 3
        const sTitle = "Need a complex application?\nAdd me to the team!"
        const sParagraph = "I have built out content rich programs in modern languages that enforce industry standard software design patterns."
        const sSubtitle = "Software Skills And Languages"
        const sSkills = "Java, Python, Flyweight, Singleton, Factory"
        clearSelection(sTitle, sParagraph, sSubtitle, sSkills)
        SOFTWARE_BUTTON.classList.add('active-skill')
    }
}

async function clearSelection(title, paragraph, subtitle, skills){
    CLICK_SFX.play()
    if(!swappingText){
        swappingText = true
        WEB_BUTTON.classList.remove('active-skill')
        DESIGN_BUTTON.classList.remove('active-skill')
        CLOUD_BUTTON.classList.remove('active-skill')
        SOFTWARE_BUTTON.classList.remove('active-skill')

        ABOUT_SKILLS.classList.add('animate-out')
        await sleep(0.5)
        TECHNICAL_HEADER.innerText = title
        TECHNICAL_DESCRIPTION.innerText = paragraph
        TECHNICAL_SUBHEADER.innerText = subtitle
        TECHNICAL_SKILLS.innerText = skills
        ABOUT_SKILLS.classList.remove('animate-out')

        swappingText = false
    }
}