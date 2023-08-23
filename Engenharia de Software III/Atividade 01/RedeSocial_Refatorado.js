var Status = {
    DRAFT: 0,
    PUBLISHED: 1,
    DELETED: 2,
};
var Post = /** @class */ (function () {
    function Post(id, text, status) {
        this.setId(id);
        this.setText(text);
        this.setStatus(status);
    }
    Post.prototype.publish = function () {
        this.validate();
        this.setStatus(Status.PUBLISHED);
        console.log("Publicado com sucesso.");
    };
    Post.prototype.validate = function () {
        if (this.getStatus() === Status.DRAFT && this.getText().trim().length === 0) {
            throw new Error("O post deve ter pelo menos 1 caractere!");
        }
        else {
            throw new Error("Apenas rascunhos podem ser postados.");
        }
    };
    Post.prototype.getText = function () {
        return this.text;
    };
    Post.prototype.setText = function (text) {
        this.text = text;
    };
    Post.prototype.getId = function () {
        return this.id;
    };
    Post.prototype.setId = function (id) {
        this.id = id;
    };
    Post.prototype.getStatus = function () {
        return this.status;
    };
    Post.prototype.setStatus = function (status) {
        this.status = status;
    };
    return Post;
}());
var post = new Post(1, "Hello Word", Status.DRAFT);
try {
    post.publish();
}
catch (error) {
    console.log(error.message);
}
