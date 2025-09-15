/*
<--beforebegin-->
<h1 id="insertion-target">
    <--afterbegin-->
    Insertion Target
    <--beforeend-->
</h1>
<--afterend-->
*/

const insertTarget = document.querySelector('#insertion-target');
const eleToInsert = document.createElement('h2');
eleToInsert.appendChild(document.createTextNode('Inserted'));

// insertTarget.insertAdjacentElement('beforebegin', eleToInsert);
// insertTarget.insertAdjacentElement('afterbegin', eleToInsert);
// insertTarget.insertAdjacentElement('beforeend', eleToInsert);
insertTarget.insertAdjacentElement('afterend', eleToInsert);

// insertAdjacentText and insertAdjacentHTML are also available.

const parentEle = document.querySelector('ul');
const secondLi = document.querySelector('ul li:nth-child(2)');
const fifthLi = document.querySelector('ul li:nth-child(5)');

// Insert secondLi before fifthLi.
parentEle.insertBefore(secondLi, fifthLi);

// There's no insertAfter method, but we can create one:
function insertAfter(eleToInsert, targetEle) {
    targetEle.insertAdjacentElement('afterend', eleToInsert);
}

insertAfter(secondLi, fifthLi);
