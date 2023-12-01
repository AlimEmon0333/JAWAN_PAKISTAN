// ____________________ INTERFACE _______________________ \\

// interface User {
//     id : number,
//     name : string,
//     age : number,
//     isadmin:boolean,
// }
// interface Employee extends User {
//     companyName : string,
//     joiningDate : Date,
//     salary : number,
//     contact? : number,
// }
// let obj: Employee = {
//     id:1,
//     name:"Ali",
//     age:16,
//     isadmin:true,
//     companyName : "ABC",
//     joiningDate : new Date(),
//     salary : 50000,
// }

interface user {
  id: number;
  name: string;
  age: number;
}

interface employee<T> {
  companyName: string;
  joiningDate: Date;
  extras: T[];
}
let obj: employee<user> = {
  companyName: "ABC",
  joiningDate: new Date(),
  extras: [
    {
      id: 1,
      name: "ALI",
      age: 18,
    },
  ],
};
