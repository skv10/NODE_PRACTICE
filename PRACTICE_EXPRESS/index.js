const express = require('express');

const app = express();

app.get('/',(req,res) => {
    res.send('Hello World!');
});

app.get('/api/v1/activity/user',(req, res) => {
    res.status(200).json({key:"about page"});
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
}
)