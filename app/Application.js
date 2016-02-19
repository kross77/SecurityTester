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
$(tmpl.element).click(function (e) {
    var radio = e.target;
    if (radio.name == "answer") {
        q.selectedAnswer = radio.value;
        e.target
            < HTMLInputElement > $(tmpl.element).find(".submit");
    }
}).attr();
;
//# sourceMappingURL=Application.js.map