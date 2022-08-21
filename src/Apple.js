function Apple(screen, posX, posY) {
    let color = '#ff1206'
    let x = typeof posX != 'undefined' ? posX : screen.getRandomCoord()
    let y = typeof posY != 'undefined' ? posY : screen.getRandomCoord()

    this.draw = () => {
        screen.fillRect(color, x, y)
    }

    this.getX = () => x
    this.getY = () => y
}