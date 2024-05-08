function calculateDays(date) {
    // Convert birthdate string to Date object
    var birthDate = new Date(date);

    // Get current date
    var currentDate = new Date();

    // Calculate the difference in milliseconds
    var difference = currentDate - birthDate;

    // Convert milliseconds to days
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));

    return days;
}

// Example usage
var myBirthdate = "2024-04-21"; 
var daysSinceBirth = calculateDays(myBirthdate);
const spentText = document.querySelector("#spentTime");
spentText.innerHTML = daysSinceBirth + " days we have spent together.";