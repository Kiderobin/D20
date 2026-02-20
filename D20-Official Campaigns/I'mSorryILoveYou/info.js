const campaignInfo = {
    // Basic information
    title: "I'm Sorry I love You...",
    subtitle: "A D20 Minigame Oneshot",
    description: "",
    
    // Campaign metadata
    players: "1-4",
    difficulty: "Easy",
    
    // Banner image URL
    banner: "https://raw.githubusercontent.com/ScareTheVoices/D20/refs/heads/main/D20-Official%20Campaigns/I'mSorryILoveYou/banner.png",
    
    // Story section (can include HTML)
    story: `
        <h3>Campaign Overview</h3>
        <p>
        
        <h4>Players</h4>
        <ul>
            <li>Player 1 (Male/Female - Club - Player Character)</li>
            <li>Player 2 (Male/Female - Club - Player Character)</li>
            <li>Player 3 (Male/Female - Club - Player Character)</li>
            <li>Player 4 (Male/Female - Club - Player Character)</li>
        </ul>
        <h4>Homeroom Class (Available anytime)</h4>
        <ul>
            <li>Kenji Nakamura (Occult Club - Serious believer in the supernatural, analytical thinker)</li>
            <li>Sakura Yoshida (Occult Club - Air Head)</li>
            <li>Emiko Nakamura (Photography Club - Outgoing extrovert, comfortable approaching anyone)</li>
            <li>Hiroshi Tanaka (Cooking Club - Friendly, enthusiastic baker, oblivious to darker secrets) - Target</li>
            <li>Riku Sato (Cooking Club - Sharp-tongued critic, dismissive and hostile toward Players in the same club)</li>
            <li>Chiyo Sato (Photography Club - Shy by nature, questions people's motives)</li>
            <li>Toma Ito (Photography Club - Calm and Collective, tries to see the best in everyone)</li>
        </ul>
        <h4>Cooking Club Members</h4>
        <ul>
            <li>Hiroshi Tanaka (Male - Friendly, enthusiastic baker, oblivious to darker secrets)</li>
            <li>Riku Sato (Female - Sharp-tongued critic, dismissive and hostile toward the player who joins the Cooking club)</li>
            <li>Haruto Ito (Charismatic leader, popular among club members)</li>
            <li>Mizuki Kobayashi (Female - Laid-back, mediator between conflicts)</li>
        </ul>
        <h4>Photography Club Members</h4>
        <ul>
            <li>Takeshi Yamamoto (Female - Artistic perfectionist, critical of others' work)</li>
            <li>Masaru Kimura (Male - Shy and reserved, expresses himself through photography)</li>
            <li>Emiko Nakamura (Female - Outgoing extrovert, comfortable approaching anyone)</li>
            <li>Chiyo Sato (Female - Shy by nature)</li>
            <li>Toma Ito (Calm and Collective, tries to see the best in everyone)</li>
        </ul>
        <h4>Occult Club Members</h4>
        <ul>
            <li>Kenji Nakamura (Male - Serious believer in the supernatural, analytical thinker)</li>
            <li>Yuki Kobayashi (Female - Skeptic with dark sense of humor, challenges occult claims)</li>
            <li>Sakura Yoshida (Female - Air Head, Loves to be around people)</li>
            <li>Aiko Suzuki (Female - Bookish researcher, digs into occult history and lore)</li>
        </ul>
        <h4>Teachers/Staff</h4>
        <ul>
            <li>Sensei Higashikata (Laid back, HOMEROOM Teacher)</li>
            <li>Sensei Nakagawa (Caring mentor, takes interest in student welfare, Cooking Teacher)</li>
        </ul>
        <h4>Game Structure Notes</h4>
        <ul>
            <li>Yandere selection: Players, NPCs, or both (randomized)</li>
            <li>Game phases: Morning, Announcements, Free Period, Club Activity, Going Home</li>
            <li>Connection ratings: Bad, Ok, Decent, Good, Great, Amazing!</li>
            <li>Special rules for Yandere and targets, festival win conditions, and voting</li>
        </ul>
    `,
    
    // Key features
    features: [
        "Party Game",
        "Mystery and investigation",
        "Work in progress"
    ],
    
    // Campaign structure
    chapters: [
        {
            title: "Game Phases",
            description: `
                <ul>
                    <li><b>Morning (Free Time):</b> Players interact with NPCs, choosing one of three dialogue actions. Investigations unlock after a death.</li>
                    <li><b>Announcements:</b> Players learn if anyone was killed the night prior. No deaths on the first day.</li>
                    <li><b>Free Period:</b> Players interact or vote on the Yandere (voting only after a death). Incorrect votes continue the game; voting out the Yandere wins for innocents; voting out the Yandere's target loses for innocents.</li>
                    <li><b>Club Activity:</b> Players attend their club, interact only with clubmates, and gather clues.</li>
                    <li><b>Going Home:</b> Players choose who to walk home with (cannot pick the same person consecutively). The Yandere chooses to kill or pass. The Yandere cannot kill their target/love interest.</li>
                </ul>
            `
        }
    
    ],
    
    // Resources and downloads
    resources: [
        {
            name: "Play",
            link: "https://scarethevoices.github.io/D20/D20-Official%20Campaigns/I'mSorryILoveYou/D20.html"
        }
    ]
};

window.campaignInfo = campaignInfo;






