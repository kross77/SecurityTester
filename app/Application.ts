/// <reference path="model/Question.ts" />
/// <reference path="utils/VueUtils.ts" />
/// <reference path="../typings/tsd.d.ts" />
var el: HTMLElement = <HTMLElement>$("#question")[0];
var answers: string[] = [
    "Anton",
    "Nikolay",
    "Andrey",
    "Yan",
    "Dima",
    "Alexey",
    "Ales"
];
var q:Question = new Question("What is you name?", answers);
var tmpl: VueTemplate = VueUtils.createFromFile("/app/view/QuestionView.vue", q, el);







