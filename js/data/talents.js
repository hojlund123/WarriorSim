var talents = [
   {
      n: 'Arms',
      t: [
         {
            i: 124,
            n: 'Improved Heroic Strike',
            m: 3,
            s: [
               12282,
               12663,
               12664
            ],
            d: [
               'Reduces the cost of your Heroic Strike ability by 1 rage point.',
               'Reduces the cost of your Heroic Strike ability by 2 rage points.',
               'Reduces the cost of your Heroic Strike ability by 3 rage points.'
            ],
            x: 0,
            y: 0,
            iconname: 'Ability_Rogue_Ambush',
            c: 0,
            aura: function (count) { return { impheroicstrike: count } },
         },
         {
            i: 130,
            n: 'Deflection',
            m: 5,
            s: [
               16462,
               16463,
               16464,
               16465,
               16466
            ],
            d: [
               'Increases your Parry chance by 1%.',
               'Increases your Parry chance by 2%.',
               'Increases your Parry chance by 3%.',
               'Increases your Parry chance by 4%.',
               'Increases your Parry chance by 5%.'
            ],
            x: 1,
            y: 0,
            c: 0,
            iconname: 'Ability_Parry',
            aura: function (count) { return { parry: count } },
         },
         {
            i: 127,
            n: 'Improved Rend',
            m: 3,
            s: [
               12286,
               12658,
               12659
            ],
            d: [
               'Increases the bleed damage done by your Rend ability by 15%.',
               'Increases the bleed damage done by your Rend ability by 25%.',
               'Increases the bleed damage done by your Rend ability by 35%.'
            ],
            x: 2,
            y: 0,
            c: 0,
            iconname: 'Ability_Gouge',
            aura: function (count) { return { rendmod: 5 + count * 10 } },
         },
         {
            i: 126,
            n: 'Improved Charge',
            m: 2,
            s: [
               12285,
               12697
            ],
            d: [
               'Increases the amount of rage generated by your Charge ability by 3.',
               'Increases the amount of rage generated by your Charge ability by 6.'
            ],
            x: 0,
            y: 1,
            c: 0,
            iconname: 'Ability_Warrior_Charge',
            aura: function (count) { return { chargebonus: count * 3 } },
         },
         {
            i: 641,
            n: 'Tactical Mastery',
            m: 5,
            s: [
               12295,
               12676,
               12677,
               12678,
               12679
            ],
            d: [
               'You retain up to 5 of your rage points when you change stances.',
               'You retain up to 10 of your rage points when you change stances.',
               'You retain up to 15 of your rage points when you change stances.',
               'You retain up to 20 of your rage points when you change stances.',
               'You retain up to 25 of your rage points when you change stances.'
            ],
            x: 1,
            y: 1,
            c: 0,
            iconname: 'Spell_Nature_EnchantArmor',
            aura: function (count) { return { rageretained: count * 5 } },
         },
         {
            i: 128,
            n: 'Improved Thunder Clap',
            m: 3,
            s: [
               12287,
               12665,
               12666
            ],
            d: [
               'Reduces the cost of your Thunder Clap ability by 1 rage point.',
               'Reduces the cost of your Thunder Clap ability by 2 rage points.',
               'Reduces the cost of your Thunder Clap ability by 4 rage points.'
            ],
            x: 3,
            y: 1,
            c: 0,
            iconname: 'Ability_ThunderClap',
            aura: function (count) { return { impthunderclap: Math.pow(2, count - 1) } },
         },
         {
            i: 131,
            n: 'Improved Overpower',
            m: 2,
            s: [
               12290,
               12963
            ],
            d: [
               'Increases the critical strike chance of your Overpower ability by 25%.',
               'Increases the critical strike chance of your Overpower ability by 50%.'
            ],
            x: 0,
            y: 2,
            c: 0,
            iconname: 'INV_Sword_05',
            aura: function (count) { return { overpowercrit: 25 * count } },
         },
         {
            i: 137,
            n: 'Anger Management',
            m: 1,
            s: [
               12296
            ],
            d: [
               'Increases the time required for your rage to decay while out of combat by 30%.'
            ],
            x: 1,
            y: 2,
            r: [
               4,
               5
            ],
            c: 0,
            iconname: 'Spell_Holy_BlessingOfStamina',
            aura: function (count) { return { angermanagement: count } },
         },
         {
            i: 121,
            n: 'Deep Wounds',
            m: 3,
            s: [
               12834,
               12849,
               12867
            ],
            d: [
               'Your critical strikes cause the opponent to bleed, dealing 20% of your melee weapon\'s average damage over 12 sec.',
               'Your critical strikes cause the opponent to bleed, dealing 40% of your melee weapon\'s average damage over 12 sec.',
               'Your critical strikes cause the opponent to bleed, dealing 60% of your melee weapon\'s average damage over 12 sec.'
            ],
            x: 2,
            y: 2,
            r: [
               2,
               3
            ],
            c: 0,
            // enable: 23255,
            iconname: 'Ability_BackStab',
            aura: function (count) { return { deepwounds: count * 0.2 } },
         },
         {
            i: 136,
            n: 'Two-Handed Weapon Specialization',
            m: 5,
            s: [
               12163,
               12711,
               12712,
               12713,
               12714
            ],
            d: [
               'Increases the damage you deal with two-handed melee weapons by 1%.',
               'Increases the damage you deal with two-handed melee weapons by 2%.',
               'Increases the damage you deal with two-handed melee weapons by 3%.',
               'Increases the damage you deal with two-handed melee weapons by 4%.',
               'Increases the damage you deal with two-handed melee weapons by 5%.'
            ],
            x: 1,
            y: 3,
            c: 0,
            iconname: 'INV_Axe_09',
            aura: function (count) { return { twomod: count * 0.01 } },
         },
         {
            i: 662,
            n: 'Impale',
            m: 2,
            s: [
               16493,
               16494
            ],
            d: [
               'Increases the critical strike damage bonus of your abilities in Battle, Defensive, and Berserker stance by 10%.',
               'Increases the critical strike damage bonus of your abilities in Battle, Defensive, and Berserker stance by 20%.'
            ],
            x: 2,
            y: 3,
            r: [
               8,
               3
            ],
            c: 0,
            iconname: 'Ability_SearingArrow',
            aura: function (count) { return { abilitiescrit: count * 0.1 } },
         },
         {
            i: 132,
            n: 'Axe Specialization',
            m: 5,
            s: [
               12700,
               12781,
               12783,
               12784,
               12785
            ],
            d: [
               'Increases your chance to get a critical strike with Axes by 1%.',
               'Increases your chance to get a critical strike with Axes by 2%.',
               'Increases your chance to get a critical strike with Axes by 3%.',
               'Increases your chance to get a critical strike with Axes by 4%.',
               'Increases your chance to get a critical strike with Axes by 5%.'
            ],
            x: 0,
            y: 4,
            c: 0,
            iconname: 'INV_Axe_06',
            aura: function (count) { return { axecrit: count } },
         },
         {
            i: 133,
            n: 'Sweeping Strikes',
            m: 1,
            s: [
               12292
            ],
            d: [
               'Your next 5 melee attacks strike an additional nearby opponent.'
            ],
            x: 1,
            y: 4,
            c: 0,
            iconname: 'Ability_Rogue_SliceDice',
            aura: function (count) { return { sweepingstrikes: count } },
         },
         {
            i: 125,
            n: 'Mace Specialization',
            m: 5,
            s: [
               12284,
               12701,
               12702,
               12703,
               12704
            ],
            d: [
               'Gives you a 1% chance to stun your target for 3 sec with a Mace.',
               'Gives you a 2% chance to stun your target for 3 sec with a Mace.',
               'Gives you a 3% chance to stun your target for 3 sec with a Mace.',
               'Gives you a 4% chance to stun your target for 3 sec with a Mace.',
               'Gives you a 6% chance to stun your target for 3 sec with a Mace.'
            ],
            x: 2,
            y: 4,
            c: 0,
            iconname: 'INV_Mace_01',
            aura: function (count) { return { macestun: count == 5 ? 6 : count } },
         },
         {
            i: 123,
            n: 'Sword Specialization',
            m: 5,
            s: [
               12281,
               12812,
               12813,
               12814,
               12815
            ],
            d: [
               'Gives you a 1% chance to get an extra attack on the same target after dealing damage with your Sword.',
               'Gives you a 2% chance to get an extra attack on the same target after dealing damage with your Sword.',
               'Gives you a 3% chance to get an extra attack on the same target after dealing damage with your Sword.',
               'Gives you a 4% chance to get an extra attack on the same target after dealing damage with your Sword.',
               'Gives you a 5% chance to get an extra attack on the same target after dealing damage with your Sword.'
            ],
            x: 3,
            y: 4,
            c: 0,
            iconname: 'INV_Sword_27',
            aura: function (count) { return { swordproc: count } },
         },
         {
            i: 134,
            n: 'Polearm Specialization',
            m: 5,
            s: [
               12165,
               12830,
               12831,
               12832,
               12833
            ],
            d: [
               'Increases your chance to get a critical strike with Polearms by 1%.',
               'Increases your chance to get a critical strike with Polearms by 2%.',
               'Increases your chance to get a critical strike with Polearms by 3%.',
               'Increases your chance to get a critical strike with Polearms by 4%.',
               'Increases your chance to get a critical strike with Polearms by 5%.'
            ],
            x: 0,
            y: 5,
            c: 0,
            iconname: 'INV_Weapon_Halbard_01',
            aura: function (count) { return { polearmcrit: count } },
         },
         {
            i: 129,
            n: 'Improved Hamstring',
            m: 3,
            s: [
               12289,
               12668,
               23695
            ],
            d: [
               'Gives your Hamstring ability a 5% chance to immobilize the target for 5 sec.',
               'Gives your Hamstring ability a 10% chance to immobilize the target for 5 sec.',
               'Gives your Hamstring ability a 15% chance to immobilize the target for 5 sec.'
            ],
            x: 2,
            y: 5,
            c: 0,
            iconname: 'Ability_ShockWave',
            aura: function (count) { return { imphamstring: count * 5 } },
         },
         {
            i: 135,
            n: 'Mortal Strike',
            m: 1,
            s: [
               12294
            ],
            d: [
               'A vicious strike that deals weapon damage plus 85 and wounds the target, reducing the effectiveness of any healing by 50% for 10 sec.'
            ],
            x: 1,
            y: 6,
            r: [
               12,
               1
            ],
            c: 0,
            iconname: 'Ability_Warrior_SavageBlow',
            enable: 'Mortal Strike',
            aura: function (count) { return { mortalstrike: count } },
         }
      ]
   },
   {
      n: 'Fury',
      t: [
         {
            i: 158,
            n: 'Booming Voice',
            m: 5,
            s: [
               12321,
               12835,
               12836,
               12837,
               12838
            ],
            d: [
               'Increases the area of effect and duration of your Battle Shout and Demoralizing Shout by 10%.',
               'Increases the area of effect and duration of your Battle Shout and Demoralizing Shout by 20%.',
               'Increases the area of effect and duration of your Battle Shout and Demoralizing Shout by 30%.',
               'Increases the area of effect and duration of your Battle Shout and Demoralizing Shout by 40%.',
               'Increases the area of effect and duration of your Battle Shout and Demoralizing Shout by 50%.'
            ],
            x: 1,
            y: 0,
            c: 0,
            iconname: 'Spell_Nature_Purge',
            aura: function (count) { return { boomingvoice: count * 0.1 } },
         },
         {
            i: 157,
            n: 'Cruelty',
            m: 5,
            s: [
               12320,
               12852,
               12853,
               12855,
               12856
            ],
            d: [
               'Increases your chance to get a critical strike with melee weapons by 1%.',
               'Increases your chance to get a critical strike with melee weapons by 2%.',
               'Increases your chance to get a critical strike with melee weapons by 3%.',
               'Increases your chance to get a critical strike with melee weapons by 4%.',
               'Increases your chance to get a critical strike with melee weapons by 5%.'
            ],
            x: 2,
            y: 0,
            c: 0,
            iconname: 'Ability_Rogue_Eviscerate',
            aura: function (count) { return { crit: count } }
         },
         {
            i: 161,
            n: 'Improved Demoralizing Shout',
            m: 5,
            s: [
               12324,
               12876,
               12877,
               12878,
               12879
            ],
            d: [
               'Increases the melee attack power reduction of your Demoralizing Shout by 8%.',
               'Increases the melee attack power reduction of your Demoralizing Shout by 16%.',
               'Increases the melee attack power reduction of your Demoralizing Shout by 24%.',
               'Increases the melee attack power reduction of your Demoralizing Shout by 32%.',
               'Increases the melee attack power reduction of your Demoralizing Shout by 40%.'
            ],
            x: 1,
            y: 1,
            c: 0,
            iconname: 'Ability_Warrior_WarCry',
            aura: function (count) { return { impdemoshout: count * 8 } },
         },
         {
            i: 159,
            n: 'Unbridled Wrath',
            m: 5,
            s: [
               12322,
               12999,
               13000,
               13001,
               13002
            ],
            d: [
               'Gives you a 8% chance to generate an additional Rage point when you deal melee damage with a weapon.',
               'Gives you a 16% chance to generate an additional Rage point when you deal melee damage with a weapon.',
               'Gives you a 24% chance to generate an additional Rage point when you deal melee damage with a weapon.',
               'Gives you a 32% chance to generate an additional Rage point when you deal melee damage with a weapon.',
               'Gives you a 40% chance to generate an additional Rage point when you deal melee damage with a weapon.'
            ],
            x: 2,
            y: 1,
            c: 0,
            iconname: 'Spell_Nature_StoneClawTotem',
            aura: function (count) { return { umbridledwrath: count * 8 } },
         },
         {
            i: 166,
            n: 'Improved Cleave',
            m: 3,
            s: [
               12329,
               12950,
               20496
            ],
            d: [
               'Increases the bonus damage done by your Cleave ability by 40%.',
               'Increases the bonus damage done by your Cleave ability by 80%.',
               'Increases the bonus damage done by your Cleave ability by 120%.'
            ],
            x: 0,
            y: 2,
            c: 0,
            iconname: 'Ability_Warrior_Cleave',
            aura: function (count) { return { cleavebonus: count * 40 } },
         },
         {
            i: 160,
            n: 'Piercing Howl',
            m: 1,
            s: [
               12323
            ],
            d: [
               'Causes all enemies near the warrior to be dazed, reducing movement speed by 50% for 6 sec.'
            ],
            x: 1,
            y: 2,
            c: 0,
            iconname: 'Spell_Shadow_DeathScream',
            aura: function (count) { return { piercinghowl: count } },
         },
         {
            i: 661,
            n: 'Blood Craze',
            m: 3,
            s: [
               16487,
               16489,
               16492
            ],
            d: [
               'Regenerates 1% of your total Health over 6 sec after being the victim of a critical strike.',
               'Regenerates 2% of your total Health over 6 sec after being the victim of a critical strike.',
               'Regenerates 3% of your total Health over 6 sec after being the victim of a critical strike.'
            ],
            x: 2,
            y: 2,
            c: 0,
            iconname: 'Spell_Shadow_SummonImp',
            aura: function (count) { return { bloodcraze: count } },
         },
         {
            i: 154,
            n: 'Improved Battle Shout',
            m: 5,
            s: [
               12318,
               12857,
               12858,
               12860,
               12861
            ],
            d: [
               'Increases the melee attack power bonus of your Battle Shout by 5%.',
               'Increases the melee attack power bonus of your Battle Shout by 10%.',
               'Increases the melee attack power bonus of your Battle Shout by 15%.',
               'Increases the melee attack power bonus of your Battle Shout by 20%.',
               'Increases the melee attack power bonus of your Battle Shout by 25%.'
            ],
            x: 3,
            y: 2,
            c: 0,
            iconname: 'Ability_Warrior_BattleShout',
            aura: function (count) { return { impbattleshout: count * 0.05 } },
         },
         {
            i: 1581,
            n: 'Dual Wield Specialization',
            m: 5,
            s: [
               23584,
               23585,
               23586,
               23587,
               23588
            ],
            d: [
               'Increases the damage done by your offhand weapon by 5%.',
               'Increases the damage done by your offhand weapon by 10%.',
               'Increases the damage done by your offhand weapon by 15%.',
               'Increases the damage done by your offhand weapon by 20%.',
               'Increases the damage done by your offhand weapon by 25%.'
            ],
            x: 0,
            y: 3,
            c: 0,
            iconname: 'Ability_DualWield',
            aura: function (count) { return { offmod: count * 0.05 } },
         },
         {
            i: 1542,
            n: 'Improved Execute',
            m: 2,
            s: [
               20502,
               20503
            ],
            d: [
               'Reduces the Rage cost of your Execute ability by 2.',
               'Reduces the Rage cost of your Execute ability by 5.'
            ],
            x: 1,
            y: 3,
            c: 0,
            iconname: 'INV_Sword_48',
            aura: function (count) { return { executecost: count == 2 ? 5 : count * 2 } },
         },
         {
            i: 155,
            n: 'Enrage',
            m: 5,
            s: [
               12317,
               13045,
               13046,
               13047,
               13048
            ],
            d: [
               'Gives you a 5% melee damage bonus for 12 sec up to a maximum of 12 swings after being the victim of a critical strike.',
               'Gives you a 10% melee damage bonus for 12 sec up to a maximum of 12 swings after being the victim of a critical strike.',
               'Gives you a 15% melee damage bonus for 12 sec up to a maximum of 12 swings after being the victim of a critical strike.',
               'Gives you a 20% melee damage bonus for 12 sec up to a maximum of 12 swings after being the victim of a critical strike.',
               'Gives you a 25% melee damage bonus for 12 sec up to a maximum of 12 swings after being the victim of a critical strike.'
            ],
            x: 2,
            y: 3,
            c: 0,
            iconname: 'Spell_Shadow_UnholyFrenzy',
            aura: function (count) { return { enrage: count * 5 } },
         },
         {
            i: 168,
            n: 'Improved Slam',
            m: 5,
            s: [
               12862,
               12330,
               20497,
               20498,
               20499
            ],
            d: [
               'Decreases the casting time of your Slam ability by 0.1 sec.',
               'Decreases the casting time of your Slam ability by 0.2 sec.',
               'Decreases the casting time of your Slam ability by 0.3 sec.',
               'Decreases the casting time of your Slam ability by 0.4 sec.',
               'Decreases the casting time of your Slam ability by 0.5 sec.'
            ],
            x: 0,
            y: 4,
            c: 0,
            iconname: 'Ability_Warrior_DecisiveStrike',
            aura: function (count) { return { impslam: count } },
         },
         {
            i: 165,
            n: 'Death Wish',
            m: 1,
            s: [
               12328
            ],
            d: [
               'When activated, increases your physical damage by 20% and makes you immune to Fear effects, but lowers your armor and all resistances by 20%.  Lasts 30 sec.'
            ],
            x: 1,
            y: 4,
            c: 0,
            enable: 12328,
            iconname: 'Spell_Shadow_DeathPact',
            aura: function (count) { return { deathwish: count } },
         },
         {
            i: 1543,
            n: 'Improved Intercept',
            m: 2,
            s: [
               20504,
               20505
            ],
            d: [
               'Reduces the cooldown of your Intercept ability by 5 sec.',
               'Reduces the cooldown of your Intercept ability by 10 sec.'
            ],
            x: 3,
            y: 4,
            c: 0,
            iconname: 'Ability_Rogue_Sprint',
            aura: function (count) { return { impintercept: count * 5 } },
         },
         {
            i: 1541,
            n: 'Improved Berserker Rage',
            m: 2,
            s: [
               20500,
               20501
            ],
            d: [
               'The Berserker Rage ability will generate 5 rage when used.',
               'The Berserker Rage ability will generate 10 rage when used.'
            ],
            x: 0,
            y: 5,
            c: 0,
            iconname: 'Spell_Nature_AncestralGuardian',
            aura: function (count) { return { berserkerbonus: count * 5 } },
         },
         {
            i: 156,
            n: 'Flurry',
            m: 5,
            s: [
               12319,
               12971,
               12972,
               12973,
               12974
            ],
            d: [
               'Increases your attack speed by 10% for your next 3 swings after dealing a melee critical strike.',
               'Increases your attack speed by 15% for your next 3 swings after dealing a melee critical strike.',
               'Increases your attack speed by 20% for your next 3 swings after dealing a melee critical strike.',
               'Increases your attack speed by 25% for your next 3 swings after dealing a melee critical strike.',
               'Increases your attack speed by 30% for your next 3 swings after dealing a melee critical strike.'
            ],
            x: 2,
            y: 5,
            r: [
               10,
               5
            ],
            c: 0,
            iconname: 'Ability_GhoulFrenzy',
            aura: function (count) { return { flurry: count == 0 ? 0 : 5 + count * 5 } },
         },
         {
            i: 167,
            n: 'Bloodthirst',
            m: 1,
            s: [
               23881
            ],
            d: [
               'Instantly attack the target causing damage equal to 45% of your attack power.  In addition, the next 5 successful melee attacks will restore 10 health.  This effect lasts 8 sec.'
            ],
            x: 1,
            y: 6,
            r: [
               12,
               1
            ],
            c: 0,
            iconname: 'Spell_Nature_BloodLust',
            enable: 23894,
            aura: function (count) { return { bloodthirst: count } },
         }
      ]
   },
   {
      n: 'Protection',
      t: [
         {
            i: 1601,
            n: 'Shield Specialization',
            m: 5,
            s: [
               12298,
               12724,
               12725,
               12726,
               12727
            ],
            d: [
               'Increases your chance to block attacks with a shield by 1% and has a 20% chance to generate 1 rage when a block occurs.',
               'Increases your chance to block attacks with a shield by 2% and has a 40% chance to generate 1 rage when a block occurs.',
               'Increases your chance to block attacks with a shield by 3% and has a 60% chance to generate 1 rage when a block occurs.',
               'Increases your chance to block attacks with a shield by 4% and has a 80% chance to generate 1 rage when a block occurs.',
               'Increases your chance to block attacks with a shield by 5% and has a 100% chance to generate 1 rage when a block occurs.'
            ],
            x: 1,
            y: 0,
            c: 0,
            iconname: 'INV_Shield_06',
            aura: function (count) { return { block: count, blockragechance: count * 20 } },
         },
         {
            i: 138,
            n: 'Anticipation',
            m: 5,
            s: [
               12297,
               12750,
               12751,
               12752,
               12753
            ],
            d: [
               'Increases your Defense skill by 2.',
               'Increases your Defense skill by 4.',
               'Increases your Defense skill by 6.',
               'Increases your Defense skill by 8.',
               'Increases your Defense skill by 10.'
            ],
            x: 2,
            y: 0,
            c: 0,
            iconname: 'Spell_Nature_MirrorImage',
            aura: function (count) { return { defense: count * 2 } },
         },
         {
            i: 142,
            n: 'Improved Bloodrage',
            m: 2,
            s: [
               12301,
               12818
            ],
            d: [
               'Increases the instant Rage generated by your Bloodrage ability by 2.',
               'Increases the instant Rage generated by your Bloodrage ability by 5.'
            ],
            x: 0,
            y: 1,
            c: 0,
            iconname: 'Ability_Racial_BloodRage',
            aura: function (count) { return { bloodragebonus: count == 2 ? 5 : count * 2 } },
         },
         {
            i: 140,
            n: 'Toughness',
            m: 5,
            s: [
               12299,
               12761,
               12762,
               12763,
               12764
            ],
            d: [
               'Increases your armor value from items by 2%.',
               'Increases your armor value from items by 4%.',
               'Increases your armor value from items by 6%.',
               'Increases your armor value from items by 8%.',
               'Increases your armor value from items by 10%.'
            ],
            x: 2,
            y: 1,
            c: 0,
            iconname: 'Spell_Holy_Devotion',
            aura: function (count) { return { armormod: count * 2 } },
         },
         {
            i: 141,
            n: 'Iron Will',
            m: 5,
            s: [
               12300,
               12959,
               12960,
               12961,
               12962
            ],
            d: [
               'Increases your chance to resist Stun and Charm effects by an additional 3%.',
               'Increases your chance to resist Stun and Charm effects by an additional 6%.',
               'Increases your chance to resist Stun and Charm effects by an additional 9%.',
               'Increases your chance to resist Stun and Charm effects by an additional 12%.',
               'Increases your chance to resist Stun and Charm effects by an additional 15%.'
            ],
            x: 3,
            y: 1,
            c: 0,
            iconname: 'Spell_Magic_MageArmor',
            aura: function (count) { return { stunresist: count * 3 } },
         },
         {
            i: 153,
            n: 'Last Stand',
            m: 1,
            s: [
               12975
            ],
            d: [
               'When activated, this ability temporarily grants you 30% of your maximum hit points for 20 seconds.  After the effect expires, the hit points are lost.'
            ],
            x: 0,
            y: 2,
            r: [
               2,
               2
            ],
            c: 0,
            iconname: 'Spell_Holy_AshesToAshes',
            aura: function (count) { return { laststand: count } },
         },
         {
            i: 145,
            n: 'Improved Shield Block',
            m: 3,
            s: [
               12945,
               12307,
               12944
            ],
            d: [
               'Allows your Shield Block ability to block an additional attack and increases the duration by 0.5 second.',
               'Allows your Shield Block ability to block an additional attack and increases the duration by 1 second.',
               'Allows your Shield Block ability to block an additional attack and increases the duration by 2 seconds.'
            ],
            x: 1,
            y: 2,
            r: [
               0,
               5
            ],
            c: 0,
            iconname: 'Ability_Defend',
            aura: function (count) { return { extrablock: count } },
         },
         {
            i: 147,
            n: 'Improved Revenge',
            m: 3,
            s: [
               12797,
               12799,
               12800
            ],
            d: [
               'Gives your Revenge ability a 15% chance to stun the target for 3 sec.',
               'Gives your Revenge ability a 30% chance to stun the target for 3 sec.',
               'Gives your Revenge ability a 45% chance to stun the target for 3 sec.'
            ],
            x: 2,
            y: 2,
            c: 0,
            iconname: 'Ability_Warrior_Revenge',
            aura: function (count) { return { imprevenge: count * 15 } },
         },
         {
            i: 144,
            n: 'Defiance',
            m: 5,
            s: [
               12303,
               12788,
               12789,
               12791,
               12792
            ],
            d: [
               'Increases the threat generated by your attacks by 3% while in Defensive Stance.',
               'Increases the threat generated by your attacks by 6% while in Defensive Stance.',
               'Increases the threat generated by your attacks by 9% while in Defensive Stance.',
               'Increases the threat generated by your attacks by 12% while in Defensive Stance.',
               'Increases the threat generated by your attacks by 15% while in Defensive Stance.'
            ],
            x: 3,
            y: 2,
            c: 0,
            iconname: 'Ability_Warrior_InnerRage',
            aura: function (count) { return { threatmod: count * 3 } },
         },
         {
            i: 146,
            n: 'Improved Sunder Armor',
            m: 3,
            s: [
               12308,
               12810,
               12811
            ],
            d: [
               'Reduces the cost of your Sunder Armor ability by 1 rage point.',
               'Reduces the cost of your Sunder Armor ability by 2 rage points.',
               'Reduces the cost of your Sunder Armor ability by 3 rage points.'
            ],
            x: 0,
            y: 3,
            c: 0,
            iconname: 'Ability_Warrior_Sunder',
            aura: function (count) { return { impsunderarmor: count } },
         },
         {
            i: 151,
            n: 'Improved Disarm',
            m: 3,
            s: [
               12313,
               12804,
               12807
            ],
            d: [
               'Increases the duration of your Disarm ability by 1 secs.',
               'Increases the duration of your Disarm ability by 2 secs.',
               'Increases the duration of your Disarm ability by 3 secs.'
            ],
            x: 1,
            y: 3,
            c: 0,
            iconname: 'Ability_Warrior_Disarm',
            aura: function (count) { return { impdisarm: count } },
         },
         {
            i: 143,
            n: 'Improved Taunt',
            m: 2,
            s: [
               12302,
               12765
            ],
            d: [
               'Reduces the cooldown of your Taunt ability by 1 sec.',
               'Reduces the cooldown of your Taunt ability by 2 sec.'
            ],
            x: 2,
            y: 3,
            c: 0,
            iconname: 'Spell_Nature_Reincarnation',
            aura: function (count) { return { imptaunt: count } },
         },
         {
            i: 150,
            n: 'Improved Shield Wall',
            m: 2,
            s: [
               12312,
               12803
            ],
            d: [
               'Increases the effect duration of your Shield Wall ability by 3 secs.',
               'Increases the effect duration of your Shield Wall ability by 5 secs.'
            ],
            x: 0,
            y: 4,
            c: 0,
            iconname: 'Ability_Warrior_ShieldWall',
            aura: function (count) { return { impshieldwall: count == 2 ? 5 : count * 3 } },
         },
         {
            i: 152,
            n: 'Concussion Blow',
            m: 1,
            s: [
               12809
            ],
            d: [
               'Stuns the opponent for 5 sec.'
            ],
            x: 1,
            y: 4,
            c: 0,
            iconname: 'Ability_ThunderBolt',
            aura: function (count) { return { concussionblow: count } },
         },
         {
            i: 149,
            n: 'Improved Shield Bash',
            m: 2,
            s: [
               12311,
               12958
            ],
            d: [
               'Gives your Shield Bash ability a 50% chance to silence the target for 3 sec.',
               'Gives your Shield Bash ability a 100% chance to silence the target for 3 sec.'
            ],
            x: 2,
            y: 4,
            c: 0,
            iconname: 'Ability_Warrior_ShieldBash',
            aura: function (count) { return { impshieldbash: count * 50 } },
         },
         {
            i: 702,
            n: 'One-Handed Weapon Specialization',
            m: 5,
            s: [
               16538,
               16539,
               16540,
               16541,
               16542
            ],
            d: [
               'Increases the damage you deal with One-Handed Melee weapons by 2%.',
               'Increases the damage you deal with One-Handed Melee weapons by 4%.',
               'Increases the damage you deal with One-Handed Melee weapons by 6%.',
               'Increases the damage you deal with One-Handed Melee weapons by 8%.',
               'Increases the damage you deal with One-Handed Melee weapons by 10%.'
            ],
            x: 2,
            y: 5,
            c: 0,
            iconname: 'INV_Sword_20',
            aura: function (count) { return { onemod: count * 0.02 } },
         },
         {
            i: 148,
            n: 'Shield Slam',
            m: 1,
            s: [
               23922
            ],
            d: [
               'Slam the target with your shield, causing 225 to 236 damage, modified by your shield block value, and has a 50% chance of dispelling 1 magic effect on the target.  Also causes a high amount of threat.'
            ],
            x: 1,
            y: 6,
            r: [
               13,
               1
            ],
            c: 0,
            enable: 'Shield Slam',
            iconname: 'INV_Shield_05',
            aura: function (count) { return { shieldslam: count } },
         }
      ]
   }
];
