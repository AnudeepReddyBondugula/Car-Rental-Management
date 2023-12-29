const User = require("../src/models/User");

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function findEquilibrium(a, n){
    let l = 0;
    let r = 0;
    for(let i = 0; i < n; i++) l += a[i];

    for(let i = n-1; i >= 0; i--){
        l = l - a[i];
        if (l == r) return i+1;
        r = r + a[i];
    }
    return -1;
}
  
  async function main() {
    // const n = await new Promise((resolve, reject) => {
    //   readline.question("", (input) => {
    //     resolve(parseInt(input));
    //   });
    // });
  
    // const arr = await new Promise((resolve, reject) => {
    //   readline.question("", (input) => {
    //     resolve(input.split(' ').map(Number));
    //   });
    // });
  
    // const result = findEquilibrium(arr, n);
    // console.log(result);
  
    // readline.close();


    let arr = userInput.split(" ");
    console.log(mine(arr[0], arr[1]));
  }
  
  main();

// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//     service : 'gmail',
//     auth : {
//         user : 'anudeepreddybondugula@gmail.com',
//         pass : "fmor rovj qyti wiyz"
//     }
// });

// const mailOptions = {
//     from : "anudeepreddybondugula@gmail.com",
//     to : "20eg112102@anurag.edu.in",
//     "subject" : "Sending Email Using NodeJS",
//     "text" : "Its Working"
// };

// transporter.sendMail(mailOptions, (error, info) => {
//     if (error) console.error(error);
//     else console.log("Email Sent: " + info.response);
// })