const activePage=window.location.pathname;
const navLinks=document.querySelectorAll("nav a");
navLinks.forEach(Link=>{
    if(Link.href.includes(`${activePage}`)){
        Link.classList.add("active");
    }
});