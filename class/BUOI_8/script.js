async function getData() {
  try {
    // const responseUsers = await fetch("https://dummyjson.com/users");
    // const resultUsers = await responseUsers.json();

    const responsePosts = await fetch("https://dummyjson.com/posts");
    const resultPosts = await responsePosts.json();
    console.log(resultPosts.posts);
    //     <ul id="content">
    //     <div style="width: 18rem">
    //       <img />
    //       <h4>Username</h4>
    //     </div>
    //     <div>
    //       <h5>Title</h5>
    //       <p>boby</p>
    //      <p>hastag</p>
    //     </div>
    //   </ul>
    resultPosts.posts.forEach(function (item) {
      const content = document.getElementById("content");
      const divTag1 = document.createElement("div");
      const divTag2 = document.createElement("div");

      const userName = document.createElement("h4");
      const nameTitle = document.createElement("h5");
      const postContent = document.createElement("p");
      const postTag = document.createElement("p");
      userName.innerText = item.id;
      nameTitle.innerText = item.title;
      postContent.innerText = item.body;
      postTag.innerText = item.tags;
      divTag1.appendChild(userName);
      divTag1.appendChild(nameTitle);
      divTag2.appendChild(postContent);
      divTag2.appendChild(postTag);
      content.appendChild(divTag1);
      content.appendChild(divTag2);
    });
  } catch (e) {}
}
getData();




