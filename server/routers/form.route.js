const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    const queryText = `INSERT INTO "feedback"("feeling", "understanding", "support", "comments")
    VALUES($1, $2, $3, $4);`;
    const form = req.body;
    // form = {
    //     feeling: 0,
    //     understanding: 0,
    //     support: 0,
    //     comments: '',
    // }
    pool.query(queryText, [
        form.feeling,
        form.understanding,
        form.support,
        form.comments
     ])
    .then((response) => {
        res.sendStatus(201);
    })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
    })
    
    module.exports = router;