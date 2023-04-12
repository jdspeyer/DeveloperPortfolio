let navOpen = false;

const HOME_PAGE = document.getElementById('l__module')
const ABOUT_PAGE = document.getElementById('a__module')
const PROJECTS_PAGE = document.getElementById('p__module')
const CONTACT_PAGE = document.getElementById('c__module')

window.onscroll = function(e) {
    const navbar = document.getElementById('jakes_navbar')

    if (this.scrollY <= (HOME_PAGE.offsetTop + HOME_PAGE.offsetHeight/2)) {
        const blobA = document.getElementById('blob-left-corner')
        const blobB = document.getElementById('blob-right-corner')
        const floatingIcons = document.getElementById('l__overlay-icons')

        enableLoop(synth)
        disableLoop(kick)
        disableLoop(guitar)
        disableLoop(drums)
        disableLoop(flute)
        clearLinks()

        document.getElementById('home_selected').classList.remove('hidden')
        document.getElementById('home_button').style.pointerEvents = 'none'
        document.title = "👋 Hey There :)";

        if (this.scrollY <= 25) {
            document.title = "👋 Welcome";
            if(!floatingIcons.classList.contains('hidden')){
                floatingIcons.classList.add('hidden')
            }
            blobA.classList.remove('translate-up-out-left')
            blobB.classList.remove('translate-up-out-right')
        }else{
            blobA.classList.add('translate-up-out-left')
            blobB.classList.add('translate-up-out-right') 
            floatingIcons.classList.remove('hidden')
        }
    }
    else if (this.scrollY <= (ABOUT_PAGE.offsetTop + ABOUT_PAGE.offsetHeight/2)) {
        enableLoop(synth)
        enableLoop(kick)
        disableLoop(guitar)
        disableLoop(drums)
        disableLoop(flute)
        clearLinks()
        document.getElementById('about_selected').classList.remove('hidden')
        document.getElementById('about_button').style.pointerEvents = 'none'
        document.title = "🧗‍♂️ About Me";
    }
    else if (this.scrollY <= (PROJECTS_PAGE.offsetTop + PROJECTS_PAGE.offsetHeight/2)) {
        enableLoop(synth)
        enableLoop(kick)
        enableLoop(guitar)
        disableLoop(drums)
        disableLoop(flute)
        clearLinks()
        document.getElementById('projects_selected').classList.remove('hidden')
        document.getElementById('projects_button').style.pointerEvents = 'none'
        document.title = "💻 My Work";
    }
    else if (this.scrollY <= (CONTACT_PAGE.offsetTop + CONTACT_PAGE.offsetHeight/2)) {
        enableLoop(synth)
        enableLoop(kick)
        enableLoop(guitar)
        enableLoop(drums)
        enableLoop(flute)
        clearLinks()
        document.getElementById('contact_selected').classList.remove('hidden')
        document.getElementById('contact_button').style.pointerEvents = 'none'
        document.title = "🤝 Contact Me";
    }

    // Should we hide or show the nav bar?
    if(this.oldScroll > this.scrollY){
        if(navbar.classList.contains('hidebar')){
            navbar.classList.remove('hidebar')
        }
    }else{
        if(!navbar.classList.contains('hidebar')){
            navbar.classList.add('hidebar')
        }
    }

    //Auto close nav menu if it was open on scroll.
    if(navOpen){
        toggleNavbar()
    }

    this.oldScroll = this.scrollY;
}

function clearLinks(){
    document.getElementById('home_selected').classList.add('hidden')
    document.getElementById('about_selected').classList.add('hidden')
    document.getElementById('projects_selected').classList.add('hidden')
    document.getElementById('contact_selected').classList.add('hidden')
    document.getElementById('home_button').style.pointerEvents = 'auto'
    document.getElementById('about_button').style.pointerEvents = 'auto'
    document.getElementById('projects_button').style.pointerEvents = 'auto'
    document.getElementById('contact_button').style.pointerEvents = 'auto'
}

function toggleNavbar(){
    const nav = document.getElementById('jakes_nav')
    const button = document.getElementById('jakes_navbar-toggle')
    const modules = [document.getElementById('l__module'),document.getElementById('a__module'),document.getElementById('p__module'),document.getElementById('c__module')]
    if(nav.classList.contains('open')){
        CLOSE_SFX.play()
        nav.classList.remove('open')
        modules.forEach(module => {
            module.classList.remove('module-animation')
            module.classList.add('module-reverse-animation')
        });
        Array.from(nav.children).forEach(child => {
            child.classList.add('hidden')
        })

        navOpen = false
        button.children[0].innerText = "menu"
    }else{
        OPEN_SFX.play()
        nav.classList.add('open')
        modules.forEach(module => {
            module.classList.remove('module-reverse-animation')
            module.classList.add('module-animation') 
            console.log(module)
        });  
        Array.from(nav.children).forEach(child => {
            child.classList.remove('hidden')
        }) 
        navOpen = true
        button.children[0].innerText = "close"
    }
}