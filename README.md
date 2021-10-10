This is original source code written by me, search and save podcasts on the Podcasting 2.0 Index.
https://podcastindex-org.github.io/docs-api/#get-/search/byterm

This is a Nodejs project with a mongo database. 

I've utilized:

https://www.npmjs.com/package/podcast-index-api
  * Facilitates interacting with the Podcasting 2.0 API in Node.
https://github.com/Podcastindex-org/docs-api
  * Facilitates interacting with the Podcasting 2.0 API using Postman.
  
How to use:

1) Download node.js with npm from https://nodejs.org/en/download/ (available for mac, Windows, Linux, docker, etc) and if you don't have it 
install Mogno Db from https://www.mongodb.com/cloud/atlas.


2) Download this repository via "git clone" or via "Download ZIP" under the "Code" button. (follow documents on initializing Node in the directory. 

3) Create .env file with variables:
THIRDAPI
THIRDSECRET

4) Obtain API Key and Secret from the Podcasting 2.0 organization to define the new variables. 


FUNCTIONS:

This backend has infrastructure for creating and administrating users, sessions and searching, saving podcasts with comments added, editing those comments and deleting
those podcasts and user objects. 


 
