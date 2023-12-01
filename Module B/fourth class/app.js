// ________________________ There abc is higher order function and xyz is call back _________________________________ //

// function abc(a) {
//   console.log(a);
// }
// function xyz() {
//   return "xyz";
// }
// abc(xyz());

// ________________________ There abc is higher order function _________________________________ //

// function abc(){
//     console.log("ABC")
//     return function(){
//         console.log("inside abc")
//     }

// }
// // __ let a = abc()
// // __ a()
// // __ abc()()

// ________________________ Lexical scoping _________________________________ //

// let a = true
// function abc(){
//     if(true){
//         console.log(a)
//     }
// }
// abc()

// function abc(){
//     let a = 123
//     if(true){
//         console.log(a)
//     }
// }
// abc()

// function abc(){
//     if(true){
//         let a = "Ali"
//         console.log(a)
//     }
// }
// abc()

// ________________________ Default parameter _________________________________ //

// function abc ( a = 10){
// let b = 238 - a 
// console.log(b)
// }
// abc(100)
// abc(200)
// abc(300)
// abc(400)
// abc(500)
// abc()
// abc()

// ________________________ Arrow function _________________________________ // //__ Its do not have any weight of his

// let abc = (a) => {
//   console.log(a);
// };
// abc("xyz");

// let abc = (a, b) => {
//   console.log(a + b);
// };
// abc(10, 20);

// let abc = a => {
//   console.log(a);
// };
// abc(20);

// let abc = a => {
//  return "ABC"
// };
// let a = abc()
// console.log(a)
// abc();

// let abc = a => "ABC"
// let b = abc()
// console.log(b) 

// let obj = {
//     id : 1,
//     name : "Ali",
//     age : 16
// }

// let abc = () => ({id : obj.id})
// let b = abc()
// console.log(b)

// ___________________________________________ For assignment ____________________________________//
let arr = [
    {
        brand: "Samsung",
        model: "A30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb"
    },
    {
        brand: "Samsung",
        model: "A10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb"
    },
    {
        brand: "Samsung",
        model: "A20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb"
    },
    {
        brand: "Vivo",
        model: "Y20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom : "32gb"
    },
    {
        brand: "Vivo",
        model: "Y11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom : "32gb"
    },
    {
        brand: "Vivo",
        model: "Y15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom : "64gb"
    },
    {
        brand: "Motorola",
        model: "123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom : "32gb"
    },
    {
        brand: "Iphone",
        model: "12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb"
    },
    {
        brand: "Iphone",
        model: "13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb"
    },
    {
        brand: "Iphone",
        model: "X",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb"
    },
]
