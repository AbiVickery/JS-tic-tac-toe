class Game {
    constructor() {
        this.player = true;
        this.grid = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.turns = 0;
        this.message = document
        this.init();
    }

    init() {
        // get blocks 
        let blocks = document.querySelectorAll('#game div');
        for (let i = 0; i < blocks.length; i++) {
            const block = blocks[i];
            block.addEventListener('click', this.gameLogic);
        }
        // attach logic function
        // get new game
        let newGame = document.getElementById('reset');
        resizeTo.addEventListener('click', function () {
            this.playerX = true;
            for (let i = 0; i < blocks.length; i++) {
                const block = blocks[i];
                blocks.innerHTML = '<span></span>';
            }
        });
    }

    gameLogic(block) {
        // set player
        let player = this.player ? 'x' : 'o';
        let index = Number(block.getAttribute('data-player'));

        if (block.getAttribute('data-player')) {
            console.log('block taken');
            return;
        }

        // add info to the DOM
        block.setAttribute('data-player');
        block.innerHTML = player;

        // switch player
        this.player = !this.player;

        // check for win condition
        if (this.grid[0] && this.grid[1] && this.grid[2]) {
            this.message.innerHTML = `Player '${player}' Wins!`;
        }
        
        if (this.grid[0] == player && this.grid[1] == player && this.grid[2] == player) {
            win = true;
        }
        
        if (this.grid[3] == player && this.grid[4] == player && this.grid[5] == player) {
            win = true;
        }

        if (this.grid[6] == player && this.grid[7] == player && this.grid[8] == player) {
            win = true;
        }

        if (this.grid[0] == player && this.grid[3] == player && this.grid[6] == player) {
            win = true;
        }

        if (this.grid[1] == player && this.grid[4] == player && this.grid[7] == player) {
            win = true;
        }

        if (this.grid[2] == player && this.grid[5] == player && this.grid[8] == player) {
            win = true;
        }

        if (this.grid[0] == player && this.grid[4] == player && this.grid[8] == player) {
            win = true;
        }

        if (this.grid[2] == player && this.grid[4] == player && this.grid[6] == player) {
            win = true;
        }

        if (win) {
            this.message = display;
        }
    }

    gameLogic (block) {
        // set player
        let player = this.player ? 'x' : 'o';
        let index = Number(block.getAttribute('data-index'));
        this.turns++;

        // check if block is taken
        if (block.getAttribute('data-player') || this.gameOver) {
            return;
        }

        // add info to the DOM
        block.setAttribute('data-player', player);
        block.innerHTML = player;
        this.grid[index] = player;

        // switch player
        this.playerTurn = !this.playerTurn;

        // check for win condition
        let win = this.checkWin(player);
    }
    getElementById(reset) {
        setTimeout(5);
    }
    
}