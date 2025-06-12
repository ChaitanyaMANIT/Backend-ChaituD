require('dotenv').config();
const express = require('express');

const app = express();

const port = 4500;

const MyGitHubData = {
  "login": "ChaitanyaMANIT",
  "id": 143254577,
  "node_id": "U_kgDOCInkMQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/143254577?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/ChaitanyaMANIT",
  "html_url": "https://github.com/ChaitanyaMANIT",
  "followers_url": "https://api.github.com/users/ChaitanyaMANIT/followers",
  "following_url": "https://api.github.com/users/ChaitanyaMANIT/following{/other_user}",
  "gists_url": "https://api.github.com/users/ChaitanyaMANIT/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/ChaitanyaMANIT/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/ChaitanyaMANIT/subscriptions",
  "organizations_url": "https://api.github.com/users/ChaitanyaMANIT/orgs",
  "repos_url": "https://api.github.com/users/ChaitanyaMANIT/repos",
  "events_url": "https://api.github.com/users/ChaitanyaMANIT/events{/privacy}",
  "received_events_url": "https://api.github.com/users/ChaitanyaMANIT/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 12,
  "public_gists": 0,
  "followers": 1,
  "following": 0,
  "created_at": "2023-08-26T08:18:07Z",
  "updated_at": "2025-06-12T06:01:15Z"
}

app.get('/', (req, res) => {
    res.send("Reponse has been sent successfully");
})

app.get('/login', (req, res) => {
    res.send(`<h1>Please Login Here!</h1>`);
})

app.get('/github', (req, res) => {
    res.json(MyGitHubData);
})

app.listen(process.env.PORT, () => {
    console.log(`Example app is listening on port ${port}`);
})




// Server Ban Gaya MKC
