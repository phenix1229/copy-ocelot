document.querySelector('#os-button').addEventListener('mouseover', function(){event.target.style.backgroundColor = 'white'; event.target.style.color = 'black'})
document.querySelector('#os-button').addEventListener('mouseout', function(){event.target.style.backgroundColor = 'black'; event.target.style.color = 'white'})
document.addEventListener('scroll', function(){if(document.scrolltop = 0){document.querySelector('#nav').style.backgroundColor = 'none'} else {document.querySelector('#nav').style.backgroundColor = 'white'}})




