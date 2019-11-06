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
	
	//make the div slides instead of jumping to the destination
	document.querySelector('#quote-1').style.transition = "transform 0.3s ease"	
	
	//will slide 30px to the right, can be negative (-100px), percentage (100%)
	document.querySelector('#quote-1').style.transform = "translateX(-200%)"
 
}, 3000)



function invertColorBlack(){event.target.style.backgroundColor = 'black'; event.target.style.color = 'white'}
function invertColorWhite(){event.target.style.backgroundColor = 'white'; event.target.style.color = 'black'}
