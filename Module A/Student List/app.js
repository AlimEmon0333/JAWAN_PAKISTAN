//  var student = {
//     name : "Ali",
//     age : 17,
//     class : 9,
//     hobbies:{
//         hobby1:"Cricket",
//         hobby2:"Gym",
//         hobby3:"DrivingCar"
//     },
//     courses:["Graphics","Chemistry","matrix"],
//     engMark : 10,
//     urdu:50 ,
//     calPercent: function (total){
//         var obtMark = student.engMark + student.urdu;
//         var percent = (obtMark / total)*100;
//         return percent;
//     }
//  }
//  var percentageStu = student.calPercent(100);
//  console.log(percentageStu)

//  roll num  name f.name cinc contact

var searchRollnum = document.getElementById("rollnum");
var student;
var arr = [
  {
    studentName: "Ali",
    fatherName: "amin",
    Rollnum: "001",
    cnic: "12345",
    contact: "03032663832",
  },
  {
    studentName: "Adil",
    fatherName: "haroon",
    Rollnum: "002",
    cnic: "12346",
    contact: "03032663845",
  },
  {
    studentName: "haseeb",
    fatherName: "haroon",
    Rollnum: "003",
    cnic: "12340",
    contact: "03032773832",
  },
  {
    studentName: "ahad",
    fatherName: "amin",
    Rollnum: "004",
    cnic: "124245",
    contact: "03332663832",
  },
  {
    studentName: "samad",
    fatherName: "rasheed",
    Rollnum: "005",
    cnic: "12349",
    contact: "03432663832",
  },
  {
    studentName: "basit",
    fatherName: "amin",
    Rollnum: "006",
    cnic: "12343",
    contact: "0332663832",
  },
  {
    studentName: "hassan",
    fatherName: "amin",
    Rollnum: "007",
    cnic: "1345",
    contact: "0032663832",
  },
  {
    studentName: "talha",
    fatherName: "amin",
    Rollnum: "008",
    cnic: "1235",
    contact: "0303263832",
  },
  {
    studentName: "yaseen",
    fatherName: "amin",
    Rollnum: "009",
    cnic: "125",
    contact: "030363832",
  },
  {
    studentName: "raheem",
    fatherName: "haroon",
    Rollnum: "010",
    cnic: "123421",
    contact: "0304232663832",
  },
];

// console.log(arr);
function renderTable() {
  for (var i = 0; i < arr.length; i++) {
    tbody.innerHTML += `<tr>
        <td>
            ${arr[i].studentName}
        </td>
        <td>
        ${arr[i].fatherName}
        </td>
        <td>
        ${arr[i].Rollnum}
        </td>
        <td>
        ${arr[i].cnic}
        </td>
        <td>
        ${arr[i].contact}
        </td>
    </tr>`;
  }
}
var tbody = document.getElementById("tbody");
renderTable();
function search() {
  for (var i = 0; i < arr.length; i++) {
    if (searchRollnum.value == arr[i].Rollnum) {
      var obj = arr[i];
      searchRollnum.value = "";
      tbody.innerHTML = `<tr>
         <td>
             ${obj.studentName}
         </td>
         <td>
         ${obj.fatherName}
         </td>
         <td>
         ${obj.Rollnum}
         </td>
         <td>
         ${obj.cnic}
         </td>
         <td>
         ${obj.contact} 
         </td>
     </tr>`;
    }
  }
}
