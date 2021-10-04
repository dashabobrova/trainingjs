'use strict'

let game = {
    score: 0,
    newQuestionIndex: 0,

    run(){
        if(!this.isQuestionExist()){
            console.log(`Игра окончена. Вопросов больше нет. Ваш счет: ${this.score}`);
            return;
        }

        let result = leader.askQuestion(questions[this.newQuestionIndex]);

        if(result){
            this.score++;
        }
        
        this.newQuestionIndex++;
        this.run();
    },

    isQuestionExist(){
        return questions[this.newQuestionIndex] !== undefined;
    }
}

console.log('game.run(), чтобы сыграть');