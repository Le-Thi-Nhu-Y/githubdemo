
var so_hang1 = 12
var so_hang2 = 12
var tong = 0

tong = so_hang1 + so_hang2

tong = so_hang1 + tong

console.log("tong=" + tong)

var width = 3
var height = 4
tong = width * height
console.log("dientich=" + tong)



function processConfirm(cau_hoi) {
    let answer = "";
    if (cau_hoi === "ý hỏi") {
        answer = "Excellent. We'll play a nice game of chess.";
    } else {
        answer = "Maybe later then.";
    }
    return answer;
}
// console.log(processConfirm("a hoi"))


// let confirmAnswer = confirm("Shall we play a game?");
// let theAnswer = processConfirm(confirmAnswer);
// // alert(theAnswer);
// console.log(confirmAnswer)

// document.write("Xin chào");
var y = 5;
y %= 2;
 
console.log(y);
var i = 10;
var f = 20.5;
var b = true
var s = 'Hà Nội'
document.write(i);
document.write(f);
document.write(b);
document.write(s);
