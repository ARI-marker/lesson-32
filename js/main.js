let array = ["apple", "banana", "cherry", "kiwi"];

for (let i = 0; i < array.length; i++) {
  console.log("Element at index " + i + " is: " + array[i]);
}

let nameList = [];

    // Funksioni për të shtuar emrin në listë
    function addName() {
      let name = document.getElementById('nameInput').value;
      if (name) {
        nameList.push(name);  // Shto emrin në listë
        document.getElementById('nameInput').value = '';  // Pastroni inputin

        // Krijoni elementin <li> dhe shtohet direkt në listë
        document.getElementById('nameList').innerHTML += `<li>${name}</li>`;
      }
    }