for (const ele of document.querySelectorAll('div')) {
    ele.addEventListener(
        'click',
        function (e) {
            console.log(`Click event handled by ${this.id}.`);
        },
        {
            capture: false,
        }
    );
}

const btn = document.querySelector('button');
for (let i = 1; i <= 3; i++) {
    btn.addEventListener(
        'click',
        (e) => {
            // if (i === 2) {
            //     e.stopImmediatePropagation();
            // }

            console.log(`Click event on button handled by handlers ${i}`);
        },
        {
            capture: false,
        }
    );
}
