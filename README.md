# Simple NodeJS Server (Koa)
## API with get, post and update methods

At some point in my life one friend told me about an application to read, save and update **bolts**
Yeah, It may sound stupid, but at his job company they still looking for bolts references into a very old book.
So I created this small application (this is just the server, the application may come live any time soon) for helping him and as an exercise for me That's it :)

You'll need:
- Docker
- Mongo (from Docker Hub)

I'm using:
- koa
- koa-body (for POST methods)
- koa-mongo
- koa-router
- mongoose

Steps to before running:
- `npm install`
- `docker run -p 27017:27017 mongo`

After that you can use nodemon:
- `nodemon server.js`
or
- `node server.js`

### Routes
- GET `/bolt` - Get all bolts
- POST `/bolt` - Create bolt, params:
- name (String)
  - reference (String)
  - category (String)
  - createdAt (optional)

Enjoy!
This is just a super basic NodeJS server, you can use it as an example.
