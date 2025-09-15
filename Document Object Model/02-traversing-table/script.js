function generateTable() {
    // Creates <table> and <tbody> elements
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    const numRows = 2;
    const numCols = 2;

    // Creates cells
    for (let rowIdx = 0; rowIdx < numRows; rowIdx++) {
        // Creates <tr> element (a table row)
        const tr = document.createElement('tr');

        for (let colIdx = 0; colIdx < numCols; colIdx++) {
            // Creates <td> elements (a table data cell)
            const td = document.createElement('td');
            const cellText = document.createTextNode(
                `Cell in row ${rowIdx}, column ${colIdx}.`
            );

            td.appendChild(cellText);
            tr.appendChild(td);
        }

        // Add the row to the end of the table body
        tbody.appendChild(tr);
    }

    // Puts a <caption> in the <table>
    const caption = document.createElement('caption');
    const captionText = document.createTextNode('Generated Table');
    caption.appendChild(captionText);
    table.appendChild(caption);

    // Puts the <tbody> in the <table>
    table.appendChild(tbody);

    // Appends the <table> to <body>
    document.body.appendChild(table);

    table.setAttribute('border', '2');
}

// prettier-ignore
document
    .querySelector('button')
    .addEventListener('click', generateTable);

setInterval(() => {
    const table = document.getElementsByTagName('table')[0];
    console.log(table.childNodes);
}, 6000);
