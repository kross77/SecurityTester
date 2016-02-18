/// <reference path="model/Question.ts" />
/// <reference path="utils/MustacheUtils.ts" />q
var el: HTMLElement = <HTMLElement>$("#question")[0];
var answers: string[] = [
    "Anton",
    "Nikolay",
    "Andrey",
    "Yan",
    "Dima",
    "Alexey",
    "Ales"
]
var q:Question = new Question("What is you name?", answers);
var tmpl: MustacheTemplate = MustacheUtils.createFromFile("app/view/QuestionView.mustache", q, el);

