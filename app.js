var MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/nodeJs-Test";

//connecting to db server
MongoClient.connect(url, function (err, db)
{

    if(err) throw err;

    console.log('db');
    db.collection('Posts', function(err, collection)
    {
        //collection.insert({ id:1, title: 'Title 1', text: 'should be some long text here 1'});
        //collection.insert({ id:2, title: 'Title 2', text: 'should be some long text here 2'});
        //collection.insert({ id:3, title: 'Title 3', text: 'should be some long text here 3'});


        collection.find({},{"id": ""} ).toArray(
            function(err, result)
            {
                if(err) throw err;
                console.log(result);
                
            }
        )

        /*db.collection('Posts').count(function(err, count)
        {
            if(err) throw err;

            console.log('Total Rows: ' + count);
        });*/
    });
});