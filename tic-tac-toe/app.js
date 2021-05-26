let player1 = '';
let player2 = '';
let whosTurn = '';
let gameboardElement = $('#gameboard');
let turnContainer = $('#turnContainer');
let gameboard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
];
let gameEnd = false;

function createGameboard() {
    for (let i = 0; i < gameboard.length; i++) {
        gameboardElement.append(`
            <div id="row${i}" class="gameRow"></div>
        `);

        for (let j = 0; j < gameboard[i].length; j++) {
            $(`#row${i}`).append(`
                <div class="box" data-row="${i}" data-col="${j}"></div>
            `);
        }
    }
    if (Math.random() < 0.5) {
        whosTurn = 'player1';
        turnContainer.text(`${player1}'s turn`);
    } else {
        whosTurn = 'player2';
        turnContainer.text(`${player2}'s turn`);
    }
}

function determineEndGame() {
    // Test if there is a winning condition
    let theWinner = '';
    let winningCoords = [];
    let players = ['p1', 'p2'];

    for (let i = 0; i < players.length; i++) {
        //test horizontal row wins
        for (let j = 0; j < gameboard.length; j++) {
            if (gameboard[j][0] === players[i] && gameboard[j][1] === players[i] && gameboard[j][2] === players[i]) {
                theWinner = players[i];
                winningCoords = [{ row: j, col: 0 }, { row: j, col: 1 }, { row: j, col: 2 }];
                gameEnd = true;
                return { theWinner, winningCoords };
            }
        }

        //test vertical column wins
        for (let j = 0; j < gameboard.length; j++) {
            if (gameboard[0][j] === players[i] && gameboard[1][j] === players[i] && gameboard[2][j] === players[i]) {
                theWinner = players[i];
                winningCoords = [{ row: 0, col: j }, { row: 1, col: j }, { row: 2, col: j }];
                gameEnd = true;
                return { theWinner, winningCoords };
            }
        }

        //test the two diagnal wins
        if ((gameboard[0][0] === players[i] && gameboard[1][1] === players[i] && gameboard[2][2] === players[i])) {
            theWinner = players[i];
            winningCoords = [{ row: 0, col: 0 }, { row: 1, col: 1 }, { row: 2, col: 2 }];
            gameEnd = true;
            return { theWinner, winningCoords };
        }

        if ((gameboard[0][2] === players[i] && gameboard[1][1] === players[i] && gameboard[2][0] === players[i])) {
            theWinner = players[i];
            winningCoords = [{ row: 0, col: 2 }, { row: 1, col: 1 }, { row: 2, col: 0 }];
            gameEnd = true;
            return { theWinner, winningCoords };
        }

    }
    //If there is no winning condition but the board is full we have a tie.
    let tie = true;
    for (let i = 0; i < gameboard.length; i++) {
        for (let j = 0; j < gameboard[i].length; j++) {
            if (gameboard[i][j] === '') {
                tie = false;
            }
        }
    }

    if (tie) {
        gameEnd = true;
        return { theWinner: 'tie' }
    }

    //The game has no win or tie conditions. Return theWinner as an empty string to denote the game to continue
    return { theWinner };

}

$('#submitButton').on('click', () => {
    let p1 = $('#player1').val();
    let p2 = $('#player2').val();


    if (p1 === '' || p2 === '') {
        return;
    }

    player1 = p1;
    player2 = p2;

    $('#form').toggleClass('noDisplay');
    $('#gameboardContainer').toggleClass('noDisplay');

    createGameboard();
});

$('#pageContainer').on('click', '.box', function () {
    let row = $(this).data('row');
    let col = $(this).data('col');

    if (gameboard[row][col] !== '' || gameEnd) {
        return;
    }

    if (whosTurn === 'player1') {
        $(this).css('background-image', 'url(./Pizza-Slice-Clipart-Png.png)');
        gameboard[row][col] = 'p1';
        let endGame = determineEndGame();
        if (endGame.theWinner !== '') {
            if (endGame.theWinner === 'tie') {
                turnContainer.text(`It's a tie!`);
                $('#gameboardContainer').append(`<div id="resetGame">Reset</div>`);
                return;
            }
            for (let i = 0; i < endGame.winningCoords.length; i++) {
                $(`.box[data-row=${endGame.winningCoords[i].row}][data-col=${endGame.winningCoords[i].col}]`).css('background-color', '#8e0000');
            }
            turnContainer.text(`${player1} Wins!`);
            $('#gameboardContainer').append(`<div id="resetGame">Reset</div>`);
        } else {
            whosTurn = 'player2';
            turnContainer.text(`${player2}'s turn`);
        }


    } else {
        $(this).css('background-image', 'url(./pizza.png)');
        gameboard[row][col] = 'p2';
        let endGame = determineEndGame();
        if (endGame.theWinner !== '') {
            if (endGame.theWinner === 'tie') {
                turnContainer.text(`It's a tie!`);
                $('#gameboardContainer').append(`<div id="resetGame">Reset</div>`);
                return;
            }
            for (let i = 0; i < endGame.winningCoords.length; i++) {
                $(`.box[data-row=${endGame.winningCoords[i].row}][data-col=${endGame.winningCoords[i].col}]`).css('background-color', '#8e0000');
            }
            turnContainer.text(`${player2} Wins!`);
            $('#gameboardContainer').append(`<div id="resetGame">Reset</div>`);
        } else {
            whosTurn = 'player1';
            turnContainer.text(`${player1}'s turn`);
        }
    }
});

$(`#pageContainer`).on('click', '#resetGame', function () {
    $(this).remove();
    gameboard = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];
    gameEnd = false;

    $('.box').css('background-image', 'none');
    $('.box').css('background-color', '#c62828');

    if (Math.random() < 0.5) {
        whosTurn = 'player1';
        turnContainer.text(`${player1}'s turn`);
    } else {
        whosTurn = 'player2';
        turnContainer.text(`${player2}'s turn`);
    }

})