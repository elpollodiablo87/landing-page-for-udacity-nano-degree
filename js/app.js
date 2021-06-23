/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const frag = document.createDocumentFragment(); 
const navList = document.getElementById('navbar__list');
const sectionList = document.querySelectorAll('section');
const listItem = document.querySelectorAll('li');
const navLink = document.querySelectorAll('a');

/**
 * End Global Variables

 * Begin Main Functions
 * 
*/

// build the nav
sectionList.forEach((section)=>{
	let li = document.createElement('li');
	let anchor = document.createElement('a');
	anchor.textContent = section.getAttribute('data-nav');
	anchor.href = '#'+section.getAttribute('id');
	li.appendChild(anchor);
	frag.appendChild(li);
	//prevent navigation from jumping to sections
	anchor.addEventListener('click', (evt)=> {
		evt.preventDefault();
		section.scrollIntoView({behavior: 'smooth'});
	})
})

navList.appendChild(frag);

// Add class 'active' to section when near top of viewport

window.addEventListener("scroll", ()=> {
	sectionList.forEach((val, index, arr)=> {
	let rect = val.getBoundingClientRect();
	console.log(rect);
	if (rect.top > 0 && rect.top < 700 ) {
		val.classList.add('your-active-class');
		console.log('class added');
	} else {
		val.classList.remove('your-active-class');
		console.log('class removed');
	}
})
})



/**
 * End Main Functions
 * Begin Events
 * 
*/

