var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        
        var panel = this.nextElementSibling;
        var arrow = this.querySelector(".arrow");

        if (panel.classList.contains("open")) {
            panel.classList.remove("open");
            arrow.style.transform = "rotate(-45deg)";
        } else {
            panel.classList.add("open");
            arrow.style.transform = "rotate(45deg)"; 
        }
    });
}
