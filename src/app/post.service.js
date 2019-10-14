"use strict";
var POSTS = [
    { id: 0, price: 100000, title: 'ford fusion', body: 'Used ford fusion!', type: "Car" },
    { id: 1, price: 200, title: 'something', body: 'Buy it', type: "Unkown" },
    { id: 5, price: 7, title: 'a cacti', body: '5 cacti', type: "Botony" }
];
var PostService = (function () {
    function PostService() {
    }
    PostService.prototype.getPosts = function () {
        return POSTS;
    };
    PostService.prototype.getPostsFilter = function (type) {
        if (type === "All")
            return this.getPosts();
        return POSTS.filter(function (post) { return post.type === type; });
    };
    PostService.prototype.getPost = function (id) {
        for (var i = 0; i < POSTS.length; i++) {
            if (id === POSTS[i].id)
                return POSTS[i];
        }
        return null;
    };
    return PostService;
}());
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map