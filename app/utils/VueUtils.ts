'use strict';
///<reference path="../../typings/tsd.d.ts" />

class VueTemplate {
    el:HTMLElement;
    viewString:String;
    model: Object;
    methods: Object;
    vue: Vue;

    constructor(el: HTMLElement, model:Object, methods: Object = null) {
        this.el = el;
        this.model = model;
        this.methods = methods;
    }
    
    invalidate(): Vue{

        this.vue = new Vue({
            data: this.model,
            methods: this.methods
        });
        //this.vue.$el = el;
        this.vue.$compile(el);
        console.log(this.model);
        q = <Question>this.model;
        return this.vue;
    }

    load(filePath:string):void {
        var setting:JQueryAjaxSettings = {};
        var self: VueTemplate = this;

        setting.url = filePath;
        setting.success = function(data:string):void{
            console.log("loaded template", data);
            el.innerHTML = this.viewString = data;
            self.invalidate();
        };
        $.ajax(filePath, setting);
    }
}

class VueUtils {
    
    static createFromFile(filePath:string, model: Object, element: HTMLElement): VueTemplate{
        var tmpl = new VueTemplate(element, model, element);
        tmpl.load(filePath);
        return tmpl;
    }
}
