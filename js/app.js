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
const navbar__list = document.getElementById('navbar__list');
const sections_list = document.querySelectorAll('section');



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// Function for smooth scrolling to sections when clicking nav items
const smoothScroll = (link, section)=> {
    link.addEventListener('click', (event)=>{
        event.preventDefault();
        section.scrollIntoView({
            behavior: 'smooth'
        })
     })
}
// Function for dynamically adding listitems which contain anchor tags for navigation
const addListItem = () => {
    sections_list.forEach((section)=>{
        let listItem = document.createElement('li');
        navbar__list.append(listItem);
        listItem.insertAdjacentHTML('afterbegin', `<a href='#${section.getAttribute('id')}'>${section.getAttribute('data-nav')}</a>`);
        smoothScroll(listItem, section);
    })
}

const activeClass = () => {
    sections_list.forEach((section)=> {
        observer = new IntersectionObserver((targets) => {
            targets.forEach((target) => {
              if (target.intersectionRatio > 0 ) {
                section.classList.add('your-active-class')
              } else {
                section.classList.remove('your-active-class')
              }
            });
          });
          
          observer.observe(section);
    })
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
const main = () => {
    addListItem();
    activeClass();
}
window.onload = main()
// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

