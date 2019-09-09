
/**
 * This is a wrapper around the JSON data returned from the Scryfall API with
 * additional properties for geting various formatted information about the card.
 */
class Card {

    /**
     * Creates an instance of Card.
     * @param {*} data Scryfall API card json
     */
    constructor(data){
        /**
         * The current "face" of the card being viewed if it is a DFC (double-faced card).
         * This will be 0 for all cards and the front card and 1 for the "back". Use @see flip to change.
         * @type {number}
         */
        this.currentFace = 0;
        
        /**
         * The full data object returned by the Scryfall API
         * @type {object}
         */
        this.data = data;
        
    }   

    /**
     * Flips the current card face if this is a DFC.
     */
    flip(){
        this.currentFace = 1 - this.currentFace;
    }

    /**
     * The printed name of the card. This is as the name is printed on the card so this will be
     * the name in a foreign language etc
     * @readonly
     * @type {string}
     */
    get name(){
        return this.data.printed_name || this.data.name;
    }

    /**
     * The name of the card as it appears in the Oracle
     * @readonly
     * @type {string}
     */
    get oracleName(){
        return this.data.name;
    }

    /**
     * The name of the card or the name of the currently displayed face of a DFC
     * @readonly
     * @type {string}
     */
    get displayName(){
        return this.safeData.printed_name || this.safeData.name;
    }

    /**
     * Set code of the current card e.g. "M20"
     * @readonly
     * @type {string}
     */
    get set(){
        return this.data.set.toUpperCase();
    }

    /**
     * Set name of the current card e.g. "Core Set 2020"
     * @readonly
     * @type {string}
     */
    get setName(){
        return this.data.set_name;
    }
    
    /**
     * The rarity of the card
     * @readonly
     * @type {string}
     */
    get rarity(){
        return this.data.rarity.substring(0, 1).toUpperCase() + this.data.rarity.substring(1);
    }

    /**
     * The set and the rarity separated with a "-" character
     * @readonly
     * @type {string}
     */
    get setAndRarity(){
        return `${this.setName} - ${this.rarity}`;
    }

    /**
     * The mana cost of the card e.g. {2}{G}
     * This will show the cost on the currently selected face if a DFC, and both if a split card e.g. "{1}{R} // {W}"
     * @readonly
     * @type {string}
     */
    get manaCost(){
        return this.safeData.mana_cost || "";
    }

    /**
     * The printed type of the card. This is as the type is printed on the card so this will be
     * the name in a foreign language or different from the Oracle type if it has received errata
     * @readonly
     * @type {string}
     */
    get type(){
        return this.safeData.printed_type_line || this.data.type_line;
    }

    /**
     * The type of the card as it appears in the Oracle
     * @readonly
     * @type {string}
     */
    get oracleType(){
        return this.safeData.type_line;
    }

    /**
     * Formats the mana cost and typeline into a string depending on card type. Uses the printed text
     * @readonly
     * @type {string}
     */
    get manaCostAndType(){
        return this.manaCostAndTypeInternal(false);
    }

    /**
     * Formats the mana cost and typeline into a string depending on card type. Uses the Oracle text
     * @readonly
     * @type {string}
     */
    get oracleManaCostAndType(){
        return this.manaCostAndTypeInternal(true);
    }

    
    manaCostAndTypeInternal(oracle){
        
        if(this.data.layout === "split" || this.data.layout === "flip"){
            return `${this.data.card_faces[0].mana_cost} ${this.data.card_faces[0].type_line} // ${this.data.card_faces[1].mana_cost} ${this.data.card_faces[1].type_line}`;
        }


        let output = '';

        if (this.safeData.mana_cost){
            output += `${this.safeData.mana_cost} `
        }
        
        if(oracle){
            output += this.safeData.type_line;
        } else {
            output += this.safeData.printed_type_line || this.safeData.type_line;
        }

        if(this.safeData.loyalty){
            output += ` ${this.safeData.loyalty}`
        } 
        else if(this.safeData.power){
            output += ` ${this.safeData.power}/${this.safeData.toughness}`
        }

        return output;
    }

    /**
     * The printed text of the card. This is as the text is printed on the card so this will be
     * in foreign language or differ from the Oracle type if it has received errata.
     * This will also format split/aftermath cards to display both halves of the card together
     * @readonly
     * @type {string}
     */
    get bodyText(){
        // TODO this and the oracle text function are way too similar. Refactor into one.
        // The problem is that usually a card will just have oracle text, but if it's a foreign language card
        // we need to option to display the printed text OR the oracle text
        if(this.data.layout === "split" || this.data.layout === "flip"){
            return `**${this.data.card_faces[0].name}**\n  \n${this.fixLineBreaks(this.data.card_faces[0].printed_text || this.data.card_faces[0].oracle_text)}\n  \n  \n` + 
               `**${this.data.card_faces[1].name}**\n  \n${this.fixLineBreaks(this.data.card_faces[1].printed_text || this.data.card_faces[1].oracle_text)}`;
        }


        let text = this.safeData.printed_text || this.safeData.oracle_text;
        return this.fixLineBreaks(text);
    }

    /**
     * The printed text of the card as it appears in the Oracle
     * This will also format split/aftermath cards to display both halves of the card together
     * @readonly
     * @type {string}
     */
    get oracleText(){
        
        if(this.data.layout === "split" || this.data.layout === "flip"){
            return `**${this.data.card_faces[0].name}**\n  \n${this.fixLineBreaks(this.data.card_faces[0].oracle_text)}\n  \n  \n` + 
               `**${this.data.card_faces[1].name}**\n  \n${this.fixLineBreaks(this.data.card_faces[1].oracle_text)}`;
        }

        return this.fixLineBreaks(this.safeData.oracle_text);
    }


    /**
     * The current average prices of the card from Scryfall
     * @readonly
     * @type {object}
     * @property {number} usd US Dollar price from TCGPlayer
     * @property {number} usd_foil Foil card US Dollar price from TCGPlayer
     * @property {number} euro Euro prince from MKM
     * @property {number} tix MTGO Tix price
     */
    get prices(){
        return this.data.prices;
    }

    /**
     * Large image URI of the card
     * This will show the currently selected face if a DFC
     * @readonly
     * @type {string}
     */
    get image(){
        return this.safeData.image_uris.large;
    }

    /**
     * Thumbnail image URI of the card
     * This will show the currently selected face if a DFC
     * @readonly
     * @type {string}
     */
    get thumbnail(){
        return this.safeData.image_uris.small;
    }

    /**
     * Gets the current face of a card in the case of it being a DFC,
     * Otherwise it will just give you the data.
     */
    get safeData()
    {
        let data = this.data;
        if(this.data.layout === "transform"){
            data = this.data.card_faces[this.currentFace];
        }
        return data;
    }

    fixLineBreaks(value){
        return value.replace(/\n/g, '\n  \n');
    }

}

module.exports = Card;
