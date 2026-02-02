window.D20_CAMPAIGN_DATA = {
    races: [
        {
            name: "Human",
            skill: {
                name: "Human Strength",
                icon: "humanstrength.png",
                type: "race-skill",
                description: "+1 to all attacks made."
            }
        },
        {
            name: "Gillfolk",
            passive: {
                name: "Child of the Seas",
                icon: "childoftheseas.png",
                type: "race-passive",
                description: "The ability to breathe underwater."
            }
        },
        {
    name: "Draconian",
    passives: [
        {
            name: "Upbringing",
            icon: "upbringing.png",
            type: "race-passive",
            description: "Resistant to their specific element (Fire, Cold, Lightning, Acid, or Poison)."
        },
        {
            name: "Scaled Skin",
            icon: "scaledskin.png",
            type: "race-passive",
            description: "+2 to all defense from all attacks."
        }
    ],
    skills: [
        {
            name: "Elemental Breath",
            icon: "elementalbreath.png",
            type: "race-skill",
            description: "Able to shoot out blasts of their element (Fire, Cold, Lightning, Acid, or Poison)."
        }
    ]
},
        {
            name: "Coral Dwarf",
            passive: {
                name: "Poison Resistant",
                icon: "poisonresistant.png",
                type: "race-passive",
                description: "Resistant to poison."
            },
            skill: {
                name: "Love of Tools",
                icon: "loveoftools.png",
                type: "race-skill",
                description: "Ability to use any artisan tools with ease."
            }
        },
        {
            name: "Beastfolk",
            passive: [
        {
            name: "Keen Senses",
            icon: "keensenses.png",
            type: "race-passive",
            description: "Able to sense murderous intent from your surroundings."
        },
        {
            name: "Animal Features",
            icon: "animalfeatures.png",
            type: "race-passive",
            description: "Being born with animal features comes in handy. +2 to Attacks, Speed, or Defenses (Depending on which animal)."
        }
    ],
        }
    ],
    classes: [
        {
            name: "Corsair",
            subclasslevel: 15,
            passive: {
                name: "Sword In Hand",
                icon: "swordinhand.png",
                type: "class-passive",
                AS: "Swords",
                description: "Gain +1 item slot for swords."
            },
            skills: [
                {
                    name: "Suprise!",
                    icon: "suprise.png",
                    type: "class-skill",
                    description: "+2 to suprise attacks."
                }
            ],
            subclasses: [
                {
                    name: "Fencer",
                    skills: [
                        {
                            name: "Sword Speed",
                            icon: "swordspeed.png",
                            type: "class-sub-skill",
                            description: "Because of your skill with smaller swords you are able to move faster"
                        }
                    ]
                },
                {
                    name: "Swordsman",
                    skills: [
                        {
                            name: "Dual Weild",
                            icon: "dualweild.png",
                            type: "class-sub-skill",
                            description: "You can use two swords efficiently"
                        }
                    ]
                },
            ]
        },
        {
            name: "Tidecaller",
            subclasslevel: 10,
            skills: [
        {
            name: "Elemental Shot",
            icon: "elementalshot.png",
            type: "class-skill",
            description: "Shoot an blast of water or wind."
        },
        {
            name: "Storm Power",
            icon: "stormpower.png",
            type: "class-skill",
            description: "During storms gain +1 on all attacks made."
        }
    ],
    subclasses: [
                {
                    name: "Storm Caller",
                    skills: [
                        {
                            name: "Rough Seas",
                            icon: "roughseas.png",
                            type: "class-sub-skill",
                            description: "The ability to speed up the journey from one island to another"
                        }
                    ]
                },
                {
                    name: "Lightning Warrior",
                    skills: [
                        {
                            name: "Lightning Summon",
                            icon: "lightningsummon.png",
                            type: "class-sub-skill",
                            description: "Summons a quick bolt of lightning down, damage depends on roll"
                        }
                    ]
                },
            ]
        },
        {
            name: "Gunner",
            subclasslevel: 15,
            passive: {
                name: "Holster",
                icon: "holster.png",
                type: "class-passive",
                AS: "Holster",
                description: "Gain +1 item slot for guns."
            },
            skills: [
                {
                    name: "Quick Draw",
                    icon: "quickdraw.png",
                    type: "class-skill",
                    description: "You draw your gun faster than most."
                }
            ],
            subclasses: [
                {
                    name: "Sniper",
                    skills: [
                        {
                            name: "Long Shot",
                            icon: "longshot.png",
                            type: "class-sub-skill",
                            description: "You can now land your shots from a farther distance"
                        }
                    ]
                },
                {
                    name: "Cannoneer",
                    skills: [
                        {
                            name: "Big Boom",
                            icon: "bigboom.png",
                            type: "class-sub-skill",
                            description: "At the start of the battle you can always land one direct hit using a cannon"
                        }
                    ]
                },
            ]
        },
        {
            name: "Beast Caller",
            subclasslevel: 15,
            passive: {
                name: "Beast Control",
                icon: "beastcontrol.png",
                type: "class-skill",
                description: "You are able to order up to 2 beasts to do your bidding."
            },
            skills: [
                {
                    name: "Tame Beast",
                    icon: "tamebeast.png",
                    type: "class-skill",
                    description: "Tame the beast in front of you."
                }
            ],
            subclasses: [
                {
                    name: "Beast Kin",
                    skills: [
                        {
                            name: "Beast Senses",
                            icon: "beastsenses.png",
                            type: "class-sub-skill",
                            description: "You can now share the senses (Sight, Smell, Emotions, and Thoughts) with your tamed beasts"
                        }
                    ],
                    passive: {
                        name: "Beast Control+",
                        icon: "beastcontrol.png",
                        type: "class-sub-skill",
                        description: "You can now tame +2 more beasts making your max a total of 4"
                    }
                },
                {
                    name: "Druid Born",
                    skills: [
                        {
                            name: "Beast Change",
                            icon: "beastchange.png",
                            type: "class-sub-skill",
                            description: "You can transform into one of your summoned beasts"
                        }
                    ],
                    passive: {
                        name: "Beast Leader",
                        icon: "beastleader.png",
                        type: "class-sub-skill",
                        description: "You can now tame +3 more beasts making your max a total of 5"
                    }
                },
            ]
        },
        {
            name: "Siren",
            subclasslevel: 10,
            skills: [
                {
                    name:"Song of the Dead",
                    icon: "songofthedead.png",
                    type: "class-skill",
                    description: "Lure your victims with a song and mind control 2 of them."
                }
            ],
            subclasses: [
                {
                    name: "Songstress",
                    skills: [
                        {
                            name: "Hypnosis",
                            icon: "hypnosis.png",
                            type: "class-sub-skill",
                            description: "Your songs mind control all you sing to"
                        }
                    ]
                },
                {
                    name: "Songster",
                    skills: [
                        {
                            name: "Music Blast",
                            icon: "musicblast.png",
                            type: "class-sub-skill",
                            description: "You can choose to scream at the top of your lungs and break that of whats in front of you. Decided by either a D20 roll or you actually screaming"
                        }
                    ]
                },
            ]
        },
        {
            name: "Black Powder Monk",
            subclasslevel: 15,
            passive: {
                name: "Staff In Hand",
                icon: "staffinhand.png",
                type: "class-passive",
                AS: "Staff",
                description: "Gain +1 item slot for staff."
            },
            skills: [
        {
            name: "Black Powder Boost",
            icon: "blackpowderboost.png",
            type: "class-skill",
            description: "Shoot a blast Black Powder from your feet to dash."
        },
        {
            name: "Black Powder Arts",
            icon: "blackpowderarts.png",
            type: "class-skill",
            description: "Use your Black Powder training to fight. +2 to attacks done with staff."
        }
    ],
    subclasses: [
                {
                    name: "Black Powder Master",
                    skills: [
                        {
                            name: "Shaolin Tempest",
                            icon: "shaolintempest.png",
                            type: "class-sub-skill",
                            description: "Move your staff in a circular motion, black powder shooting out and exploding on contact with your enemies"
                        }
                    ],
                    passive: {
                        name: "Mastery of the Arts",
                        icon: "masteryofthearts.png",
                        type: "class=sub-skill",
                        description: "You've mastered the arts of the Black Powder. +1 to your attacks"
                    }
                }
            ]
        },
    ]
};
