// Disable Right Click
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

// Disable key shortcuts
document.addEventListener("keydown", function (e) {

    // F12
    if (e.key === "F12") {
        e.preventDefault();
    }

    // Ctrl+Shift+I / Ctrl+Shift+C / Ctrl+Shift+J
    if (e.ctrlKey && e.shiftKey && (
        e.key === "I" || 
        e.key === "C" || 
        e.key === "J"
    )) {
        e.preventDefault();
    }

    // Ctrl+U (View Source)
    if (e.ctrlKey && e.key === "u") {
        e.preventDefault();
    }

    // Ctrl+S (Save page)
    if (e.ctrlKey && e.key === "s") {
        e.preventDefault();
    }

    // Ctrl+Shift+K (Firefox DevTools)
    if (e.ctrlKey && e.shiftKey && e.key === "K") {
        e.preventDefault();
    }
});

// Detect DevTools open (basic)
setInterval(function () {
    const widthThreshold = window.outerWidth - window.innerWidth > 160;
    const heightThreshold = window.outerHeight - window.innerHeight > 160;

    if (widthThreshold || heightThreshold) {
        document.body.innerHTML = "<h1 style='text-align:center;margin-top:20%;font-family:sans-serif;'>Access Denied</h1>";
    }
}, 1000);
