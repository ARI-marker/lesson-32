let array = ["apple", "banana", "cherry", "kiwi"];

for (let i = 0; i < array.length; i++) {
  console.log("Element at index " + i + " is: " + array[i]);
}
let firstName = '';
let lastName = '';

    // Funksioni për të shtuar emrin
    function addFirstName() {
      firstName = document.getElementById('firstNameInput').value;
      document.getElementById('firstNameInput').value = '';  // Pastroni inputin
      FullName();
    }

    // Funksioni për të shtuar mbiemrin
    function addLastName() {
      lastName = document.getElementById('lastNameInput').value;
      document.getElementById('lastNameInput').value = '';  // Pastroni inputin
      FullName();
    }

    // Funksioni për të shfaqur emrin e plotë
    function FullName() {
      document.getElementById('fullName').textContent = firstName + ' ' + lastName;
    }