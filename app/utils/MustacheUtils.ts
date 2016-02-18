/// <reference path="../../node_modules/retyped-mustache-tsd-ambient/mustache-0.7.3.d.ts" />
class MustacheTemplate {
    template: string;
    model: Object;
    constructor(viewString:string, model:Object) {
        this.template = viewString;
        this.model = model;
    }
    
    public render():string{
        return Mustache.render(this.template, this.model)
    }
}

class MustacheUtils {
    static create(viewString:string, model:Object = null):string{
        var tmpl = new MustacheTemplate(viewString, model);
        return tmpl.render();
    }
}
