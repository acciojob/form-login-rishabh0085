function getFormvalue() {
    // Access the form elements
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    // Concatenate the first name and last name
    const fullName = firstName + ' ' + lastName;

    // Display the full name using an alert
    alert(fullName);
}
