// ________________ PROMISE _____________________ //

// let AhmedKaRishta = new Promise((Resolve, Reject) => {
//   let ahmedKiJob = false;
//   let ahmedKiGari = true;
//   let ahmedKaGhar = true;
//   let ahmedKisalary = 50;
//   if (ahmedKiJob && ahmedKaGhar) {
//     Resolve("Ahmed Ka Rishta Pakka");
//   } else if (ahmedKisalary >= 50) {
//     setTimeout(() => {
//       Resolve("Mil Gaya");
//     }, 5000);
//   } else {
//     Reject("agli dhundo");
//   }
// });
// AhmedKaRishta.then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });

// console.log(AhmedKaRishta)

let abc = (a, b) => {
  return new Promise((myResolve, myReject) => {
    if (a == b) {
      setTimeout(() => {
        myResolve("success");
      }, 10000);
    } else {
      myReject("Error");
    }
  });
};

let xyz = async () => {
  await abc(10, 10)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  console.log("XYZ");
};
xyz();
// console.log(xyz())
