// call IDs
let home = document.getElementById('home');
let analytics = document.getElementById('analytics');
let settings = document.getElementById('settings');
let houseBtn = document.getElementById('house');
let chartBtn = document.getElementById('chart');
let gears = document.getElementById('gears');
let fahouse = document.getElementById('fahouse');
let fachart = document.getElementById('fachart');
let fagears = document.getElementById('fagears');


// hidden sections
analytics.style.display = "none";
settings.style.display = "none"; 

// dynamic hidden sections


function houseClick () {
    home.style.display = "block";
    analytics.style.display = "none";
    settings.style.display = "none"; 
    fahouse.classList.add('active');
    fachart.classList.remove('active');
    fagears.classList.remove('active');
}

function chatClick () {
    home.style.display = "none";
    analytics.style.display = "block";
    settings.style.display = "none"; 
    fahouse.classList.remove('active');
    fachart.classList.add('active');
    fagears.classList.remove('active');
}

function gearsClick () {
    home.style.display = "none";
    analytics.style.display = "none";
    settings.style.display = "block"; 
    fahouse.classList.remove('active');
    fachart.classList.remove('active');
    fagears.classList.add('active');
}

