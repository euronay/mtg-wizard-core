const assert = require('assert');
const Card = require('../card.js');


const scavengingOozeData = require('./data/scavenging-ooze.json');
const chandraData = require('./data/chandra.json');
const wearTearData = require('./data/wear-tear.json');
const nissaData = require('./data/nissa.json');
const elfenMystikerData = require('./data/elfen-mystiker.json');


describe('normal card', () => {
    describe('chandra', () => {
        var chandra = new Card(chandraData);
        it('should have correct oracle name', () => {
            assert.equal(chandra.oracleName, "Chandra, Flamecaller");
        });
        it('should have correct printed name', () => {
            assert.equal(chandra.name, "Chandra, Flamecaller");
        });
        it('should have correct set', () => {
            assert.equal(chandra.set, "OGW");
        });
        it('should have correct set and rarity', () => {
            assert.equal(chandra.setAndRarity, "Oath of the Gatewatch - Mythic");
        });
        it('should have correct mana cost and type', () => {
            assert.equal(chandra.manaCostAndType, "{4}{R}{R} Legendary Planeswalker — Chandra 4");
        });
        it('should have correct body text', () => {
            assert.equal(chandra.bodyText,"+1: Create two 3/1 red Elemental creature tokens with haste. Exile them at the beginning of the next end step.\n  \n0: Discard all the cards in your hand, then draw that many cards plus one.\n  \n−X: Chandra, Flamecaller deals X damage to each creature.");
        });
        it('should have correct oracle text', () => {
            assert.equal(chandra.oracleText,"+1: Create two 3/1 red Elemental creature tokens with haste. Exile them at the beginning of the next end step.\n  \n0: Discard all the cards in your hand, then draw that many cards plus one.\n  \n−X: Chandra, Flamecaller deals X damage to each creature.");
        });
        it('should have correct prices', () => {
            assert.equal(chandra.prices.usd, "2.22");
        });
        it('should have correct image', () => {
            assert.equal(chandra.image, "https://img.scryfall.com/cards/large/en/ogw/104.jpg?1517813031");
        });
    });

    describe('scavageng ooze', () => {
        var scavengingOoze = new Card(scavengingOozeData);
        it('should have correct oracle name', () => {
            assert.equal(scavengingOoze.oracleName, "Scavenging Ooze");
        });
        it('should have correct printed name', () => {
            assert.equal(scavengingOoze.name, "Scavenging Ooze");
        });
        it('should have correct set', () => {
            assert.equal(scavengingOoze.set, "MM3");
        });
        it('should have correct set and rarity', () => {
            assert.equal(scavengingOoze.setAndRarity, "Modern Masters 2017 - Rare");
        });
        it('should have correct mana cost and type', () => {
            assert.equal(scavengingOoze.manaCostAndType, "{1}{G} Creature — Ooze 2/2");
        });
        it('should have correct body text', () => {
            assert.equal(scavengingOoze.bodyText,"{G}: Exile target card from a graveyard. If it was a creature card, put a +1/+1 counter on Scavenging Ooze and you gain 1 life.");
        });
        it('should have correct oracle text', () => {
            assert.equal(scavengingOoze.oracleText,"{G}: Exile target card from a graveyard. If it was a creature card, put a +1/+1 counter on Scavenging Ooze and you gain 1 life.");
        });
        it('should have correct prices', () => {
            assert.equal(scavengingOoze.prices.usd, "4.48");
        });
        it('should have correct image', () => {
            assert.equal(scavengingOoze.image, "https://img.scryfall.com/cards/large/en/mm3/134.jpg?1517813031");
        });
    });
});

describe('split card', () => {
    describe('wear // tear', () => {
        var wearTear = new Card(wearTearData);

        it('should have correct oracle name', () => {
            assert.equal(wearTear.oracleName, "Wear // Tear");
        });
        it('should have correct printed name', () => {
            assert.equal(wearTear.name, "Wear // Tear");
        });
        it('should have correct set', () => {
            assert.equal(wearTear.set, "DGM");
        });
        it('should have correct set and rarity', () => {
            assert.equal(wearTear.setAndRarity, "Dragon's Maze - Uncommon");
        });
        it('should have correct mana cost and type', () => {
            assert.equal(wearTear.manaCostAndType, "{1}{R} Instant // {W} Instant");
        });
        it('should have correct body text', () => {
            assert.equal(wearTear.bodyText,"**Wear**\n  \nDestroy target artifact.\n  \nFuse (You may cast one or both halves of this card from your hand.)\n  \n  \n**Tear**\n  \nDestroy target enchantment.\n  \nFuse (You may cast one or both halves of this card from your hand.)")
        });
        it('should have correct oracle text', () => {
            assert.equal(wearTear.oracleText,"**Wear**\n  \nDestroy target artifact.\n  \nFuse (You may cast one or both halves of this card from your hand.)\n  \n  \n**Tear**\n  \nDestroy target enchantment.\n  \nFuse (You may cast one or both halves of this card from your hand.)")
        });
        it('should have correct prices', () => {
            assert.equal(wearTear.prices.usd, "1.78");
        });
        it('should have correct image', () => {
            assert.equal(wearTear.image, "https://img.scryfall.com/cards/large/en/dgm/135a.jpg?1520204292");
        });
    });
});

describe('dual card', () => {

    var nissa = new Card(nissaData);

    describe('nissa, vastwood seer', () => {
        it('should not have flipped card object', () => {
            assert.equal(nissa.currentFace, 0);
        });
        it('should have correct oracle name', () => {
            assert.equal(nissa.oracleName, "Nissa, Vastwood Seer // Nissa, Sage Animist");
        });
        it('should have correct printed name', () => {
            assert.equal(nissa.name, "Nissa, Vastwood Seer // Nissa, Sage Animist");
        });
        it('should have correct display name', () => {
            assert.equal(nissa.displayName, "Nissa, Vastwood Seer");
        });
        it('should have correct set', () => {
            assert.equal(nissa.set, "ORI");
        });
        it('should have correct set and rarity', () => {
            assert.equal(nissa.setAndRarity, "Magic Origins - Mythic");
        });
        it('should have correct mana cost and type', () => {
            assert.equal(nissa.manaCostAndType, "{2}{G} Legendary Creature — Elf Scout 2/2");
        });
        it('should have correct body text', () => {
            assert.equal(nissa.bodyText,"When Nissa, Vastwood Seer enters the battlefield, you may search your library for a basic Forest card, reveal it, put it into your hand, then shuffle your library.\n  \nWhenever a land enters the battlefield under your control, if you control seven or more lands, exile Nissa, then return her to the battlefield transformed under her owner's control.")
        });
        it('should have correct oracle text', () => {
            assert.equal(nissa.oracleText,"When Nissa, Vastwood Seer enters the battlefield, you may search your library for a basic Forest card, reveal it, put it into your hand, then shuffle your library.\n  \nWhenever a land enters the battlefield under your control, if you control seven or more lands, exile Nissa, then return her to the battlefield transformed under her owner's control.")
        });
        it('should have correct prices', () => {
            assert.equal(nissa.prices.usd, "9.14");
        });
        it('should have correct image', () => {
            assert.equal(nissa.image, "https://img.scryfall.com/cards/large/en/ori/189a.jpg?1546396006");
        });
    });

    var nissa2 = new Card(nissaData);
    nissa2.flip();

    describe('nissa, sage animist', () => {
        it('should have flipped card object', () => {
            assert.equal(nissa2.currentFace, 1);
        });

        it('should have correct oracle name', () => {
            assert.equal(nissa2.oracleName, "Nissa, Vastwood Seer // Nissa, Sage Animist");
        });
        it('should have correct display name', () => {
            assert.equal(nissa2.displayName, "Nissa, Sage Animist");
        });
        it('should have correct set', () => {
            assert.equal(nissa2.set, "ORI");
        });
        it('should have correct set and rarity', () => {
            assert.equal(nissa2.setAndRarity, "Magic Origins - Mythic");
        });
        it('should have correct mana cost and type', () => {
            assert.equal(nissa2.manaCostAndType, "Legendary Planeswalker — Nissa 3");
        });
        it('should have correct body text', () => {
            assert.equal(nissa2.bodyText,"+1: Reveal the top card of your library. If it's a land card, put it onto the battlefield. Otherwise, put it into your hand.\n  \n−2: Create a legendary 4/4 green Elemental creature token named Ashaya, the Awoken World.\n  \n−7: Untap up to six target lands. They become 6/6 Elemental creatures. They're still lands.")
        });
        it('should have correct oracle text', () => {
            assert.equal(nissa2.oracleText,"+1: Reveal the top card of your library. If it's a land card, put it onto the battlefield. Otherwise, put it into your hand.\n  \n−2: Create a legendary 4/4 green Elemental creature token named Ashaya, the Awoken World.\n  \n−7: Untap up to six target lands. They become 6/6 Elemental creatures. They're still lands.")
        });
        it('should have correct prices', () => {
            assert.equal(nissa2.prices.usd, "9.14");
        });
        it('should have correct image', () => {
            assert.equal(nissa2.image, "https://img.scryfall.com/cards/large/en/ori/189b.jpg?1546396006");
        });
    });
});

describe('foreign language card', () => {
    describe('elfen mystiker', () => {

        var elfenMystiker = new Card(elfenMystikerData);

        it('should have correct oracle name', () => {
            assert.equal(elfenMystiker.oracleName, "Elvish Mystic");
        });
        it('should have correct printed name', () => {
            assert.equal(elfenMystiker.name, "Elfen-Mystiker");
        });
        it('should have correct set', () => {
            assert.equal(elfenMystiker.set, "C14");
        });
        it('should have correct set and rarity', () => {
            assert.equal(elfenMystiker.setAndRarity, "Commander 2014 - Common");
        });
        it('should have correct mana cost and type', () => {
            assert.equal(elfenMystiker.manaCostAndType, "{G} Kreatur — Elf, Druide 1/1");
        });
        it('should have correct oracle mana cost and type', () => {
            assert.equal(elfenMystiker.oracleManaCostAndType, "{G} Creature — Elf Druid 1/1");
        });
        it('should have correct body text', () => {
            assert.equal(elfenMystiker.bodyText,"{T}: Erhöhe deinen Manavorrat um {G}.");
        });
        it('should have correct oracle body text', () => {
            assert.equal(elfenMystiker.oracleText,"{T}: Add {G}.");
        });
        it('should have correct prices', () => {
            assert.equal(elfenMystiker.prices.usd, null);
        });
        it('should have correct image', () => {
            assert.equal(elfenMystiker.image, "https://img.scryfall.com/cards/large/front/9/f/9f920e01-6d97-47df-a056-bbd70bcaae26.jpg?1561952535");
        });
    });
});