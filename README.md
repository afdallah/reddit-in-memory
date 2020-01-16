# reddit-in-memory


## Create a new topic
route:
POST - `/create`

Only accept title, and content key
e.g
```javascript
  {
    title: 'New post',
    content: 'lorem ipsum dolor'
  }
```
any other key specified will return error

## Get all topics
Display all available topics
route:
GET - `/`
GET - `/show`

## Get topic by index
route:
GET - `/topics/:index`

## Remove topic by index
DELETE - `/topics/:index`

## Upvote
route:
PUT - `/upvote:index`

## Downvote
route:
PUT - `/downvote:index`


## Possible Todos
* [ ] add remove topic
* [ ] add sort topic feature
* [ ] root route display all topics