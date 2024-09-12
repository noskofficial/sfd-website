// Function to create cards
function createCard(member) {
    return `
    <div id="members-card" class="relative w-80 rounded-3xl shadow-lg overflow-hidden">
                <!-- Background Image -->
                <img id="profile" src="${member.image}" alt="${member.name}" class="w-full rounded-3xl h-96 object-cover border-8 border-white">
                
                <!-- Overlay with text -->
                <div class="absolute text-center bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-4">
                    <h2 class="text-xl font-semibold">${member.name}</h2>
                    <p class="text-sm">${member.designation}</p>
        
                    <!-- Icons -->
                    <div class="flex justify-center gap-4 mt-4">
                        <a href="${member.socialLinks.instagram}" class="bg-white rounded-full border-4 flex items-center justify-center w-8 h-8">
                            <img src="../assets/socialmedia/instagram.svg" class="">
                        </a>
                        <a href="${member.socialLinks.facebook}" class="bg-white rounded-full border-4 flex items-center justify-center w-8 h-8">
                            <img src="../assets/socialmedia/facebook.svg" class="">
                        </a>
                        <a href="${member.socialLinks.linkedin}" class="bg-white rounded-full border-4 flex items-center justify-center w-8 h-8">
                            <img src="../assets/socialmedia/linkedin.svg" class="">
                        </a>
                        <a href="${member.socialLinks.github}" class="bg-white rounded-full border-4 flex items-center justify-center w-8 h-8">
                            <img src="../assets/socialmedia/website.svg" class="">
                        </a>
                        <a href="${member.socialLinks.website}" class="bg-white rounded-full border-4 flex items-center justify-center w-8 h-8">
                            <img src="../assets/socialmedia/website.svg" class="">
                        </a>
                    </div>
                    
                </div>
            </div>
    
    `;
}

// Function to render all cards here
// Gets elemnt by id (members-container) and insert inside the tag...
async function fetchCards() {
    try {
        const response = await fetch('../data/members.json');
        const members = await response.json();

        const container = document.getElementById('members-container');
        members.forEach(member => {
            container.innerHTML += createCard(member);
        });
    } catch (error) {
        console.error('Error fetching the JSON data', error);
    }
}

// Call the function to render cards...
window.onload = fetchCards;
