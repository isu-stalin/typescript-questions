var user = {
    name: "Ali",
    age: 30,
    email: "ali@example.com",
};
///////////////////////////////////////////////////////////////////////////////////////////////////
function add(a, b) {
    return a + b;
}
console.log(add(5, 10));
///////////////////////////////////////////////////////////////////////////////////////////////////
var Days;
(function (Days) {
    Days["Monday"] = "Dushanba";
    Days["Tuesday"] = "Seshanba";
    Days["Wednesday"] = "Chorshanba";
    Days["Thursday"] = "Payshanba";
    Days["Friday"] = "Juma";
    Days["Saturday"] = "Shanba";
    Days["Sunday"] = "Yakshanba";
})(Days || (Days = {}));
console.log(Days.Monday);
/////////////// o'zgaruvchi status nomni olmadi ////////////////
var statusVar;
statusVar = "start";
statusVar = "stop";
var myPet = {
    bark: true,
    meow: false,
};
///////////////////////////////////////////////////////////////////////////////////////////////////
function handleValue(value) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else {
        return value * value;
    }
}
console.log(handleValue("hello"));
console.log(handleValue(5));
///////////////////////////////////////////////////////////////////////////////////////////////////
var userInfo = [25, "Laylo"];
console.log(userInfo[0]);
console.log(userInfo[1]);
