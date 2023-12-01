var arrayMaterias = [];
var inputTarea = $('#inputTarea');
var selectMateria = $('#selectMateria');

var uxHTML = $('#ux');
var programacionHTML = $('#programacion');
var vjHTML = $('#vj');
var musicaHTML = $('#musica');
var animacionHTML = $('#animacion');
var afterHTML = $('#after');

function agregar(){
    var tarea = inputTarea.val();
    var materia = selectMateria.val();

    var tareaExistente = arrayMaterias.find(function(elemento) {
        return elemento.tarea === tarea && elemento.materia === materia;
    });

    if (tarea !== '' && !tareaExistente){
        arrayMaterias.push( { tarea: tarea, materia: materia } );
}
    inputTarea.val('');

    mostrarListas();

    localStorage.setItem('materias',  JSON.stringify(arrayMaterias));
}

function mostrarListas(){
    uxHTML.empty();
    programacionHTML.empty();
    vjHTML.empty();
    musicaHTML.empty();
    animacionHTML.empty();
    afterHTML.empty();

    for(var i = 0; i < arrayMaterias.length; i++){

        var liMateria = $('<li></li>')
        .addClass('list-group-item tarea') 
        .attr('data-index', i) 
        .text(arrayMaterias[i].tarea); 


        if( arrayMaterias[i].materia === 'ux' ){
            uxHTML.append( liMateria );
        } else if( arrayMaterias[i].materia === 'programacion' ){
            programacionHTML.append( liMateria );
        } else if( arrayMaterias[i].materia === 'vj' ){
            vjHTML.append( liMateria );
        } else if( arrayMaterias[i].materia === 'musica' ){
            musicaHTML.append( liMateria );
        } else if( arrayMaterias[i].materia === 'animacion' ){
            animacionHTML.append( liMateria );
        } else if( arrayMaterias[i].materia === 'after' ){
            afterHTML.append( liMateria );
        }
    }

  $('.tarea').on('click', function () {
    var index = $(this).attr('data-index');
    borrarTarea(index);
  });
}

function leer(){
    var array = JSON.parse( localStorage.getItem('materias')) ;
    console.log(array);

    if( array ){
        arrayMaterias = array;
    } else {
        localStorage.removeItem('materias');
    }
    mostrarListas();
}

function borrarTarea(pos){
    console.log(pos);
    arrayMaterias.splice(pos, 1);
    localStorage.setItem('materias', JSON.stringify(arrayMaterias));
    mostrarListas();
}

leer();