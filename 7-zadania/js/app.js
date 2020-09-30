// class Car {
//     constructor(name, brand, engine, mile, age) {
//         this.name = name;
//         this.brand = brand;
//         this.engine = engine;
//         this.mile = mile;
//         this.age = age;
//     }
//     printDetails() {
//         console.log(`
//             Nazwa: ${this.name},
//             Marka: ${this.brand},
//             Silnik: ${this.engine},
//             Przebieg: ${this.mile},
//             Wiek: ${this.age}
//         `)
//     }
// }
// const car1 = new Car("A3" , "Audi", "1.4",1023,10);
// const car2 = new Car("A3" , "Audi", "1.4",1023,10);
// const car3 = new Car("A3" , "Audi", "1.4",1023,10);
//
// car1.printDetails();
// car2.printDetails();
// car3.printDetails();

// class Enemy {
//     constructor(name,speed,attack,posX) {
//         this.name = name;
//         this.live = 5;
//         this.speed = speed;
//         this.attack = attack;
//         this.posX = posX;
//     }
//     move() {
//         this.posX = this.posX - this.speed
//         console.log(`
//         Jestem ${this.name} znajduje sie na pozycji ${this.posX}`);
//     }
//     attackEnemy(enemy) {
//         console.log(`
//         Jestem ${this.name}. Atakuję gracza z pozycji ${enemy.posX} z siłą ${this.attack}
//         `)
//     }
//     hit(enemy) {
//         enemy.live--;
//         console.log(`
//         Jestem ${enemy.name}. Mam teraz życia ${enemy.live}
//         `);
//     }
// }
//
// const szkielet = new Enemy("Szkielet", 4,3,230);
// const zombie = new Enemy("Zombie", 2, 4, 301);
// szkielet.move();
// szkielet.move();
// zombie.move()
// zombie.move()
// zombie.move()
// szkielet.attackEnemy(zombie);
// szkielet.attackEnemy(zombie);
// zombie.attackEnemy(szkielet);
// zombie.attackEnemy(szkielet);
// szkielet.hit(zombie);
// zombie.hit(szkielet);

// class Slider {
//     constructor(type, count) {
//         this.type = type;
//         this.slideCount = count;
//         this.currentSlide = 0;
//     }
//     showSlide() {
//         console.log(`Pokazuje slajd ${this.currentSlide}`);
//     }
//     nextSlide() {
//         this.currentSlide++;
//         this.showSlide();
//     }
//     prevSlide() {
//         this.currentSlide--;
//         this.showSlide();
//     }
// }
// class SliderAnime extends Slider {
//     constructor() {
//         super("Animowany" , 15);
//     }
//     animate() {
//         console.log(`Animuje slajd ${this.currentSlide}`);
//     }
//     nextSlide() {
//         super.nextSlide();
//         this.animate();
//     }
//     prevSlide() {
//         super.prevSlide()
//         this.animate();
//     }
// }
//
// const element = new Slider("Nieanimowany", 10);
// const element2 = new SliderAnime();
// element.showSlide();
// element.nextSlide();
// element.prevSlide();
// element2.showSlide();
// element2.animate();
// element2.nextSlide();
// element2.prevSlide();

// String.prototype.sortText = function (char) {
//    let array = this.split(char);
//    array.sort()
//    console.log(array);
//    return array.join(char);
// }
// console.log("Marcin-Ania-Piotrek-Beata".sortText('-'));

// String.prototype.mirror = function () {
//     let string = "";
//     [...this].forEach((el, i) => {
//         string += [...this][[...this].length - 1 - i];
//     });
//     return string;
// }
// console.log("Ala ma kota".mirror());

Array.prototype.sum = function () {
    return this.reduce((a,b) => a + b);
}
Array.prototype.sortNr = function () {
    return this.sort((a,b) => a-b);
}
