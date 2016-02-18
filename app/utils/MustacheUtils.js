/// <reference path="../../node_modules/retyped-mustache-tsd-ambient/mustache-0.7.3.d.ts" />
/// <reference path="../retyped/jquery.d.ts" />
var MustacheTemplate = (function () {
    function MustacheTemplate(viewString, model) {
        this.template = viewString;
        this.model = model;
    }
    MustacheTemplate.prototype.render = function () {
        return Mustache.render(this.template, this.model);
    };
    MustacheTemplate.prototype.load = function (filePath, element) {
        var setting = {};
        var model = this.model;
        setting.success = function (data) {
            element.innerHTML = Mustache.render(data, model);
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
        return tmpl.render();
    };
    MustacheUtils.createFromFile = function (filePath, model, element) {
        var tmpl = new MustacheTemplate("", model);
        tmpl.load(filePath, element);
        return tmpl;
    };
    return MustacheUtils;
})();
//# sourceMappingURL=MustacheUtils.js.map