window.addEventListener('load', () => {
    animateNumber('stories-count', 347);
    animateNumber('countries-count', 12);
    animateNumber('memories-count', 892);
});

function animateNumber(id, target) {
    let current = 0;
    const increment = target / 100;
    const element = document.getElementById(id);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 20);
}

function showForm() {
    document.getElementById('interview-form').style.display = 'block';
    document.getElementById('interview-form').scrollIntoView({ behavior: 'smooth' });
}

function showResearch() {
    document.getElementById('research').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('story-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        country: document.getElementById('country').value,
        years: document.getElementById('years').value,
        missing: document.getElementById('missing').value,
        story: document.getElementById('story').value,
        timestamp: new Date().toISOString()
    };
    
    let stories = JSON.parse(localStorage.getItem('stories') || '[]');
    stories.push(formData);
    localStorage.setItem('stories', JSON.stringify(stories));
    
    document.getElementById('stories-count').textContent = stories.length;
    
    alert('Благодарим ви за споделената история!');
    document.getElementById('story-form').reset();
});