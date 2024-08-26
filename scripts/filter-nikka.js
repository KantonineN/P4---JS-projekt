let movies = [
    {"title": "Mørkeland", "format": ["2d"], "version": ["Tapas&Film", "BabyBio"], "image": "images/movies/morkeland.jpeg", "start": new Date (), "end": new Date (2024, 9, 24)},
    {"title": "Deadpool & Wolverine", "format": ["2d"], "version": [], "image": "images/movies/deadpoolwolverine.jpeg", "start": new Date (), "end": new Date (2024, 10, 17)},
    {"title": "Alien: Romulus", "format": ["2d"], "version": [], "image": "images/movies/alien.jpg", "start": new Date (), "end": new Date (2024, 8, 7)},
    {"title": "Longlegs", "format": ["2d"], "version": [], "image": "images/movies/longlegs.jpeg", "start": new Date (), "end": new Date (2024, 8, 16)},
    {"title": "Grusomme mig 4", "format": ["2d"], "version": [], "image": "images/movies/grusommemig.jpeg", "start": new Date (), "end": new Date (2024, 11, 2)},
    {"title": "Inderst inde 2", "format": ["2d"], "version": [], "image": "images/movies/inderstinde2.jpeg", "start": new Date (), "end": new Date (2024, 10, 11)},
    {"title": "Trap", "format": ["2d"], "version": [], "image": "images/movies/trap.jpeg", "start": new Date (), "end": new Date (2024, 8, 23)},
    {"title": "One Life", "format": ["2d"], "version": [], "image": "images/movies/onelife.jpeg", "start": new Date (), "end": new Date (2024, 9,7)},
    {"title": "Blink Twice", "format": ["2d"], "version": [], "image": "images/movies/blinktwice.jpeg", "start": new Date (), "end": new Date (2024, 9, 1)},
    {"title": "Twisters", "format": ["2d"], "version": [], "image": "images/movies/twisters.jpeg", "start": new Date (), "end": new Date (2024, 9, 4)},
];


function CreateMovieList() {
    // Get the ul element
    let list = document.getElementById("movie-list");

    for (let i = 0; i < movies.length; i++) {
        // Creates a li element for each index in the array
        let li = document.createElement("li");
        li.setAttribute("id", "li" + [i]);
        list.appendChild(li);

        // Creates a article element in the li element for each index in the array
        let article = document.createElement("article");
        article.classList.add("content-wrapper");
        article.setAttribute("id", "content-wrapper" + [i]);
        document.getElementById("li" + [i]).appendChild(article);

        // Creates a a element in the article element for each index in the array
        let a = document.createElement("a");
        a.classList.add("movie-preview-link");
        a.setAttribute("id", "movie-preview-link" + [i]);
        document.getElementById("content-wrapper" + [i]).appendChild(a);

        // Creates div in the a element for each index in the array
        let div = document.createElement("div");
        div.classList.add("field-image");
        div.setAttribute("id", "field-image" + [i]);
        document.getElementById("movie-preview-link" + [i]).appendChild(div);

        // Creates image element in the div for each index in the array
        let img = document.createElement("img");
        img.setAttribute("src", movies[i].image);
        img.setAttribute("alt", movies[i].title + " poster");
        document.getElementById("field-image" + [i]).appendChild(img);

        // Creates h2 in the a element for each index in the array
        let h = document.createElement("h2");
        h.setAttribute("id", "h" + [i]);
        document.getElementById("movie-preview-link" + [i]).appendChild(h);
        document.getElementById("h" + [i]).innerHTML = movies[i].title;

        // Creates button in the a element for each index in the array
        let btn = document.createElement("button");
        btn.classList.add("btn-icon");
        btn.classList.add("field-btn");
        btn.setAttribute("id", "btn" + [i]);
        document.getElementById("movie-preview-link" + [i]).appendChild(btn);
        document.getElementById("btn" + [i]).innerHTML = "Køb ";

        // Creates image in the button element for each index in the array
        let img2 = document.createElement("img");
        img2.classList.add("icon");
        img2.setAttribute("src", "images/icons/ticket-btn.svg");
        img2.setAttribute("alt", "Find billetter");
        document.getElementById("btn" + [i]).appendChild(img2);
    }    
}

function SetDateRangeDatepicker() {
    const element = document.getElementById('edit_date');
    // creates a date with current date
    const date = new Date();
    
    // sets datepickers first avaliable date to today
    element.min = date.toISOString().split("T")[0];

    // Sets the latest date to 3 months from now
    element.max = new Date(date.setMonth(date.getMonth() + 3)).toISOString().split("T")[0];
}

// function GetDropdownData(filterId, filterName) {
//     selectType = document.getElementById(filterId);
//     const filters = filterName;
//     // const filters = "movie." + filterName;
//     for (let i = 0; i < movies.length; i++) {
//         // const movie = "movies[i]" + filter;
//         const movie = movies[i];
//         // console.log(movie)
//         selectType.options.add(new Option(movie.title, movie.title));
//     };
// }

function GetUniqueValuesFromArray() {
    let uniqueArrayValue = {};

    allFilters = document.querySelectorAll(".table-filter");
    console.log(allFilters);
    // allFilters.forEach(element => {
        // console.log(element.id);
        // console.log(element.name);
        
        // movies.forEach(element => {
            
        // });
    // });

    for (let i = 0; i < allFilters.length; i++) {
        console.log("For loop called")
        console.log(allFilters[i].id)
        console.log(allFilters[i].name)
    }

    // for (let i; i < allFilters.length; i++) {
    //     console.log("called")
    //     selectType = document.getElementById(allFilters[i]);
    //     console.log(allFilters[i]);
    //     console.log(allFilters.selectTypeByTagName("select"));
    // }
}

function Filter(input) {
    const testInput = input;
    const filteredData = [];
    for (let i = 0; i < movies.length; i++) {
        let movie = movies[i];
        // Checks if the chosen date is after the start date and before end date
        if (testInput > movie.start && testInput < movie.end) {
            filteredData.push(movie);
            console.log(movie);
        }
    };
    console.log(filteredData);
}

CreateMovieList();

SetDateRangeDatepicker();

GetUniqueValuesFromArray();

// Kan man sende en param med f.eks. title?
// GetDropdownData("edit_title", "title");
// Er det muligt at bruge id eller name til at bestemme hvilke data der skal trækkes ud?