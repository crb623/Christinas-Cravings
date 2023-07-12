# Research Topics & Scratch Work

## Types of Forms Needed:
- Potential user login
- When a user favorites a food blog post, the post will appear in their favorites page (duplicate blog posts in favorites page)
- search bar, when a user searches a blog post title the blog post will appear
- Reviewing blog posts, users will be able to assign a star amount to blog posts

## React.js Research:
- There are various react components, below is code copy and pasted from [Learn React.js](https://react.dev/learn) that shows how to code such components

below is an example of creating the header 'Welcome to my app' with a button named 'I'm a button'

```javascript
{
function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}

}
```

- JSX can be used to display photos and other forms of data below is an example of a dynamic header stating a name (pulled from a varible) and displaying a photo which was also pulled from a varible 

```javascript
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
```

- Example of a button with a functinoal counter function, can be used to log number of log in attempts:

```javascript
import { useState } from 'react';

export default function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
```

## Google Maps API Research: