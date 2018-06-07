# hacker-news-api-types
TypeScript interfaces for the Hacker News API

## Install
`npm install hacker-news-api-types`

## How to use
````TS
import { IUser, IItem } from "hacker-news-api-types";

fetch("https://hacker-news.firebaseio.com/v0/user/whoishiring.json").then(response => {
    const user: IUser = response.json();
});

fetch("https://hacker-news.firebaseio.com/v0/item/17205865.json").then(response => {
    const post: IItem = response.json();
});
````
