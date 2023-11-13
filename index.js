let admin, name;

name = "John";

admin = name;

alert( admin );

if (name==="John" && admin==="John") {
    console.log("Test Succesful");
} else if (name==="John" || admin==="John") {
    console.log("Check your variables");
} else {
    console.log("Oops, something went wrong!")
}