class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    move() {
        console.log(`${this.name} moves ans says '${this.sound}'`)
    }

}

class Cat extends Animal{
    constructor(name, sound) {
        super(name, sound);
    }
}

const cat1 = new Cat('Felix', 'Meow!')
cat1.move()