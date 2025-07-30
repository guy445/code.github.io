// Timeline-based strategic decisions data structure
const strategicDecisions = [
    {
        id: 1,
        year: 1946,
        title: "Formation of Anand Milk Union",
        description: "Farmers are exploited by traders. Should they form a cooperative union?",
        correctOption: "Yes, form a cooperative union (Amul's birth)",
        incorrectOption: "No, rely on private players",
        correctImpact: {
            description: "Forming the Anand Milk Union eliminated exploitative middlemen and gave farmers control over their produce. This became the foundation of India's White Revolution and the cooperative dairy movement.",
            data: 10, // ₹10 Cr by 1960s
            turnover: 10 // in crores (by 1960s)
        },
        incorrectImpact: {
            description: "Without the cooperative, farmers would have continued to be exploited by middlemen, receiving low prices for their milk. The dairy industry would remain fragmented and inefficient.",
            data: 2, // Stuck under ₹2 Cr turnover
            turnover: 2 // in crores (by 1960s)
        },
        competency: {
            type: "Core",
            description: "Cooperative Governance"
        },
        sources: ["LinkedIn", "Wikipedia"]
    },
    {
        id: 2,
        year: 1963,
        title: "Launch of Cattle-Feed Plant",
        description: "Should Amul invest in building its own cattle-feed manufacturing plant?",
        correctOption: "Yes, provide cattle nutrition support",
        incorrectOption: "No, rely on external feed markets",
        correctImpact: {
            description: "Building its own cattle-feed plant allowed Amul to ensure quality nutrition for cattle, leading to higher milk yields and better quality. This vertical integration strengthened the entire value chain.",
            data: 40 // ₹40 Cr by 1970s
        },
        incorrectImpact: {
            description: "Without a dedicated cattle-feed plant, milk quality and yield would vary significantly. Farmers would face higher costs and inconsistent feed quality from external suppliers.",
            data: 20 // ₹20 Cr max (supply fluctuations)
        },
        competency: "Core: Productivity",
        sources: ["Amul", "Wikipedia"]
    },
    {
        id: 3,
        year: 1967,
        title: "Amul Girl Advertising Campaign",
        description: "Should Amul invest in creating the iconic 'Amul Girl' advertising campaign?",
        correctOption: "Yes, launch satirical mascot marketing",
        incorrectOption: "No, use generic dairy ads",
        correctImpact: {
            description: "The Amul Girl campaign became one of India's longest-running and most beloved ad campaigns. It built tremendous brand recognition and goodwill, making Amul a household name across India.",
            data: 70 // Boosted national brand awareness, ₹70 Cr by 1973
        },
        incorrectImpact: {
            description: "Without this iconic campaign, Amul would have struggled to differentiate itself from competitors. Brand recognition would be significantly lower, limiting market penetration.",
            data: 45 // Slow growth, ₹45 Cr estimate
        },
        competency: "Distinctive: Branding",
        sources: ["Amul Marketing Archives"]
    },
    {
        id: 4,
        year: 1970,
        title: "Join Operation Flood (White Revolution)",
        description: "Should Amul participate in and help lead the National Dairy Development Board's Operation Flood?",
        correctOption: "Yes, implement national-scale milk distribution & procurement",
        incorrectOption: "No, remain focused on local operations",
        correctImpact: {
            description: "By participating in the White Revolution, Amul helped transform India from a milk-deficient nation to the world's largest milk producer. This expanded Amul's influence and created a nationwide network of cooperatives.",
            data: 121 // ₹121 Cr by 1973
        },
        incorrectImpact: {
            description: "Without participating in the national movement, Amul would remain a regional player with limited growth potential. India's dairy self-sufficiency would be delayed by decades.",
            data: 60 // ₹60 Cr max
        },
        competency: "Core: National scale",
        sources: ["Wikipedia"]
    },
    {
        id: 5,
        year: 1973,
        title: "Formation of GCMMF",
        description: "Should Amul form the Gujarat Cooperative Milk Marketing Federation (GCMMF) to market its products?",
        correctOption: "Yes, set up a federation to manage all unions",
        incorrectOption: "No, let unions operate independently",
        correctImpact: {
            description: "Forming GCMMF created a unified marketing approach that helped Amul become India's largest food brand. It enabled coordinated marketing strategies and economies of scale.",
            data: 150 // ₹150 Cr by 1975, ensured unified marketing
        },
        incorrectImpact: {
            description: "Without GCMMF, Amul would have struggled with fragmented marketing efforts, limited reach, and inability to compete with larger players. Estimated losses would have been significant.",
            data: 80 // ₹80 Cr fragmented performance
        },
        competency: "Core: Supply chain scale",
        sources: ["Amul", "The Times of India"]
    },
    {
        id: 6,
        year: 1985,
        title: "Umbrella Branding Strategy",
        description: "Should Amul adopt an umbrella branding strategy with 'The Taste of India' tagline?",
        correctOption: "Yes, promote a single national brand",
        incorrectOption: "No, allow region-based branding",
        correctImpact: {
            description: "The umbrella branding strategy unified Amul's diverse product range under one recognizable brand. This built stronger brand equity and allowed new product launches to leverage existing brand recognition.",
            data: 600 // ₹600 Cr by 1990
        },
        incorrectImpact: {
            description: "Without umbrella branding, Amul would need to invest separately in marketing each product line, diluting marketing effectiveness and brand recognition.",
            data: 300 // ₹250-300 Cr max
        },
        competency: "Core/Distinctive: Brand synergy",
        sources: ["Amul"]
    },
    {
        id: 7,
        year: 1990,
        title: "Skim Milk Powder (Buffalo Milk Innovation)",
        description: "Should Amul invest in buffalo-milk skim powder innovation?",
        correctOption: "Yes, develop buffalo-milk powder (Dalaya)",
        incorrectOption: "No, use only cow milk",
        correctImpact: {
            description: "Investing in buffalo-milk innovation allowed Amul to efficiently process India's abundant buffalo milk, creating unique products suited to Indian preferences and dietary needs.",
            data: 1439 // ₹1,439 Cr by 1995
        },
        incorrectImpact: {
            description: "Without this innovation, Amul would be unable to fully utilize India's buffalo milk resources, limiting product range and processing efficiency.",
            data: 800 // ₹800 Cr (missed affordability segment)
        },
        competency: "Core: Tech innovation",
        sources: ["Wikipedia"]
    },
    {
        id: 8,
        year: 2000,
        title: "Diversify into Ice Cream & Cheese",
        description: "Should Amul diversify into ice cream, cheese, and other value-added dairy products?",
        correctOption: "Yes, enter new categories",
        incorrectOption: "No, stick to only milk & butter",
        correctImpact: {
            description: "Diversification into value-added products created multiple revenue streams and allowed Amul to capture different market segments. This reduced dependency on basic dairy products.",
            data: 6000 // ₹6,000 Cr by 2010
        },
        incorrectImpact: {
            description: "Without diversification, Amul would miss significant market opportunities and face intense competition in basic dairy segments, limiting growth potential.",
            data: 3500 // ₹3,500 Cr max
        },
        competency: "Core: Product innovation",
        sources: ["Asset Type"]
    },
    {
        id: 9,
        year: 2010,
        title: "Digital Procurement & Farmer Transparency",
        description: "Should Amul invest in digital procurement systems and farmer transparency tools?",
        correctOption: "Yes, adopt milk-testing & e-payment systems",
        incorrectOption: "No, use manual record-keeping",
        correctImpact: {
            description: "Digital systems improved transparency, reduced fraud, and ensured farmers received fair and timely payments. This strengthened farmer trust and loyalty to the cooperative.",
            data: 8000 // ₹8,000 Cr turnover by 2010, ₹13,500 Cr by 2012
        },
        incorrectImpact: {
            description: "Without digital systems, inefficiencies and potential corruption would persist in the procurement process, weakening farmer trust and potentially threatening the cooperative model.",
            data: 6000 // ₹6,000 Cr max
        },
        competency: "Core: Digital logistics",
        sources: ["Asset Type"]
    },
    {
        id: 10,
        year: 2015,
        title: "Low-Pricing Strategy in Villages",
        description: "Should Amul maintain its sustainable low-pricing strategy despite market pressures?",
        correctOption: "Yes, keep prices low in rural India",
        incorrectOption: "No, price like urban competitors",
        correctImpact: {
            description: "The low-pricing strategy maintained Amul's mass market appeal and rural affordability while still ensuring fair returns to farmers. This balanced approach supported long-term growth.",
            data: 27000 // Expanded market share to Bharat; ₹27,000 Cr+ by 2015
        },
        incorrectImpact: {
            description: "Higher pricing would reduce market penetration and volume, especially in price-sensitive rural markets, ultimately reducing overall revenue despite higher margins.",
            data: 20000 // ₹20,000 Cr
        },
        competency: "Core/Distinctive: Cost leadership",
        sources: ["LinkedIn", "Asset Type"]
    },
    {
        id: 11,
        year: 2020,
        title: "Scaling Procurement & Distribution",
        description: "Should Amul significantly increase its procurement capacity and distribution network?",
        correctOption: "Yes, expand to more states & bulk procurement",
        incorrectOption: "No, keep operating in legacy zones",
        correctImpact: {
            description: "Expanding procurement during challenging times helped farmers when other buyers reduced purchases. This strengthened farmer loyalty and enabled Amul to reach ₹38,542 Cr turnover in FY19-20.",
            data: 38542 // ₹38,542 Cr turnover
        },
        incorrectImpact: {
            description: "A cautious approach would leave farmers without buyers during crisis, damaging long-term relationships and limiting Amul's growth during a critical period.",
            data: 30000 // ₹30,000 Cr
        },
        competency: "Core: Scale growth",
        sources: ["Asset Type", "LinkedIn"]
    },
    {
        id: 12,
        year: 2022,
        title: "Push for ₹60,000 Cr Turnover",
        description: "Should Amul aggressively target the ₹60,000 Cr turnover milestone?",
        correctOption: "Yes, push export, marketing & production",
        incorrectOption: "No, freeze investments",
        correctImpact: {
            description: "Setting ambitious targets motivated the entire organization and supply chain. Amul achieved between ₹59,000-₹72,000 Cr turnover, establishing itself as one of India's largest food companies.",
            data: 59000 // ₹59,000-₹72,000 Cr turnover range
        },
        incorrectImpact: {
            description: "Without ambitious targets, growth would likely plateau around ₹45,000-₹50,000 Cr as the organization settled into comfortable operational patterns.",
            data: 45000 // ₹45,000-₹50,000 Cr
        },
        competency: "Core: Operational Excellence",
        sources: ["Amul"]
    },
    {
        id: 13,
        year: 2023,
        title: "Brand & Product Base Strengthening",
        description: "Should GCMMF continue expanding its product range and brand investments?",
        correctOption: "Yes, strengthen brand + product base",
        incorrectOption: "No, focus only on core milk",
        correctImpact: {
            description: "Continued expansion helped GCMMF achieve ₹59,545 Cr turnover, reaching more consumers with a wider product range while maintaining quality and affordability.",
            data: 59545 // ₹59,545 Cr (GCMMF), ₹90,000 Cr (Brand valuation)
        },
        incorrectImpact: {
            description: "Consolidation would limit growth potential and allow competitors to capture emerging market segments and regions.",
            data: 50000 // ₹70,000 Cr brand value max
        },
        competency: "Core: Growth momentum",
        sources: ["The Times of India", "bwmarketingworld.com"]
    },
    {
        id: 14,
        year: 2024,
        title: "Global Expansion (UAE/Spain)",
        description: "Should Amul expand into international markets like UAE and Spain?",
        correctOption: "Yes, expand into UAE/Spain & global retail",
        incorrectOption: "No, remain domestic",
        correctImpact: {
            description: "Global expansion opened new revenue streams and established Amul as an international brand. Entry into new markets represents a significant milestone in Amul's growth journey.",
            data: 65911 // ₹65,911 Cr turnover, strong brand presence abroad
        },
        incorrectImpact: {
            description: "Without global expansion, Amul would eventually face growth limitations in the domestic market and miss opportunities to build global brand recognition.",
            data: 55000 // ₹55,000 Cr turnover
        },
        competency: "Distinctive: Brand equity",
        sources: ["m.economictimes.com", "bwmarketingworld.com"]
    },
    {
        id: 15,
        year: 2025,
        title: "Entry into EU Market",
        description: "Should Amul enter the competitive EU dairy market?",
        correctOption: "Yes, enter competitive EU dairy market",
        incorrectOption: "No, avoid EU due to regulations",
        correctImpact: {
            description: "EU market entry will open premium markets and establish Amul as a global dairy player. This strategic move is expected to significantly boost turnover and brand value.",
            data: 70000 // Expected ₹70,000+ Cr turnover in FY26
        },
        incorrectImpact: {
            description: "Without EU market entry, Amul would miss opportunities for premium positioning and global scale, limiting its long-term growth potential.",
            data: 63000 // ₹63,000 Cr
        },
        competency: "Distinctive: Global reach",
        sources: ["Amul", "The Times of India"]
    }
];

// Timeline years for x-axis
const timelineYears = strategicDecisions.map(decision => decision.year);

// Actual historical turnover data points (for reference)
const actualTurnoverData = [
    { year: 1946, value: 0 },
    { year: 1963, value: 40 },
    { year: 1967, value: 70 },
    { year: 1970, value: 121 },
    { year: 1973, value: 150 },
    { year: 1985, value: 600 },
    { year: 1990, value: 1439 },
    { year: 2000, value: 6000 },
    { year: 2010, value: 13500 },
    { year: 2015, value: 27000 }
];

// State variables
let currentDecisionIndex = 0;
let selectedOption = null;
let userScore = 0;
let impactChart = null;

// DOM Elements - declare but don't initialize yet
let decisionTitle;
let decisionDescription;
let correctOptionBtn;
let incorrectOptionBtn;
let nextBtn;
let currentProgress;
let impactDescription;
let competencySection;
let competencyDescription;
let summaryModal;
let finalScore;
let learningSummary;
let downloadPdfBtn;
let restartBtn;

// Initialize the application
// Add this at the beginning of the initApp function
function initApp() {
    console.log('Initializing app...');
    
    // Handle intro animation
    const introAnimation = document.getElementById('intro-animation');
    setTimeout(() => {
        if (introAnimation) {
            introAnimation.classList.add('fade-out');
            setTimeout(() => {
                introAnimation.style.display = 'none';
            }, 500);
        }
    }, 4500); // Wait for animation to complete
    
    // Initialize DOM elements
    decisionTitle = document.getElementById('decision-title');
    decisionDescription = document.getElementById('decision-description');
    correctOptionBtn = document.getElementById('correct-option');
    incorrectOptionBtn = document.getElementById('incorrect-option');
    nextBtn = document.getElementById('next-btn');
    currentProgress = document.getElementById('current-progress');
    impactDescription = document.getElementById('impact-description');
    competencySection = document.getElementById('competency-gained');
    competencyDescription = document.getElementById('competency-description');
    summaryModal = document.getElementById('summary-modal');
    finalScore = document.getElementById('final-score');
    learningSummary = document.getElementById('learning-summary');
    downloadPdfBtn = document.getElementById('download-pdf');
    restartBtn = document.getElementById('restart-btn');
    
    // Check if critical elements exist
    if (!decisionTitle || !decisionDescription || !correctOptionBtn || !incorrectOptionBtn) {
        console.error('Critical DOM elements not found:', {
            decisionTitle: !!decisionTitle,
            decisionDescription: !!decisionDescription,
            correctOptionBtn: !!correctOptionBtn,
            incorrectOptionBtn: !!incorrectOptionBtn
        });
        alert('Error initializing app. Please check console for details.');
        return;
    }
    
    // Set up event listeners
    setupEventListeners();
    
    // Load the first decision
    loadDecision(currentDecisionIndex);
    
    // Create the timeline chart
    createTimelineChart();
    
    // Generate decision cards
    generateDecisionCards();
    
    console.log('App initialized successfully');
}

// Generate decision cards for the timeline
function generateDecisionCards() {
    const decisionCardsContainer = document.getElementById('decision-cards');
    if (!decisionCardsContainer) {
        console.error('Decision cards container not found');
        return;
    }
    
    // Clear existing cards
    decisionCardsContainer.innerHTML = '';
    
    // Create a card for each decision
    strategicDecisions.forEach((decision, index) => {
        const card = document.createElement('div');
        card.className = 'decision-card';
        card.dataset.index = index;
        
        // Add year badge
        const yearBadge = document.createElement('div');
        yearBadge.className = 'decision-card-year';
        yearBadge.textContent = decision.year;
        card.appendChild(yearBadge);
        
        // Add title
        const title = document.createElement('h3');
        title.className = 'decision-card-title';
        title.textContent = decision.title;
        card.appendChild(title);
        
        // Add description
        const description = document.createElement('p');
        description.className = 'decision-card-description';
        description.textContent = decision.description;
        card.appendChild(description);
        
        // Add options
        const options = document.createElement('div');
        options.className = 'decision-card-options';
        
        // Correct option
        const correctOption = document.createElement('div');
        correctOption.className = 'decision-card-option correct';
        correctOption.textContent = decision.correctOption;
        correctOption.dataset.option = 'correct';
        options.appendChild(correctOption);
        
        // Incorrect option
        const incorrectOption = document.createElement('div');
        incorrectOption.className = 'decision-card-option incorrect';
        incorrectOption.textContent = decision.incorrectOption;
        incorrectOption.dataset.option = 'incorrect';
        options.appendChild(incorrectOption);
        
        card.appendChild(options);
        
        // Add outcome section (initially hidden)
        const outcome = document.createElement('div');
        outcome.className = 'decision-card-outcome';
        outcome.style.display = 'none';
        card.appendChild(outcome);
        
        // Add event listeners
        card.addEventListener('click', function() {
            // Navigate to this decision in the main interface
            if (currentDecisionIndex !== index) {
                currentDecisionIndex = index;
                loadDecision(index);
                
                // Highlight the active card
                document.querySelectorAll('.decision-card').forEach(c => {
                    c.classList.remove('active');
                });
                this.classList.add('active');
                
                // Scroll the card into view
                this.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        });
        
        // Add event listeners for options
        correctOption.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent card click event
            handleCardOptionClick(card, 'correct', decision, outcome);
        });
        
        incorrectOption.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent card click event
            handleCardOptionClick(card, 'incorrect', decision, outcome);
        });
        
        decisionCardsContainer.appendChild(card);
    });
    
    // Highlight the current decision card
    const currentCard = decisionCardsContainer.querySelector(`[data-index="${currentDecisionIndex}"]`);
    if (currentCard) {
        currentCard.classList.add('active');
        currentCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
}

// Handle card option click
function handleCardOptionClick(card, option, decision, outcomeElement) {
    // Update UI to show selection
    const correctOption = card.querySelector('.decision-card-option.correct');
    const incorrectOption = card.querySelector('.decision-card-option.incorrect');
    
    if (option === 'correct') {
        correctOption.classList.add('selected');
        incorrectOption.classList.remove('selected');
        outcomeElement.className = 'decision-card-outcome correct';
        outcomeElement.innerHTML = `<strong>✅ Outcome:</strong> ${decision.correctImpact.description}`;
    } else {
        incorrectOption.classList.add('selected');
        correctOption.classList.remove('selected');
        outcomeElement.className = 'decision-card-outcome incorrect';
        outcomeElement.innerHTML = `<strong>❌ Outcome:</strong> ${decision.incorrectImpact.description}`;
    }
    
    // Show the outcome
    outcomeElement.style.display = 'block';
    
    // If this is the current decision in the main interface, also select it there
    if (parseInt(card.dataset.index) === currentDecisionIndex) {
        selectOption(option);
    }
}

// Load a decision into the UI
function loadDecision(index) {
    const decision = strategicDecisions[index];
    decisionTitle.textContent = `${decision.year} – ${decision.title}`;
    decisionDescription.textContent = decision.description;
    correctOptionBtn.textContent = decision.correctOption;
    incorrectOptionBtn.textContent = decision.incorrectOption;
    
    // Reset selection state
    selectedOption = null;
    correctOptionBtn.classList.remove('selected');
    incorrectOptionBtn.classList.remove('selected');
    nextBtn.disabled = true;
    
    // Update progress
    currentProgress.textContent = index + 1;
    
    // Reset impact description
    impactDescription.textContent = 'Select an option to see the impact...';
    competencySection.style.display = 'none';
    
    // Display sources
    const sourcesElement = document.getElementById('decision-sources');
    if (sourcesElement && decision.sources) {
        sourcesElement.textContent = decision.sources.join(', ');
    }
    
    // Update chart to highlight current decision year
    updateTimelineHighlight(decision.year);
}

// Set up event listeners
function setupEventListeners() {
    console.log('Setting up event listeners');
    
    if (correctOptionBtn) {
        correctOptionBtn.addEventListener('click', function() {
            console.log('Correct option clicked');
            selectOption('correct');
        });
    }
    
    if (incorrectOptionBtn) {
        incorrectOptionBtn.addEventListener('click', function() {
            console.log('Incorrect option clicked');
            selectOption('incorrect');
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            console.log('Next button clicked');
            goToNextDecision();
        });
    }
    
    if (downloadPdfBtn) {
        downloadPdfBtn.addEventListener('click', downloadPDF);
    }
    
    if (restartBtn) {
        restartBtn.addEventListener('click', restartJourney);
    }
}

// Handle option selection
function selectOption(option) {
    console.log('Option selected:', option);
    selectedOption = option;
    
    // Update UI to show selection
    if (option === 'correct') {
        correctOptionBtn.classList.add('selected');
        incorrectOptionBtn.classList.remove('selected');
        userScore++;
    } else {
        incorrectOptionBtn.classList.add('selected');
        correctOptionBtn.classList.remove('selected');
    }
    
    // Enable next button
    nextBtn.disabled = false;
    
    // Update the impact description and chart
    const decision = strategicDecisions[currentDecisionIndex];
    const correctRevenue = decision.correctImpact.data;
    const incorrectRevenue = decision.incorrectImpact.data;
    const revenueDifference = correctRevenue - incorrectRevenue;
    
    // Create revenue comparison panel
    const revenueComparisonHtml = `
        <div class="revenue-comparison">
            <h4>Revenue Comparison:</h4>
            <div class="revenue-data">
                <div class="revenue-item correct">
                    <span class="revenue-label">Correct Revenue:</span>
                    <span class="revenue-value">₹${correctRevenue.toLocaleString()} Cr</span>
                </div>
                <div class="revenue-item incorrect">
                    <span class="revenue-label">If Wrong Decision:</span>
                    <span class="revenue-value">₹${incorrectRevenue.toLocaleString()} Cr</span>
                </div>
                <div class="revenue-item difference">
                    <span class="revenue-label">Missed Potential:</span>
                    <span class="revenue-value">₹${revenueDifference.toLocaleString()} Cr</span>
                </div>
            </div>
        </div>
    `;
    
    // Create competency tag HTML based on the competency structure
    let competencyTagHtml = '';
    if (typeof decision.competency === 'object' && decision.competency.type) {
        competencyTagHtml = `
            <div class="competency-tag ${decision.competency.type.toLowerCase()}">
                <span class="competency-type">${decision.competency.type}</span>
                <span class="competency-name">${decision.competency.description}</span>
            </div>
        `;
    } else {
        // Handle string format for backward compatibility
        const parts = decision.competency.split(':');
        const type = parts.length > 1 ? parts[0].trim() : 'Competency';
        const description = parts.length > 1 ? parts[1].trim() : decision.competency;
        competencyTagHtml = `
            <div class="competency-tag ${type.toLowerCase()}">
                <span class="competency-type">${type}</span>
                <span class="competency-name">${description}</span>
            </div>
        `;
    }
    
    if (option === 'correct') {
        impactDescription.innerHTML = `
            <strong>Year:</strong> ${decision.year} – ${decision.title}<br><br>
            <strong>✅ Historical Outcome:</strong><br>
            ${decision.correctImpact.description}<br><br>
            <strong>Turnover Impact:</strong> ₹${decision.correctImpact.data.toLocaleString()} crore
            ${competencyTagHtml}
            ${revenueComparisonHtml}
        `;
        competencyDescription.textContent = typeof decision.competency === 'object' ? 
            `${decision.competency.type}: ${decision.competency.description}` : decision.competency;
        updateTimelineData('correct');
    } else {
        impactDescription.innerHTML = `
            <strong>Year:</strong> ${decision.year} – ${decision.title}<br><br>
            <strong>❌ Alternate Scenario:</strong><br>
            ${decision.incorrectImpact.description}<br><br>
            <strong>Estimated Turnover:</strong> ₹${decision.incorrectImpact.data.toLocaleString()} crore
            ${competencyTagHtml.replace('competency-tag', 'competency-tag missed')}
            ${revenueComparisonHtml}
        `;
        competencyDescription.textContent = typeof decision.competency === 'object' ? 
            `${decision.competency.type}: ${decision.competency.description}` : decision.competency;
        updateTimelineData('incorrect');
    }
    
    // Show competency section
    competencySection.style.display = 'block';
    
    // Animate the growth path on the chart
    animateGrowthPath(option);
}

// Go to the next decision
function goToNextDecision() {
    currentDecisionIndex++;
    
    if (currentDecisionIndex < strategicDecisions.length) {
        loadDecision(currentDecisionIndex);
    } else {
        showSummary();
    }
}

// Show the summary modal
function showSummary() {
    finalScore.textContent = userScore;
    
    // Generate learning summary based on score
    if (userScore >= 12) {
        learningSummary.textContent = "Excellent! You have a strong understanding of strategic business decisions and their impacts. You recognized the key factors that made Amul successful in becoming India's largest food brand and a global dairy player.";
    } else if (userScore >= 8) {
        learningSummary.textContent = "Good job! You understand many of the strategic decisions that contributed to Amul's success, but there's still more to learn about effective business strategies and the power of the cooperative model.";
    } else {
        learningSummary.textContent = "You've completed the journey! Review the correct decisions to better understand how strategic choices impact business outcomes and create long-term success. Amul's story demonstrates how the right decisions at critical moments can transform an organization.";
    }
    
    // Show the modal
    summaryModal.style.display = 'flex';
}

// Create the timeline chart - Dual Outcome Timeline Chart (Cause-Effect Graph)
function createTimelineChart() {
    console.log('Creating timeline chart');
    
    const canvas = document.getElementById('impact-chart');
    if (!canvas) {
        console.error('Chart canvas element not found');
        return;
    }
    
    const ctx = canvas.getContext('2d');
    
    // Generate actual and alternate datasets
    const actualData = [];
    const alternateData = [];
    
    // Initialize with all decisions' data
    for (let i = 0; i < strategicDecisions.length; i++) {
        actualData.push({
            x: strategicDecisions[i].year,
            y: strategicDecisions[i].correctImpact.data
        });
        
        // For alternate timeline, use the same data initially
        alternateData.push({
            x: strategicDecisions[i].year,
            y: strategicDecisions[i].correctImpact.data
        });
    }
    
    try {
        impactChart = new Chart(ctx, {
            type: 'line',
            data: {
                datasets: [
                    {
                        label: 'Correct Decision Path',
                        data: actualData,
                        borderColor: '#4caf50',
                        backgroundColor: 'rgba(76, 175, 80, 0.2)',
                        borderWidth: 3,
                        tension: 0.3,
                        fill: true,
                        pointRadius: 6,
                        pointHoverRadius: 8,
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2,
                        hidden: false // Show by default
                    },
                    {
                        label: 'Incorrect Decision Path',
                        data: alternateData,
                        borderColor: '#d62828',
                        backgroundColor: 'rgba(214, 40, 40, 0.2)',
                        borderWidth: 2,
                        borderDash: [5, 5],
                        tension: 0.3,
                        fill: true,
                        pointRadius: 0,
                        pointHoverRadius: 6,
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2,
                        hidden: true // Initially hidden
                    },
                    {
                        label: 'Selected Decision',
                        data: [],
                        borderColor: '#0077b6',
                        backgroundColor: '#0077b6',
                        pointRadius: 10,
                        pointHoverRadius: 12,
                        pointStyle: 'star',
                        pointBorderColor: '#FFC107',
                        pointBorderWidth: 2,
                        showLine: false
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        type: 'linear',
                        position: 'bottom',
                        title: {
                            display: true,
                            text: 'Year (1946 to 2025)',
                            font: {
                                size: 16,
                                weight: 'bold'
                            },
                            color: '#333'
                        },
                        ticks: {
                            callback: function(value) {
                                return value.toString();
                            },
                            font: {
                                size: 14
                            },
                            color: '#555'
                        },
                        min: 1946,
                        max: 2025,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)',
                            borderDash: [5, 5]
                        }
                    },
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Amul Revenue (₹ crore)',
                            font: {
                                size: 16,
                                weight: 'bold'
                            },
                            color: '#333'
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)',
                            borderDash: [5, 5]
                        },
                        ticks: {
                            font: {
                                size: 14
                            },
                            color: '#555'
                        }
                    }
                },
                plugins: {
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleFont: {
                            size: 16,
                            weight: 'bold'
                        },
                        bodyFont: {
                            size: 14
                        },
                        padding: 12,
                        cornerRadius: 8,
                        callbacks: {
                            title: function(tooltipItems) {
                                return 'Year: ' + tooltipItems[0].parsed.x;
                            },
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed.y !== null) {
                                    label += '₹' + context.parsed.y.toLocaleString() + ' crore';
                                }
                                return label;
                            },
                            afterLabel: function(context) {
                                // Add decision information if available
                                const year = context.parsed.x;
                                const decision = strategicDecisions.find(d => d.year === year);
                                if (decision) {
                                    return '\nDecision: ' + decision.title;
                                }
                                return '';
                            }
                        }
                    },
                    legend: {
                        position: 'top',
                        labels: {
                            font: {
                                size: 14,
                                weight: 'bold'
                            },
                            usePointStyle: true,
                            padding: 20,
                            color: '#333'
                        }
                    },
                    title: {
                        display: false, // Will be enabled when a decision is selected
                        text: 'Impact on Revenue',
                        font: {
                            size: 16,
                            weight: 'bold'
                        },
                        color: '#d62828',
                        padding: {
                            top: 10,
                            bottom: 20
                        }
                    }
                },
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                animation: {
                    duration: 800,
                    easing: 'easeOutQuart'
                }
            }
        });
        
        // Initialize with the first decision highlighted
        updateTimelineHighlight(strategicDecisions[0].year);
        console.log('Chart created successfully');
        
    } catch (error) {
        console.error('Error creating chart:', error);
    }
}

// Update the timeline highlight for current decision
function updateTimelineHighlight(year) {
    if (!impactChart) {
        console.error('Cannot update timeline highlight: Chart not initialized');
        return;
    }
    
    // Update the highlight point
    impactChart.data.datasets[2].data = [{
        x: year,
        y: getValueForYear(year, 'correct')
    }];
    
    try {
        impactChart.update();
    } catch (error) {
        console.error('Error updating chart highlight:', error);
    }
}

// Get the value for a specific year from the dataset
function getValueForYear(year, option) {
    const decision = strategicDecisions.find(d => d.year === year);
    if (decision) {
        return option === 'correct' ? decision.correctImpact.data : decision.incorrectImpact.data;
    }
    return 0;
}

// Update the timeline data based on user selection
function updateTimelineData(option) {
    if (!impactChart) {
        console.error('Cannot update timeline data: Chart not initialized');
        return;
    }
    
    const currentDecision = strategicDecisions[currentDecisionIndex];
    const currentYear = currentDecision.year;
    
    console.log('Updating timeline data for year:', currentYear, 'option:', option);
    
    // Get the correct and incorrect values for the current year
    const correctValue = currentDecision.correctImpact.data;
    const incorrectValue = currentDecision.incorrectImpact.data;
    
    // Clear previous data points to focus only on current year
    impactChart.data.datasets[0].data = [];
    impactChart.data.datasets[1].data = [];
    
    // Add data points for current year only
    impactChart.data.datasets[0].data.push({
        x: currentYear,
        y: correctValue
    });
    
    impactChart.data.datasets[1].data.push({
        x: currentYear,
        y: incorrectValue
    });
    
    // Update the highlight point
    impactChart.data.datasets[2].data = [{
        x: currentYear,
        y: option === 'correct' ? correctValue : incorrectValue
    }];
    
    // Show both datasets for comparison
    impactChart.data.datasets[0].hidden = false; // Correct path
    impactChart.data.datasets[1].hidden = false; // Incorrect path
    
    // Make the selected path more prominent
    if (option === 'correct') {
        impactChart.data.datasets[0].borderWidth = 5;
        impactChart.data.datasets[0].pointRadius = 8;
        impactChart.data.datasets[1].borderWidth = 2;
        impactChart.data.datasets[1].pointRadius = 4;
    } else {
        impactChart.data.datasets[0].borderWidth = 2;
        impactChart.data.datasets[0].pointRadius = 4;
        impactChart.data.datasets[1].borderWidth = 5;
        impactChart.data.datasets[1].pointRadius = 8;
    }
    
    // Zoom in on the current year by adjusting the chart scales
    const yearBuffer = 5; // Show 5 years before and after current year
    const valueBuffer = Math.max(correctValue, incorrectValue) * 0.3; // 30% buffer above highest value
    
    impactChart.options.scales.x.min = Math.max(1946, currentYear - yearBuffer);
    impactChart.options.scales.x.max = Math.min(2025, currentYear + yearBuffer);
    impactChart.options.scales.y.max = Math.max(correctValue, incorrectValue) + valueBuffer;
    
    // Add annotations to clearly show the difference
    const difference = Math.abs(correctValue - incorrectValue);
    const differencePercentage = Math.round((difference / Math.min(correctValue, incorrectValue)) * 100);
    
    // Update chart title to show the impact
    impactChart.options.plugins.title = {
        display: true,
        text: `Impact on Revenue: ${differencePercentage}% difference (₹${difference.toLocaleString()} Cr)`,
        font: {
            size: 16,
            weight: 'bold'
        },
        color: '#d62828',
        padding: {
            top: 10,
            bottom: 20
        }
    };
    
    // Update decision cards to reflect the current selection
    const currentCard = document.querySelector(`.decision-card[data-index="${currentDecisionIndex}"]`);
    if (currentCard) {
        const correctOption = currentCard.querySelector('.decision-card-option.correct');
        const incorrectOption = currentCard.querySelector('.decision-card-option.incorrect');
        const outcomeElement = currentCard.querySelector('.decision-card-outcome');
        
        if (option === 'correct') {
            correctOption.classList.add('selected');
            incorrectOption.classList.remove('selected');
            outcomeElement.className = 'decision-card-outcome correct';
            outcomeElement.innerHTML = `<strong>✅ Outcome:</strong> ${currentDecision.correctImpact.description}`;
        } else {
            incorrectOption.classList.add('selected');
            correctOption.classList.remove('selected');
            outcomeElement.className = 'decision-card-outcome incorrect';
            outcomeElement.innerHTML = `<strong>❌ Outcome:</strong> ${currentDecision.incorrectImpact.description}`;
        }
        
        outcomeElement.style.display = 'block';
    }
    
    try {
        impactChart.update();
        console.log('Chart updated successfully');
    } catch (error) {
        console.error('Error updating chart:', error);
    }
}

// Animate the growth path on the chart to show the difference between correct and incorrect decisions
function animateGrowthPath(option) {
    if (!impactChart) {
        console.error('Cannot animate growth path: Chart not initialized');
        return;
    }
    
    const currentDecision = strategicDecisions[currentDecisionIndex];
    
    // First update with just the selected path
    if (option === 'correct') {
        impactChart.data.datasets[0].hidden = false; // Show actual growth
        impactChart.data.datasets[1].hidden = true;  // Hide alternate scenario
    } else {
        impactChart.data.datasets[0].hidden = true;  // Hide actual growth
        impactChart.data.datasets[1].hidden = false; // Show alternate scenario
    }
    
    impactChart.update();
    
    // After a short delay, show both paths for comparison
    setTimeout(() => {
        impactChart.data.datasets[0].hidden = false; // Show actual growth
        impactChart.data.datasets[1].hidden = false; // Show alternate scenario
        
        // Highlight the selected path
        if (option === 'correct') {
            impactChart.data.datasets[0].borderWidth = 4;
            impactChart.data.datasets[1].borderWidth = 2;
        } else {
            impactChart.data.datasets[0].borderWidth = 2;
            impactChart.data.datasets[1].borderWidth = 4;
        }
        
        impactChart.update();
    }, 1000);
}

// Download PDF summary (placeholder function)
function downloadPDF() {
    alert('PDF download functionality will be implemented here.');
    // In a real implementation, you would generate a PDF with the user's journey
    // This could be done using libraries like jsPDF or by calling a server endpoint
}

// Restart the journey
function restartJourney() {
    currentDecisionIndex = 0;
    userScore = 0;
    summaryModal.style.display = 'none';
    
    // Reset the chart data
    for (let i = 0; i < strategicDecisions.length; i++) {
        impactChart.data.datasets[1].data[i].y = strategicDecisions[i].correctImpact.data;
    }
    impactChart.data.datasets[1].hidden = true;
    
    loadDecision(currentDecisionIndex);
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded, initializing app...');
    setTimeout(initApp, 100); // Small delay to ensure DOM is fully processed
});