// Fonctionnalité 1 :
function feature1() {
	let myFooter = document.getElementsByTagName("footer")[0]

	function onClickFooter(){ console.log("clique")}

	myFooter.addEventListener("click", onClickFooter);

};


function feature1bis() {
	let myFooter = document.getElementsByTagName("footer")[0]
	count = 0;
	function onClickNumber() {
		count+= 1;
		console.log(`click numéro ${count}`);
	};

	myFooter.addEventListener("click", onClickNumber);
};


// Fonctionnalité 2 :

function feature2() {
	let btnNavbar = document.getElementsByClassName("navbar-toggler")[0];

	let navbarEl = document.getElementById("navbarHeader");

	function removeCollapse() {
		navbarEl.classList.toggle("collapse");
	};

	btnNavbar.addEventListener('click', removeCollapse);
};


// Fonctionnalité 3 :

function feature3() {
	let editBtn = document.getElementsByClassName("btn")[3];
	let editText = document.getElementsByClassName("card-text")[0];
	function changeText() {
		editText.style.color = 'red';
	};

	editBtn.addEventListener('click', changeText);
};


// Fonctionnalité 4 :

function feature4() {
	let editCard = document.getElementsByClassName("btn")[5];
	console.log(editCard);
	let cardText = document.getElementsByClassName("card-text")[1];
	console.log(cardText);

	function changeColor() {
		if (cardText.style.color == 'green') {
			cardText.style.color = '';
		} else {
			cardText.style.color = 'green'
		}
	};

	editCard.addEventListener('click', changeColor);
};


// Fonctionnalité 5 :

function feature5() {
	let navbar = document.getElementsByClassName("navbar")[0];
	let head = document.getElementsByTagName("head")[0];
	let headLink = head.querySelectorAll("link")[0];

	function removeLink() {
		if (headLink.disabled == true){
			headLink.disabled = false;
		} else {headLink.disabled = true}
	};

	navbar.addEventListener('dblclick', removeLink);
};


// Fonctionnalité 6 :

function feature6() {
	let myCards = document.querySelectorAll(".card");
	myCards.forEach(card => {
		let buttonSuccess = card.getElementsByClassName("btn-success")[0];
		
		function reduceCard(){
			card.querySelectorAll("p")[0].classList.toggle("d-none");
			if (card.style.width == '20%'){
				card.style.width = '100%';
				card.style.heigth = 'auto';
			} else { card.style.width = '20%'}
		};
		buttonSuccess.addEventListener('mouseover', reduceCard);
	});
	
};




// Fonctionnalité 7 :

function feature7() {

	let greyBtn = document.getElementsByClassName("btn-secondary")[0];

	function insertCardBefore() {
		let cardsContainer = document.getElementsByClassName("row")[1];
		let cards = document.querySelectorAll(".card");
		let lastCard = cardsContainer.lastChild;
		cardsContainer.insertBefore(lastCard, cardsContainer.firstChild);
	};

	greyBtn.addEventListener('click', insertCardBefore);

};


// Fonctionnalité 8 :

function feature8() {
	let cardsPannel = document.getElementsByClassName("row")[1];;
	let blueBtn = document.getElementsByClassName("btn-primary")[0];

	function inserCardAfter(e) {
		e.preventDefault();
		let firstCard = cardsPannel.firstChild;	
		cardsPannel.appendChild(firstCard);
	};

	blueBtn.addEventListener('click', inserCardAfter, true);
};


feature1()
feature1bis()
feature2()
feature3()
feature4()
feature5()
feature6()
feature7()
feature8()