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
const navlist = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section')



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// reference from: https://knowledge.udacity.com/questions/517882, https://knowledge.udacity.com/questions/519933
// build the nav
function generateNavbar(){
    const sections=Array.from(document.getElementsByTagName("section"));
    const navlist=document.getElementById("navbar__list");
    for(section of sections){
        const navbarItem=document.createElement("li");
        const navbarItemLink=document.createElement("a");
        navbarItemLink.dataset["nav"] = section.id;
        navbarItemLink.innerHTML = section.dataset.nav;
        navbarItemLink.classList.add("menu__link");
        // here you can add the content of the <a></a> tag
        //those content may generated from the section itself
        //append it to the navbarItem
        
        navbarItem.appendChild(navbarItemLink);
        // append the navbarItem to the list
        navlist.appendChild(navbarItem);
    }
}
// reference: https://knowledge.udacity.com/questions/522060
// using bounding
const navchecksize = (section) =>{
    let navsize = section.getBoundingClientRect();
    return (
        navsize.top >= 0 &&
        navsize.left >= 0 &&
        navsize.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        navsize.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
    //navchecksize.appendChild(navsize);
};
//make class active
// reference: https://knowledge.udacity.com/questions/534654
function setActive(){
    for(navbarItemLink of sections){
        for(navbarItem of sections){
            if(navchecksize(navbarItem)){
                navbarItem.classList.add("active__class");
            }else{
               navbarItem.classList.remove("active__class");
            }
            }
            if(navchecksize(navbarItemLink)){
                //navbarItem.classList.add("active__class")
                navbarItemLink.classList.add("active__class");
            }else{
            // navbarItem.classList.remove("active__class")        
                navbarItemLink.classList.remove("active__class");
            }
    }
};

// reference from: https://knowledge.udacity.com/questions/523891
// Scroll to anchor ID using scrollTO event

const scrolling = () => {
    window.addEventListener('scroll', function(){
        setActive();
    });
    const links = document.querySelectorAll('.navbar__menu a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            // Fetching which section to scroll to using querySelector
            // The section id we passed is fetched from the dataset-nav of the link clicked
            let section = document.querySelector(`section#${link.dataset.nav}`);
            // Using scrollIntoView to scroll to the section
            section.scrollIntoView({behavior: "smooth"});
        });
    });
   
};


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
generateNavbar();
// Scroll to section on link click
scrolling();
// Set sections as active
setActive();

