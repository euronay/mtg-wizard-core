# [mtg-wizard-core](https://github.com/euronay/mtg-wizard) *1.0.0-beta*

> Core Functions for MTG Wizard


### card.js


#### new Card() 

This is a wrapper around the JSON data returned from the Scryfall API with
additional properties for geting various formatted information about the card.






##### Returns


- `Void`



#### Card.constructor(data) 

Creates an instance of Card.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| data |  | Scryfall API card json | &nbsp; |




##### Returns


- `Void`



#### this.currentFace() 

The current "face" of the card being viewed if it is a DFC (double-faced card).
This will be 0 for all cards and the front card and 1 for the "back". Use @see flip to change.






##### Returns


- `Void`



#### this.data() 

The full data object returned by the Scryfall API






##### Returns


- `Void`



#### flip() 

Flips the current card face if this is a DFC.






##### Returns


- `Void`



#### name() 

The printed name of the card. This is as the name is printed on the card so this will be
the name in a foreign language etc






##### Returns


- `Void`



#### oracleName() 

The name of the card as it appears in the Oracle






##### Returns


- `Void`



#### displayName() 

The name of the card or the name of the currently displayed face of a DFC






##### Returns


- `Void`



#### set() 

Set code of the current card e.g. "M20"






##### Returns


- `Void`



#### setName() 

Set name of the current card e.g. "Core Set 2020"






##### Returns


- `Void`



#### rarity() 

The rarity of the card






##### Returns


- `Void`



#### setAndRarity() 

The set and the rarity separated with a "-" character






##### Returns


- `Void`



#### manaCost() 

The mana cost of the card e.g. {2}{G}
This will show the cost on the currently selected face if a DFC, and both if a split card e.g. "{1}{R} // {W}"






##### Returns


- `Void`



#### type() 

The printed type of the card. This is as the type is printed on the card so this will be
the name in a foreign language or different from the Oracle type if it has received errata






##### Returns


- `Void`



#### oracleType() 

The type of the card as it appears in the Oracle






##### Returns


- `Void`



#### manaCostAndType() 

Formats the mana cost and typeline into a string depending on card type. Uses the printed text






##### Returns


- `Void`



#### oracleManaCostAndType() 

Formats the mana cost and typeline into a string depending on card type. Uses the Oracle text






##### Returns


- `Void`



#### bodyText() 

The printed text of the card. This is as the text is printed on the card so this will be
in foreign language or differ from the Oracle type if it has received errata.
This will also format split/aftermath cards to display both halves of the card together






##### Returns


- `Void`



#### oracleText() 

The printed text of the card as it appears in the Oracle
This will also format split/aftermath cards to display both halves of the card together






##### Returns


- `Void`



#### prices() 

The current average prices of the card from Scryfall





##### Properties

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |



##### Returns


- `Void`



#### image() 

Large image URI of the card
This will show the currently selected face if a DFC






##### Returns


- `Void`



#### thumbnail() 

Thumbnail image URI of the card
This will show the currently selected face if a DFC






##### Returns


- `Void`



#### safeData() 

Gets the current face of a card in the case of it being a DFC,
Otherwise it will just give you the data.






##### Returns


- `Void`




### index.js


#### searchCards(query) 

Searches Scryfall for cards. Uses searching syntax from https://scryfall.com/docs/syntax




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| query | `string`  | Search query | &nbsp; |




##### Returns


- `Card` `Array`  Array of Card objects



#### getCard(cardId) 

Gets a single card with a given ID




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| cardId | `string`  |  | &nbsp; |




##### Returns


- `Card`  Card object



#### findPrints(Card) 

Gets an array of reprints of a single card




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| Card | `Card`  | object | &nbsp; |




##### Returns


- `Card` `Array`  Array of Card objects



#### getSets() 

Gets a list of sets






##### Returns


- `object`  Scryfall sets JSON




*Documentation generated with [doxdox](https://github.com/neogeek/doxdox).*
