export class AddPetInfo {
    name: string;
    age: number;
    species: string;
    imagePath: string;
    userId: string;

    constructor(name: string, age: number, species: string, imagePath: string, userId: string) {
        this.name = name;
        this.age = age;
        this.species = species;
        this.imagePath = imagePath;
        this.userId = userId;
    }
}