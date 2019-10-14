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
/*This class will be the component used for rendering all of the postings in
  one page in list form.*/
var core_1 = require("@angular/core");
var post_service_1 = require("./post.service");
var ShoppingComponent = (function () {
    function ShoppingComponent(postService) {
        this.postService = postService;
        this.posts = [];
        this.filterTypes = [];
        this.selectedPost = null;
    }
    ShoppingComponent.prototype.onHover = function (post) {
        this.selectedPost = post;
    };
    ShoppingComponent.prototype.onOut = function () {
        this.selectedPost = null;
    };
    ShoppingComponent.prototype.filter = function (type) {
        this.posts = this.postService.getPostsFilter(type);
    };
    ShoppingComponent.prototype.ngOnInit = function () {
        this.posts = this.postService.getPosts();
        this.filterTypes.push("All");
        for (var i = 0; i < this.posts.length; i++) {
            this.filterTypes.push(this.posts[i].type);
        }
    };
    return ShoppingComponent;
}());
ShoppingComponent = __decorate([
    core_1.Component({
        selector: 'shopping',
        templateUrl: './shopping.component.html',
        styles: ["\n      .post-title-bar:hover {\n        background-color: #4d8ee2 !important;\n        color: white;\n        cursor: pointer;\n      }\n\n      .posts-container {\n        margin: 5px;\n        margin-top: 10px;\n        border: 1px solid black;\n        width: 50%;\n        overflow-y: auto;\n        height: 400px;\n        margin-left: 15%;\n      }\n\n      .post-title-bar {\n        background: grey;\n        color: white;\n        vertical-align: top;\n        border: 1px solid black;\n      }\n\n      .post-price {\n        float: right;\n        vertical-align: top;\n      }\n\n      .post-body {\n        background: white;\n        color: black;\n      }\n\n      .filter-container {\n        height: 80%;\n        overflow-y: auto;\n        position: fixed;\n        vertical-align: top;\n        overflow-x: hidden;\n        width: 10%;\n        float: left;\n        background-color: #47494c;\n      }\n    "]
    }),
    __metadata("design:paramtypes", [post_service_1.PostService])
], ShoppingComponent);
exports.ShoppingComponent = ShoppingComponent;
//# sourceMappingURL=shopping.component.js.map