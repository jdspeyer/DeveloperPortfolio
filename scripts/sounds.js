
let musicVolume = 0;
let firstToggle = true;

const CLICK_SFX = new Audio('./audio/Click.wav')
const OPEN_SFX = new Audio('./audio/Open.wav')
const CLOSE_SFX = new Audio('./audio/Close.wav')

const drums = new Howl({
    src: ['./audio/song/Drums.wav'],
    loop: true,
    volume: 0.0,
    preload: true
});
const flute = new Howl({
    src: ['./audio/song/Flute.wav'],
    loop: true,
    volume: 0.0,
    preload: true
});
const guitar = new Howl({
    src: ['./audio/song/Guitar.wav'],
    loop: true,
    volume: 0.0,
    preload: true
});
const synth = new Howl({
    src: ['./audio/song/Synth.wav'],
    loop: true,
    volume: 0.0,
    preload: true
});
const kick = new Howl({
    src: ['./audio/song/Kick.wav'],
    loop: true,
    volume: 0.0,
    preload: true
});

const song = [drums, flute, guitar, synth, kick]
let activeLoops = []
const sounds = [CLICK_SFX, OPEN_SFX, CLOSE_SFX]

sounds.forEach(sfx =>{
    sfx.volume = (0.1*musicVolume)
})

function toggleAudio(){
    if(firstToggle){
        drums.play()
        kick.play()
        flute.play()
        guitar.play()
        synth.play()
        firstToggle = false
    }

    CLICK_SFX.play()
    const volumeButton = document.getElementById('jakes_music')
    if(musicVolume === 1){
        volumeButton.classList.add('unselected')
        volumeButton.children[0].innerText = "volume_mute"
        musicVolume = 0
        displayToast('🔈 Audio toggled', `You will no longer hear sound.`, 2)
        song.forEach(loop =>{
            loop.fade(0.1*musicVolume,0,1)
        })
    }else{
        volumeButton.classList.remove('unselected')
        volumeButton.children[0].innerText = "volume_up"
        musicVolume = 1
        displayToast('🔈 Audio toggled', `You will now hear sound.`, 2)
        activeLoops.forEach(loop =>{
            loop.fade(0,0.1*musicVolume,1)
        })
    }


    sounds.forEach(sfx =>{
        sfx.volume = (0.1*musicVolume)
    })
}

function enableLoop(loop){
    if(!activeLoops.includes(loop)){
        loop.fade(0,0.1*musicVolume,2000)
        activeLoops.push(loop)
    }
}

function disableLoop(loop){
    if(activeLoops.includes(loop)){
        loop.fade(0.1*musicVolume,0,2000)
        const loopIndex = activeLoops.indexOf(loop)
        activeLoops.splice(loopIndex, 1)
    }
}