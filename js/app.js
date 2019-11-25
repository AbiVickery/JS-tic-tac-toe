class Game {
    constructor() {
        this.player = true;
        this.grid = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.turns = 0;
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

        if (block.getAttribute('data-player')) {
            console.log('block taken');
            return;
        }

        // add info to the DOM
        block.setAttribute('data-player', player);
        block.innerHTML = `<span>${player}</span>`;
    }

    gameLogic () {
        // do stuff
    }
}