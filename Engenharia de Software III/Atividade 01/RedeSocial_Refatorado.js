class Status {
    static DRAFT = 'DRAFT';
    static PUBLISHED = 'PUBLISHED';
    static DELETED = 'DELETED';
}

class Post {
    constructor(id, text, status) {
        this.setId(id);
        this.setText(text);
        this.setStatus(status);
    }

    publish() {
        this.validate();

        this.setStatus(Status.PUBLISHED);
        console.log('Successfully published text');
    }

    validate() {
        if (this.getStatus() !== Status.DRAFT) {
            throw new Error('Only drafts can be posted');
        }

        if (this.getText().trim().length === 0) {
            throw new Error('A post must have at least one character');
        }
    }

    getText() {
        return this.text;
    }

    setText(text) {
        this.text = text;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getStatus() {
        return this.status;
    }

    setStatus(status) {
        this.status = status;
    }
}

class RedeSocial {
    static main() {
        const post = new Post(1, 'Hello World', Status.DRAFT);

        try {
            post.publish();
        } catch (error) {
            console.error(error.message);
        }
    }
}

RedeSocial.main();
