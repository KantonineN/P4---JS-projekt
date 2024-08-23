let movies = [
    {"title": "Mørkeland", "image": "images/movies/morkeland.jpeg", "start": new Date (), "end": new Date (2024, 9, 24), "format": ["2d"], "version": ["Tapas&Film", "BabyBio"]},
    {"title": "Deadpool & Wolverine", "image": "images/movies/deadpoolwolverine.jpeg", "start": new Date (), "end": new Date (2024, 10, 17), "format": ["2d"], "version": []},
    {"title": "Alien: Romulus", "image": "images/movies/alien.jpg", "start": new Date (), "end": new Date (2024, 8, 7), "format": ["2d"], "version": []},
    {"title": "Longlegs", "image": "images/movies/longlegs.jpeg", "start": new Date (), "end": new Date (2024, 8, 16), "format": ["2d"], "version": []},
    {"title": "Grusomme mig 4", "image": "images/movies/grusommemig.jpeg", "start": new Date (), "end": new Date (2024, 11, 2), "format": ["2d"], "version": []},
    {"title": "Inderst inde 2", "image": "images/movies/inderstinde2.jpeg", "start": new Date (), "end": new Date (2024, 10, 11), "format": ["2d"], "version": []},
    {"title": "Trap", "image": "images/movies/trap.jpeg", "start": new Date (), "end": new Date (2024, 8, 23), "format": ["2d"], "version": []},
    {"title": "One Life", "image": "images/movies/onelife.jpeg", "start": new Date (), "end": new Date (2024, 9,7), "format": ["2d"], "version": []},
    {"title": "Blink Twice", "image": "images/movies/blinktwice.jpeg", "start": new Date (), "end": new Date (2024, 9, 1), "format": ["2d"], "version": []},
    {"title": "Twisters", "image": "images/movies/twisters.jpeg", "start": new Date (), "end": new Date (2024, 9, 4), "format": ["2d"], "version": []},
];

function setDateForDatepicker() {
    let d = new Date();
    const dateCurrent = new Date(d.getTime());
    // Sets the first possible date to today
    document.getElementById('choose_date').min = new Date(d.getTime()).toISOString().split("T")[0];
    // Sets the latest date to 3 months from now
    document.getElementById('choose_date').max = new Date(d.setMonth(d.getMonth() + 3)).toISOString().split("T")[0];
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

function GetDropdownData(filterName) {
    selectTitle = document.getElementById("choose_title");
    const filters = filterName;
    for (let i = 0; i < movies.length; i++) {
        // const movie = "movies[i]" + filter;
        const movie = movies[i];
        // console.log(movie)
        selectTitle.options.add(new Option(movie.title, movie.title));
    };
}

setDateForDatepicker();

// Kan man sende en param med f.eks. title?
GetDropdownData(".title");
// Er det muligt at bruge id eller name til at bestemme hvilke data der skal trækkes ud?