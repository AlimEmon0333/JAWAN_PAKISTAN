let arr = [
  {
    brand: "Samsung",
    model: "SamsungA30",
    price: "40000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
    amount: 100,
    isSelected: true,
  },
  {
    brand: "Samsung",
    model: "SamsungA10",
    price: "40000",
    camera: "40px",
    ram: "4gb",
    rom: "128gb",
    amount: 200,
    isSelected: false,
  },
  {
    brand: "Samsung",
    model: "SamsungA20",
    price: "40000",
    camera: "40px",
    ram: "4gb",
    rom: "128gb",
    amount: 300,
    isSelected: false,
  },
  {
    brand: "Vivo",
    model: "VivoY20",
    price: "20000",
    camera: "40px",
    ram: "2gb",
    rom: "32gb",
    amount: 400,
    isSelected: false,
  },
  {
    brand: "Vivo",
    model: "VivoY11",
    price: "20000",
    camera: "40px",
    ram: "3gb",
    rom: "32gb",
    amount: 500,
  },
  {
    brand: "Vivo",
    model: "VivoY15",
    price: "30000",
    camera: "40px",
    ram: "4gb",
    rom: "64gb",
    amount: 600,
  },
  {
    brand: "Motorola",
    model: "Motorola123",
    price: "5000",
    camera: "2px",
    ram: "2gb",
    rom: "32gb",
    amount: 700,
  },
  {
    brand: "Iphone",
    model: "Iphone12",
    price: "300000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
    amount: 800,
  },
  {
    brand: "Iphone",
    model: "Iphone13",
    price: "300000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
    amount: 900,
  },
  {
    brand: "Iphone",
    model: "IphoneX",
    price: "300000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
    amount: 1000,
  },
];
// let selectBrand = document.getElementById("company");
// let selectModel = document.getElementById("model");

// let brands = arr.map((x) => x.brand);
// brands = [...new Set(brands)]
// console.log(brands)

// selectBrand.innerHTML += brands.map((x)=>`<option value="${x}">${x}</option>`)

// let brandSelect = () => {
//     let selectedBrand = selectBrand.value;
//     let models = arr.filter((x)=>x.brand == selectedBrand)
//     selectModel.innerHTML += models.map((x)=>`<option>${}</option>`)
//     // console.log(models)
// }

// ___________________________ Reduce ________________________ //

// let sum = arr.reduce((x,y)=>{
//     // console.log(x,y)
//     return x + y.amount
// },0)
// console.log(sum)

// ___________________________ some ________________________ //

// let anyobjselected = arr.some((x) => x.isSelected);
// console.log(anyobjselected);

// let anyobjselected = arr.some((x)=>x.amount==250)
// console.log(anyobjselected)

// ___________________________ every ________________________ //

// let everyobjselected = arr.every((x) => x.isSelected);
// console.log(everyobjselected);

// ___________________________ find ________________________ //

// let arr2 = arr.find((x)=> x.camera == "40px" )
// console.log(arr2)

// ___________________________ findIndex ________________________ //

// let arr2 = arr.findIndex((x)=> x.ram == "4gb" )
// console.log(arr2)

// ___________________________ flat ________________________ //

// let a = [[[1]],2,3,4,5,[[6],[[7]]]]
// console.log(a)
// a = a.flat(Infinity)
// console.log(a )
