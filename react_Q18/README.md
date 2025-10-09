Question- You have to use an api and display the data in the form of a card under a container. All the data points returned by the API should be converted to a card.

API to use - https://jsonplaceholder.typicode.com/posts

steps: 
    upr navbar bna lo phele
    uskee andr a container, container k andr kuch cards

    jo API se post aaye hain unko display krvana hai in the form of a card. card me userid, id, title aur body display ho

Hint: Create a state for the data which will be featched using the json placeholder API 
Inside useEffect, use fetch to populate that state and then use map to render the cards from that state