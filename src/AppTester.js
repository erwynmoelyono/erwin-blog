import "./App.css";

function AppTester() {
  const title = "Welcome to the new Blog";
  const likes = 50;
  const person = { name: "yoshi" };
  const links = {
    youtube: "https://www.youtube.com",
  };
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p> Liked {likes} times</p>
        <p>{person.name}</p>
        <p>{10}</p>
        <p>{"asd"}</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>{Math.random() * 10}</p>

        <a href={links.youtube}>Youtube</a>
      </div>
    </div>
  );
}

export default AppTester;
