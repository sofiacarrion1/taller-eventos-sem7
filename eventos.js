 
document.getElementById('container').onclick = function(){
    alert('Hola! Soy el div');
}
// Nueva solucion para evitar que no se disparen ambos eventos a la vez:
document.addEventListener('DOMContentLoaded' , function() {
    let div = document.getElementById(`container`);
    let button = document.getElementById(`btn`);

    button.addEventListener(`click`, function(event){
        alert(`Hola!`)
        event.stopPropagation();
div.addEventListener('click', function (){
    alert ('Hola! soy el div');
});

    });
});