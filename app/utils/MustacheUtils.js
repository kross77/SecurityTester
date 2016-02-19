/// <reference path="../../node_modules/retyped-mustache-tsd-ambient/mustache-0.7.3.d.ts" />
/// <reference path="../retyped/jquery.d.ts" />
var MustacheTemplate = (function () {
    function MustacheTemplate(viewString, model, el) {
        if (el === void 0) { el = null; }
        this.setTemplate(viewString);
        this.model = model;
        this.element = el;
    }
    MustacheTemplate.prototype.invalidate = function () {
        console.log("template: ", this.template, ", model: ", this.model);
        return Mustache.render(this.template, this.model);
    };
    MustacheTemplate.prototype.setTemplate = function (value) {
        this.template = value;
    };
    MustacheTemplate.prototype.load = function (filePath) {
        var setting = {};
        var model = this.model;
        var el = this.element;
        var setTemplate = this.setTemplate;
        setting.success = function (data) {
            setTemplate(data);
            el.innerHTML = Mustache.render(data, model);
        };
        $.ajax(filePath, setting);
    };
    return MustacheTemplate;
})();
var MustacheUtils = (function () {
    function MustacheUtils() {
    }
    MustacheUtils.create = function (viewString, model) {
        if (model === void 0) { model = null; }
        var tmpl = new MustacheTemplate(viewString, model);
        return tmpl.invalidate();
    };
    MustacheUtils.createFromFile = function (filePath, model, element) {
        var tmpl = new MustacheTemplate("", model, element);
        tmpl.load(filePath);
        return tmpl;
    };
    return MustacheUtils;
})();
//# sourceMappingURL=MustacheUtils.js.map