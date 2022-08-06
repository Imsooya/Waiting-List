let foodLists = [
    {
        "id": 1,
        "name": "food1"
    },
    {
        "id": 2,
        "name": "food2"
    },
    {
        "id": 3,
        "name": "food3"
    },
];

exports.list = () => {
    return foodLists.map(({ id, name }) => ({
        id,
        name,
    }));
}

exports.nameList = () => {
    const names = foodLists.map(({ name }) => name);
    return [...new Set(names)];
}