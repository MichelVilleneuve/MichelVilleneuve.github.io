// Project data cache
let projects = [];
let currentFilter = 'all';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    setupFilterButtons();
});

// Load all projects from their JSON files
async function loadProjects() {
    try {
        // This will be populated as you add projects
        // For now, we'll look for projects in the projects/ directory
        const projectFolders = [
            'billboard-app',
            'inventor-files-manager',
            'postit-app'
        ];

        for (const folder of projectFolders) {
            try {
                const response = await fetch(`projects/${folder}/${folder}.json`);
                if (response.ok) {
                    const data = await response.json();
                    projects.push(data);
                }
            } catch (err) {
                console.log(`Project ${folder} not yet added`);
            }
        }

        renderProjects();
    } catch (err) {
        console.error('Error loading projects:', err);
    }
}

// Render projects based on current filter
function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = '';

    const filtered = projects.filter(project => {
        if (currentFilter === 'all') return true;
        return project.type.toLowerCase().includes(currentFilter);
    });

    if (filtered.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #888; padding: 2rem;">No projects found</p>';
        return;
    }

    filtered.forEach(project => {
        const card = createProjectCard(project);
        grid.appendChild(card);
    });
}

// Create a project card element
function createProjectCard(project) {
    const card = document.createElement('a');
    card.href = `projects/${project.folder}/`;
    card.className = 'project-card';

    // Get first screenshot if available
    const screenshot = project.screenshots && project.screenshots[0] 
        ? `projects/${project.folder}/screenshots/${project.screenshots[0]}`
        : null;

    const tagsHtml = project.tech
        ? project.tech.map(t => `<span class="tag">${t}</span>`).join('')
        : '';

    card.innerHTML = `
        <div class="project-thumbnail">
            ${screenshot ? `<img src="${screenshot}" alt="${project.name}">` : 'Screenshot'}
        </div>
        <div class="project-info">
            <h3 class="project-title">${project.name}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">${tagsHtml}</div>
            <span class="project-link">
                View on GitHub
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M7 17L17 7M7 7h10v10"></path>
                </svg>
            </span>
        </div>
    `;

    return card;
}

// Setup filter buttons
function setupFilterButtons() {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderProjects();
        });
    });
}

// Carousel functionality (for detail pages)
class Carousel {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;

        this.slides = this.container.querySelectorAll('.carousel-slide');
        this.currentIndex = 0;

        if (this.slides.length === 0) return;

        this.prevBtn = this.container.querySelector('.carousel-prev');
        this.nextBtn = this.container.querySelector('.carousel-next');
        this.counter = this.container.querySelector('.carousel-counter');

        this.setup();
    }

    setup() {
        this.showSlide(0);

        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.previous());
        }
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.next());
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.previous();
            if (e.key === 'ArrowRight') this.next();
        });
    }

    showSlide(index) {
        if (this.slides.length === 0) return;

        // Wrap around
        if (index >= this.slides.length) index = 0;
        if (index < 0) index = this.slides.length - 1;

        this.currentIndex = index;

        // Hide all slides
        this.slides.forEach(slide => slide.classList.remove('active'));
        // Show current slide
        this.slides[this.currentIndex].classList.add('active');

        // Update counter
        if (this.counter) {
            this.counter.textContent = `${this.currentIndex + 1} of ${this.slides.length}`;
        }
    }

    next() {
        this.showSlide(this.currentIndex + 1);
    }

    previous() {
        this.showSlide(this.currentIndex - 1);
    }
}

// Initialize carousel on detail pages
window.Carousel = Carousel;
