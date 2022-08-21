function Screen() {
    const canvas = document.getElementById('game');
    const ctx = canvas.getContext('2d');
    const EMPTY_SCREEN_COLOR = '#333333'


    let tileCount = 20
    let tileSize = canvas.width / tileCount

    this.clear = () => {
        ctx.fillStyle = EMPTY_SCREEN_COLOR;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    this.fillRect = (color, x, y, sizeX, sizeY) => {
        ctx.fillStyle = color
        sizeX = sizeX || 1
        sizeY = sizeY || 1
        ctx.fillRect(x * tileCount, y * tileCount, tileSize * sizeX, tileSize * sizeY)        
    }

    this.getRandomCoord = () => {
        return Math.floor(Math.random() * tileCount)
    }
}