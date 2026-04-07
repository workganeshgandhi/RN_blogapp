# React Native: 0.79

## Environment 

- Default Port: 8000

## Application Demo:
![](https://hrcdn.net/s3_pub/istreet-assets/VHdy80H1tfGERbjs8Dyl4w/articles-list.gif)


## Functionality Requirements
Complete the implementation of the app according to the following requirements:
- The BlogList component takes an array of posts as a prop. Each element of this array denotes a single blog post and is an object with the following properties:
```json5
{
  "id": 1,
  "title": "A Message to Our Customers",
  "image": "https://blog.hackerrank.com/wp-content/uploads/Thumb_Platform-First-Approach_Blog.png",
  "author": "epaga",
  "num_comments": 967,
  "created_at": "18 Jan"
}

```

- The list of posts is taken from 'src/posts.json' and should be used to pass the data around.
- Each post is rendered by the BlogItem component which takes an individual "post" as a prop.
- In the BlogList component, use the FlatList component of React Native to render a list of blog posts. Each post in the array must be rendered as a BlogItem component.
- Complete the BlogItem component by providing the image, title, author, and created_at of each blog post.
- The BlogDetailsModal component provides a view of the clicked blog post.
- The modal should not be visible by default.
  - Clicking on any blog post in the BlogList should open the BlogDetailsModal and display the clicked blog post.
  - The BlogItem component should be reused inside the modal to display the clicked blog post.
  - Use the visible prop of the modal to show/hide the modal.
  - The modal contains a close button clicking on which the modal should close.
- You can assume that the passed array contains at least one blog post.

## Testing Requirements
Initially, the file is filled with boilerplate code. Note the following:

- Each blog post item must have testID="item"
- Each post's image must be rendered as a <Image> element with testID="image".
- Each post's title must be rendered as a <Text> element with testID="title".
- Each post's author must be rendered as a <Text> element with testID="author".
- Each post's created_at date must be rendered as a <Text> element with testID="date".
- The close button inside the modal must have testID="close"

## Project Specifications

**Read Only Files**
- `__tests__/*`

**Commands**
- run: 
```bash
npm start
```
- install: 
```bash
npm install
```
- test: 
```bash
npm test
```
