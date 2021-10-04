'use strict'
/*  а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты
типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.*/

class Post {
    constructor(author, text, date) {
        this.author = author,
        this.text = text, 
        this.date= date
    }

    edit(){
        let enditText = prompt('Введите любой текст')
        this.text = enditText;
    }
}

const post1 = new Post('Петя', '', '01.01.01');
post1.edit();

/* б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с
помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться
свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству
highlighted значение true.  */

class AttachedPost extends Post {
    constructor(author, text, date, highlighted) {
        super(author, text, date);
        this.highlighted = false
    }

    makeTextHighlighted(){
        this.highlighted = true;
    }
}

const attachedPost1 = new AttachedPost('Катя', '', '02.02.02');
attachedPost1.edit();
attachedPost1.makeTextHighlighted();