const { Router } = require('express');
const router = Router();
const path = require('path');

router.get("/:userID", (req, res) => {
    res.sendFile('waitings.html', { root: path.join(__dirname, '../public') });
    //waitingLists.js에서 가게 이름 가져오기
    //현재대기인원을 가져오는 waitingLists.js에 기록된 userID의 개수를 세는 model(현재대기인원 함수) 구현
    
});
//식당 별 대기자 리스트 페이지 랜더
// router.get("/waitings/:id/lists", );
// 식당별 대기자 리스트 정보

//대기자 등록
//대기 등록 버튼을 누르면 그 가게의 id와 userID, 그리고 timestamp를 waitingLists.js에 기록
//router.post("/waitings/:userID", );
//대기 등록 후 userID와 함께 tickets.js로 redirect

module.exports = router;