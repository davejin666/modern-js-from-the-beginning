const form = document.querySelector('form');
const textArea = document.querySelector('form textarea');

const awesomeEvent = new CustomEvent('awesome', {
    bubbles: true,
    detail: {
        printText: () => textArea.value,
    },
});

form.addEventListener('awesome', (e) => {
    console.log(e.detail.printText());
});
textArea.addEventListener('input', (e) => e.target.dispatchEvent(awesomeEvent));

/* Simulating a mouse click event */
const mouseClick = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true,
});

const checkBox = document.getElementById('checkbox');
const is_cancelled = !checkBox.dispatchEvent(mouseClick);

if (is_cancelled) {
    // The event is cancellable and at least one event handler called preventDefault.
    alert('Cancelled');
} else {
    alert('Not cancelled.');
}

/* Event propagation */
const btn = document.querySelector('form button');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
    console.log('Event listener 1 called.');
});
btn.addEventListener('click', (e) => {
    console.log('Event listener 2 called.');
});

document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    console.log('Right clicked!');
});
