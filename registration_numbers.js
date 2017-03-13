//The DOM - document objec model -selecting HTML elements.
var addRegNum = document.querySelector('.txt')
var Btn = document.querySelector('.tx')
//add eventlistener to add button
Btn.addEventListener('click', () => {
    if (addRegNum.value.length > 0) { //to make sure nothing is added to list when there is nothing on textbox.
        var ul = document.getElementsByTagName('ul')[0];
        var li = document.createElement('li');
        li.textContent = addRegNum.value.substr(0, 2).toUpperCase() + ' ' + addRegNum.value.substr(2).toUpperCase();
        ul.appendChild(li);
    }

    addRegNum.value = ''; //remove text from input box.

});
