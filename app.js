const inputTask = document.querySelector('input');
const botonTask = document.querySelector('button');
const listTask = document.querySelector('ul');
const emptyTask =document.querySelector('.empty');
const body = document.querySelector('body');



//crear tarea
botonTask.addEventListener( 'click', (element) =>{
        const textInput = inputTask.value;
        const li = document.createElement('li');
        li.classList.add('li-container');
        const p = document.createElement('p');
        p.textContent = textInput;
        //si el texto del input no está vacío
        if (textInput !== '') {
                li.appendChild(p);
        //añadir boton creado con arrow
        li.appendChild(addDeleteButton());
        listTask.appendChild(li);

        //borrar input cada vez que agregamos
        inputTask.value = '';
        //borrar "no hay tareas pendientes"
        emptyTask.style.display = 'none';
        }


})

const addDeleteButton = () => {
    //creamos boton
    const deleteButton = document.createElement('button')
        deleteButton.textContent = 'delete';
        deleteButton.className = 'button-delete';

        //hacer event listener
        deleteButton.addEventListener( 'click', (element) => {
            const removeDiv = element.target.parentElement;
            listTask.removeChild(removeDiv);
            
            //cogemos todos los li
            
            //si no hay ningún li ...
            if (removeLis.length === 0) {
                emptyTask.style.display = 'block';
            }
        });
        return deleteButton;
}

const buttonDltAll = document.querySelector('#removeAll');

//aqui no hace falta hacer una funcion
    buttonDltAll.addEventListener('click', ()=>{
        //se crea dentro si no no lo
        const removeLis = document.querySelectorAll('.li-container');
        console.log(removeLis)
        removeLis.forEach((element) => {
            element.remove();
        });
        emptyTask.style.display = 'block';
    })
    