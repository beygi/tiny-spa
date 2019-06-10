const express = require('express');
const app = express();
const puppeteer = require('puppeteer');
const fse = require('fs-extra');
const path = require('path');
const { URL } = require('url');

app.get('*', async (req, res) => {

    console.log(req.url);

    //determinate file name, serve statics directly
    let filePath = path.resolve(`./dist${req.url}`);
    let ext  = path.extname(filePath).trim();

    if(req.query.ssr)
    {
        // serve our main html file
        res.sendFile(path.resolve(`./dist/index.html`));
    }
    else
    {
        if(ext === "")
        {
            // this is our main html file, we must server it using SSR
            const browser = await puppeteer.launch({headless: true});
            const page = await browser.newPage();
            const local_url = `http://localhost:4000${req.url}?ssr=true`;
            await page.goto(local_url, {
                 waitUntil: "networkidle0",
            });
            const html = await page.content();
            await browser.close();
            res.send(html);
        } else
        {
            res.sendFile(filePath);
        }
    }

});

app.listen(4000, () => console.log(`Server is up at port 4000`))
