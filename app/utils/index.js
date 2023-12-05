export const trimArr = (arr = [], length) => {
    if (length > arr.length) return arr

    return arr.slice(0, length)
}

export const asyncWait = (interval) => new Promise(resolve => {
    setTimeout(resolve, interval)
})

export const asteriskHash = (string) => {
    return new Array(string.length).fill("*").join("");
};

export const sortBy = (specimenArr = [], key) => {
    return [...specimenArr].sort((a, b) => {
        return String(a[key]).localeCompare(String(b[key]))
    })
}