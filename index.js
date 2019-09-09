const Card = require('./card.js');
const request = require('request-promise');

/**
 * @module mtg-wizard-core
 */

/**
 * Searches Scryfall for cards. Uses searching syntax from https://scryfall.com/docs/syntax
 * @param {string} query Search query
 * @returns {Card|Array} Array of Card objects
 */
module.exports.searchCards = async function (query) {
  //TODO properly escape string
  var uri = 'https://api.scryfall.com/cards/search?q=' + query.replace(' ', '%20');
  var data = await callUri(uri).catch(error => {
    throw error;
  });
  return data.data.map(element => new Card(element));
};

/**
 * Gets a single card with a given ID
 * @param {string} cardId
 * @returns {Card} Card object 
 */
module.exports.getCard = async function (cardId) {
  var uri = 'https://api.scryfall.com/cards/' + cardId
  var data = await callUri(uri).catch(error => {
    throw error;
  });
  return new Card(data);
}

/**
 * Gets an array of reprints of a single card
 * @param {Card} Card object
 * @returns {Card|Array} Array of Card objects
 */
module.exports.findPrints = async function (card) {
  var data = await callUri(card.data.prints_search_uri).catch(error => {
    throw error;
  });
  return data.data.map(element => new Card(element));
}

/**
 * Gets a list of sets
 * @returns {object} Scryfall sets JSON
 */
module.exports.getSets = async function () {
  var data = await callUri(`https://api.scryfall.com/sets`).catch(error => {
    throw error;
  });
  return data.data;
}

var callUri = async function (uri) {
  console.log(`Calling ${uri}`);
  var response = await request(uri, {
    timeout: 5000
  }).catch(error => {
    throw JSON.parse(error.error)
  });
  var data = JSON.parse(response);
  return data;

}