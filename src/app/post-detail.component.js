"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var post_service_1 = require("./post.service");
require("rxjs/add/operator/switchMap");
var PostDetailComponent = (function () {
    function PostDetailComponent(postService, route) {
        this.postService = postService;
        this.route = route;
    }
    PostDetailComponent.prototype.ngOnInit = function () {
        this.post = this.postService.getPost(+this.route.snapshot.paramMap.get('id'));
    };
    return PostDetailComponent;
}());
PostDetailComponent = __decorate([
    core_1.Component({
        selector: 'post-detail',
        templateUrl: './post-detail.component.html',
        styles: ["\n      .post-detail {\n        border: 1px black solid;\n        width: 80%;\n        margin: auto;\n        margin-top: 50px;\n      }\n      .post-price {\n        float: right;\n        vertical-align: top;\n      }\n      .post-body {\n        text-indent: 50px;\n      }\n    "]
    }),
    __metadata("design:paramtypes", [post_service_1.PostService,
        router_1.ActivatedRoute])
], PostDetailComponent);
exports.PostDetailComponent = PostDetailComponent;
//# sourceMappingURL=post-detail.component.js.map