const photos = [
      {
        id: 1,
        title: "Where the Earth Meets the Sky",
        category: "nature",
        description: "A dramatic mountain range rising above the clouds.",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: 2,
        title: "The Quiet Forest",
        category: "nature",
        description: "Sunlight filtering through a peaceful green woodland.",
        image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: 3,
        title: "Alpine Reflections",
        category: "nature",
        description: "Snow-capped peaks reflected in a still mountain lake.",
        image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: 4,
        title: "Golden Hour Valley",
        category: "nature",
        description: "Warm evening light across a beautiful valley.",
        image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: 5,
        title: "Geometry in the City",
        category: "architecture",
        description: "Modern architectural design with beautiful symmetry.",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: 6,
        title: "Urban Lines",
        category: "architecture",
        description: "A striking view between contemporary buildings.",
        image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: 7,
        title: "City That Never Sleeps",
        category: "architecture",
        description: "A glowing city skyline after sunset.",
        image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: 8,
        title: "The Wild Gaze",
        category: "wildlife",
        description: "A beautiful close-up wildlife photograph.",
        image: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: 9,
        title: "Into the Wilderness",
        category: "wildlife",
        description: "Wildlife surrounded by natural landscapes.",
        image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: 10,
        title: "A Feathered Visitor",
        category: "wildlife",
        description: "A colourful bird resting among the branches.",
        image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=1000&q=85"
    },
       {
        id: 11,
        title: "The Blue Beyond",
        category: "ocean",
        description: "Clear turquoise water and a tropical coastline.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: 12,
        title: "Ocean in Motion",
        category: "ocean",
        description: "Powerful waves rolling towards the shore.",
        image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: 13,
        title: "Beneath the Surface",
        category: "ocean",
        description: "An underwater world filled with colour.",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: 14,
        title: "A Road to Remember",
        category: "travel",
        description: "A beautiful road inviting travellers to explore.",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: 15,
        title: "Wander Often",
        category: "travel",
        description: "A breathtaking destination waiting to be explored.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: 16,
        title: "A Place in the Sun",
        category: "travel",
        description: "A charming coastal destination.",
        image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: 17,
        title: "A Universe of Wonder",
        category: "space",
        description: "A deep-space view filled with stars and galaxies.",
        image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: 18,
        title: "The Moon and Beyond",
        category: "space",
        description: "A luminous celestial body surrounded by space.",
        image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: 19,
        title: "Stardust Stories",
        category: "space",
        description: "A brilliant field of stars across the night sky.",
        image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: 20,
        title: "Colour in Motion",
        category: "art",
        description: "An abstract composition of colours and shapes.",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: 21,
        title: "Creative Contrast",
        category: "art",
        description: "A bold artistic scene with beautiful textures.",
        image: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: 22,
        title: "A Taste of Colour",
        category: "food",
        description: "Fresh ingredients in a vibrant composition.",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: 23,
        title: "Made to Be Shared",
        category: "food",
        description: "A beautifully prepared meal.",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: 24,
        title: "The Little Details",
        category: "food",
        description: "A close-up celebration of food and styling.",
        image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1000&q=85"
    }
];
const categoryInfo = [
    {
        id: "nature",
        title: "Nature & Landscapes",
        short: "Nature",
        image: photos[0].image
    },
    {
        id: "architecture",
        title: "Architecture & Cities",
        short: "Architecture",
        image: photos[4].image
    },
    {
        id: "wildlife",
        title: "Wildlife & Animals",
        short: "Wildlife",
        image: photos[7].image
    },
    {
        id: "ocean",
        title: "Ocean & Underwater",
        short: "Ocean",
        image: photos[10].image
    },
    {
        id: "travel",
        title: "Travel & Adventure",
        short: "Travel",
        image: photos[13].image
    },
    {
        id: "space",
        title: "Space & Astronomy",
        short: "Space",
        image: photos[16].image
    },
    {
        id: "art",
        title: "Art & Abstract",
        short: "Art",
        image: photos[19].image
    },
    {
        id: "food",
        title: "Food & Lifestyle",
        short: "Food",
        image: photos[21].image
    }
];
const galleryGrid =
    document.getElementById("galleryGrid");
const categoryGrid =
    document.getElementById("categoryGrid");
const filterList =
    document.getElementById("filterList");
const searchInput =
    document.getElementById("searchInput");
const imageCount =
    document.getElementById("imageCount");
const resultLabel =
    document.getElementById("resultLabel");
const emptyState =
    document.getElementById("emptyState");
let activeCategory = "all";
let visiblePhotos = [...photos];
let currentLightboxIndex = 0;
let lastFocusedElement = null;
function renderCategories() {
    categoryGrid.innerHTML = categoryInfo.map(category => {
        const count = photos.filter(
            photo => photo.category === category.id
        ).length;
        return `
            <button class="category-card"
                    type="button"
                    data-category="${category.id}">
                <img
                    src="${category.image}"
                    alt="${category.title}"
                    loading="lazy">
                <span class="category-card-content">
                    <span>DISCOVER COLLECTION</span>
                    <h3>${category.title}</h3>
                    <small>
                        ${count} photographs
                    </small>
                </span>
            </button>
        `;
    }).join("");
}
function renderGallery(list) {
    visiblePhotos = list;
    galleryGrid.innerHTML = list.map((photo, index) => {
        const category = categoryInfo.find(
            item => item.id === photo.category
        );
        return `
            <button class="gallery-card"
                    type="button"
                    data-photo-id="${photo.id}"
                    aria-label="View ${photo.title}"
                    style="animation-delay:${Math.min(index * 25, 250)}ms">
                <img
                    src="${photo.image}"
                    alt="${photo.title} - ${photo.description}"
                    loading="lazy">
                <span class="gallery-overlay">
                    <span class="view-icon">
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </span>
                    <span class="category-label">
                        ${category ? category.short : photo.category}
                    </span>
                    <strong>${photo.title}</strong>
                </span>
            </button>
        `;
    }).join("");
    imageCount.textContent = list.length;
    emptyState.hidden = list.length !== 0;
    galleryGrid.hidden = list.length === 0;
    resultLabel.textContent =
        activeCategory === "all"
            ? (searchInput.value.trim()
                ? "Search results"
                : "Showing all photographs")
            : "Showing selected category photographs";
}
function updateGallery() {
    const query = searchInput.value.trim().toLowerCase();
    const filtered = photos.filter(photo => {
        const matchesCategory =
            activeCategory === "all" ||
            photo.category === activeCategory;
        const categoryName = categoryInfo.find(
            item => item.id === photo.category
        )?.title || "";
        const searchableText = `
            ${photo.title}
            ${photo.category}
            ${categoryName}
            ${photo.description}
        `.toLowerCase();
        return matchesCategory &&
               searchableText.includes(query);
    });
    renderGallery(filtered);
    document.querySelectorAll(".filter-button").forEach(button => {
        const isActive =
            button.dataset.filter === activeCategory;
        button.classList.toggle("active", isActive);
        button.setAttribute(
            "aria-pressed",
            String(isActive)
        );
    });
}
function selectCategory(category) {
    activeCategory = category;
    searchInput.value = "";
    updateGallery();
}
const lightbox =
    document.getElementById("lightbox");
const lightboxImage =
    document.getElementById("lightboxImage");
const lightboxTitle =
    document.getElementById("lightboxTitle");
const lightboxCategory =
    document.getElementById("lightboxCategory");
const lightboxDescription =
    document.getElementById("lightboxDescription");
const lightboxCounter =
    document.getElementById("lightboxCounter");
const lightboxClose =
    document.getElementById("lightboxClose");
function openLightbox(photoId, triggerElement) {
    const index = visiblePhotos.findIndex(
        photo => photo.id === Number(photoId)
    );
    if (index < 0) return;
    currentLightboxIndex = index;
    lastFocusedElement =
        triggerElement || document.activeElement;
    showLightboxPhoto();
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
    lightboxClose.focus();
}
function showLightboxPhoto() {
    const photo =
        visiblePhotos[currentLightboxIndex];
    if (!photo) return;
    const category = categoryInfo.find(
        item => item.id === photo.category
    );
    lightboxImage.src = photo.image;
    lightboxImage.alt = photo.title;
    lightboxTitle.textContent = photo.title;
    lightboxCategory.textContent =
        category ? category.title : photo.category;
    lightboxDescription.textContent =
        photo.description;
    lightboxCounter.textContent =
        `${currentLightboxIndex + 1} / ${visiblePhotos.length}`;
}
function moveLightbox(direction) {
    if (!visiblePhotos.length) return;
    currentLightboxIndex =
        (currentLightboxIndex + direction +
        visiblePhotos.length) % visiblePhotos.length;
    showLightboxPhoto();
}
function closeLightbox() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
    if (lastFocusedElement) {
        lastFocusedElement.focus();
    }
}
document.getElementById("lightboxPrev")
    .addEventListener("click", () => {
        moveLightbox(-1);
    });
document.getElementById("lightboxNext")
    .addEventListener("click", () => {
        moveLightbox(1);
    });
lightboxClose.addEventListener(
    "click",
    closeLightbox
);
galleryGrid.addEventListener("click", event => {
    const card = event.target.closest(".gallery-card");
    if (card) {
        openLightbox(
            card.dataset.photoId,
            card
        );
    }
});
categoryGrid.addEventListener("click", event => {
    const card = event.target.closest(".category-card");
    if (!card) return;
    selectCategory(card.dataset.category);
    document.getElementById("explore")
        .scrollIntoView({ behavior: "smooth" });
});
filterList.addEventListener("click", event => {
    const button = event.target.closest(".filter-button");
    if (button) {
        selectCategory(button.dataset.filter);
    }
});
searchInput.addEventListener(
    "input",
    updateGallery
);
document.getElementById("resetGallery")
    .addEventListener("click", () => {
        activeCategory = "all";
        searchInput.value = "";
        updateGallery();
    });
document.addEventListener("keydown", event => {
    if (
        event.key === "/" &&
        !["INPUT", "TEXTAREA"].includes(
            document.activeElement.tagName
        ) &&
        !lightbox.classList.contains("open")
    ) {
        event.preventDefault();
        searchInput.focus();
    }
    if (!lightbox.classList.contains("open")) return;
    if (event.key === "Escape") {
        closeLightbox();
    }
    if (event.key === "ArrowLeft") {
        moveLightbox(-1);
    }
    if (event.key === "ArrowRight") {
        moveLightbox(1);
    }
    if (event.key === "Tab") {
        const focusable = [
            lightboxClose,
            document.getElementById("lightboxPrev"),
            document.getElementById("lightboxNext")
        ];
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (
            event.shiftKey &&
            document.activeElement === first
        ) {
            event.preventDefault();
            last.focus();
        }
        else if (
            !event.shiftKey &&
            document.activeElement === last
        ) {
            event.preventDefault();
            first.focus();
        }
    }
});
lightbox.addEventListener("click", event => {
    if (event.target === lightbox) {
        closeLightbox();
    }
});
const menuToggle =
    document.getElementById("menuToggle");
const navLinks =
    document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
    const isOpen =
        navLinks.classList.toggle("open");
    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );
    menuToggle.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
});
navLinks.addEventListener("click", event => {
    if (event.target.closest("a")) {
        navLinks.classList.remove("open");
        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );
        menuToggle.innerHTML =
            '<i class="fa-solid fa-bars"></i>';
    }
});
document.querySelectorAll(
    "[data-footer-filter]"
).forEach(link => {
    link.addEventListener("click", () => {
        selectCategory(link.dataset.footerFilter);
    });
});
function animateCounter(element) {
    const target =
        Number(element.dataset.target);
    const duration = 1100;
    const startTime = performance.now();
    function step(now) {
        const progress = Math.min(
            (now - startTime) / duration,
            1
        );
        const eased =
            1 - Math.pow(1 - progress, 3);
        element.textContent =
            Math.round(target * eased) +
            (target === 100 ? "+" : "");
        if (progress < 1) {
            requestAnimationFrame(step);
        }
    }
    requestAnimationFrame(step);
}
const statsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (
            entry.isIntersecting &&
            !entry.target.dataset.counted
        ) {
            entry.target.dataset.counted = "true";
            animateCounter(entry.target);
        }
    });
}, { threshold: 0.5 });
document.querySelectorAll(".stat-number")
    .forEach(number => {
        statsObserver.observe(number);
    });
const pageSections =
    document.querySelectorAll("main section[id]");
const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        document.querySelectorAll(".nav-link")
            .forEach(link => {
                link.classList.toggle(
                    "active",
                    link.getAttribute("href") ===
                    `#${entry.target.id}`
                );
            });
    });
}, {
    rootMargin: "-35% 0px -55% 0px"
});
pageSections.forEach(section => {
    navObserver.observe(section);
});
document.addEventListener("error", event => {
    const image = event.target;
    if (
        image.tagName !== "IMG" ||
        image.dataset.fallback === "true"
    ) {
        return;
    }
    image.dataset.fallback = "true";
    image.src = "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="800"
                 height="600">
                <rect width="100%"
                      height="100%"
                      fill="#202329"/>
                <text x="50%"
                      y="50%"
                      fill="#a8e063"
                      font-family="Arial"
                      font-size="28"
                      text-anchor="middle">
                    VISORA - Image unavailable
                </text>
            </svg>
        `);
}, true);
renderCategories();
updateGallery();