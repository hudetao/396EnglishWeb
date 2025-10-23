// Animal data with detailed information
const animalData = {
    cow: {
        name: "Cow",
        pronunciation: "/kaʊ/",
        sound: "Moo! Moo!",
        description: "Cows are gentle farm animals that give us milk. They love to eat grass and live on farms.",
        habitat: "Farm",
        food: "Grass and hay",
        size: "Large",
        facts: [
            "Cows have four stomachs to help them digest grass",
            "A cow can produce up to 6 gallons of milk per day",
            "Cows are very social animals and like to be with other cows"
        ],
        baby: "Calf",
        group: "Herd"
    },
    pig: {
        name: "Pig",
        pronunciation: "/pɪɡ/",
        sound: "Oink! Oink!",
        description: "Pigs are smart farm animals that love to play in mud. They are very clean animals despite what people think.",
        habitat: "Farm",
        food: "Vegetables and grains",
        size: "Medium",
        facts: [
            "Pigs are one of the smartest animals in the world",
            "Pigs love to play and are very social",
            "A pig's nose is called a snout"
        ],
        baby: "Piglet",
        group: "Herd"
    },
    chicken: {
        name: "Chicken",
        pronunciation: "/ˈtʃɪkɪn/",
        sound: "Cluck! Cluck!",
        description: "Chickens are farm birds that lay eggs. They wake up early in the morning and love to scratch the ground.",
        habitat: "Farm",
        food: "Seeds and insects",
        size: "Small",
        facts: [
            "Chickens can lay one egg per day",
            "A baby chicken is called a chick",
            "Chickens can remember over 100 different faces"
        ],
        baby: "Chick",
        group: "Flock"
    },
    sheep: {
        name: "Sheep",
        pronunciation: "/ʃiːp/",
        sound: "Baa! Baa!",
        description: "Sheep are fluffy farm animals that give us wool. They love to stay together in groups.",
        habitat: "Farm and fields",
        food: "Grass",
        size: "Medium",
        facts: [
            "Sheep's wool is used to make warm clothes",
            "Sheep have excellent memory and can remember faces for years",
            "A baby sheep is called a lamb"
        ],
        baby: "Lamb",
        group: "Flock"
    },
    horse: {
        name: "Horse",
        pronunciation: "/hɔːrs/",
        sound: "Neigh! Neigh!",
        description: "Horses are strong and fast animals that people ride. They are very loyal and friendly.",
        habitat: "Farm and fields",
        food: "Grass and hay",
        size: "Large",
        facts: [
            "Horses can sleep standing up",
            "Horses can run very fast - up to 55 miles per hour",
            "A baby horse is called a foal"
        ],
        baby: "Foal",
        group: "Herd"
    },
    lion: {
        name: "Lion",
        pronunciation: "/ˈlaɪən/",
        sound: "Roar! Roar!",
        description: "Lions are the king of the jungle! They are big cats with golden fur and live in Africa.",
        habitat: "Savanna and grasslands",
        food: "Meat (carnivore)",
        size: "Very large",
        facts: [
            "Lions are the only cats that live in groups called prides",
            "A lion's roar can be heard from 5 miles away",
            "Lion cubs are born with spots that disappear as they grow"
        ],
        baby: "Cub",
        group: "Pride"
    },
    elephant: {
        name: "Elephant",
        pronunciation: "/ˈelɪfənt/",
        sound: "Trumpet! Trumpet!",
        description: "Elephants are the biggest land animals on Earth. They have long trunks and big ears.",
        habitat: "Savanna and forests",
        food: "Grass, leaves, and fruits",
        size: "Very large",
        facts: [
            "Elephants never forget - they have amazing memories",
            "An elephant's trunk has over 40,000 muscles",
            "Elephants are very gentle and caring animals"
        ],
        baby: "Calf",
        group: "Herd"
    },
    giraffe: {
        name: "Giraffe",
        pronunciation: "/dʒəˈræf/",
        sound: "Hum! Hum!",
        description: "Giraffes are the tallest animals in the world! They have very long necks to reach high leaves.",
        habitat: "Savanna",
        food: "Leaves from tall trees",
        size: "Very tall",
        facts: [
            "Giraffes can be as tall as a two-story house",
            "A giraffe's tongue is 20 inches long",
            "Giraffes only need 5-30 minutes of sleep per day"
        ],
        baby: "Calf",
        group: "Tower"
    },
    monkey: {
        name: "Monkey",
        pronunciation: "/ˈmʌŋki/",
        sound: "Ooh! Ooh!",
        description: "Monkeys are playful animals that love to swing from trees. They are very smart and curious.",
        habitat: "Forests and jungles",
        food: "Fruits, nuts, and insects",
        size: "Small to medium",
        facts: [
            "Monkeys use their hands and feet to climb trees",
            "Some monkeys can use tools to get food",
            "Monkeys communicate with each other using sounds and gestures"
        ],
        baby: "Infant",
        group: "Troop"
    },
    zebra: {
        name: "Zebra",
        pronunciation: "/ˈziːbrə/",
        sound: "Bray! Bray!",
        description: "Zebras are beautiful animals with black and white stripes. Each zebra has unique stripes like fingerprints.",
        habitat: "Savanna and grasslands",
        food: "Grass",
        size: "Medium",
        facts: [
            "No two zebras have the same stripe pattern",
            "Zebras sleep standing up",
            "A group of zebras is called a dazzle"
        ],
        baby: "Foal",
        group: "Dazzle"
    },
    dog: {
        name: "Dog",
        pronunciation: "/dɔːɡ/",
        sound: "Woof! Woof!",
        description: "Dogs are loyal pets and best friends to humans. They come in many different sizes and colors.",
        habitat: "Homes with families",
        food: "Dog food and treats",
        size: "Small to large",
        facts: [
            "Dogs are called 'man's best friend'",
            "Dogs can learn over 100 different words",
            "A dog's nose is 40 times more powerful than a human's"
        ],
        baby: "Puppy",
        group: "Pack"
    },
    cat: {
        name: "Cat",
        pronunciation: "/kæt/",
        sound: "Meow! Meow!",
        description: "Cats are independent and graceful pets. They love to purr when they are happy and comfortable.",
        habitat: "Homes with families",
        food: "Cat food and fish",
        size: "Small",
        facts: [
            "Cats spend 70% of their lives sleeping",
            "A cat's purr can help heal broken bones",
            "Cats have excellent night vision"
        ],
        baby: "Kitten",
        group: "Clowder"
    },
    rabbit: {
        name: "Rabbit",
        pronunciation: "/ˈræbɪt/",
        sound: "Squeak! Squeak!",
        description: "Rabbits are cute and fluffy pets with long ears. They love to hop around and eat carrots.",
        habitat: "Homes and gardens",
        food: "Carrots, lettuce, and hay",
        size: "Small",
        facts: [
            "Rabbits can hop up to 3 feet high",
            "A rabbit's teeth never stop growing",
            "Rabbits can turn their ears 180 degrees"
        ],
        baby: "Kit",
        group: "Colony"
    },
    hamster: {
        name: "Hamster",
        pronunciation: "/ˈhæmstər/",
        sound: "Squeak! Squeak!",
        description: "Hamsters are tiny, furry pets that love to run on wheels. They store food in their cheeks.",
        habitat: "Cages in homes",
        food: "Seeds and vegetables",
        size: "Very small",
        facts: [
            "Hamsters can store food in their cheeks",
            "Hamsters are nocturnal - they sleep during the day",
            "A hamster can run up to 5 miles in one night on its wheel"
        ],
        baby: "Pup",
        group: "Horde"
    },
    fish: {
        name: "Fish",
        pronunciation: "/fɪʃ/",
        sound: "Glub! Glub!",
        description: "Fish are beautiful animals that live in water. They come in many colors and sizes.",
        habitat: "Oceans, rivers, and aquariums",
        food: "Fish food and small creatures",
        size: "Small to large",
        facts: [
            "Fish breathe underwater using gills",
            "There are over 30,000 different types of fish",
            "Fish can remember things for up to 5 months"
        ],
        baby: "Fry",
        group: "School"
    }
};


// Function to get animal image filename
function getAnimalImage(animalType) {
    const imageMap = {
        cow: '294f3e3d6ab6f6c66f70137939c40832.jpg',
        pig: '14f3a209b208da46876e2ec0681f050f.jpg',
        chicken: '10dbbb9fd737b02d496774eb1609e247.jpg',
        sheep: '13baa7859e7de767cdcb01ed90428084.jpg',
        horse: '1f4e7f553c56da952ad866aac205a6bf.jpg',
        lion: '82adabc4ac5d63fe14548df6b569c35d.jpg',
        elephant: '2cb6af81d500b2e78a5e651dce1a50c6.jpg',
        giraffe: '39d12fbe48f362b927188347a013cbd0.jpg',
        monkey: '8c0f7603547eefc06fa1b29e92b7eab4.jpg',
        zebra: '4b019c66e5e3e861997987387624134a.jpg',
        dog: '84cc5b11e52bead86f628eb4ad1aa3a7.jpg',
        cat: '1223d0236e56250b5ab294b0a62660fa.jpg',
        rabbit: '6881ed1907f7173b1325ce58c7d689b0.jpg',
        hamster: '7e738243642cc63e2ab2027f4ba5390f.jpg',
        fish: '17764222073e89b59e23d9c005817339.jpg'
    };
    return imageMap[animalType] || 'default.jpg';
}


// Gallery variables
let currentFilter = 'all';
let galleryData = [];

// Video data
const videoData = [
    {
        id: '7d9104c5f55e9fe08c1d199692be7339',
        title: 'Fun Animal Adventure',
        description: 'Watch these amazing animals in their natural habitat!',
        duration: '2:30'
    },
    {
        id: '57538c8a5195f66a53582bd57f72dc74',
        title: 'Animal Sounds Learning',
        description: 'Learn animal sounds with this fun educational video!',
        duration: '1:45'
    },
    {
        id: '827ff2c6da205a05d4228d156b70fe6d',
        title: 'Wild Animal Safari',
        description: 'Join us on a safari to see wild animals up close!',
        duration: '3:15'
    },
    {
        id: '51dbe9c53857bc7cad1d04804f28c610',
        title: 'Farm Animal Friends',
        description: 'Meet our friendly farm animals and learn about them!',
        duration: '2:00'
    }
];

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeAnimalCards();
    initializeSoundButtons();
    initializeModals();
    initializeGallery();
    initializeVideo();
});

// Navigation functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link and target section
            this.classList.add('active');
            document.getElementById(targetId).classList.add('active');
        });
    });
}

// Animal cards functionality
function initializeAnimalCards() {
    const animalCards = document.querySelectorAll('.animal-card');
    
    animalCards.forEach(card => {
        card.addEventListener('click', function() {
            const animalType = this.getAttribute('data-animal');
            showAnimalDetail(animalType);
        });
    });
}

// Sound buttons functionality
function initializeSoundButtons() {
    const soundButtons = document.querySelectorAll('.sound-btn');
    
    soundButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const word = this.getAttribute('data-word');
            playAnimalSound(word);
        });
    });
}

// Play animal sound (simulated)
function playAnimalSound(animal) {
    const animalInfo = animalData[animal];
    if (animalInfo) {
        // Create a simple text-to-speech simulation
        const utterance = new SpeechSynthesisUtterance(animalInfo.name);
        utterance.rate = 0.8;
        utterance.pitch = 1.2;
        speechSynthesis.speak(utterance);
        
        // Add visual feedback
        const button = document.querySelector(`[data-word="${animal}"]`);
        button.classList.add('pulse');
        setTimeout(() => button.classList.remove('pulse'), 600);
    }
}

// Show animal detail modal
function showAnimalDetail(animalType) {
    const animal = animalData[animalType];
    if (!animal) return;
    
    const modal = document.getElementById('animalModal');
    const detailContainer = document.getElementById('animalDetail');
    
    detailContainer.innerHTML = `
        <div class="animal-detail">
            <img src="images/${animalType}/${getAnimalImage(animalType)}" alt="${animal.name}">
            <h2>${animal.name}</h2>
            <div class="pronunciation">Pronunciation: ${animal.pronunciation}</div>
            <button class="sound-btn" onclick="playAnimalSound('${animalType}')">
                <i class="fas fa-volume-up"></i> Listen
            </button>
            <div class="description">${animal.description}</div>
            <div class="animal-facts">
                <h3>Fun Facts:</h3>
                <ul>
                    ${animal.facts.map(fact => `<li>${fact}</li>`).join('')}
                </ul>
            </div>
            <div class="animal-info">
                <p><strong>Habitat:</strong> ${animal.habitat}</p>
                <p><strong>Food:</strong> ${animal.food}</p>
                <p><strong>Size:</strong> ${animal.size}</p>
                <p><strong>Baby:</strong> ${animal.baby}</p>
                <p><strong>Group:</strong> ${animal.group}</p>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Initialize modals
function initializeModals() {
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');
    
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });
    
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
            }
        });
    });
}


// Add some interactive animations
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to animal cards
    const animalCards = document.querySelectorAll('.animal-card');
    animalCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click animations
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.add('bounce');
            setTimeout(() => this.classList.remove('bounce'), 600);
        });
    });
});


// Gallery functionality
function initializeGallery() {
    // Create gallery data from animal data
    galleryData = Object.keys(animalData).map(animalType => {
        const animal = animalData[animalType];
        let category = 'pet';
        if (['cow', 'pig', 'chicken', 'sheep', 'horse'].includes(animalType)) {
            category = 'farm';
        } else if (['lion', 'elephant', 'giraffe', 'monkey', 'zebra'].includes(animalType)) {
            category = 'wild';
        }
        
        return {
            id: animalType,
            name: animal.name,
            sound: animal.sound,
            description: animal.description,
            category: category,
            image: getAnimalImage(animalType)
        };
    });
    
    // Initialize gallery filters
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filter = this.getAttribute('data-filter');
            currentFilter = filter;
            
            // Update gallery display
            updateGalleryDisplay();
        });
    });
    
    // Initial gallery display
    updateGalleryDisplay();
}

function updateGalleryDisplay() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;
    
    // Filter animals based on current filter
    let filteredAnimals = galleryData;
    if (currentFilter !== 'all') {
        filteredAnimals = galleryData.filter(animal => animal.category === currentFilter);
    }
    
    // Generate gallery HTML
    galleryGrid.innerHTML = filteredAnimals.map(animal => `
        <div class="gallery-item" onclick="showGalleryModal('${animal.id}')">
            <img src="images/${animal.id}/${animal.image}" alt="${animal.name}">
            <div class="gallery-item-info">
                <h4>${animal.name}</h4>
                <p>${animal.sound}</p>
            </div>
            <div class="gallery-item-overlay">
                <i class="fas fa-search-plus"></i>
            </div>
        </div>
    `).join('');
}

function showGalleryModal(animalId) {
    const animal = galleryData.find(a => a.id === animalId);
    if (!animal) return;
    
    const modal = document.getElementById('galleryModal');
    const modalImage = document.getElementById('galleryModalImage');
    const modalTitle = document.getElementById('galleryModalTitle');
    const modalDescription = document.getElementById('galleryModalDescription');
    const modalSound = document.getElementById('galleryModalSound');
    
    // Update modal content
    modalImage.src = `images/${animal.id}/${animal.image}`;
    modalImage.alt = animal.name;
    modalTitle.textContent = animal.name;
    modalDescription.textContent = animal.description;
    
    // Update sound button
    modalSound.onclick = function() {
        playAnimalSound(animal.id);
    };
    
    // Show modal
    modal.style.display = 'block';
}

// Function to show gallery (called from home page)
function showGallery() {
    // Switch to gallery section
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    // Remove active class from all links and sections
    navLinks.forEach(l => l.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active'));
    
    // Add active class to gallery link and section
    const galleryLink = document.querySelector('a[href="#gallery"]');
    const gallerySection = document.getElementById('gallery');
    
    if (galleryLink) galleryLink.classList.add('active');
    if (gallerySection) gallerySection.classList.add('active');
}

// Function to show animals section (called from home page)
function showAnimals() {
    // Switch to animals section
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    // Remove active class from all links and sections
    navLinks.forEach(l => l.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active'));
    
    // Add active class to animals link and section
    const animalsLink = document.querySelector('a[href="#animals"]');
    const animalsSection = document.getElementById('animals');
    
    if (animalsLink) animalsLink.classList.add('active');
    if (animalsSection) animalsSection.classList.add('active');
}


// Picture Gallery functionality
function showPictureGallery() {
    const modal = document.getElementById('pictureGalleryModal');
    const galleryGrid = document.getElementById('pictureGalleryGrid');
    
    // Create all animal pictures data
    const allPictures = [];
    Object.keys(animalData).forEach(animalType => {
        const animal = animalData[animalType];
        allPictures.push({
            id: animalType,
            name: animal.name,
            sound: animal.sound,
            description: animal.description,
            image: getAnimalImage(animalType)
        });
    });
    
    // Generate gallery HTML
    galleryGrid.innerHTML = allPictures.map(picture => `
        <div class="picture-gallery-item" onclick="showPictureDetail('${picture.id}')">
            <img src="images/${picture.id}/${picture.image}" alt="${picture.name}">
            <div class="picture-gallery-item-info">
                <h4>${picture.name}</h4>
                <p>${picture.sound}</p>
            </div>
            <div class="picture-gallery-item-overlay">
                <i class="fas fa-search-plus"></i>
            </div>
        </div>
    `).join('');
    
    // Show modal
    modal.style.display = 'block';
}

function showPictureDetail(animalId) {
    const animal = animalData[animalId];
    if (!animal) return;
    
    const modal = document.getElementById('pictureDetailModal');
    const detailImage = document.getElementById('detailImage');
    const detailAnimalName = document.getElementById('detailAnimalName');
    const detailAnimalSound = document.getElementById('detailAnimalSound');
    const detailAnimalDescription = document.getElementById('detailAnimalDescription');
    const detailSoundBtn = document.getElementById('detailSoundBtn');
    
    // Update modal content
    detailImage.src = `images/${animalId}/${getAnimalImage(animalId)}`;
    detailImage.alt = animal.name;
    detailAnimalName.textContent = animal.name;
    detailAnimalSound.textContent = animal.sound;
    detailAnimalDescription.textContent = animal.description;
    
    // Update sound button
    detailSoundBtn.onclick = function() {
        playAnimalSound(animalId);
    };
    
    // Show modal
    modal.style.display = 'block';
}

// Video functionality
function initializeVideo() {
    const videoGrid = document.getElementById('videoGrid');
    if (!videoGrid) return;
    
    // Generate video grid HTML
    videoGrid.innerHTML = videoData.map(video => `
        <div class="video-item" onclick="playVideo('${video.id}')">
            <div class="video-thumbnail">
                <div class="video-play-button">
                    <i class="fas fa-play"></i>
                </div>
                <div class="video-duration">${video.duration}</div>
            </div>
            <div class="video-item-info">
                <h4>${video.title}</h4>
                <p>${video.description}</p>
            </div>
        </div>
    `).join('');
}

function playVideo(videoId) {
    const video = videoData.find(v => v.id === videoId);
    if (!video) return;
    
    const modal = document.getElementById('videoPlayerModal');
    const videoTitle = document.getElementById('videoTitle');
    const videoSource = document.getElementById('videoSource');
    const videoPlayer = document.getElementById('videoPlayer');
    const videoDescription = document.getElementById('videoDescription');
    
    // Update modal content
    videoTitle.textContent = video.title;
    videoSource.src = `video/${videoId}.mp4`;
    videoDescription.textContent = video.description;
    
    // Load the video
    videoPlayer.load();
    
    // Show modal
    modal.style.display = 'block';
    
    // Auto-play the video when modal opens
    setTimeout(() => {
        videoPlayer.play().catch(e => {
            console.log('Autoplay prevented:', e);
        });
    }, 300);
}

// Add floating animation to hero animals
document.addEventListener('DOMContentLoaded', function() {
    const floatingAnimals = document.querySelectorAll('.floating-animal');
    floatingAnimals.forEach((animal, index) => {
        animal.style.animationDelay = `${index * 0.5}s`;
    });
});
