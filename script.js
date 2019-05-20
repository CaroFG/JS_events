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


let btnNavbar = document.getElementsByClassName("navbar-toggler")[0];

let navbarEl = document.getElementById("navbarHeader");

function removeCollapse() {
	   navbarEl.classList.toggle("collapse");
};

btnNavbar.addEventListener('click', removeCollapse);