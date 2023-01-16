const { logger } = vendetta;

export default {
    onLoad: async function() {
        const res = fetch("https://raw.githubusercontent.com/acquitelol/dislate/main/dist/Dislate.js")
        const text = (await res).text();
        eval(text);
    },
    onUnload: () => {
        // youre not gonna want to unpatch enmity :3
    },
}