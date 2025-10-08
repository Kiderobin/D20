// filepath: data.js
window.D20_CAMPAIGN_DATA = {
    races: [
        {
            name: "Human"
        },
        {
            name: "Robot",
            skills: [
                {
                    name: "Connect",
                    icon: "connect.png",
                    type: "race-skill",
                    description: "Can interface with machines and digital systems."
                }
            ]
        },
        {
            name: "Geovector",
            passive: {
                name: "Brute Strength",
                icon: "brutestrength.png",
                type: "race-passive",
                description: "Naturally strong, providing enhanced physical abilities."
            }
        },
        {
            name: "Eltinian",
            passive: {
                name: "Advanced Perception",
                icon: "advancedperception.png",
                type: "race-passive",
                description: "Adaptive senses, allowing for heightened awareness."
            }
        },
        {
            name: "Reptilian",
            passive: {
                name: "Slither",
                icon: "slither.png",
                type: "race-passive",
                description: "Naturally quick and sneaky, ideal for stealth."
            }
        },
        {
            name: "GoldSerian",
            passive: {
                name: "First Guard",
                icon: "firstguard.png",
                type: "race-passive",
                description: "Immunity to the first hit of a battle."
            }
        }
    ],
    classes: [
        {
            name: "Mechanic",
            passive: {
                name: "Machine Maintenance",
                icon: "maintenance.png",
                type: "class-passive",
                description: "Be able to work at a workbench and run maintenance on ships or machinery."
            },
            skills: [
                {
                    name: "Config",
                    icon: "config.png",
                    type: "class-skill",
                    description: "If you have a tool bag, you can modify weapons and gear on the go by equipping artifacts on them."
                }
            ]
        },
        {
            name: "Artillery Specialist",
            passive: {
                name: "Holster",
                icon: "holster.png",
                type: "class-passive",
                AS: "H",
                description: "Gains +1 item slot specifically for firearms only. Dual pistols count as one item. Requires Firearms."
            },
            skills: [
                {
                    name: "Lock On",
                    icon: "locked on.png",
                    type: "class-skill",
                    description: "Increase your accuracy or precision by one multiplied by skill level."
                }
            ]
        },
        {
            name: "Pilot",
            skills: [
                {
                    name: "Ship Call",
                    icon: "shipcall.png",
                    type: "class-skill",
                    description: "If you have one, you can pilot any ship. After activation, wait one full turn rotation for the ship registered to you."
                }
            ]
        },
        {
            name: "Medic",
            passive: {
                name: "Effective Dosage",
                icon: "effectivedosage.png",
                type: "class-passive",
                description: "Your health items do twice the effects."
            },
            skills: [
                {
                    name: "Medical Experiment",
                    icon: "medicalexperiment.png",
                    type: "class-skill",
                    description: "You can mix ingredients for new item effects."
                }
            ]
        },
        {
            name: "Swordsman",
            passive: {
                name: "Sheath",
                icon: "sheath.png",
                type: "class-passive",
                AS: "S",
                description: "Gains +1 item slot specifically for swords only."
            },
            skills: [
                {
                    name: "Footwork",
                    icon: "footwork.png",
                    type: "class-skill",
                    description: "Gains additional stealth points on use. Requires Sword."
                }
            ]
        },
        {
            name: "Brawler",
            passive: {
                name: "Bloodsport",
                icon: "bloodsport.png",
                type: "class-passive",
                description: "In battle domes, you earn twice the amount of credits when winning a fight."
            },
            skills: [
                {
                    name: "Ambush",
                    icon: "ambush.png",
                    type: "class-skill",
                    description: "On unexpected targets, the first hit will be 5x the result of a d20."
                }
            ]
        }
    ]
};