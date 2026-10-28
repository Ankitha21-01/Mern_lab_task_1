const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Temporary in-memory array
let items = [
    { id: 1, name: "Book", price: 250 },
    { id: 2, name: "Pen", price: 25 }
];

let nextId = 3;

// READ: Get all items
app.get("/api/items", (req, res) => {
    res.json(items);
});

// CREATE: Add an item
app.post("/api/items", (req, res) => {
    const { name, price } = req.body;

    if (
        typeof name !== "string" ||
        !name.trim() ||
        price === "" ||
        price === undefined ||
        price === null ||
        !Number.isFinite(Number(price)) ||
        Number(price) < 0
    ) {
        return res.status(400).json({
            message: "Enter a valid name and price."
        });
    }

    const item = {
        id: nextId++,
        name: name.trim(),
        price: Number(price)
    };

    items.push(item);
    res.status(201).json({
        message: "Item added successfully.",
        item
    });
});

// UPDATE: Edit an item
app.put("/api/items/:id", (req, res) => {
    const id = Number(req.params.id);
    const { name, price } = req.body;

    if (
        typeof name !== "string" ||
        !name.trim() ||
        price === "" ||
        price === undefined ||
        price === null ||
        !Number.isFinite(Number(price)) ||
        Number(price) < 0
    ) {
        return res.status(400).json({
            message: "Enter a valid name and price."
        });
    }

    const item = items.find(currentItem => currentItem.id === id);

    if (!item) {
        return res.status(404).json({ message: "Item not found." });
    }

    item.name = name.trim();
    item.price = Number(price);

    res.json({
        message: "Item updated successfully.",
        item
    });
});

// DELETE: Remove an item
app.delete("/api/items/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = items.findIndex(item => item.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Item not found." });
    }

    const deletedItem = items.splice(index, 1)[0];

    res.json({
        message: "Item deleted successfully.",
        item: deletedItem
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
