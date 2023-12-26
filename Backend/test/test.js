const User = require("../src/models/User");

const main = async() => {
    const user = await User.findOne({username : "anudeepreddybondugula@gmail.com"});
    console.log(user._id);
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