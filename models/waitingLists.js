let waitingLists = [
    {
        "foodID": 1,
        "foodName": "회오리 감자",
        "userIDAndTimestamp": {
            3483: 202205061800,
            5012: 202208081800,
        },
    },
    {
        "foodID": 2,
        "foodName": "누구네 가게 1",
        "userIDAndTimestamp": {
            3483: 202205061800,
        },
    },
    {
        "foodID": 3,
        "foodName": "누구네 가게 2",
        "userIDAndTimestamp": {
            3483: 202205061800,
            3560: 340348035803,
        },
    },
];



exports.countWaitingPeopleAll = () => {
    let userIDAndTimestamps = waitingLists.map(({userIDAndTimestamp}));
    Object.values('userIDAndTimestamp').length;
    console.log()

    //


    return waitingLists.map(({ foodID, foodName, userIDAndTimestamp }) => ({
        foodID,
        foodName,
        userIDAndTimestamp,
    }));
}



//{}객체
//[]Array