DOM: Document object model

The DOM is a way to represent a web page so that programs(like javaScript) can interact with it.

* A browser takes your HTML document and turns it into the DOM.

with the object model, javaScript gets all the power it needs to create dynamic HTML:
----------------------------------------------------

1.Accessing Elements.
a:Accessing by ID;
    Method: document.getElementByID(IdName)
    Description:Retrieves a single element with the specified id attribute.
    
b.Accessing by Class Name:
    Method:document.getElementByClassName(className)
    Description:returns a live HTMLCollection of all elements with the specified class name.

c.Accessing by CSS Selectors:
    i: Single Element:
        Method: document.querySelector(selector)
    ii. multiple Element:
        Method: document.querySelectorAll(selector)


----------------------------------------------------
obj.__proto__ -> used to see {key,value}


