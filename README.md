# reddit-in-memory


## Create a new topic
endpoint:
`POST` - `/create`

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

endpoint:

`GET` - `/`

`GET` - `/show`

## Get topic by index
endpoint:
`GET` - `/topics/:index`

## Remove topic by index
endpoint:

`DELETE` - `/topics/:index`

## Upvote
endpoint:
`PUT` - `/upvote:index`

## Downvote
endpoint:
`PUT` - `/downvote:index`


## Possible Todos
* [x] add remove topic
* [ ] add sort topic feature
* [x] root route display all topics
* [x] add get single topic route
