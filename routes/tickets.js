const { Router } = require('express');
const router = Router();
const path = require('path');

router.get("/:id", (req, res) => {
    res.sendFile('tickets.html', { root: path.join(__dirname, '../public') });
});

//router.get("/:id/info",);
//메인, 식당 페이지 정보

module.exports = router;