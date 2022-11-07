// now I can traverse (notes) DOM tree here in JS only 

// Traversing of DOM tree

const rootNode = document.getRootNode();
// console.log(rootNode); // #document 
// console.log(rootNode.childNodes); // NodeList [html]
// Array like object so can be indexed 
const htmlElementNode = rootNode.childNodes[0]; 
// console.log(htmlElementNode); // 
// console.dir(htmlElementNode); // html 

// console.log(htmlElementNode.childNodes); // NodeList(3) [head, text, body]
// browser ignores first and last new line space as it has no importance here and as to incrase performance browser avoided first and last new line space of html 

const headElementNode = htmlElementNode.childNodes[0];
const textNode1 = htmlElementNode.childNodes[1];
const bodyElementNode = htmlElementNode.childNodes[2];

// console.log(headElementNode);  // head
// console.log(textNode1);  // #text
// console.log(bodyElementNode);  // <body>...</body>

// console.log(headElementNode.parentNode); // <html>...</html> 

// sibling relation
// console.log(headElementNode.nextSibling); // #text
// console.log(headElementNode.nextSibling.nextSibling); // <body>...</body>

// browser create our web page using Document Object
// browser by default set white-space property of all elements is normal 

// console.log(headElementNode.nextElementSibling); // return body tag
// escape all text node and then print first element node

console.log(headElementNode.childNodes); // [text, title, text, script, text, comment, text, comment, text]
