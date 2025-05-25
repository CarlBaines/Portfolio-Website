// Retrieve the button and the element closest to the top of the page.
const btn = document.getElementById("scroll-to-top-btn");
const darkModeBtn = document.getElementById("dark-mode-btn");

// Button styling
btn.style.opacity = "0";
btn.style.transition = "opacity 0.5s ease";

// set up a window onscroll event which calls the scrollFunction.
window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    // checks if the number of pixels scrolled from the body or from an element has surpassed 60px.
    if(document.body.scrollTop > 60 || document.documentElement.scrollTop > 60){
        // displays the scroll-to-top button.
        btn.style.display = "block";
        btn.style.transition = "opacity 0.5s ease";
        // the setTimeout function allows for changes to the display before changing the opacity of the button.
        setTimeout(() => {
            btn.style.opacity = "1";
        }, 20);
    }
    else{
        // handles when the user scrolls back up the page (< 60px from the top of the page).
        // sets the opacity of the button back to zero to hide the button.
        btn.style.opacity = "0";
        // another setTimeout function is used to gradually reduce the opacity of the button to facilitate the transition applied to the button.
        setTimeout(() => {
            if(btn.style.opacity === "0"){
                btn.style.display = "none";
            }
        }, 500);
    }
}

function toTop(){
    setTimeout(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, 500);
}

function darkMode(){
    let body = document.body;
    body.classList.toggle("dark-mode");
}

darkModeBtn.addEventListener("click", function() {
    // Toggle dark mode when the button is clicked
    darkModeBtn.classList.toggle("active");
    // If dark mode is toggled, change the text of the button
    if (darkModeBtn.classList.contains("active")) {
        darkModeBtn.textContent = "☼";
    } else {
        darkModeBtn.textContent = "☾";
    }
});
