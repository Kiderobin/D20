window.D20_CAMPAIGN_DATA = {
    races: [
        {
            name: "Human",
            passive: {
                name: "Versatile",
                icon: "human-pyramid.png",
                type: "race-passive",
                description: "Gain +1 to any two different skill checks of your choice."
            }
        },
        {
            name: "Elf",
            passive: {
                name: "Keen Senses",
                icon: "advancedperception.png",
                type: "race-passive",
                description: "Gain +2 to all perception-based checks."
            }
        },
        {
            name: "Beastman",
            skills: [
                {
                    name: "Savage Attack",
                    icon: "claw-slashes.png",
                    type: "race-skill",
                    description: "Once per battle, deal an extra 1d20 damage after a successful hit."
                }
            ]
        }
    ],  
    classes: [
        {
            name: "Knight",
            passive: {
                name: "Sword Mastery",
                icon: "Sword.png",
                type: "class-passive",
                AS: "S",
                description: "Gain +1 item slot for Swords."
            },
            skills: [
                {
                    name: "Taunt",
                    icon: "locked-on.png",
                    type: "class-skill",
                    description: "Force an enemy to target you instead of allies for one turn."
                }
            ]
        },
        {
            name: "Archer",
            passive: {
                name: "Quiver Mastery",
                icon: "bow-arrow.png",
                type: "class-passive",
                AS: "B",
                description: "Gain +1 item slot for bows. Never run out of standard arrows."
            },
            skills: [
                {
                    name: "Piercing Shot",
                    icon: "wide-arrow-dunk.png",
                    type: "class-skill",
                    description: "Ignore defense on your next attack. Requires a bow equipped."
                }
            ],
            
        },
        {
            name: "Magician",
            passive: {
                name: "There's My Wand!",
                icon: "wand.png",
                type: "class-passive",
                AS: "W",
                description: "Gain +1 item slot for magical wands or catalysts."
            },
            skills: [
                {
                    name: "Elemental Burst",
                    icon: "burning-dot.png",
                    type: "class-skill",
                    description: "Deal +1d20 bonus damage based on Affinity on hit."
                }
            ]
        }
    ]
}