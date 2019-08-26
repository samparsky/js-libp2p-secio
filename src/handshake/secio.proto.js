'use strict'
/**
 * @module handshake/secio
 * @type {string}
 */
module.exports = `message Propose {
  optional bytes rand = 1;
  optional bytes pubkey = 2;
  optional string exchanges = 3;
  optional string ciphers = 4;
  optional string hashes = 5;
}

message Exchange {
  optional bytes epubkey = 1;
  optional bytes signature = 2;
}`
