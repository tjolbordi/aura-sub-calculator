document.addEventListener('DOMContentLoaded', () => {
    // Initialize user tiers from constants
function initializeUserTiers() {
    const userTiersContainer = document.getElementById('userTiersContainer');
    userTiersContainer.innerHTML = '';

    USER_TIERS.forEach(tier => {
        const tierCard = document.createElement('div');
        tierCard.className = `user-tier-card${tier.isDefault ? ' selected' : ''}`;
        tierCard.dataset.tier = tier.id;
        tierCard.dataset.coefficient = tier.coefficient;
        
        tierCard.innerHTML = `
            <div class="tier-header">
                <input type="radio" name="userTier" class="tier-radio" value="${tier.id}" ${tier.isDefault ? 'checked' : ''}>
                <span class="tier-name">${tier.name}</span>
            </div>
            <div class="tier-details">
                <div class="coefficient">კოეფიციენტი: ${tier.coefficient}</div>
            </div>
        `;
        
        userTiersContainer.appendChild(tierCard);
    });
}

// Initialize the app
    initializeModules();
    initializeUserTiers();
    initializeContracts();
    initializeFeatures();
    setupEventListeners();
});

// Initialize modules from constants
function initializeModules() {
    const moduleGrid = document.getElementById('moduleGrid');
    moduleGrid.innerHTML = '';

    MODULES.forEach(module => {
        const difficultyBadge = DIFFICULTY_BADGES[module.difficulty];
        
        const moduleCard = document.createElement('div');
        moduleCard.className = 'module-card';
        moduleCard.dataset.module = module.id;
        
        moduleCard.innerHTML = `
            <div class="module-header">
                <input type="checkbox" class="module-checkbox" data-coefficient="${module.coefficient}">
                <span class="module-name">${module.name}</span>
                <span class="module-badge ${difficultyBadge.class}">${difficultyBadge.label}</span>
            </div>
            <div class="module-details">
                ${module.details}
                <div class="coefficient">კოეფიციენტი: ${module.coefficient}</div>
            </div>
        `;
        
        moduleGrid.appendChild(moduleCard);
    });
}

// Initialize contract options from constants
function initializeContracts() {
    const contractOptions = document.getElementById('contractOptions');
    contractOptions.innerHTML = '';

    CONTRACTS.forEach(contract => {
        const contractCard = document.createElement('div');
        contractCard.className = `contract-card${contract.isDefault ? ' selected' : ''}`;
        contractCard.dataset.duration = contract.duration;
        contractCard.dataset.discount = contract.discount;
        
        contractCard.innerHTML = `
            <div class="contract-duration">${contract.name}</div>
            <div class="contract-discount">${contract.discount}% ფასდაკლება</div>
        `;
        
        contractOptions.appendChild(contractCard);
    });
}

// Initialize features from constants
function initializeFeatures() {
    const featureList = document.getElementById('featureList');
    featureList.innerHTML = '';

    INCLUDED_FEATURES.forEach(feature => {
        const featureItem = document.createElement('li');
        featureItem.className = 'feature-item';
        featureItem.textContent = feature;
        
        featureList.appendChild(featureItem);
    });
}

// Set up event listeners
function setupEventListeners() {
    // Module card selection
    document.querySelectorAll('.module-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.type !== 'checkbox') {
                const checkbox = this.querySelector('.module-checkbox');
                checkbox.checked = !checkbox.checked;
            }
            this.classList.toggle('selected', this.querySelector('.module-checkbox').checked);
        });
    });
    
    // User tier card selection
    document.querySelectorAll('.user-tier-card').forEach(card => {
        card.addEventListener('click', function(e) {
            // If the click was not directly on the radio button
            if (e.target.type !== 'radio') {
                const radio = this.querySelector('.tier-radio');
                radio.checked = true;
            }
            
            // Remove selected class from all cards and add it to the clicked one
            document.querySelectorAll('.user-tier-card').forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    
    // Contract card selection
    document.querySelectorAll('.contract-card').forEach(card => {
        card.addEventListener('click', function() {
            document.querySelectorAll('.contract-card').forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    
    // Calculate button
    document.getElementById('calculateBtn').addEventListener('click', calculatePrice);
}

// Calculate the price based on selected options
function calculatePrice() {
    const basePrice = parseFloat(document.getElementById('basePrice').value) || 0;
    
    // Calculate module coefficient sum
    let moduleCoeffSum = 0;
    document.querySelectorAll('.module-checkbox:checked').forEach(checkbox => {
        moduleCoeffSum += parseFloat(checkbox.dataset.coefficient);
    });
    
    // Get selected user tier coefficient
    const selectedTier = document.querySelector('.user-tier-card.selected');
    const tierCoefficient = parseFloat(selectedTier.dataset.coefficient);
    
    // Get selected contract
    const selectedContract = document.querySelector('.contract-card.selected');
    const duration = parseInt(selectedContract.dataset.duration);
    const discount = parseInt(selectedContract.dataset.discount);
    
    // Calculate prices
    const initialMonthly = basePrice * moduleCoeffSum * tierCoefficient;
    const discountedMonthly = initialMonthly * (1 - discount / 100);
    const totalContract = duration ? discountedMonthly * duration : discountedMonthly;
    
    // Update display
    document.getElementById('basePriceDisplay').textContent = `${basePrice} $`;
    document.getElementById('coefficientSum').textContent = moduleCoeffSum.toFixed(2);
    document.getElementById('userTierCoefficient').textContent = tierCoefficient.toFixed(2);
    document.getElementById('initialMonthly').textContent = `${initialMonthly.toFixed(2)} $`;
    document.getElementById('discountAmount').textContent = `${discount}%`;
    document.getElementById('monthlyPrice').textContent = `${discountedMonthly.toFixed(2)} $`;
    
    // Update total contract value
    if (duration) {
        document.getElementById('totalContract').textContent = `${totalContract.toFixed(2)} $ (${duration} თვე)`;
    } else {
        document.getElementById('totalContract').textContent = 'ყოველთვიური გადახდა';
    }
    
    // Show results
    document.getElementById('results').classList.add('show');
    
    // Scroll to results
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
}