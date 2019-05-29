const express = require('express');
const router = express.Router();
var fs = require('fs');
var parse = require('csv-parse');

/* GET home page. */
router.get('/go', async function(req, res, next) {
    var csvData=[];
    await fs.createReadStream('./CSVtoMysql_testv.csv')
            .pipe(parse({delimiter: ':'}))
            .on('data', await function(csvrow) {
                //do something with csvrow
                csvData.push(csvrow);
            })
            .on('end',await function() {
                //do something wiht csvData
                console.log(csvData);
                return res.json(csvData);

            });
})

module.exports = router;
