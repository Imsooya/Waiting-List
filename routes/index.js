const { Router } = require('express');
const router = Router();
const path = require('path');

router.get("/", (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, '../public') });
});
//메인, 식당 페이지 랜더

//router.get("/lists", );
//메인, 식당 페이지 정보

module.exports = router;