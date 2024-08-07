/*
first arg -> string of html element
second arg -> array of elements placed inside the html element 
*/

// initial thoughts
// class NotReact {
//   constructor() {}

//   createElement(element, content) {
//     const newElement = document.createElement(element);
//     content.map((val) => newElement.append(val));
//     return newElement;
//   }
// }

const notReact = {
  createElement(element, content) {
    const newElement = document.createElement(element);

    content.forEach((val) => {
      if (typeof val === "string") {
        element.appendChild(val);
      }
    });

    return newElement;
  },
};

document.body.appendChild(NotReact.createElement("div", ["hello"]));

// document.body.appendChild(NotReact.createElement(‘div’, [NotReact.createElement(‘p’, [‘hello’]), ‘world’])
