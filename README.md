

# API Documentation

## Base URL
```
http://<your-domain>/api
```

```
change MongoDB url in config->db.js

```

### 1. User Registration

#### Endpoint
```
POST /register
```

#### Request Body
```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

#### Response Body
```json
{
  "user": {
    "_id": "string",
    "username": "string",
    "email": "string",
    "password": "string",
    "friends": [],
    "friendRequests": [],
    "posts": [],
    "createdAt": "string",
    "updatedAt": "string",
    "__v": 0
  }
}
```

---

### 2. User Login

#### Endpoint
```
POST /login
```

#### Request Body
```json
{
  "email": "string",
  "password": "string"
}
```

#### Response Body
```json
{
  "user": {
    "_id": "string",
    "username": "string",
    "email": "string",
    "password": "string",
    "friends": [],
    "friendRequests": [],
    "posts": [],
    "createdAt": "string",
    "updatedAt": "string",
    "__v": 0
  },
  "token": "string"
}
```

---

### 3. Create Post

#### Endpoint
```
POST /posts
```

#### Request Body
```json
{
  "author": "string (User ID)",
  "content": "string"
}
```

#### Response Body
```json
{
  "post": {
    "_id": "string",
    "author": "string (User ID)",
    "content": "string",
    "comments": [],
    "createdAt": "string",
    "updatedAt": "string",
    "__v": 0
  }
}
```

---

### 4. Add Comment to Post

#### Endpoint
```
POST /posts/:postId/comments
```

#### Request Body
```json
{
  "author": "string (User ID)",
  "content": "string"
}
```

#### Response Body
```json
{
  "post": {
    "_id": "string",
    "author": "string (User ID)",
    "content": "string",
    "comments": [
      {
        "author": "string (User ID)",
        "content": "string"
      }
    ],
    "createdAt": "string",
    "updatedAt": "string",
    "__v": 0
  }
}
```

---

### 5. Get User Feed

#### Endpoint
```
GET /users/:userId/feed
```

#### Response Body
```json
[
  {
    "_id": "string",
    "author": "string (User ID)",
    "content": "string",
    "comments": [
      {
        "author": "string (User ID)",
        "content": "string"
      }
    ],
    "createdAt": "string",
    "updatedAt": "string",
    "__v": 0
  }
]
```

---

### 6. Send Friend Request

#### Endpoint
```
POST /friends/:userId/request/:friendId
```

#### Response Body
```json
{
  "user": {
    "_id": "string",
    "username": "string",
    "email": "string",
    "password": "string",
    "friends": [],
    "friendRequests": [
      "string (Friend ID)"
    ],
    "posts": [],
    "createdAt": "string",
    "updatedAt": "string",
    "__v": 0
  }
}
```

---

### 7. Accept Friend Request

#### Endpoint
```
POST /friends/:userId/accept/:friendId
```

#### Response Body
```json
{
  "user": {
    "_id": "string",
    "username": "string",
    "email": "string",
    "password": "string",
    "friends": [
      "string (Friend ID)"
    ],
    "friendRequests": [],
    "posts": [],
    "createdAt": "string",
    "updatedAt": "string",
    "__v": 0
  },
  "friend": {
    "_id": "string",
    "username": "string",
    "email": "string",
    "password": "string",
    "friends": [
      "string (User ID)"
    ],
    "friendRequests": [],
    "posts": [],
    "createdAt": "string",
    "updatedAt": "string",
    "__v": 0
  }
}
```

---

### 8. Reject Friend Request

#### Endpoint
```
POST /friends/:userId/reject/:friendId
```

#### Response Body
```json
{
  "user": {
    "_id": "string",
    "username": "string",
    "email": "string",
    "password": "string",
    "friends": [],
    "friendRequests": [],
    "posts": [],
    "createdAt": "string",
    "updatedAt": "string",
    "__v": 0
  }
}
```

