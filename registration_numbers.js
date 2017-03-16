//The DOM - document objec model -selecting HTML elements.
var addRegNum = document.querySelector('.txt');
var Btn = document.querySelector('.tx');
var checkTown = document.querySelector('.filter')
//add eventlistener to add button
Btn.addEventListener('click', () => {
    if (addRegNum.value.length > 0) { //to make sure nothing is added to list when there is nothing on textbox.
        var ul = document.getElementsByTagName('ul')[0];
        var li = document.createElement('li');
        li.innerHTML = addRegNum.value.substr(0, 2).toUpperCase() + ' ' + addRegNum.value.substr(2).toUpperCase();
        ul.appendChild(li);
        console.log(li);
    }

    addRegNum.value = ''; //remove text from input box.

});
//filter function.
function filter(town) {
    var ul = document.getElementsByTagName('ul')[0];
    for (var i = 0; i < ul.children.length; i++) {
        if (!ul.children[i].innerHTML.startsWith(town)) {
            ul.children[i].style.display = "none";
        } else if (!ul.children[i].innerHTML.startsWith("")){
            ul.children[i].style.display = "none";
        }else if(ul.children[i].innerHTML.startsWith(town) && ul.children[i].innerHTML.startsWith("")){
          ul.children[i].style.display = "block";
        }
    }
}
//filterLocation function
checkTown.addEventListener('click', () => {
    var selectedRadBtn = document.querySelector("input[name='num']:checked");
    var town = selectedRadBtn.value;
    filter(town);
});
