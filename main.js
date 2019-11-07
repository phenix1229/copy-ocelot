window.onscroll = function(){changeNav()}
document.querySelector('#os-button').addEventListener('mouseover', invertColorWhite)
document.querySelector('#os-button').addEventListener('mouseout', invertColorBlack)
document.querySelector('#s1l-bottom').addEventListener('mouseout', invertColorWhite)
document.querySelector('#s1l-bottom').addEventListener('mouseover', invertColorBlack)
document.querySelector('#s2l-bottom').addEventListener('mouseout', invertColorWhite)
document.querySelector('#s2l-bottom').addEventListener('mouseover', invertColorBlack)
document.querySelector('#s2r-bottom').addEventListener('mouseout', invertColorWhite)
document.querySelector('#s2r-bottom').addEventListener('mouseover', invertColorBlack)
document.querySelector('#classic-btn').addEventListener('mouseout', invertColorWhite)
document.querySelector('#classic-btn').addEventListener('mouseover', invertColorBlack)


function changeNav(){
    if(document.body.scrollTop >20  || document.documentElement.scrollTop >20){
        document.querySelector('#nav').style.backgroundColor = 'white'
    } else {
        document.querySelector('#nav').style.backgroundColor = ''
    }
}

setTimeout(function(){
	document.querySelector('#quote-1').style.transition = "transform 0.3s ease"	
	document.querySelector('#quote-1').style.transform = "translateX(-200%)"
}, 3000)

setTimeout(function(){
	document.querySelector('#quote-2').style.display = "unset"
	document.querySelector('#quote-2').style.transition = "transform 0.3s ease"	
	document.querySelector('#quote-2').style.transform = "translateX(-350%)"
}, 3250)

setTimeout(function(){
	document.querySelector('#quote-2').style.transform = "translateX(-500%)"
}, 6000)

setTimeout(function(){
	document.querySelector('#quote-3').style.display = "unset"
	document.querySelector('#quote-3').style.transition = "transform 0.3s ease"	
	document.querySelector('#quote-3').style.transform = "translateX(-700%)"
}, 6000)

function invertColorBlack(){event.target.style.backgroundColor = 'black'; event.target.style.color = 'white'}
function invertColorWhite(){event.target.style.backgroundColor = 'white'; event.target.style.color = 'black'}
