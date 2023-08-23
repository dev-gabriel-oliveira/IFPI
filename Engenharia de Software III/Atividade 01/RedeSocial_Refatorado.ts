const Status = {
    DRAFT: 0,
    PUBLISHED: 1,
    DELETED: 2,
};

class Post {
    private id: number;
    private text: string;
    private status: number;

    constructor(id: number, text: string, status: number) {
        this.setId(id);
        this.setText(text);
        this.setStatus(status);
    }

    public publish(): void {
        this.validate();

        this.setStatus(Status.PUBLISHED);
        console.log("Publicado com sucesso.");
    }

    private validate(): void {
        if (this.getStatus() === Status.DRAFT && this.getText().trim().length === 0) {
            throw new Error("O post deve ter pelo menos 1 caractere!");
        } else {
            throw new Error("Apenas rascunhos podem ser postados.");
        }
    }

    public getText(): string {
        return this.text;
    }

    public setText(text: string): void {
        this.text = text;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getStatus(): number {
        return this.status;
    }

    public setStatus(status: number): void {
        this.status = status;
    }
}

const post = new Post(1, "Hello Word", Status.DRAFT);

try {
    post.publish();
} catch (error) {
    console.log(error.message);
}
