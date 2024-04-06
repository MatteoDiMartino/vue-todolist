let addBtn = document.querySelector('#btn');
console.log(addBtn)

addBtn.addEventListener('click', function() {
    let userInput = document.querySelector('#boxTodo').value;
    console.log(userInput);

    let elementInAcard = document.querySelector('#mainBox')
    console.log(elementInAcard);

    let newTodo = document.createElement('div');
    console.log(newTodo);

    newTodo.classList.add('mx-5');
    newTodo.classList.add('py-3');
    newTodo.classList.add('rounded-0');
    newTodo.classList.add('ms-bd-card');

    let contentNewtodo = document.createElement('div');
    contentNewtodo.classList.add('d-flex');
    contentNewtodo.classList.add('justify-content-between');
    contentNewtodo.classList.add('align-items-center');

    newTodo.appendChild(contentNewtodo);

    let textTask = document.createElement('span');
    textTask.append(userInput);

    let awesomeX = document.createElement('i');

    awesomeX.classList.add('fa-solid');
    awesomeX.classList.add('fa-x');
    awesomeX.classList.add('ps-4');
    awesomeX.classList.add('fs-5');
    awesomeX.classList.add('me-3');
    awesomeX.classList.add('ms-pointer');

    contentNewtodo.appendChild(textTask);
    contentNewtodo.appendChild(awesomeX);

    elementInAcard.appendChild(newTodo);

    awesomeX.addEventListener('click', function() {
        newTodo.remove('div');
    })
})