import Conversation from "./Conversation";

import * as json from "./troubleshooting.json";

let conv = new Conversation(json);
console.log(conv.reply(''));
console.log(conv.reply(`My internet doesn't work`));
console.log(conv.reply('No'));

console.log(conv.reply(''));
console.log(conv.reply(`My phone doesn't work`));
console.log(conv.reply('Samsung Galaxy S10'));


