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


## Accessing by tag name
- **Method** `document.getElementsByTagName('h1')`
- **DescriptioN**  Returns a live  

## Accessing using parent node
const list = document.querySelector('li');
console.log(list.parentNode) or parentElement

what is difference between parentNode & parentElement



## HTMLCOllection vs NodeList
**NodeList gives text as well as element where as HTMLCollection only gives element**



## e. Accessing using Relationships 
i. parent Node:
Method: elements.parentNode or element.parentElement
Description: Access the immediate parent of an element.

ii. child Nodes
method: element.childNodes(includes text nodes)or element.children(only element nodes)
Description:Access all child nodes of an element.

iii. First and last Child 
methods: element.firstChild,element.lastChild
