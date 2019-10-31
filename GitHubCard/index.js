/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
// axios.get('https://api.github.com/users/JacobWashburn')
//   .then(response => {
//     console.log(response)
//   })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/



function createCards() {
  const getCardsDiv = document.querySelector('.cards');
  let create = el =>
    document.createElement(el);

  function getFollowers() {
    let followersArray = ['toddmurphy', 'bryankadams', 'dtauraso', 'jiangeyre', 'astubbings'];
    // axios.get("https://api.github.com/users/JacobWashburn/followers")
    //   .then(response => {
    //     // console.log(response)

    //     for (let i = 0; i < 5; i++) {
    //       function randomPerson() {
    //         return Math.floor(Math.random() * response.data.length)
    //       };
    //       if (followersArray.includes(response.data[randomPerson()].login)) {
    //         followersArray.push(response.data[randomPerson()].login)
    //       } else {
    //         followersArray.push(response.data[randomPerson()].login)
    //       }
    //     }

    //   })
    //   .catch(re => {
    //     console.log('hello')
    //   });
    return followersArray
  }



  function createCard(person) {
    axios.get(`https://api.github.com/users/${person}`)
      .then(response => {
        // console.log('hello')
        console.log(response);
        const card = create('div');
        card.classList.add('card');
        const userImg = create('img');
        userImg.src = response.data.avatar_url;
        const cardInfo = create('div');
        cardInfo.classList.add('card-info');
        const name = create('h3');
        name.classList.add('name');
        name.textContent = response.data.name;
        const userName = create('p');
        userName.classList.add('username');
        userName.textContent = response.data.login;
        const userLocation = create('p');
        if (response.data.location) {
          userLocation.textContent = `Location: ${response.data.location}`;
        } else {
          userLocation.textContent = `Location: Somewhere`;
        }
        const profile = create('p');
        const profileLink = create('a');
        profileLink.href = response.data.html_url
        profileLink.textContent = response.data.html_url
        const followers = create('p');
        followers.textContent = `Followers: ${response.data.followers}`;
        const following = create('p');
        following.textContent = `Following: ${response.data.following}`;
        const bio = create('p');
        if (response.data.bio) {
          bio.textContent = `Bio: ${response.data.bio}`;
        } else {
          bio.textContent = 'Bio: I decided not put something is this field.';
        }
        getCardsDiv.append(card);
        card.append(userImg, cardInfo);
        cardInfo.append(name, userName, userLocation, profile, followers, following, bio);
        profile.append(profileLink);

      })
      .catch(re => {
        console.log('this is an error')
      })

  };
  getFollowers().forEach(name => {
    createCard(name)
  })
  console.log(getFollowers());

}

createCards()

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
console.log(document)