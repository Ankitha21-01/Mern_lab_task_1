const form = document.getElementById("itemForm");
const itemIdInput = document.getElementById("itemId");
const nameInput = document.getElementById("name");
const priceInput = document.getElementById("price");
const submitBtn = document.getElementById("submitBtn");
const cancelBtn = document.getElementById("cancelBtn");
const tableBody = document.getElementById("itemTableBody");
const message = document.getElementById("message");

// READ: Load and display all items
async function loadItems() {
    try {
        const response = await fetch("/api/items");
        if (!response.ok) throw new Error("Could not load items.");

        const items = await response.json();
        tableBody.replaceChildren();

        items.forEach(item => {
            const row = document.createElement("tr");

            [item.id, item.name, item.price].forEach(value => {
                const cell = document.createElement("td");
                cell.textContent = value;
                row.appendChild(cell);
            });

            const actionCell = document.createElement("td");

            const editButton = document.createElement("button");
            editButton.textContent = "Edit";
            editButton.className = "edit-btn";
            editButton.addEventListener("click", () => editItem(item));

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.className = "delete-btn";
            deleteButton.addEventListener("click", () => deleteItem(item.id));

            actionCell.append(editButton, deleteButton);
            row.appendChild(actionCell);
            tableBody.appendChild(row);
        });
    } catch (error) {
        showMessage("Unable to load items. Check whether the server is running.", true);
    }
}

// CREATE or UPDATE: Submit the form
form.addEventListener("submit", async event => {
    event.preventDefault();

    const id = itemIdInput.value;
    const item = {
        name: nameInput.value.trim(),
        price: priceInput.value
    };

    const url = id ? `/api/items/${id}` : "/api/items";
    const method = id ? "PUT" : "POST";

    try {
        const response = await fetch(url, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item)
        });

        const result = await response.json();

        if (!response.ok) {
            showMessage(result.message || "Request failed.", true);
            return;
        }

        showMessage(result.message);
        resetForm();
        await loadItems();
    } catch (error) {
        showMessage("Unable to connect to the server.", true);
    }
});

// EDIT: Put the selected item's values into the form
function editItem(item) {
    itemIdInput.value = item.id;
    nameInput.value = item.name;
    priceInput.value = item.price;
    submitBtn.textContent = "Update";
    cancelBtn.hidden = false;
    nameInput.focus();
}

// DELETE: Remove an item
async function deleteItem(id) {
    if (!confirm("Are you sure you want to delete this item?")) return;

    try {
        const response = await fetch(`/api/items/${id}`, {
            method: "DELETE"
        });
        const result = await response.json();

        if (!response.ok) {
            showMessage(result.message || "Could not delete item.", true);
            return;
        }

        if (itemIdInput.value === String(id)) resetForm();

        showMessage(result.message);
        await loadItems();
    } catch (error) {
        showMessage("Unable to connect to the server.", true);
    }
}

// Reset the form
function resetForm() {
    form.reset();
    itemIdInput.value = "";
    submitBtn.textContent = "Submit";
    cancelBtn.hidden = true;
}

cancelBtn.addEventListener("click", resetForm);

function showMessage(text, isError = false) {
    message.textContent = text;
    message.style.color = isError ? "#c62828" : "#16733b";
}

// Load the initial items when the page opens
loadItems();
