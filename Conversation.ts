interface ReplyObject{
    id: string,
    question: string,
    answerOptions?: [
        {
        answer: string,
        nextState: string
        }
    ]
};

export default class Conversation{
    
    troubleshootConveration! : any;
    currentState!  : ReplyObject;

    constructor(troubleshootConveration : any){
        this.troubleshootConveration = troubleshootConveration
    }

    changeState(state : string) : string{

        Object.keys(this.troubleshootConveration).map(key => {
            if (this.troubleshootConveration[`${key}`].id === state){
                this.currentState = this.troubleshootConveration[`${key}`];
            }
        });

        return this.currentState.id;
    }

    reply(userAnswer : string) : string{

            if (userAnswer === ''){
                return this.changeState("start");
            } 

            if (this.currentState.answerOptions !== undefined){
                
                this.currentState.answerOptions.map(option => {

                    if (userAnswer == option.answer){
                        this.changeState(option.nextState);
                    }
                });    

            }
            else {
                this.changeState("start");
            }

            return this.currentState.id;

        } 
}



