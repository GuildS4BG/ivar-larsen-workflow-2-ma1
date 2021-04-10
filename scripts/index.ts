//1
let array: (string | boolean)[];
//2
let tuple: [boolean, string, number];
//3
function getFullName(firstName:string, lastName:string) {
    return `${firstName} ${lastName}`;
}
//4
interface Person {
    name: string;
    age: number;
    jobTitle: string;
}
//5
enum Wage {
    Paid,
    Unpaid,
    Unknown,
}
//6
class Person {
    name: string;

    constructor(fName: string) {
        this.name = fName;
    }
    presentName() {
        return "My name is " + this.name;
    }
}

//7
type strBool = string | boolean;
type numStr = number | string;
type Details = { id: numStr, status: strBool};

function getDetails(name: strBool, details: Details) {}