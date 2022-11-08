// now I can traverse (notes) DOM tree here in JS only 

// Traversing of DOM tree

// const rootNode = document.getRootNode();
// console.log(rootNode); // #document 
// console.log(rootNode.childNodes); // NodeList [html]
// Array like object so can be indexed 
// const htmlElementNode = rootNode.childNodes[0]; 
// console.log(htmlElementNode); // 
// console.dir(htmlElementNode); // html 

// console.log(htmlElementNode.childNodes); // NodeList(3) [head, text, body]
// browser ignores first and last new line space as it has no importance here and as to incrase performance browser avoided first and last new line space of html 

// const headElementNode = htmlElementNode.childNodes[0];
// const textNode1 = htmlElementNode.childNodes[1];
// const bodyElementNode = htmlElementNode.childNodes[2];

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

// console.log(headElementNode.childNodes); // [text, title, text, script, text, comment, text, comment, text]

// const h1 = document.querySelector("h1")
// const body = h1.parentNode.parentNode; 

// body.style.color = "#efefef";
// body.style.backgroundColor = "#333";

// To select body directly 
// const body = document.body; 
// console.log(body)

// query selector inside a tag( head here )
// const head = document.head; 
// const head = document.querySelector("head"); 
// console.log(head)

// const title = head.querySelector("title"); 
// console.log(title) // <title>DOM traversing</title>

// console.log(title.childNodes); // NodeList [text]
// here childNode of title is text node

// sometimes we want to avoid text node ( means new line space ) I only want to see it element nodes as childNodes

// const container = document.querySelector(".container")
// console.log(container.childNodes); // NodeList(5) [text, h1, text, p, text]
// only element nodes avoid text node ( new line space )
// console.log(container.children); // HTMLCollection(2) [h1, p]
// remember returning only HTML Collection
