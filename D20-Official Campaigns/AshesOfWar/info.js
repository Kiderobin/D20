const campaignInfo = {
    // Basic information
    title: "Ashes Of War",
    subtitle: "Hear The Fires Roar",
    description: "An epic campaign of fire, war, and destiny.",
    
    // Campaign metadata
    campaignLevel: "1-20",
    players: "3-6",
    duration: "15+ sessions",
    difficulty: "Hard",
    
    // Banner image URL
    banner: "https://raw.githubusercontent.com/Kiderobin/D20/main/D20-Official%20Campaigns/AshesOfWar/banner.png",
    
    // Story section (can include HTML)
    story: `
        <h3>📖 Campaign Overview</h3>
        <p>In a world scarred by ancient wars, heroes must rise to face the flames of a new conflict. 
        Uncover secrets, forge alliances, and battle the Baron Of Flame in a saga of ashes and rebirth.</p>
    `,
    
    // Key features
    features: [
        "🔥 Fire-themed magic and enemies",
        "⚔️ Strategic battles and war scenarios",
        "🗺️ Expansive world with unique regions",
        "👑 Political intrigue and alliances",
        "🧙 Custom classes and subclasses"
    ],
    
    // Campaign structure
    chapters: [
        {
            title: "Prologue: The Ember's Call",
            description: "The heroes are summoned as the first flames ignite."
        },
        {
            title: "Act I: War's Awakening",
            description: "Battle lines are drawn and the Baron Of Flame makes his move."
        },
        {
            title: "Act II: Ashes and Allies",
            description: "Form alliances and uncover the secrets of the ancient war."
        },
        {
            title: "Finale: The Fires Roar",
            description: "Face the Baron in a climactic battle for the fate of the world."
        }
    ],
    
    // Resources and downloads
    resources: [
        {
            name: "Campaign Guide (PDF)",
            link: "#",
            type: "pdf"
        },
        {
            name: "Character Sheets",
            link: "#",
            type: "pdf"
        },
        {
            name: "Maps & Handouts",
            link: "#",
            type: "zip"
        }
    ]
};

window.campaignInfo = campaignInfo;
