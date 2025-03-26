// The Switch Statements

// we are using switch statement for multiple conditions

const day = "Wed";

switch (day) {
    case "Mon": // day === "Mon"
        console.log("Chest");
        // break; // it will break/stop the next code
    case "Tue":
        console.log("Bicep");
        break;
    case "Wed":
        console.log("Tricep");
        break;
    case "Thur":
        console.log("Back");
        break;
    case "Fri":
        console.log("Sholuder");
        break;
    case "Sat":
        console.log("Legs");
        break;
    case "Sun":
        console.log("Forearms and Abs!");
    default:
        console.log("Rest"); // this case is executes when above conditions aren't executes
}

// Note: If we remove "break" keyword then it will executes rest conditions except break condition