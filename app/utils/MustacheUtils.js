/// <reference path="../../node_modules/retyped-mustache-tsd-ambient/mustache-0.7.3.d.ts" />
var MustacheTemplate = (function () {
    function MustacheTemplate(viewString, model) {
        this.template = viewString;
        this.model = model;
    }
    MustacheTemplate.prototype.render = function () {
        return Mustache.render(this.template, this.model);
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
    return MustacheUtils;
})();
//# sourceMappingURL=MustacheUtils.js.map