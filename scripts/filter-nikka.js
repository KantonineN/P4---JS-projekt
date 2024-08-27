const movies = [
    {"title": "Mørkeland", "version": ["Tapas&Film", "BabyBio"], "format": ["2d"], "image": "images/movies/morkeland.jpeg", "start": new Date (), "end": new Date (2024, 9, 24)},
    {"title": "Deadpool & Wolverine", "version": ["BabyBio"], "format": ["2d"], "image": "images/movies/deadpoolwolverine.jpeg", "start": new Date (), "end": new Date (2024, 10, 17)},
    {"title": "Alien: Romulus", "version": [], "format": ["2d"], "image": "images/movies/alien.jpg", "start": new Date (), "end": new Date (2024, 8, 7)},
    {"title": "Longlegs", "version": [], "format": ["2d"], "image": "images/movies/longlegs.jpeg", "start": new Date (), "end": new Date (2024, 8, 16)},
    {"title": "Grusomme mig 4", "version": ["Eng. tale", "Dansk tale"], "format": ["2d"], "image": "images/movies/grusommemig.jpeg", "start": new Date (), "end": new Date (2024, 11, 2)},
    {"title": "Inderst inde 2", "version": ["Eng. tale", "Dansk tale"], "format": ["2d"], "image": "images/movies/inderstinde2.jpeg", "start": new Date (), "end": new Date (2024, 10, 11)},
    {"title": "Trap", "version": [], "format": ["2d"], "image": "images/movies/trap.jpeg", "start": new Date (), "end": new Date (2024, 8, 23)},
    {"title": "One Life", "version": [], "format": ["2d"], "image": "images/movies/onelife.jpeg", "start": new Date (), "end": new Date (2024, 9,7)},
    {"title": "Blink Twice", "version": [], "format": ["2d"], "image": "images/movies/blinktwice.jpeg", "start": new Date (), "end": new Date (2024, 9, 1)},
    {"title": "Twisters", "version": [], "format": ["3d"], "image": "images/movies/twisters.jpeg", "start": new Date (), "end": new Date (2024, 9, 4)},
];

function CreateMovieList() {
    // Get the ul element
    const list = document.getElementById("movie-list");

    for (let i = 0; i < movies.length; i++) {
        // Creates a li element for each index in the array
        const li = document.createElement("li");
        li.setAttribute("id", "li" + [i]);
        list.appendChild(li);

        // Creates a article element in the li element for each index in the array
        const article = document.createElement("article");
        article.classList.add("content-wrapper");
        article.setAttribute("id", "content-wrapper" + [i]);
        document.getElementById("li" + [i]).appendChild(article);

        // Creates a a element in the article element for each index in the array
        const a = document.createElement("a");
        a.classList.add("movie-preview-link");
        a.setAttribute("id", "movie-preview-link" + [i]);
        document.getElementById("content-wrapper" + [i]).appendChild(a);

        // Creates div in the a element for each index in the array
        const div = document.createElement("div");
        div.classList.add("field-image");
        div.setAttribute("id", "field-image" + [i]);
        document.getElementById("movie-preview-link" + [i]).appendChild(div);

        // Creates image element in the div for each index in the array
        const img = document.createElement("img");
        img.setAttribute("src", movies[i].image);
        img.setAttribute("alt", movies[i].title + " poster");
        document.getElementById("field-image" + [i]).appendChild(img);

        // Creates h2 in the a element for each index in the array
        const h = document.createElement("h2");
        h.setAttribute("id", "h" + [i]);
        document.getElementById("movie-preview-link" + [i]).appendChild(h);
        document.getElementById("h" + [i]).innerHTML = movies[i].title;

        // Creates button in the a element for each index in the array
        const btn = document.createElement("button");
        btn.classList.add("btn-icon");
        btn.classList.add("field-btn");
        btn.setAttribute("id", "btn" + [i]);
        document.getElementById("movie-preview-link" + [i]).appendChild(btn);
        document.getElementById("btn" + [i]).innerHTML = "Køb ";

        // Creates image in the button element for each index in the array
        const img2 = document.createElement("img");
        img2.classList.add("icon");
        img2.setAttribute("src", "images/icons/ticket-btn.svg");
        img2.setAttribute("alt", "Find billetter");
        document.getElementById("btn" + [i]).appendChild(img2);
    }; 
};

function SetDateRangeDatepicker() {
    const element = document.getElementById('edit_date');
    // creates a date with current date
    const date = new Date();
    
    // sets datepickers first avaliable date to today
    element.min = date.toISOString().split("T")[0];

    // Sets the latest date to 3 months from now
    element.max = new Date(date.setMonth(date.getMonth() + 3)).toISOString().split("T")[0];
};

function SetDropdownTitles() {
    // Get select element with chosen id
    const select = document.getElementById("edit_title");

    // Iterate through movies array
    for (let i = 0; i < movies.length; i++) {
        // creates a const with the object at index i in movies
        const title = movies[i].title;
        // creates an option with the title for the current index
        // new Option(text, value)
        select.options.add(new Option(title, title));
    };
};

// Creates an array with the unique versions from movies array
function CreateUniqueVersions() {
    // Creates an array for containing the unique version from movies
    const uniqueVersionDict = [];
    // Get select element with chosen id
    const select = document.getElementById("edit_version");

    // Iterate through movies array
    for (let i = 0; i < movies.length; i++) {
        // creates an array with the object at index i in movies
        const versionArray = movies[i].version;

        // Iterate through the versionArray
        for (let i = 0; i < versionArray.length; i++) {
            // creates a const with the element at index i in versionArray
            const version = versionArray[i];
            // Checks if the version already exsist in uniqueVersionDict
            if (uniqueVersionDict.includes(version)) {
                // if the version exsist do nothing
            } else {
                // else append the version to uniqueVersionDict
                uniqueVersionDict.push(version);
            };
        };
    };
    return uniqueVersionDict;
};

function SetDropdownVersions() {
    // Sets uniqueVersion equal to the return value from CreateUniqueVersions()
    const uniqueVersions = CreateUniqueVersions();
    // Get select element with chosen id
    const select = document.getElementById("edit_version");
    
    // Iterate through uniqueVersions
    for (let i = 0; i < uniqueVersions.length; i++) {
        // creates a const with the element at index i in uniqueVersions
        const version = uniqueVersions[i];
        // creates an option with the version for the current index
        // new Option(text, value)
        select.options.add(new Option(version, version));
    };
};

function GetFilteredMovies() {
    // Gets the li elements of movie-list. Used for showing/hiding the elements
    const movieList = document.getElementById("movie-list").children;

    // Gets the value from the datepicker
    let filterDate = document.getElementById("edit_date").value;
    // Gets the value from the title dropdown
    const filterTitle = document.getElementById("edit_title").value;
    // Gets the value from the version dropdown
    const filterVersion = document.getElementById("edit_version").value;
    // Makes an array of the radio button objects
    let filterFormat = document.getElementsByName("format");

    // If no date is set then sets the filterDate to today for filter purposes
    if (filterDate == "") {
        filterDate = new Date().toISOString().split("T")[0];
    };

    // Iterate through the radio buttons to find which one is checked and gets its value
    filterFormat.forEach(element => {
        if (element.checked) {
            filterFormat = element.value;
        };
    });

    // Iterate through movies array
    for (let i = 0; i < movies.length; i++) {
        // Finds each movies start date, end date, title, versions and formats
        const listStartDate = movies[i].start.toISOString().split("T")[0];
        const listEndDate = movies[i].end.toISOString().split("T")[0];
        const listTitle = movies[i].title;
        const listVersion = movies[i].version;
        const listFormat = movies[i].format;

        // Calls the filter function and shows/hides the list element depending on the return value
        if (Filter(filterDate, filterTitle, filterVersion, filterFormat, listStartDate, listEndDate, listTitle, listVersion, listFormat) == true) {
            movieList[i].style.display = "list-item";
        } else {
            movieList[i].style.display = "none";
        };
    };
};

function Filter (filterDate, filterTitle, filterVersion, filterFormat, listStartDate, listEndDate, listTitle, listVersion, listFormat) {
    // If chosen date isn't within date range
    if (listStartDate > filterDate || filterDate > listEndDate) {
        return false;
    };
    // if title filter isn't all or equal to the title
    if (filterTitle != "all" && filterTitle != listTitle) {
        return false;
    };
    // if version filter isn't all or equal to the version
    // indexOf is used to see if the filter value is in the listVersion array
    if (filterVersion != "all" && listVersion.indexOf(filterVersion) == -1) {
        return false;
    }
    // if format filter isn't all or equal to the format
    if (filterFormat != "all" && listFormat.indexOf(filterFormat) == -1) {
        return false;
    }
    // If none of the filter conditions is met return true
    return true;
};

CreateMovieList();

SetDateRangeDatepicker();
SetDropdownTitles();
SetDropdownVersions();

document.getElementById("edit_date").addEventListener("change", GetFilteredMovies);
document.getElementById("edit_title").addEventListener("change", GetFilteredMovies);
document.getElementById("edit_version").addEventListener("change", GetFilteredMovies);
document.getElementById("edit_format1").addEventListener("change", GetFilteredMovies);
document.getElementById("edit_format2").addEventListener("change", GetFilteredMovies);
document.getElementById("edit_format3").addEventListener("change", GetFilteredMovies);