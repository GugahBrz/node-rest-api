# node-rest-api
A demonstration of an API based on mongoose.

## Getting Started
Install Dependencies
```
$ npm install
```

## Basic Usage
Use curl or postman chrome extension to test the API


###### Welcome
```
curl -i http://localhost:3000
```

###### GET Products
```
curl -i http://localhost:3000/products
```

###### GET Product
```
curl -i http://localhost:3000/products/{{ID}}
```

###### POST Product
```
$ curl -X POST -H "Content-Type: application/json" \
-d '{"name":"Sabonete Líquido","price":"6.50"}' \
-i http://localhost:3000/products
```

## Frameworks
* [Express](https://expressjs.com/ "Express Framework") is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

## Author
Gustavo Zanoni - 
[LinkedIn](https://br.linkedin.com/in/gustavo-zanoni-6371a791 "LinkedIn Link")
