let player = {
    x: parseInt(Math.random() * (10 - 0) + 0),
    y: parseInt(Math.random() * (10 - 0) + 0),

    changePosition(nextPoint){
        this.x = nextPoint.x;
        this.y = nextPoint.y;
    }
}