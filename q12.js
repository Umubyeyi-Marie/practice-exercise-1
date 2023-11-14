function displayPattern(rows) {
    for (let i = 0; i < rows; i++) {
        let row = '';
        for (let j = 0; j < rows; j++) {
            row += (j < rows - i) ? '1 ' : '0 ';
        }
        console.log(row);
    }
}


displayPattern(4);