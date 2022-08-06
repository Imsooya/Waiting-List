const { Router } = require('express');

const router = Router();
const path = require('path');
const List = require('../models/foodLists');

router.get("/:ID", (req, res, next) => {
    //userID 가져오기
    const userID = req.params.ID;

    res.sendFile('index.html', { root: path.join(__dirname, '../public') });

    //식당 리스트 보여주기
    const lists = List.list();
    res.json(lists);

    //get 현재 대기인원 
});
//메인, 식당 페이지 랜더

//router.get("/lists", );
//메인, 식당 페이지 정보

module.exports = router;