const parentEle = document.querySelector('ul');
const secondLi = document.querySelector('ul li:nth-child(2)');
const fifthLi = parentEle.querySelector('li:nth-child(5)');

console.log(parentEle.outerHTML);
console.log(parentEle.innerHTML);

// fifthLi.replaceWith(secondLi);

// fifthLi.outerHTML = secondLi.outerHTML;

// parentEle.replaceChild(secondLi, fifthLi);
