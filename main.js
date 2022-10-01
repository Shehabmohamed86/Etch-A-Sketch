const containerEL = document.querySelector('.container')

function createDivs(nums){
  for(let i = 0; i < nums; i++){
    const div = document.createElement('div');
    div.classList.add('divs')
    containerEL.appendChild(div)
  }

}
createDivs(256)