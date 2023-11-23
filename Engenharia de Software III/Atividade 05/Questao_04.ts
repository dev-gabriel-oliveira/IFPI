interface Forma2D {
    calcularArea(): number;
}
class Retangulo implements Forma2D {
    altura: number;
    largura: number;

    calcularArea(): number {
        return this.altura * this.largura;
    }
}

interface Forma3D {
    calcularVolume(): number;
}
class Cilindro implements Forma3D {
    altura: number;
    raio: number;

    calcularVolume(): number {
        const volume = 3.14 * (this.raio * this.raio) * this.altura;
        return volume;
    }
}