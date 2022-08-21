function Snake (screen) {
    let color = '#358873'    
    let x = 10
    let y = 10
    let size = 1

    let xVelocity = 0
    let yVelocity = 0

    let posX = x
    let posY = y
    let sizeX = 1
    let sizeY = 1

    this.draw = () => {
        x += xVelocity
        y += yVelocity

        // up
        if (xVelocity == 0 && yVelocity == -1) {
            posX = x;
            posY = y;
            sizeX = 1;
            sizeY = size;
        }

        // down
        if (xVelocity == 0 && yVelocity == 1) {
            posX = x;
            posY = y - size;
            sizeX = 1;
            sizeY = size;
        }

        // left
        if (xVelocity == -1 && yVelocity == 0) {
            posX = x;
            posY = y;
            sizeX = size;
            sizeY = 1;
        }

        // right
        if (xVelocity == 1 && yVelocity == 0) {
            posX = x - size;
            posY = y;
            sizeX = size;
            sizeY = 1;
        }

        screen.fillRect(color, posX, posY, sizeX, sizeY)
    }

    this.up = () => {
        if (yVelocity != 1) {            
            this.changeDirection(0, -1)
        }        
    }

    this.down = () => {
        if (yVelocity != -1) {
            this.changeDirection(0, 1)
        }
    }

    this.left = () => {
        if (xVelocity != 1)
            this.changeDirection(-1, 0)
    }

    this.right = () => {
        if (xVelocity != -1)
            this.changeDirection(1, 0)
    }

    this.changeDirection = (vectorX, vectorY) => {
        xVelocity = vectorX
        yVelocity = vectorY
    }

    this.canEatApple = (apple) => {
        return (apple.getX() === x && apple.getY() === y)
    }

    this.eatApple = (apple) => {
        size += 1
    }
}