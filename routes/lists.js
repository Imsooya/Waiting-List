const { Router } = require('express');

const router = Router();
const path = require('path');
const List = require('../models/foodLists');

router.get("/:userID", (req, res, next) => {
    //userID 가져오기
    const userID = req.params.userID;

    res.sendFile('index.html', { root: path.join(__dirname, '../public') });

    //식당 리스트 보여주기
    const lists = List.list();
    res.json(lists);
    //1. 연결방법



    //get 현재 대기인원 보여주기
    //waitingLists.js에 기록된 userID의 개수를 세는 model(현재대기인원 함수) 작성할 것

    //html에 있는 식당 버튼을 클릭하면 userID와 함께 waitings.js로 연결 구현
});
//메인, 식당 페이지 랜더

//router.get("/lists", );
//json 응답을 보내줌

//html에서 js로 요청을 보내는 코드를 작성(ajax)
//json을 받아서 가공하여 페이지에 넣는 코드 또한 작성

//메인, 식당 페이지 정보

module.exports = router;





