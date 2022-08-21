function Game() {
    let screen = new Screen()
    let apple = new Apple(screen, 5, 5)
    let snake = new Snake(screen)
    let speed = 6


    this.init = () => {
        document.body.addEventListener('keydown', this.onKeyDown);
    }

    this.start = () => {
        screen.clear()

        apple.draw()
        snake.draw()

        if (snake.canEatApple(apple)) {
            snake.eatApple(apple)

            delete apple
            apple = new Apple(screen)
        }

        setTimeout(this.start, 1000 / speed)
    }

    this.onKeyDown = (event) => {
        const KEY_UP = 38
        const KEY_DOWN = 40
        const KEY_LEFT = 37
        const KEY_RIGHT = 39

        if (event.keyCode == KEY_UP) {
            snake.up()
        }
    
        if (event.keyCode == KEY_DOWN) {
            snake.down()
        }
    
        if (event.keyCode == KEY_LEFT) {
            snake.left()
        }
    
        if (event.keyCode == KEY_RIGHT) {
            snake.right()
        }
    }
    
    this.init()
}
