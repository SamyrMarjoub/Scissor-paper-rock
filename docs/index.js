const butaopapel = document.querySelector('.div-papel')
const butaotesoura = document.querySelector('.div-tesoura')
const butaopedra = document.querySelector('.div-pedra')
const container = document.querySelector('.container')
const gamecontainer = document.querySelector('.container-game')
const imgplayer = document.querySelector('.imgp')
const botaoplayer = document.querySelector('.botaoplayer')
const imgia = document.querySelector('.imgia')
const anuncio = document.querySelector('.anuncio')
const botaoia = document.querySelector('.botaoia')
const playagain = document.querySelector('.playagain')
const contador = document.querySelector('.cont')
const rlsbutton = document.querySelector('.rules-button')
const containerrules = document.querySelector('.rules-flex')
const closeicon = document.querySelector('.close-icon')
const tela = document.querySelector('.tela')
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
let i = 0
butaopapel.addEventListener('click', function () {
    gamecontainer.style.visibility = 'visible'
    gamecontainer.style.opacity = '1'
    container.style.display = 'none'
    if(vw<=700){
        gamecontainer.style.display ='grid'
    }else{
        gamecontainer.style.display = 'flex'
    }
    imgplayer.setAttribute('src', './images/icon-paper.svg')
    botaoplayer.style.border = '20px solid #4b68f2'
    var x = Math.floor(Math.random() * 3) + 1
    let playercont = 1
    if (x === playercont) {
        setTimeout(function () {
            imgia.setAttribute('src', './images/icon-paper.svg')
            anuncio.innerHTML = 'DRAW'
            if(vw<=700){
                anuncio.style.marginLeft = '0%'
                
            }else{
                anuncio.style.marginLeft = '20%'
            }
            botaoia.style.border = '20px solid #4b68f2'
            botaoia.style.display = 'block'
            anuncio.style.opacity = '1'
            playagain.style.opacity = '1'
            i = i
            contador.innerText = i
            if (i === 0) {
                contador.style.color = 'black'
            } else if (i < 0) {
                contador.style.color = 'red'
            } else if (i > 0) {
                contador.style.color = '#4BB543'
            }
        }, 1500)
        anuncio.style.opacity = '0'
        playagain.style.opacity = '0'
        botaoia.style.display = 'none'
    } else if (x === 2) {
        setTimeout(function () {
            imgia.setAttribute('src', './images/icon-scissors.svg')
            anuncio.innerHTML = 'YOU LOSE'
            if(vw<700){
                anuncio.style.marginLeft = '-4%'
            }else{
                anuncio.style.marginLeft = '10%'
            }
            botaoia.style.border = '20px solid #eba31d'
            botaoia.style.display = 'block'
            anuncio.style.opacity = '1'
            playagain.style.opacity = '1'
            i = --i
            contador.innerText = i
            if (i === 0) {
                contador.style.color = 'black'
            } else if (i < 0) {
                contador.style.color = 'red'
            } else if (i > 0) {
                contador.style.color = '#4BB543'
            }
        }, 1500)
        anuncio.style.opacity = '0'
        playagain.style.opacity = '0'
        botaoia.style.display = 'none'
    } else if (x === 3) {
        setTimeout(function () {
            imgia.setAttribute('src', './images/icon-rock.svg')
            anuncio.innerHTML = 'YOU WIN'
            if(vw<700){
                anuncio.style.marginLeft = '-4%'
            }else{
                anuncio.style.marginLeft = '10%'
            }
            botaoia.style.border = '20px solid #e03b5d'
            botaoia.style.display = 'block'
            anuncio.style.opacity = '1'
            playagain.style.opacity = '1'
            i = ++i
            contador.innerText = i
            if (i === 0) {
                contador.style.color = 'black'
            } else if (i < 0) {
                contador.style.color = 'red'
            } else if (i > 0) {
                contador.style.color = '#4BB543'
            }
        }, 1500)
        anuncio.style.opacity = '0'
        playagain.style.opacity = '0'
        botaoia.style.display = 'none'
    }
})
butaotesoura.addEventListener('click', function () {
    gamecontainer.style.visibility = 'visible'
    gamecontainer.style.opacity = '1'
    container.style.display = 'none'
    if(vw<=700){
        gamecontainer.style.display ='grid'
    }else{
        gamecontainer.style.display = 'flex'
    }
    imgplayer.setAttribute('src', './images/icon-scissors.svg')
    botaoplayer.style.border = '20px solid #eba31d'
    var x = Math.floor(Math.random() * 3) + 1
    let playercont = 2
    if (x === playercont) {
        setTimeout(function () {
            imgia.setAttribute('src', './images/icon-scissors.svg')
            anuncio.innerHTML = 'DRAW'
            if(vw<=700){
                anuncio.style.marginLeft = '0%'
            }else{
                anuncio.style.marginLeft = '20%'
            }

            botaoia.style.border = '20px solid #eba31d'
            botaoia.style.display = 'block'
            anuncio.style.opacity = '1'
            playagain.style.opacity = '1'
            i = i
            contador.innerText = i
            if (i === 0) {
                contador.style.color = 'black'
            } else if (i < 0) {
                contador.style.color = 'red'
            } else if (i > 0) {
                contador.style.color = '#4BB543'
            }
        }, 1500)
        anuncio.style.opacity = '0'
        playagain.style.opacity = '0'
        botaoia.style.display = 'none'
    } else if (x === 1) {
        setTimeout(function () {
            imgia.setAttribute('src', './images/icon-paper.svg')
            anuncio.innerHTML = 'YOU WIN'
            if(vw<700){
                anuncio.style.marginLeft = '-4%'
            }else{
                anuncio.style.marginLeft = '10%'
            }
            botaoia.style.border = '20px solid #4b68f2'
            botaoia.style.display = 'block'
            anuncio.style.opacity = '1'
            playagain.style.opacity = '1'
            i = ++i
            contador.innerText = i
            if (i === 0) {
                contador.style.color = 'black'
            } else if (i < 0) {
                contador.style.color = 'red'
            } else if (i > 0) {
                contador.style.color = '#4BB543'
            }
        }, 1500)
        anuncio.style.opacity = '0'
        playagain.style.opacity = '0'
        botaoia.style.display = 'none'
    } else if (x === 3) {
        setTimeout(function () {
            anuncio.innerHTML = 'YOU LOSE'
            imgia.setAttribute('src', './images/icon-rock.svg')
            if(vw<700){
                anuncio.style.marginLeft = '-4%'
            }else{
                anuncio.style.marginLeft = '10%'
            }
            botaoia.style.border = '20px solid #e03b5d'
            botaoia.style.display = 'block'
            anuncio.style.opacity = '1'
            playagain.style.opacity = '1'
            i = --i
            contador.innerText = i
            if (i === 0) {
                contador.style.color = 'black'
            } else if (i < 0) {
                contador.style.color = 'red'
            } else if (i > 0) {
                contador.style.color = '#4BB543'
            }
        }, 1500)
        anuncio.style.opacity = '0'
        playagain.style.opacity = '0'
        botaoia.style.display = 'none'
    }
})
butaopedra.addEventListener('click', function () {
    gamecontainer.style.visibility = 'visible'
    gamecontainer.style.opacity = '1'
    container.style.display =' none'
    if(vw<=700){
        gamecontainer.style.display ='grid'
    }else{
        gamecontainer.style.display = 'flex'
    }
    imgplayer.setAttribute('src', './images/icon-rock.svg')
    botaoplayer.style.border = '20px solid #e03b5d'
    var x = Math.floor(Math.random() * 3) + 1
    let playercont = 3
    if (x === playercont) {
        setTimeout(function () {
            imgia.setAttribute('src', './images/icon-rock.svg')
            anuncio.innerHTML = 'DRAW'
            if(vw<=700){
                anuncio.style.marginLeft = '0%'
            }else{
                anuncio.style.marginLeft = '20%'
            }
            botaoia.style.border = '20px solid #e03b5d'
            botaoia.style.display = 'block'
            anuncio.style.opacity = '1'
            playagain.style.opacity = '1'
            i = i
            contador.innerText = i
            if (i === 0) {
                contador.style.color = 'black'
            } else if (i < 0) {
                contador.style.color = 'red'
            } else if (i > 0) {
                contador.style.color = '#4BB543'
            }
        }, 1500)
        anuncio.style.opacity = '0'
        playagain.style.opacity = '0'
        botaoia.style.display = 'none'

    } else if (x === 2) {
        setTimeout(function () {
            imgia.setAttribute('src', './images/icon-scissors.svg')
            anuncio.innerHTML = 'YOU WIN'
            if(vw<700){
                anuncio.style.marginLeft = '-4%'
            }else{
                anuncio.style.marginLeft = '10%'
            }
            botaoia.style.border = '20px solid #eba31d'
            botaoia.style.display = 'block'
            anuncio.style.opacity = '1'
            playagain.style.opacity = '1'
            i = ++i
            contador.innerText = i
            if (i === 0) {
                contador.style.color = 'black'
            } else if (i < 0) {
                contador.style.color = 'red'
            } else if (i > 0) {
                contador.style.color = '#4BB543'
            }
        }, 1500)
        anuncio.style.opacity = '0'
        playagain.style.opacity = '0'
        botaoia.style.display = 'none'

    } else if (x === 1) {
        setTimeout(function () {
            imgia.setAttribute('src', './images/icon-paper.svg')
            anuncio.innerHTML = 'YOU LOSE'
            if(vw<700){
                anuncio.style.marginLeft = '-4%'
            }else{
                anuncio.style.marginLeft = '10%'
            }
            botaoia.style.border = '20px solid #4b68f2'
            botaoia.style.display = 'block'
            anuncio.style.opacity = '1'
            playagain.style.opacity = '1'
            i = --i
            contador.innerText = i
            if (i === 0) {
                contador.style.color = 'black'
            } else if (i < 0) {
                contador.style.color = 'red'
            } else if (i > 0) {
                contador.style.color = '#4BB543'
            }
        }, 1500)
        anuncio.style.opacity = '0'
        playagain.style.opacity = '0'
        botaoia.style.display = 'none'
    }
})
playagain.addEventListener('click', function () {
    gamecontainer.style.visibility = 'hidden'
    gamecontainer.style.opacity = '0'
    gamecontainer.style.transition = 'opacity 0.1s visibility 0.1s'
    setTimeout(function () {
        gamecontainer.style.display = 'none'
        container.style.display = 'block'
    }, 1000)
})
rlsbutton.addEventListener('click', function () {
    containerrules.style.display = 'flex'
    tela.style.display = 'block'
})
closeicon.addEventListener('click', function () {
    containerrules.style.display = 'none'
    tela.style.display = 'none'

})
