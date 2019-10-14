"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var TitleBarComponent = (function () {
    function TitleBarComponent() {
        this.title = "Craigsbay";
    }
    return TitleBarComponent;
}());
TitleBarComponent = __decorate([
    core_1.Component({
        selector: 'title-bar',
        template: "\n      <div id = 'title-bar'>\n        <b>{{title}}</b>\n      </div>\n    ",
        styles: ["\n      #title-bar {\n        width: 100%;\n        background: linear-gradient(#0144af, #01296b);\n        height: 50px;\n        text-align: center;\n        vertical-align: center;\n        font-size: 40px;\n        color: white;\n      }\n    "]
    })
], TitleBarComponent);
exports.TitleBarComponent = TitleBarComponent;
//# sourceMappingURL=title-bar.component.js.map