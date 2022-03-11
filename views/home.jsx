const React = require("react");
const Def = require("./default");

const home = () => {
  return (
    <Def>
      <main>
        <h1>Home</h1>
        <div>
          <img
            src="./images/brenda-godinez-MsTOg6rhRVk-unsplash (1).jpg"
            alt="brenda godinez"
          />
          <div>
            Photo by{" "}
            <a href="https://unsplash.com/photos/MsTOg6rhRVk">Brenda Godinez</a>{" "}
            on <a href="https://unsplash.com/">unsplash</a>
          </div>
        </div>

        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  );
};

module.exports = home;
