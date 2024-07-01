document.addEventListener('DOMContentLoaded', (event) => {
    function updateTimeAndDay() {
        const now = new Date();
        const utcHours = (now.getUTCHours() + 1) % 24; // Add 1 hour to adjust
        const utcMinutes = now.getUTCMinutes().toString().padStart(2, '0');
        const utcSeconds = now.getUTCSeconds().toString().padStart(2, '0');
        const utcTime = `${utcHours.toString().padStart(2, '0')}:${utcMinutes}:${utcSeconds}`;
        const day = now.toLocaleDateString('en-US', { weekday: 'long' });

        document.getElementById('current-time').textContent = utcTime;
        document.getElementById('current-day').textContent = day;
    }

    updateTimeAndDay();
    setInterval(updateTimeAndDay, 1000);
});
