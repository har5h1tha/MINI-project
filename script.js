// Waste items database 
const wasteItems = [
    {
        name: "Plastic Bottle",
        category: "recycling",
        image: "https://th.bing.com/th/id/OIP.UDuzKImztUBNXGPs2H8hgQHaE7?r=0&rs=1&pid=ImgDetMain&cb=idpwebpc2",
        description: "Empty and rinse plastic bottles before recycling. Remove caps unless they're the same type of plastic. Most plastic bottles are made from PET (Polyethylene Terephthalate) which is widely recyclable.",
        disposal: "Place in recycling bin",
        preparation: "Rinse and remove caps",
        alternatives: "Consider refilling and reusing when possible. Use a reusable water bottle to reduce plastic waste."
    },
    {
        name: "Pizza Box",
        category: "compost",
        image: "https://th.bing.com/th/id/OIP.Wx3BQDGHD25ivkg5_roFFwHaE8?r=0&w=768&h=512&rs=1&pid=ImgDetMain&cb=idpwebpc2",
        description: "If heavily soiled with grease, only the clean parts can be recycled. The greasy parts should be composted. Cardboard with food residue can contaminate other recyclables.",
        disposal: "Compost bin or landfill if composting not available",
        preparation: "Remove any food scraps and separate clean cardboard from greasy parts",
        alternatives: "Tear clean portions for recycling. Consider composting at home if possible."
    },
    {
        name: "Batteries",
        category: "hazardous",
        image: "https://th.bing.com/th/id/OIP.zYIdORqFCJKnqSBP3xi0aQHaEK?r=0&w=1200&h=675&rs=1&pid=ImgDetMain&cb=idpwebpc2",
        description: "Batteries contain toxic chemicals like lead, cadmium, and lithium that should never go in regular trash or recycling. They can cause fires in waste facilities and contaminate soil and water.",
        disposal: "Take to hazardous waste facility or battery recycling drop-off",
        preparation: "Tape terminals of lithium batteries to prevent fires. Store in non-metal container.",
        alternatives: "Use rechargeable batteries when possible. Many stores offer battery take-back programs."
    },
    {
        name: "Glass Jar",
        category: "recycling",
        image: "https://media.gettyimages.com/id/1221995435/photo/box-with-glass-jars-for-recycling.jpg?s=612x612&w=gi&k=20&c=J6rtkivSkg2A7QG6x9HhM2clxd1QKnHW4rVDq0Ol440=",
        description: "Glass containers are 100% recyclable and can be recycled endlessly without loss in quality. Recycling glass saves energy and reduces mining of raw materials.",
        disposal: "Place in recycling bin",
        preparation: "Rinse and remove lids (metal lids can often be recycled separately)",
        alternatives: "Consider reusing for storage, crafts, or home canning."
    },
    {
        name: "Coffee Grounds",
        category: "compost",
        image: "https://th.bing.com/th/id/OIP.I5otVaoT_2D4FSQRq0ExSgHaE8?r=0&rs=1&pid=ImgDetMain&cb=idpwebpc2",
        description: "Coffee grounds are rich in nitrogen and make excellent compost material. They help create a balanced compost pile when mixed with carbon-rich materials like leaves or paper.",
        disposal: "Compost bin",
        preparation: "None needed, though breaking up clumps helps decomposition",
        alternatives: "Use directly in garden as fertilizer, mix into soil, or make coffee ground scrubs."
    },
    {
        name: "Plastic Bags",
        category: "landfill",
        image: "https://th.bing.com/th/id/OIP.RKLVApYbCltWuRyTMb1sWQAAAA?r=0&w=417&h=626&rs=1&pid=ImgDetMain&cb=idpwebpc2",
        description: "Most curbside recycling programs don't accept plastic bags as they tangle machinery. Plastic film can take hundreds of years to decompose in landfills.",
        disposal: "Special plastic bag recycling at grocery stores",
        preparation: "Clean and dry, remove receipts or stickers",
        alternatives: "Use reusable bags instead. Many stores now offer paper bags as an alternative."
    },
    {
        name: "Electronics",
        category: "hazardous",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        description: "Electronics contain valuable materials like gold, silver, and copper, as well as hazardous substances like lead and mercury that shouldn't go in landfill. Proper recycling recovers precious metals safely.",
        disposal: "E-waste recycling facility",
        preparation: "Remove batteries if possible. Wipe personal data from devices.",
        alternatives: "Donate if still working. Many manufacturers offer take-back programs."
    },
    {
        name: "Newspaper",
        category: "recycling",
        image: "https://th.bing.com/th/id/OIP.UPV8MEHkPPfaQgFkoBbZGgHaE8?r=0&rs=1&pid=ImgDetMain&cb=idpwebpc2",
        description: "Newspaper is highly recyclable and one of the most common paper products recycled. Recycling newspaper saves trees, water, and energy compared to making new paper.",
        disposal: "Recycling bin",
        preparation: "Keep dry and clean. Remove plastic wrappers.",
        alternatives: "Use for compost (shredded), crafts, or animal bedding."
    }
];

// Quiz questions
const quizQuestions = [
    {
        question: "Where should you dispose of a clean aluminum can?",
        options: ["Recycling", "Compost", "Landfill", "Hazardous"],
        answer: 0,
        explanation: "Aluminum cans are 100% recyclable and can be recycled endlessly without quality loss. Recycling aluminum saves 95% of the energy needed to make new aluminum."
    },
    {
        question: "What should you do with plastic bags?",
        options: [
            "Put them in curbside recycling",
            "Take them to special collection points",
            "Throw them in compost",
            "They can go in regular trash"
        ],
        answer: 1,
        explanation: "Most curbside programs don't accept plastic bags as they tangle machinery. Many grocery stores have special bins for plastic bag recycling."
    },
    {
        question: "How should you prepare a glass jar for recycling?",
        options: [
            "Throw it in as is",
            "Rinse it and remove the lid",
            "Break it into small pieces",
            "Fill it with other recyclables"
        ],
        answer: 1,
        explanation: "Rinsing removes food residue that can contaminate other recyclables. Lids are often made from different materials and should be recycled separately."
    },
    {
        question: "Where do banana peels belong?",
        options: ["Recycling", "Compost", "Landfill", "Hazardous"],
        answer: 1,
        explanation: "Banana peels are organic material that breaks down quickly in compost. In landfill, they produce methane, a potent greenhouse gas."
    },
    {
        question: "What should you do with old batteries?",
        options: [
            "Put them in regular trash",
            "Recycle them with paper",
            "Take them to hazardous waste collection",
            "Bury them in the yard"
        ],
        answer: 2,
        explanation: "Batteries contain toxic chemicals that can leak into soil and water. Many stores have battery recycling drop-offs."
    }
];

// DOM elements
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const searchResults = document.getElementById('search-results');
const itemsContainer = document.getElementById('items-container');
const quizQuestion = document.getElementById('quiz-question');
const quizOptions = document.getElementById('quiz-options');
const quizNext = document.getElementById('quiz-next');
const quizScore = document.getElementById('quiz-score');
const modal = document.getElementById('item-modal');
const closeModal = document.querySelector('.close-modal');
const modalTitle = document.getElementById('modal-title');
const itemDescription = document.getElementById('item-description');
const itemDisposal = document.getElementById('item-disposal');
const itemPreparation = document.getElementById('item-preparation');
const itemAlternatives = document.getElementById('item-alternatives');

// Current quiz state
let currentQuizQuestion = 0;
let score = 0;
let selectedOption = null;

// Initialize the app
function init() {
    // Populate common items grid
    renderCommonItems();
    
    // Set up event listeners
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });
    
    quizNext.addEventListener('click', nextQuizQuestion);
    closeModal.addEventListener('click', closeItemModal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeItemModal();
    });
    
    // Start the quiz
    loadQuizQuestion();
}

// Handle search functionality
function handleSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (!searchTerm) return;
    
    const results = wasteItems.filter(item => 
        item.name.toLowerCase().includes(searchTerm) || 
        item.description.toLowerCase().includes(searchTerm)
    );
    
    displaySearchResults(results);
}

// Display search results
function displaySearchResults(results) {
    searchResults.innerHTML = '';
    
    if (results.length === 0) {
        searchResults.innerHTML = '<p class="no-results">No items found. Try a different search term.</p>';
        return;
    }
    
    const resultsList = document.createElement('div');
    resultsList.className = 'items-grid';
    
    results.forEach(item => {
        const itemElement = createItemCard(item);
        resultsList.appendChild(itemElement);
    });
    
    searchResults.appendChild(resultsList);
}

// Render common items grid
function renderCommonItems() {
    if (!itemsContainer) return;
    
    itemsContainer.innerHTML = '';
    
    wasteItems.forEach(item => {
        const itemElement = createItemCard(item);
        itemsContainer.appendChild(itemElement);
    });
}

// Create item card element
function createItemCard(item) {
    const itemElement = document.createElement('div');
    itemElement.className = 'item-card';
    itemElement.innerHTML = `
        <div class="item-image" style="background-image: url('${item.image}')"></div>
        <div class="item-info">
            <h3>${item.name}</h3>
            <span class="category ${item.category}-badge">${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</span>
        </div>
    `;
    itemElement.addEventListener('click', () => showItemDetails(item));
    return itemElement;
}

// Show item details in modal
function showItemDetails(item) {
    modalTitle.textContent = item.name;
    itemDescription.textContent = item.description;
    itemDisposal.textContent = item.disposal;
    itemPreparation.textContent = item.preparation;
    itemAlternatives.textContent = item.alternatives;
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Close item modal
function closeItemModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Quiz functionality
function loadQuizQuestion() {
    if (!quizQuestion) return;
    
    if (currentQuizQuestion >= quizQuestions.length) {
        // Quiz completed
        quizQuestion.innerHTML = `<div class="quiz-complete"><i class="fas fa-check-circle"></i> Quiz Completed!</div>`;
        quizOptions.innerHTML = `<p class="quiz-result">Your score: <strong>${score}</strong> out of ${quizQuestions.length}</p>`;
        quizNext.style.display = 'none';
        return;
    }
    
    const question = quizQuestions[currentQuizQuestion];
    quizQuestion.textContent = question.question;
    
    quizOptions.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'quiz-option';
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectQuizOption(index, question.answer));
        quizOptions.appendChild(optionElement);
    });
    
    quizNext.disabled = true;
    quizScore.textContent = `Score: ${score}/${currentQuizQuestion}`;
}

function selectQuizOption(selectedIndex, correctIndex) {
    // Remove previous selection if any
    if (selectedOption !== null) {
        const prevOption = quizOptions.children[selectedOption];
        prevOption.classList.remove('selected');
    }
    
    selectedOption = selectedIndex;
    const optionElements = quizOptions.children;
    
    // Mark selected option
    optionElements[selectedIndex].classList.add('selected');
    
    // Check answer
    if (selectedIndex === correctIndex) {
        optionElements[selectedIndex].classList.add('correct');
    } else {
        optionElements[selectedIndex].classList.add('incorrect');
        optionElements[correctIndex].classList.add('correct');
    }
    
    // Enable next button
    quizNext.disabled = false;
    
    // Update score if correct
    if (selectedIndex === correctIndex) {
        score++;
        quizScore.textContent = `Score: ${score}/${currentQuizQuestion + 1}`;
    }
}

function nextQuizQuestion() {
    currentQuizQuestion++;
    selectedOption = null;
    loadQuizQuestion();
}

// Initialize the app when DOM is loaded

document.addEventListener('DOMContentLoaded', init);
