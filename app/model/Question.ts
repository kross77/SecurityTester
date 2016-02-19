class Question{
    question:string;
    answers:string[];
    selectedAnswer:string;
    
    constructor(question:string, answers:string[]) {
        this.question = question;
        this.answers = answers;
    }
}