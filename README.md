# Tiny-Spa is a full featured single page progressive web application boilerplate in less than 30kb (gzipped)

## Feauters and included libraries:
* Preact
* Babel 7
* TypeScript
* Less
* React-router
* Fetch api
* Hot loading
* Milligram css framework
* Unistore state manager
* SSR with puppeteer and express

## TODO:
* Make the router connected

* Code spliting

## Installation
```bash
yarn install
```
## Development build with node server
```bash
yarn start-dev
```

## Production build
```bash
yarn build
```

## Production build with SSR server
```bash
yarn serve
```

## generate documentation
```bash
yarn doc
```

## Nginx sample config
```nginx
server {
   listen 80;
   server_name domain.com;
   return 301 https://$host$request_uri;
}


server {
    listen 443;
    server_name domain.com;

    ssl_certificate           /etc/nginx/cert.crt;
    ssl_certificate_key       /etc/nginx/cert.key;

    ssl on;
    ssl_session_cache  builtin:1000  shared:SSL:10m;
    ssl_protocols  TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers HIGH:!aNULL:!eNULL:!EXPORT:!CAMELLIA:!DES:!MD5:!PSK:!RC4;
    ssl_prefer_server_ciphers on;

    access_log            /var/log/nginx/webapp.access.log;

    root /your/path/to/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```
