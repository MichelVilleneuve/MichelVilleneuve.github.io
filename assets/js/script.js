// Project data cache
let projects = [];
let currentFilter = 'all';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    setupFilterButtons();
});

// Load all projects from projects.json manifest
async function loadProjects() {
    try {
        // Load the projects manifest
        const manifestResponse = await fetch('projects.json?v=' + Date.now());
        if (!manifestResponse.ok) {
            console.error('Could not load projects.json manifest');
            return;
        }
        const manifest = await manifestResponse.json();
        const projectFolders = manifest.projects || [];

        // Load each project's JSON
        for (const folder of projectFolders) {
            try {
                const response = await fetch(`projects/${folder}/${folder}.json?v=${Date.now()}`);
                if (response.ok) {
                    const data = await response.json();
                    projects.push(data);
                } else {
                    console.warn(`Could not load project: ${folder}`);
                }
            } catch (err) {
                console.warn(`Error loading project ${folder}:`, err);
            }
        }

        if (projects.length === 0) {
            console.warn('No projects found');
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
        
        // Simple substring match on project type
        if (currentFilter === 'visual-studio') {
            return project.type.toLowerCase().includes('visual studio') || project.type.toLowerCase().includes('c#');
        }
        if (currentFilter === 'android') {
            return project.type.toLowerCase().includes('android');
        }
        
        return true;
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

    // Use thumbnail if available, otherwise use first screenshot
    let thumbnail = null;
if (project.thumbnail) {
    thumbnail = `projects/${project.folder}/screenshots/${project.thumbnail}`;
    } else if (project.screenshots && project.screenshots[0]) {
        thumbnail = `projects/${project.folder}/screenshots/${project.screenshots[0]}`;
    }

    const tagsHtml = project.tech
        ? project.tech.map(t => `<span class="tag">${t}</span>`).join('')
        : '';

    card.innerHTML = `
        <div class="project-thumbnail">
            ${thumbnail ? `<img src="${thumbnail}" alt="${project.name}">` : 'Screenshot'}
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
            if (e.key === 'ArrowLeft') {
                this.previous();
            }

            if (e.key === 'ArrowRight') {
                this.next();
            }
        });

        // Reposition arrows when browser window changes size
        window.addEventListener('resize', () => {
            this.positionArrows();
        });

        // Wait for images to finish loading
        this.container.querySelectorAll('img').forEach(img => {
            if (img.complete) {
                this.positionArrows();
            } else {
                img.addEventListener('load', () => {
                    this.positionArrows();
                });
            }
        });
    }

    showSlide(index) {
        if (this.slides.length === 0) return;

        // Wrap around
        if (index >= this.slides.length) {
            index = 0;
        }

        if (index < 0) {
            index = this.slides.length - 1;
        }

        this.currentIndex = index;

        // Hide all slides
        this.slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Show current slide
        this.slides[this.currentIndex].classList.add('active');

        // Update counter
        if (this.counter) {
            this.counter.textContent =
                `${this.currentIndex + 1} of ${this.slides.length}`;
        }

        // Position arrows for the new image
        // A tiny delay lets the browser calculate the image dimensions
        requestAnimationFrame(() => {
            this.positionArrows();
        });
    }

    positionArrows() {
        if (!this.container) return;

        const activeSlide = this.slides[this.currentIndex];

        if (!activeSlide) return;

        const image = activeSlide.querySelector('img');

        if (!image) return;

        // Get actual displayed image dimensions
        const imageRect = image.getBoundingClientRect();
        const containerRect = this.container.getBoundingClientRect();

        // Width of the arrow buttons
        const buttonWidth = this.prevBtn
            ? this.prevBtn.offsetWidth
            : 44;

        const gap = 8;

        // Calculate image position relative to carousel
        const imageLeft = imageRect.left - containerRect.left;
        const imageRight = imageRect.right - containerRect.left;

        // Position previous arrow just outside left side of image
        if (this.prevBtn) {
            let leftPosition = imageLeft - buttonWidth - gap;

            // Don't let arrow go outside carousel
            leftPosition = Math.max(8, leftPosition);

            this.prevBtn.style.left = `${leftPosition}px`;
            this.prevBtn.style.right = 'auto';
        }

        // Position next arrow just outside right side of image
        if (this.nextBtn) {
            let rightPosition =
                containerRect.right - imageRect.right - buttonWidth - gap;

            // Don't let arrow go outside carousel
            rightPosition = Math.max(8, rightPosition);

            this.nextBtn.style.right = `${rightPosition}px`;
            this.nextBtn.style.left = 'auto';
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
