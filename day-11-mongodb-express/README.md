# MongoDB with Express - Chat CRUD App

A beginner-friendly CRUD app using Express, EJS, Mongoose, and MongoDB.

## Topics Practiced

- Express setup
- MongoDB connection with Mongoose
- Mongoose schema
- Mongoose model
- Initialize database
- Index route
- New route
- Create route
- Date field
- Edit route
- Update route
- Destroy route
- method-override

## Routes

| Method | Route | Description |
|---|---|---|
| GET | /chats | Show all chats |
| GET | /chats/new | Show create chat form |
| POST | /chats | Create new chat |
| GET | /chats/:id/edit | Show edit form |
| PUT | /chats/:id | Update chat |
| DELETE | /chats/:id | Delete chat |

## Run Locally

```bash
npm install
npm run seed
npm run dev