let mover = {
    makeStep(e){
        let newPosition = this.getNewPosition(e);
        if (this.arePositionsEqual(player, newPosition)){ // если позивиции совпадают, то ничего не происходит
            return;
        }
        if (!this.canMakeStep(newPosition)){
            return;
        }
        renderer.clearUserPosition();
        player.changePosition(newPosition);
        renderer.renderUserPosition(newPosition);
    },

    arePositionsEqual(curPos, newPos){
       return curPos.x == newPos.x && curPos.y == newPos.y;
    },

    canMakeStep(newPos){ 
        // проверяет, существует ли ячейка с такими координатами
        return renderer.getSquare(newPos) !== null;
    },

    getNewPosition(e){
        switch(e.key){
            case 'ArrowUp':
                return {
                    x: player.x, 
                    y: player.y-1
                };

            case 'ArrowDown':
                return {
                    x: player.x, 
                    y: player.y+1
                };

            case 'ArrowLeft':
                return {
                    x: player.x-1, 
                    y: player.y
                };

            case 'ArrowRight':
                return {
                    x: player.x+1, 
                    y: player.y
                };

            default:
                return {
                    x: player.x, 
                    y: player.y
                };
        }
    }
};