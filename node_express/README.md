## Node.JS with Express


# creating the server
We NPM init the repo and install necessary dependencies such as express and cors

use npm install --save-dev nodemone and then add the dependency to the package.lock

At the top level we call:
require HTTP
createSever()* for node
require Express* for express
call express fn using app* for express
PORT

and at the bottom we establish our server or app.listen

# first page
we use createServer => () and pass in our arguments request and response
we set the statusCode to 200 for 'ok'
and the res.end will contain the message

++++ Express ++++

we do not use create server but rather express uses app.

we use app.get / app.post / app.put / app.use 

in order to get, post, update, and use our express app.

app.get() will require 2 arguemnts: the path and the (req,res)

we use res.end to set a message to the endpoint. We use res.send to send information to the user after accessing the endpoint.

'fs' is what we use to send the user a local storage file.
we require fs at the top and deconstruct readFile from the pm

using res.send() we have 3 arguments for sending HTML files. The relative path to the HTML, utf8 from the meta, and the html or err, html. 
res.send(html)