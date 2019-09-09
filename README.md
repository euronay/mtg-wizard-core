![img](Logotype.png?raw=true)

# MTG Wizard Core #
🧙‍ Core functions for the *MTG Wizard* assistant for [Google Assistant](https://github.com/euronay/mtg-wizard) and [Amazon Alexa](https://github.com/euronay/mtg-wizard-alexa). MTG Wizard lets you search for Magic: The Gathering™ cards from your smart device.

## Usage ##

Search for a card
```javascript
const Api = require('mtg-wizard-core');
var cards = await Api.searchCards("lightning bolt");
```

[![Latest Documentation](https://doxdox.org/images/badge-flat.svg)](https://doxdox.org/euronay/mtg-wizard-core)

Read more info on the main repo at https://github.com/euronay/mtg-wizard

## Developing ##

Clone the repository and run
```sh
npm install
```

Run the tests with
```sh
npm test
```

Generate docs with
```
npm run docs
```