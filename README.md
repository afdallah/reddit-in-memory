# reddit-in-memory


## Create a new topic
route:
`/create`

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
Display all available topic
route:
`/show`

## Upvote
route:
`/upvote:index`

## Downvote
route:
`/downvote:index`


## Possible Todos
* [ ] add remove topic 
* [ ] add sort topic feature
* [ ] root route display all topics
