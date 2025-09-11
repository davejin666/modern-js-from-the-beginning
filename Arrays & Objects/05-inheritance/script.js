class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks. Its breed is ${this.breed}.`);
    }

    #walk() {
        super.speak();
        console.log('Ha ha ha~');
    }

    invoke_private_method() {
        this.#walk();
    }
}

d1 = new Dog('Jack', 'Bull dog');
d1.speak(); // Jack barks. Its breed is Bull dog.
d1.invoke_private_method();
