const selecionaCor= document.getElementById("color-palette");
let corDoMomento="black";
function mudaCor(){
    selecionaCor.addEventListener('click',function(event){
        let corSelecionada=document.querySelector(".selected");
        corSelecionada.classList.remove("selected");
        event.target.classList.add("selected");
        corDoMomento=event.target.id;
    }
    )
   
} 
mudaCor();


function colorPixel(){
   let pixel = document.querySelectorAll('.pixel');
  for(let index= 0; index < pixel.length; index += 1){
   pixel[index].addEventListener('click', function(){
   pixel[index].style.backgroundColor = corDoMomento; 
   });
   }
   }
   colorPixel(); 

   function clear() {
    const pixel = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = 'white';
    }
  }
  
  const clearPixel = document.getElementById('clear-board');
  clearPixel.addEventListener('click', clear);