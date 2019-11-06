document.querySelector('#os-button').addEventListener('mouseover', invertColorWhite)
document.querySelector('#os-button').addEventListener('mouseout', invertColorBlack)
document.addEventListener('scroll', function(){document.querySelector('#nav').style.backgroundColor = 'white'})
document.querySelector('#s1l-bottom').addEventListener('mouseout', invertColorWhite)
document.querySelector('#s1l-bottom').addEventListener('mouseover', invertColorBlack)
document.querySelector('#s2l-bottom').addEventListener('mouseout', invertColorWhite)
document.querySelector('#s2l-bottom').addEventListener('mouseover', invertColorBlack)
document.querySelector('#s2r-bottom').addEventListener('mouseout', invertColorWhite)
document.querySelector('#s2r-bottom').addEventListener('mouseover', invertColorBlack)

function invertColorBlack(){event.target.style.backgroundColor = 'black'; event.target.style.color = 'white'}
function invertColorWhite(){event.target.style.backgroundColor = 'white'; event.target.style.color = 'black'}
