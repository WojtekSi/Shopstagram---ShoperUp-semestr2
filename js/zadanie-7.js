const person = {
    name: "Wojciech",
    surname: "Siwek",
    age: 26,
    favouriteMovies: ["Harry Potter 1", "Harry Potter 2", "Harry Potter 3", "Harry Potter 4", "Harry Potter 5", "Harry Potter 6", "Harry Potter 7"],
    getFavMovies: function (){
        return this.favouriteMovies.join(", ");
    },
    getFullName: function(){
        return `${this.name} ${this.surname}`
    },
    sayHello: function(){
        return `Hello my name is ${this.getFullName()} I am ${this.age} and my favourite movies are: ${this.getFavMovies()}`
    }
}

console.log(person.sayHello());