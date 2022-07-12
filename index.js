const imagen = document.querySelector('.imagen');

imagen.classList.add('card', 'col-2');    
  
const imgAleatoria=async()=>{
    
    const respuesta = await fetch(`https://randomfox.ca/images/${generarEnteroAleatorio(0,120)}.jpg`)
    console.log(respuesta.url);
 
     imagen.innerHTML =`
    
    <div class="image" style="width: 18rem">
    
    <img src="${respuesta.url}" class="card-img-top" alt="imagenes">
    
    </div>`

}

imgAleatoria();

function generarEnteroAleatorio(a,b) {
    
    return Math.floor(Math.random()* (b-a+1)+a);

}




