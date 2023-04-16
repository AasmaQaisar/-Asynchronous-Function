"use strict";
// Async await
Object.defineProperty(exports, "__esModule", { value: true });
const wait = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function makePasta() {
    console.log("Pasta will be cooked in 20 minutes");
    await wait();
    console.log("lets making Pasta");
    await wait();
    console.log("Pasta");
}
makePasta();
// Example no 1  callbacks
function EatingPasta(callback) {
    console.log("Pasta will be cooked in 20 minutes");
    setTimeout(() => {
        callback("Let's go have a cold drink");
    }, 3000);
}
function Coldrink(callback1) {
    console.log(callback1);
}
EatingPasta(Coldrink);
// Example no 2 callbacks
function makingPasta(callback) {
    console.log("Pasta will be cooked in 20 minutes");
    setTimeout(() => {
        callback("Pasta is done");
    }, 3000);
}
function Make2(callback1) {
    console.log(callback1);
}
makingPasta(Make2);
function EatingPasta_(abcd) {
    setTimeout(() => {
        abcd("Let's eat Pasta");
    }, 5000);
}
function callback2_(call3) {
    console.log(call3);
}
EatingPasta_(callback2_);
function Coldrinks(cd) {
    setTimeout(() => {
        cd("Let's go have a cold drink");
    }, 7000);
}
function callback2(call) {
    console.log(call);
}
Coldrinks(callback2);
// Example no 3
function makingPasta1(callback) {
    console.log("Pasta will be cooked in 20 minutes");
    setTimeout(() => {
        callback("Pasta is done");
    }, 3000);
}
function EatingPasta_1(abcd) {
    setTimeout(() => {
        abcd("Let's eat Pasta");
    }, 5000);
}
function Coldrinks1(cd) {
    setTimeout(() => {
        cd("Let's go have a cold drink");
    }, 7000);
}
makingPasta1(function (para) {
    console.log(para);
    EatingPasta_1(function (para2) {
        console.log(para2);
        Coldrinks1(function (para3) {
            console.log(para3);
        });
    });
});
