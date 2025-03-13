function updateClock() {
    const now = new Date();
    
    // Time
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    document.getElementById("clock").innerText = `${hours}:${minutes}:${seconds}`;

    // Date
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("date").innerText = now.toLocaleDateString("en-US", options);

    // Highlight current weekday
    const weekDays = document.querySelectorAll(".weekdays span");
    weekDays.forEach((day, index) => {
        day.classList.toggle("active", index === now.getDay());
    });
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock();
