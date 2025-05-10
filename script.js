document.getElementById("animatedImage").classList.add("fade-in");

document.getElementById("interactiveBtn").addEventListener("click", function() {
    this.textContent = "Done!";
    this.style.backgroundColor = "pink";
});


function saveThemePreference(theme) {
    localStorage.setItem("userTheme", theme);
}


function applySavedTheme() {
    let theme = localStorage.getItem("userTheme");
    if (theme) {
        document.body.className = theme; 
    }
}

document.getElementById("themeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
    let currentTheme = document.body.classList.contains("dark-theme") ? "dark-theme" : "light-theme";
    saveThemePreference(currentTheme);
});


applySavedTheme();

