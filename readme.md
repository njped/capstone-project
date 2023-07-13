# Create parent npm project

This project will hold the scripts needed for Render to build and run both the server and client apps

`npm init -y`

# Create server npm project and node skeleton code.

`mkdir server && cd server && npm init -y`

create basic express server:

`touch server.js`

install express:

`npm i express`

Copy the following code into server.js:

```
// server/server.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
```

create npm start script: `"start": "node server.js",`

# Create react skeleton code

run from parent directory (If on Windows must be done from git bash inside VSCode. Git Bash does not support interactive terminal):

```
npm i -g vite
npm create vite@latest
cd client && npm i
```

add proxy to client/vite.config.js:

```
server: {
    proxy: {
      "/api": "http://localhost:3001",
    },
  },
```

# Start both apps in different terminals

```
cd server && npm start
cd client && npm run dev
```

Open your browser and navigate to localhost:port  
You should see the Vite and React logos

# Use fetch API in App.jsx to make a request to server

```
// client/src/App.jsx

import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
          <h1>{!data ? "Loading..." : data}</h1>
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App


```

update server/server.js to serve React files

```
const path = require("path");
```

```
// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/dist")));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});
```

in server project:

install path

```
npm i path
```

create npm dev script:

```
"dev": "nodemon server.js",
```

run the dev script. You should now see the 'Hello from server!' message sent from the server.

# Setup Git

```
git init
```

create .gitignore and add node_modules to it:

```
touch .gitignore && echo node_modules > .gitignore
```

add and commit all:

```
git add -A && git commit -m 'initial commit'
```

create a new repo in github
add the newly create repo as a remote

```
git remote add origin https://github.com/your-github-username/your-repo.git
```

push your application:

```
git push -u origin master
```

# Deploy to Render

[Deploy to Render guide](https://github.com/MediaComem/comem-archioweb/blob/main/guides/deploy-in-the-cloud.md)

[Create a Render account.](https://dashboard.render.com/register?next=/) If you register through GitHub, you will not have to link the two accounts together later.

Go to your Render dashboard and create a new Web Service
![render dashboard](https://github.com/MediaComem/comem-archioweb/raw/main/guides/images/render-02-create.png)

Connect your GitHub repository to Render by selecting the one the contains your app from the list.
![render connect](https://github.com/MediaComem/comem-archioweb/raw/main/guides/images/render-03-connect.png)

add build script in main package.json:

```
"build": "cd server && npm i && cd ../client && npm i && npm run build",
```

add start script in main package.json:

```
"start": "node server/server.js",
```

add engine in main package.json:

```
"engines": {
  "node": "your-node-version"
}
```

push changes:

```
git add -A && git commit -m 'added build scripts' && git push
```

set Render build command to: `npm run build`
set Render start command to: `npm run start`

![alt text](https://github.com/ctdalton/student-registration/blob/master/renderInfo.png?raw=true)

click Create Web Service

Create a MongoDB cluster on MongoDB Atlas
Allow access from anywhere in atlas network access tab
Create database user in Database Access tab
Get connection url in deployment > database > connect
Provide your database URL to your Render application env variables

# Set up eslint

in server project:

```
npm i eslint -D
npm init @eslint/config
```

may need to add node to env property of .eslintrc

```
 "env": {
    "browser": true,
    "commonjs": true,
    "es2021": true,
    "node": true
  },
```

add script: `"lint": "eslint **/*.js --fix"`
