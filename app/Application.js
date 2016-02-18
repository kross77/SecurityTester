/// <reference path="model/Question.ts" />
/// <reference path="utils/MustacheUtils.ts" />q
var el = $("#question")[0];
var answers = [
    "Anton",
    "Nikolay",
    "Andrey",
    "Yan",
    "Dima",
    "Alexey",
    "Ales"
];
var q = new Question("What is you name?", answers);
var tmpl = MustacheUtils.createFromFile("app/view/QuestionView.mustache", q, el);
//# sourceMappingURL=Application.js.map