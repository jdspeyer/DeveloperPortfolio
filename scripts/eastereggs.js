let jakeJumping = false
let displayingToast = false

async function jumpJake(){
    if(!jakeJumping){
        jakeJumping = true
        swapPalette()
        const jake = document.getElementsByClassName('jake-the-dog')[0]
        jake.style.fill = getComputedStyle(document.documentElement).getPropertyValue('--color-text')
        jake.style.transform = 'translateY(-10px)'
        const waves = document.getElementsByClassName('c__waves')[0]
        //waves.style.fill = getComputedStyle(document.documentElement).getPropertyValue('--color-text')
        await sleep(0.1)
        jake.style.transform = 'translateY(-5px)'
        await sleep(0.1)
        jake.style.transform = 'translateY(-10px)'
        await sleep(0.1)
        jake.style.transform = 'translateY(-5px)'
        await sleep(0.1)
        jake.style.transform = 'translateY(-10px)'
        await sleep(3)
        //waves.style.fill = getComputedStyle(document.documentElement).getPropertyValue('--color-accent')
        jake.style.transform = null
        jake.style.fill = null
        jakeJumping = false
    }
}

async function displayToast(title, message, time){
    if(!displayingToast){
        displayingToast = true
        const toast = document.getElementById('jakes_toast')
        const toast_title = document.getElementById('jakes_toast-title')
        const toast_message = document.getElementById('jakes_toast-message')
    
        toast_title.innerHTML = title
        toast_message.innerHTML = message
    
        toast.style.transform = "translate(0, 50%)"
        await sleep(time)
        toast.style.transform = "translate(0, -100%)"
        displayingToast = false
    }
}

function swapPalette(){
    //const palleteNames = ['netflix']
    const palleteNames = ['default','gametime','foliage','sunset','radioactive','deepshift','mocha','moonlight', 'guavah', 'netflix']
    const palettes = {
        'default': ['#FF923E', '#f5f5f5', '#F5EFE6', '#f0e7dc', '#ffffff', '#B9BBBE', '#7C8594', '#091434', '#091434'],
        'gametime': ['#7289da', '#424549', '#36393e', '#282b30', '#1e2124', '#ffffff', '#B9BBBE', '#ffffff', '#ffffff'],
        'foliage': ['#05396c', '#318171', '#5bdc94', '#2cce75', '#399583', '#8de4af', '#ebebeb', '#eef4e0', '#eef4e0'],
        'sunset': ['#a9335b', '#e8d8cf', '#ecc7b6', '#e7b39d', '#eee3dc', '#d98f70', '#bbb2b5', '#113d6a', '#d47997'],
        'radioactive': ['#87c332', '#44464b', '#222628', '#171a1c', '#484a50', '#6a6e70', '#bbb2b5', '#ffffff', '#ffffff'],
        'deepshift': ['#4200fe', '#44464b', '#121212', '#000000', '#282828', '#6a6e70', '#bbb2b5', '#d7d7d7', '#ffffff'],
        'mocha': ['#df9e47', '#422b1f', '#372b2e', '#2d2426', '#553727', '#846f5e', '#e1dedd', '#ffffff', '#ffffff'],
        'moonlight': ['#ffffff', '#3c3c44', '#202020', '#010101', '#343434', '#838485', '#8c8c8c', '#bfbfbf', '#bfbfbf'],
        'guavah': ['#E96D6D', '#EFE9E5', '#EFE9E5', '#CEC9C5', '#FFFFFF', '#2F668F', '#1F3A4E', '#020027', '#020027'],
        'netflix': ['#C92A1D', '#000000', '#000000', '#000000', '#641B16', '#000000', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
    }

    const palette = palleteNames[Math.floor(Math.random()*palleteNames.length)];
    displayToast('🖌️ Palette Swapped', `${palette} pallete randomly selected.`, 3)
    document.querySelector(':root').style.setProperty('--color-accent', palettes[palette][0]);
    document.querySelector(':root').style.setProperty('--color-background-lighter',  palettes[palette][1]);
    document.querySelector(':root').style.setProperty('--color-background',  palettes[palette][2]);
    document.querySelector(':root').style.setProperty('--color-background-darker',  palettes[palette][3]);
    document.querySelector(':root').style.setProperty('--color-neutral',  palettes[palette][4]);
    document.querySelector(':root').style.setProperty('--color-neutral-dark',  palettes[palette][5]);
    document.querySelector(':root').style.setProperty('--color-neutral-darker',  palettes[palette][6]);
    document.querySelector(':root').style.setProperty('--color-text',  palettes[palette][7]);
    document.querySelector(':root').style.setProperty('--color-text-accent',  palettes[palette][8]);
}

function getRandomKey(collection) {
    let keys = Array.from(collection.keys());
    return keys[Math.floor(Math.random() * keys.length)];
}

//swapPalette()

// Little mouse gadgets
document.addEventListener('mousemove', function(e) {
    let circle = document.getElementById('jakes_cursor');
    const x = e.pageX;
    const y = e.pageY;
    const scrollLeft = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft
    const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
    circle.style.transform = `translate(${x-scrollLeft-8}px, ${y-scrollTop-8}px)`;
});

const hoverables = document.querySelectorAll('.hvr')
const iconHoverables = document.querySelectorAll('.hvr__icon')
hoverables.forEach(el => {
    const cursor = document.getElementById('jakes_cursor')
    el.addEventListener('mouseover', function(e){
        if(!cursor.classList.contains(el.getAttribute('hvr'))){
            cursor.classList.add(el.getAttribute('hvr'))
        }

        if(el.getAttribute('slc') === 'true'){
            cursor.classList.add('jakes_cursor-slc')
        }
    })

    el.addEventListener('mouseout', function(e){
        if(cursor.classList.contains(el.getAttribute('hvr'))){
            cursor.classList.remove(el.getAttribute('hvr'))
        }

        if(el.getAttribute('slc') === 'true'){
            cursor.classList.remove('jakes_cursor-slc')
        }
    })
})

iconHoverables.forEach(el =>{
    const cursor = document.getElementById('jakes_cursor')
    el.addEventListener('mouseover', function(e){
        if(!cursor.classList.contains(el.getAttribute('hvr__icon'))){
            cursor.classList.add('jakes_cursor-hvr-icon')
            cursor.innerText = el.getAttribute('icon')
        }
    })

    el.addEventListener('mouseout', function(e){
        if(cursor.classList.contains(el.getAttribute('hvr'))){
            cursor.classList.remove('jakes_cursor-hvr-icon')
            cursor.innerText = ''
        }
    })
})
  