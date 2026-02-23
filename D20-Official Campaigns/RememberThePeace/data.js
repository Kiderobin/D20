window.D20_CAMPAIGN_DATA = {
    races: [
        {
            name: "Human"
          
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
            subclasslevel: 15,
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
                    icon: "locked on.png",
                    type: "class-skill",
                    description: "Force an enemy to target you instead of allies for one turn."
                }
            ],
            subclasses: [
                {
                    name: "Paladin",
                    passive: {
                        name: "Divine Protection",
                        icon: "ankh.png",
                        type: "class-sub-passive",
                        description: "Gain +2 to all saving throws against dark magic."
                    },
                    skills: [
                        {
                            name: "Holy Smite",
                            icon: "zeus-sword.png",
                            type: "class-sub-skill",
                            description: "Deal extra damage to undead or demonic creatures."
                        }
                    ]
                },
                {
                    name: "Magical Knight",
                    passive: {
                        name: "Controlled Magic",
                        icon: "fire-spell-cast.png",
                        type: "class-sub-passive",
                        description: "Control over natural occuring elements. Must match player's affinity though."
                    },
                    skills: [
                        {
                        name: "Spell Craft",
                        icon: "spell-book.png",
                        type: "class-sub-skill",
                        description: "Create spells with certain conditions. Requires GM approval, and keep spells in your notes."
                    },
                        {
                        name: "Elemental Summoning",
                        icon: "pentagram-rose.png",
                        type: "class-sub-skill",
                        description: "Summon a temporary elemental ally to fight alongside you. Allies Gain half your health and deal 1d20/2 damage per turn."
                    }
                    ]
                }
            ]
        },
        {
            name: "Rogue",
            subclasslevel: 10,
            passive: {
                name: "Hidden Blade",
                icon: "cloak-dagger.png",
                type: "class-passive",
                AS: "D",
                description: "Gain +1 item slot for daggers."
            },
            skills: [
                {
                    name: "Backstab",
                    icon: "backstab.png",
                    type: "class-skill",
                    description: "Deal double damage when attacking from stealth."
                }
            ],
            subclasses: [
                {
                    name: "Trickster",
                    skills: [
                        {
                            name: "Illusion",
                            icon: "magick-trick.png",
                            type: "class-sub-skill",
                            description: "Create a temporary illusion to distract enemies. Illusion lasts for 1 turn in battle and can not attack."
                        }
                    ]
                }
            ]
        },
        {
            name: "Archer",
            subclasslevel: 9,
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
            subclasses: [
                {
                    name: "Hunter",
                    passive: {
                        name: "Beast Tracker",
                        icon: "paw-print.png",
                        type: "class-sub-passive",
                        description: "Gain +2 to tracking and hunting checks."
                    }
                }
            ]
        },
        {
            name: "Magician",
            subclasslevel: 12,
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
            ],
            subclasses: [
                {
                   name: "Enchanter",
                   passive: {
                    name: "Arcane Knowledge",
                    icon: "wax-tablet.png",
                    type: "class-sub-passive",
                    description: "Gain +2 to all magical knowledge checks."
                   },
                   skills: [
                        {
                            name: "Enchant Item",
                            icon: "magic-swirl.png",
                            type: "class-sub-skill",
                            description: "Temporarily enchant an item to give it magical properties. Lasts for 4 turns."
                        },
                    ]
                }
            ]
        }
    ]
};
