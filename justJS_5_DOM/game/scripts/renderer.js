let renderer = {

    renderBoard(){
        let result = this.generateBoard();
        document.body.insertAdjacentHTML('afterbegin', result);
        this.renderUserPosition(player);
    },

    generateBoard(){
        let board = '';

        for (let y=0; y < config.rowsCount; y++){
            board += '<tr>';
                for (let x=0; x < config.colsCount; x++){
                    board += `<td data-x="${x}" data-y="${y}"></td>`;
                }
            board += '</tr>';
        }
        return `<table><tbody>${board}</tbody></table>`;
    },

    getSquare(position){
        // возвращает ячейку, атрибуты которой равны местоположению игрока; 
        // при вызове renderUserPosition передаем player, у которого есть координаты, которые изменяются при нажатии на кнопки
        return document.querySelector(`[data-x="${position.x}"][data-y="${position.y}"]`); 
    },

    renderUserPosition(position){
        let square = this.getSquare(position);
        square.classList.add('user');
    },

    clearUserPosition(){
        document.querySelector('.user').classList.remove('user');
    }
};