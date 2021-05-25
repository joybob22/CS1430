$('#submitButton').on('click', function () {
    let userInput = $('#userInput').val();
    userInput = Number(userInput);
    if (isNaN(userInput)) {
        $('#errorContainer').append(`
            <p class="error">Must enter a number</p>
        `);
        return;
    }

    if (userInput > 8) {
        $('#errorContainer').append(`
            <p class="error">Cannot exceed 8 numbers</p>
        `);
        return;
    }

    let lotteryNumbers = [];
    for (let i = 0; i < userInput; i++) {
        lotteryNumbers.push(Math.floor(Math.random() * 99) + 1);
    }

    $('#form').toggleClass('noDisplay');
    $('#result').toggleClass('noDisplay');

    $('#result').append(`
        <p>${lotteryNumbers.join("-")}</p>
    `)

})