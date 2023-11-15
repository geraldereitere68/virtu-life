/* sophisticated_code.js */

// This code is a simulation of a virtual store inventory management system.
// It showcases advanced data structures, algorithms, and error handling mechanisms.

class Item {
  constructor(name, quantity, price) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }
}

class Inventory {
  constructor() {
    this.items = new Map();
  }

  addItem(item) {
    if (!(item instanceof Item)) {
      throw new Error("Invalid item object");
    }

    if (this.items.has(item.name)) {
      throw new Error("Item already exists in inventory");
    }

    this.items.set(item.name, item);
  }

  removeItem(name) {
    if (!this.items.has(name)) {
      throw new Error("Item does not exist in inventory");
    }

    this.items.delete(name);
  }

  updateQuantity(name, quantity) {
    if (!this.items.has(name)) {
      throw new Error("Item does not exist in inventory");
    }

    const item = this.items.get(name);
    item.quantity = quantity;
  }

  calculateInventoryValue() {
    let totalValue = 0;

    for (const item of this.items.values()) {
      totalValue += item.quantity * item.price;
    }

    return totalValue;
  }
}

const inventory = new Inventory();

try {
  inventory.addItem(new Item("Shirt", 100, 20));
  inventory.addItem(new Item("Pants", 50, 30));

  inventory.updateQuantity("Shirt", 50);
  inventory.removeItem("Pants");

  console.log(`Total inventory value: $${inventory.calculateInventoryValue()}`);
} catch (error) {
  console.error(error.message);
}

// ... More code here ...

// End of code