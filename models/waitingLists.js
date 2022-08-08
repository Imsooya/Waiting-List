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
    let Lists=[];
    waitingLists.map(
        (item) => {
            Lists.push({
                'foodID': item['foodID'],
                'foodName': item['foodName'],
                'userIDAndTimestamp': item['userIDAndTimestamp'],
                'userNumber':Object.keys(item['userIDAndTimestamp']).length,
            });
    });
    return Lists;
    }



exports.createWaiting = (foodID, userID) => {
    //대기표 추가 기능
    //대기표가 이미 존재하는지도 확인하고
    //waitingLists에 추가하는 함수
    return 
}



//{}객체
//[]Array