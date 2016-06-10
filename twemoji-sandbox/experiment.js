var twemoji = require('twemoji');
console.log('Basico', twemoji.parse('😺'));
//Cuando le pasas varios
console.log('Varios', twemoji.parse('😺🍪'));
//Cuando el pasas varios con texto
console.log('Varios incluyendo texto', twemoji.parse('😺t🍪'));