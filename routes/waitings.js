const { Router } = require('express');
const router = Router();
const path = require('path');

router.get("/:id", (req, res) => {
    res.sendFile('waitings.html', { root: path.join(__dirname, '../public') });
});
//식당 별 대기자 리스트 페이지 랜더
// router.get("/waitings/:id/lists", );
// 식당별 대기자 리스트 정보
// router.post("/waitings/:id", );
// 대기자 추가

module.exports = router;