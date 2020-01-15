# reddit-in-memory


## create
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

## show
Display all available topic
route:
`/show`

## upvote
route:
`/upvote:index`

## downvote
route:
`/downvote:index`
