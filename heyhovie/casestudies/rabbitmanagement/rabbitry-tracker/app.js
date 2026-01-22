import { MILESTONES } from 'js/content.js';

document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('mating-date');
    const calcBtn = document.getElementById('calculate-btn');
    const timeline = document.getElementById('timeline');

    calcBtn.addEventListener('click', () => {
        const startDate = new Date(dateInput.value);
        
        if (isNaN(startDate)) {
            alert("Please select a valid mating date.");
            return;
        }
        
        renderTimeline(startDate);
    });

    function renderTimeline(start) {
        timeline.innerHTML = ''; // Clear previous

        MILESTONES.forEach(item => {
            const milestoneDate = new Date(start);
            milestoneDate.setDate(start.getDate() + item.day);

            const card = document.createElement('div');
            card.className = `card ${item.critical ? 'critical' : ''}`;
            
            card.innerHTML = `
                <div class="date">${milestoneDate.toDateString()}</div>
                <h3>${item.title}</h3>
                <div class="tip"><strong>Pro-Tip:</strong> ${item.tip}</div>
            `;
            
            timeline.appendChild(card);
        });
    }
});