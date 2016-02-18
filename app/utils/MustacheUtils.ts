/// <reference path="../../node_modules/retyped-mustache-tsd-ambient/mustache-0.7.3.d.ts" />
/// <reference path="../retyped/jquery.d.ts" />
class MustacheTemplate {
    template: string;
    model: Object;
    
    private onCompiledCallback: Function;
    
    constructor(viewString:string, model:Object) {
        this.template = viewString;
        this.model = model;
    }
    
    render():string{
        return Mustache.render(this.template, this.model)
    }

    load(filePath:string, element:HTMLElement):void {
        var setting: JQueryAjaxSettings = {};
        var model: Object = this.model;
        setting.success = function(data:string):void{
            element.innerHTML = Mustache.render(data, model);
        };
        $.ajax(filePath, setting);
    }
}

class MustacheUtils {
    static create(viewString:string, model:Object = null):string{
        var tmpl = new MustacheTemplate(viewString, model);
        return tmpl.render();
    }
    
    static createFromFile(filePath:string, model: Object, element: HTMLElement):MustacheTemplate{
        var tmpl = new MustacheTemplate("", model);
        tmpl.load(filePath, element);
        return tmpl;
    }
}
