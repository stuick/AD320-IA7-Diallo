var express = require('express');
var router = express.Router();
const mycolors = require('../colors');
const size = mycolors.colors.length;

/* GET to route2. */
router.get('/all', function (req, res, next) {
    res.json(mycolors.colors);
});

router.get('/', function (req, res, next) {
    res.json(mycolors.colors);
});

/* GET to specific color. */
router.get('/:color', function (req, res, next) {
    var y = 0;
    var found = false;
    for (i = 0; i < size; i++) {
        var singlecolor =mycolors.colors[i].color.toUpperCase();
        if (singlecolor == req.params.color.toUpperCase()) {
            res.json(mycolors.colors[i]);
            found = true;
        }
        if (found == true)
            break;        
    };
    if (found == false) {
        res.status(404).json({ msg: `Color ${req.params.color} not listed ` });
    }
});

module.exports = router;
