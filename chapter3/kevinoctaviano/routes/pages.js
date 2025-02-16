const router = require("express").Router();
const page = require("../controllers/pagesController");

router.get('/', page.home);
router.get('/articles', page.articles);

module.exports = router;