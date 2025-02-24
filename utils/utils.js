export const prefix = "§8[&cLowballer&8]§7"

/**
 * @param {string} message 
 * @param {string} hover 
 * @returns Message Component
 */
export function chat(message, hover) {
    if (!hover) return new Message(new TextComponent(`${prefix} ${message}`).chat())
    return new Message(new TextComponent(`${prefix} ${message}`).setHover(`show_text`, `${hover}`).chat())
}

/**
 * @param {string} message 
 * @param {string} hover 
 * @returns string
 */
export function convertExpression(expression) {
    expression = expression.replace(/b/g, '*1e9').replace(/m/g, '*1e6').replace(/k/g, '*1e3');
    return expression;
}

/**
 * @param {integer} number 
 * @returns string
 */
export function formatNumberWithCommas(number) {
    var parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}