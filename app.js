const inputTask = document.querySelector('input');
const botonTask = document.querySelector('button');
const listTask = document.querySelector('ul');
const emptyTask =document.querySelector('.empty');

//crear tarea
botonTask.addEventListener( 'click', (element) =>{
        const textInput = inputTask.value;
        const li = document.createElement('li');
        li.classList.add('li-container');
        const p = document.createElement('p');
        p.textContent = textInput;
        
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
            const removeDivs = document.querySelectorAll('li');
            //si no hay ningún li ...
            if (removeDivs.length === 0) {
                emptyTask.style.display = 'block';
            }
        });
        return deleteButton;
}