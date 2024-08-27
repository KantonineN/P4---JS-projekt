const acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        
        const panel = this.nextElementSibling;
        const arrow = this.querySelector(".arrow");

        if (panel.classList.contains("open")) {
            panel.classList.remove("open");
            arrow.style.transform = "rotate(-45deg)";
        } else {
            panel.classList.add("open");
            arrow.style.transform = "rotate(45deg)"; 
        }
    });
}
