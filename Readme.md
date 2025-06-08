# DOM: Document Object Model

The **DOM (Document Object Model)** is a way to represent a web page so that programs (like JavaScript) can interact with it.

- A browser takes your HTML document and turns it into the **DOM**.

With the object model, JavaScript gets all the power it needs to create **dynamic HTML**.

---

## 1. Accessing Elements

### a. Accessing by ID
- **Method:** `document.getElementById(idName)`
- **Description:** Retrieves a single element with the specified `id` attribute.

### b. Accessing by Class Name
- **Method:** `document.getElementsByClassName(className)`
- **Description:** Returns a live `HTMLCollection` of all elements with the specified class name.

### c. Accessing by CSS Selectors

#### i. Single Element
- **Method:** `document.querySelector(selector)`

#### ii. Multiple Elements
- **Method:** `document.querySelectorAll(selector)`

---

## 2. Object Prototype Access

- `obj.__proto__` → Used to view the object's prototype chain and its key-value pairs.

---

