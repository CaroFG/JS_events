// Fonctionnalité 1 :

let myFooter = document.getElementsByTagName("footer")[0]

function onClickFooter(){ console.log("clique")}

myFooter.addEventListener("click", onClickFooter);


// Fonctionnalité 1-bis :
// count = 0;
//myFooter.onclick = function onClickNumber() {
//	count+= 1;
//	console.log(`clique numero ${count}`);
//};

count = 0;
function onClickNumber() {
	count+= 1;
	console.log(`clique numero ${count}`);
};
myFooter.addEventListener("click", onClickNumber);



// Fonctionnalité 2 :
