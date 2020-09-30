class product {
    constructor(name, price, weight) {
        this.name = name;
        this.price = price;
        this.weight = weight;
    }
}

const prod1 = new product("Ziemniak", 10, 5);
const prod2 = new product("Marchew", 5, 2);

console.log(`
        Produkt numer jeden to: ${prod1.name}
        Produkt numer dwa to: ${prod2.name}
        Produkty kosztują razem: ${prod1.price + prod2.price}
        Produkty ważą razem: ${prod1.weight + prod2.weight}
        `)


const currentUser = {
    name: "Szymon",
    surname: "Gus",
    email: "gus.szymon@gmail.com",
    www: "www.google.pl",
    userType: "Admin",
    show() {
        console.log(`
        Imię: ${name}
        Nazwisko: ${surname}
        Email: ${email}
        `)
    }
}