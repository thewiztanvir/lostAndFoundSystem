function submitForm() {
    // Reset error messages
    document.getElementById('itemNameError').classList.add('hidden');
    document.getElementById('descriptionError').classList.add('hidden');
    // Get form values
    var itemName = document.getElementById('itemName').value.trim();
    var description = document.getElementById('description').value.trim();
    // Validate form fields
    if (!itemName) {
      document.getElementById('itemNameError').classList.remove('hidden');
      return;
    }
    if (!description) {
      document.getElementById('descriptionError').classList.remove('hidden');
      return;
    }
    // If validation passes, add a new found item card
    addFoundItemCard(itemName, description);
    // Clear form fields
    document.getElementById('itemName').value = '';
    document.getElementById('description').value = '';
  }
  function addFoundItemCard(itemName, description) {
    var foundItemsContainer = document.getElementById('foundItems');
    var card = document.createElement('div');
    card.className = 'bg-white p-4 border rounded-md';
    card.innerHTML = `
      <h3 class="text-lg font-bold mb-2">${itemName}</h3>
      <p class="text-gray-600">${description}</p>
      <button onclick="claimItem(this)" class="mt-4 bg-blue-500 text-white p-2 rounded-md">খুজে পাওয়া জিনিস বুঝে নেন</button>
    `;
    foundItemsContainer.appendChild(card);
  }
  function claimItem(button) {
    var card = button.parentNode;
    card.style.opacity = '0.5';
    button.disabled = true;
    button.innerText = 'বুঝে পেয়েছি';
    // You can add further logic for handling item claims, such as updating the database.
  }