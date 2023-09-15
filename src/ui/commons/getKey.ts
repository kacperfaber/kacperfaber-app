export function getKey(st: string): number {
    return parseInt(st.split(" ").map(x => x.length).join("0")) + Math.random();
}