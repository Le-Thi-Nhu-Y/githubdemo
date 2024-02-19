
// var so_hang1 = 12
// var so_hang2 = 12
// var tong = 0

// tong = so_hang1 + so_hang2

// tong = so_hang1 + tong

// console.log("tong=" + tong)

// var width = 3
// var height = 4
// tong = width * height
// console.log("dientich=" + tong)



// function processConfirm(cau_hoi) {
//     let answer = "";
//     if (cau_hoi === "ý hỏi") {
//         answer = "Excellent. We'll play a nice game of chess.";
//     } else {
//         answer = "Maybe later then.";
//     }
//     return answer;
// }
// console.log(processConfirm("a hoi"))


// let confirmAnswer = confirm("Shall we play a game?");
// let theAnswer = processConfirm(confirmAnswer);
// // alert(theAnswer);
// console.log(confirmAnswer)

// document.write("Xin chào");
// var y = 5;
// y %= 2;
 
// console.log(y);
// var i = 10;
// var f = 20.5;
// var b = true
// var s = 'Hà Nội'
// document.write(i);
// document.write(f);
// document.write(b);
// document.write(s);

// function processConfirm(answer) {
//     let result = "";
//     if (answer) {
//         result = "Excellent. We'll play a nice game of chess.";
//     } else {
//         result = "Maybe later then.";
//     }
//     return result;
// }

// let confirmAnswer = confirm("Shall we play a game?");
// let theAnswer = processConfirm(git);
// alert(theAnswer);

//function constructor

// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;

//     this.getName = function() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// var author = new User('Như', 'Ý', 'avatar');
// var user = new User('Ý', 'Nhi', 'avatar');

// User.prototype.className = 'f8' // them thuoc tinh vao ben trong ham tao

// author.title = 'Như Ý xinh đẹp'
// user.comment = 'xinh đẹp thật không?' //them thuoc tinh vao ben ngoai ham tao

// console.log(author);
// console.log(user);

// baitap if else

var weight = 38;
var height = 1.52;
var bmi = weight / (height^2)

function bodyMass(bmi) {
    if(bmi < 18.5) {
        console.log('Underweight');
    }
    else if(18.5 <= bmi < 25.0) {
        console.log('Normal');
    }
    else if(25.0 <= bmi < 30.0) {
        console.log('Overweight');
    }
    else {
        console.log('Obese');
    }
}

bodyMass(bmi);
