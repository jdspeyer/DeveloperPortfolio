let positionX = 0
let positionY = 0
let scaleAmount = 0
let stationary = true

let contactSectionCoords = getOffset(document.getElementsByClassName('p__container-navigation')[0]).top
let landingSectionCoords = getOffset(document.getElementById('l__module')).top
let personCoords = getOffset(document.getElementById('l__falling-jake-image')).top
let holeCoords = getOffset(document.getElementById('l__falling-jake-hole')).bottom

const floatingIcons = [document.getElementsByClassName('icon-1')[0],document.getElementsByClassName('icon-2')[0],document.getElementsByClassName('icon-3')[0],
                       document.getElementsByClassName('icon-4')[0],document.getElementsByClassName('icon-5')[0],document.getElementsByClassName('icon-6')[0],
                       document.getElementsByClassName('icon-7')[0],document.getElementsByClassName('icon-8')[0],document.getElementsByClassName('icon-9')[0],
                       document.getElementsByClassName('icon-10')[0]]

let icon1Coords = getOffset(floatingIcons[0]).top

window.addEventListener('resize', function(e) {
    contactSectionCoords = getOffset(document.getElementsByClassName('p__container-navigation')[0]).top
    landingSectionCoords = getOffset(document.getElementById('l__module')).top
})

window.addEventListener('scroll',async function(e) {
    // FOR DA MAN AT THE BOTTOM
    if(window.pageYOffset >= contactSectionCoords){
        stationary = false
        const image = document.getElementById("c__portrait")
        scaleAmount = (window.pageYOffset/contactSectionCoords)
        let rate = (contactSectionCoords - window.pageYOffset)*1.5
        positionY = rate;
        image.style.transform = `translate3d(${positionX + 100}px, ${rate + 20}px, 0px) scale(${scaleAmount})`
        await sleep(0.1)
        stationary = true;
    }

    // FOR DA MAN AT THE TOP
    if(window.pageYOffset >= landingSectionCoords && window.pageYOffset <= contactSectionCoords){
        const fallingImage = document.getElementById("l__falling-jake-image")
        const fallingCircle = document.getElementById("l__falling-jake-hole")

        holeCoords = getOffset(document.getElementById('l__falling-jake-hole')).bottom
        personCoords = getOffset(document.getElementById('l__falling-jake-image')).top

        let rate = (landingSectionCoords + window.pageYOffset)*1.5
        scaleAmount = 1/(window.pageYOffset*0.5)
        scaleAmount = personCoords > holeCoords+50 ? scaleAmount : 1
        positionY = rate;

        fallingImage.style.transform = `translate3d(${positionX}px, ${rate}px, 0px) rotate(${-rate/12}deg)`
        fallingCircle.style.transform = `scale(${scaleAmount})`
        //await sleep(0.1)
    }

    // FOR DA ICONS
    if(window.pageYOffset >= landingSectionCoords && window.pageYOffset <= contactSectionCoords){
        icon1Coords = getOffset(floatingIcons[0]).top

        let rate = (landingSectionCoords - window.pageYOffset)

        positionY = rate;
        floatingIcons[0].style.transform = `translate3d(${positionX}px, ${rate*1.5}px, 0px) scale(2.0)`
        floatingIcons[1].style.transform = `translate3d(${positionX}px, ${rate*1.0}px, 0px) scale(2.0)`
        floatingIcons[2].style.transform = `translate3d(${positionX}px, ${rate*0.2}px, 0px) scale(2.0)`
        floatingIcons[3].style.transform = `translate3d(${positionX}px, ${rate*2.2}px, 0px) scale(2.0)`
        floatingIcons[4].style.transform = `translate3d(${positionX}px, ${rate*3.0}px, 0px) scale(2.0)`
        floatingIcons[5].style.transform = `translate3d(${positionX}px, ${rate*0.8}px, 0px) scale(2.0)`
        floatingIcons[6].style.transform = `translate3d(${positionX}px, ${rate*1.3}px, 0px) scale(2.0)`
        floatingIcons[7].style.transform = `translate3d(${positionX}px, ${rate*2.5}px, 0px) scale(2.0)`
        floatingIcons[8].style.transform = `translate3d(${positionX}px, ${rate*1.9}px, 0px) scale(2.0)`
        floatingIcons[9].style.transform = `translate3d(${positionX}px, ${rate*2.5}px, 0px) scale(2.0)`

    }
})

window.addEventListener('mousemove',function(e){
    if(window.pageYOffset >= contactSectionCoords && stationary){
        const image = document.getElementById("c__portrait")
        if(stationary){
            image.style.transform = `translate3d(${e.clientX*.02 + positionX + 100}px, ${e.clientY*0.02 + positionY + 20}px, 0px) scale(${scaleAmount})`

        }
    }
})

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
    bottom: rect.bottom + window.scrollY
  };
}


function sleep(duration) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, duration * 1000)
    })
}

function sendEmail(){
    let submitButton = document.getElementById('c__contact-submit');
    submitButton.disabled = true
    document.getElementById('c__contact-submit').value = "Submitting..."
    displayToast('✏️ Form', `Sending your email...`, 2)
    let name = document.getElementById("c__contact-name").value
    let email = document.getElementById("c__contact-email").value
    let message = document.getElementById("c__contact-message").value
    
    var templateParams = {
        from_name: name,
        respond_email: email,
        message: message
    };

     
    emailjs.send('service_6dswhv9', 'template_k86yk1l', templateParams)
        .then(function(response) {
            displayToast('✏️ Form', `Email sent! Thank you!`, 3)
            document.getElementById("c__contact-name").value = ""
            document.getElementById("c__contact-email").value = ""
            document.getElementById("c__contact-message").value = ""
            document.getElementById('c__contact-submit').value = "Submitted!"
            
        }, function(error) {
            displayToast('✏️ Form', `There was an error! Try again.`, 3)
            submitButton.disabled = false
            document.getElementById('c__contact-submit').value = "Submit"
        });
}
