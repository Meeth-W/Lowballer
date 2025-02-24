import config from "../../config";
import { chat, convertExpression, formatNumberWithCommas } from "../../utils/utils";

const commandRegister = register("command", (...args) => {
    try {
        chat(`&7&m${ChatLib.getChatBreak(" ")}`);
        chat("§7Lowball on: §c" + args + " §f= §6" + formatNumberWithCommas(eval(convertExpression(args[0]))));
        chat("");
        chat("§7AH Tax: §6" + formatNumberWithCommas(eval(convertExpression(args[0]))*0.035));
        chat("§7Price §c- §7Tax: §6" + formatNumberWithCommas(eval(convertExpression(args[0]))*0.965));
        chat(`&7&m${ChatLib.getChatBreak(" ")}`);
        chat("§c9% Lowball: §6" + formatNumberWithCommas(eval(convertExpression(args[0]))*0.91));
        chat("§c10% Lowball: §6" + formatNumberWithCommas(eval(convertExpression(args[0]))*0.9));
        chat("§c12% Lowball: §6" + formatNumberWithCommas(eval(convertExpression(args[0]))*0.88));
        chat("§c15% Lowball: §6" + formatNumberWithCommas(eval(convertExpression(args[0]))*0.85));
        chat(`&7&m${ChatLib.getChatBreak(" ")}`);
    } catch (e) {chat("§cError in calculation");}
}).setName("lb")

var index = 0;
let timeSent 

const lowballMessages = [
    `Lowballing with ${config().purse} purse`,
    `Lowballing w/ ${config().purse} purse! 25m+ items`,
    `Lowballing w/ ${config().purse} purse! visit me! 25m+ items`,
    `Lowballing w/ ${config().purse} purse! 25m+ items, visit me!`
];

function sendLowballMessage() {
    if (Date.now() - timeSent < 5000) return chat(`&cYou're spamming this!`)
    chat(`&aSending Lowball Message ${index + 1}/${lowballMessages.length}`)
    ChatLib.command(`ac ${lowballMessages[index]}`)
    timeSent = Date.now()
    if (index == lowballMessages.length-1) index = 0
    else index++
}

const lowballButton = new KeyBind("Lowball Message", Keyboard.KEY_NONE, "GhostAddons");
lowballButton.registerKeyPress(() => {
    sendLowballMessage();
});

const evalCommand = register("command", (expression) => {
    try {
        var result = formatNumberWithCommas(eval(convertExpression(expression)));
        ChatLib.chat(prefix + expression + "§a = §r" + result);
    } catch (e) {
        ChatLib.chat(prefix + "§cError in calculation");
    }
}).setName("calc").setAliases("eval", "math");

export function toggle() {
    evalCommand.register();
    commandRegister.register();
}
export default { toggle };