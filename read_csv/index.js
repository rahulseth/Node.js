var fs = require('fs');
var parse = require('csv-parse');
const cTable = require('console.table');
var sampleFile='sample.csv';

var parser = parse({delimiter: ','}, function (err, data) {
  const table = cTable.getTable(data);
  console.log(table);
  count = data.length;
  if (count > 0) {
    data.forEach(function(element) {
     // To print data in array format
    //  console.log(element);
    });
  }
});


fs.createReadStream(sampleFile).pipe(parser);