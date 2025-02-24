import lowballer from "./lowballer";

export const modules = [
    lowballer
]

export function refresh_modules() {
    modules.forEach(name => { name.toggle() });
}
export default { refresh_modules };