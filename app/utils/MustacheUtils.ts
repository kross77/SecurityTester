/// <reference path="../../node_modules/retyped-mustache-tsd-ambient/mustache-0.7.3.d.ts" />
/// <reference path="../retyped/jquery.d.ts" />
class MustacheTemplate {
    template;
    model: Object;
    element: HTMLElement;
    
    constructor(viewString:string, model:Object, el: HTMLElement = null) {
        this.setTemplate(viewString);
        this.model = model;
        this.element = el;
    }
    
    invalidate():string{
        console.log("template: ", this.template, ", model: ", this.model);
        return Mustache.render(this.template, this.model);
    }
    
    setTemplate(value :string):void{
        this.template = value;
    }

    load(filePath:string):void {
        var setting: JQueryAjaxSettings = {};
        var model: Object = this.model;
        var el: HTMLElement = this.element;
        var setTemplate: Function = this.setTemplate;
        setting.success = function(data:string):void{
            setTemplate(data);
            el.innerHTML = Mustache.render(data, model);
        };
        $.ajax(filePath, setting);
    }
}

class MustacheUtils {
    static create(viewString:string, model:Object = null):string{
        var tmpl = new MustacheTemplate(viewString, model);
        return tmpl.invalidate();
    }
    
    static createFromFile(filePath:string, model: Object, element: HTMLElement):MustacheTemplate{
        var tmpl = new MustacheTemplate("", model, element);
        tmpl.load(filePath);
        return tmpl;
    }
}
