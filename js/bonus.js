var grade = Math.random() * 100;
console.log(grade);

switch (true) {
    case grade > 90:
        console.log("Congratulations you got an A!");
        break;
    case grade > 80:
        console.log("You got a B.");
        break;
    case grade > 70:
        console.log("You got a C.");
        break;
    case grade > 60:
        console.log("You got a D.");
        break;
    default:
        console.log("You got an F.");
}
