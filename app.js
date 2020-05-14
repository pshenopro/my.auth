const express = require('express'),
      config = require('config'),
      request = require('request'),
      posts = require('./routes/http.posts');

const app = express(),
      backAPI = config.get("backApi");

let pathHttp = '';

app.use(express.json({extended: true}));

if (process.env.NODE_ENV === 'prod') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    pathHttp = req.path;
    next();
});

app.use(pathHttp, (req, res, next) => {
    if (pathHttp === '/') {
        return;
    }

    const data = { ...req.body };

    console.log('after / ' + pathHttp);

    request({
        url: backAPI + posts[pathHttp].url,
        method: posts[pathHttp].method,
        json: true,   // <--Very important!!!
        body: data
    }, function (error, response, body) {
        if (error) {
            res.status(500);
            res.json({message: 'SERVER ERROR'});
            next();

            return
        }

        if (response.body.status === 'error') {
            res.status(400)
        }

        res.json(response.body)
    });
});

const PORT = config.get('port') || 5000;


app.listen(PORT, () => console.log('server start.... port - ' + PORT));

