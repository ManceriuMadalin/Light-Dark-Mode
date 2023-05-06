function changeMode(bgColor, fontColor, size, leftM, lg) {
     document.querySelector('body').style.backgroundColor = bgColor
     document.querySelector('#lightMode').style.color = fontColor
     document.querySelector('#darkMode').style.color = fontColor
     document.querySelector('#second').style.height = size
     document.querySelector('#second').style.width = size
     document.querySelector('#second').style.backgroundColor = bgColor
     document.querySelector('#main').style.backgroundImage = lg
     document.querySelector('#pill').style.left = leftM
     document.querySelector('#pill').style.backgroundImage = lg
}