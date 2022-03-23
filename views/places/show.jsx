const React = require("react");
const Def = require("../default");

function show(data) {
  return (
        <Def>
      <main>
        <h1>{data.place.name}</h1>
        <img src={data.place.pic} alt={data.place.name} />
        <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
  Edit
</a>     
<form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
  <button type="submit" className="btn btn-danger">
    Delete
  </button>
</form>     
        <div>
          <h2>Rating</h2>
          <p>Not yet rated</p>
        </div>
        <div>
          <h2>description</h2>
          <p>{data.place.cuisines}</p>
          <p>{data.place.city}</p>
          <p>{data.place.state}</p>
        </div>
        <div>
          <h2>Comment</h2>
          <p>no comments</p>
        </div>
      </main>
      </Def>
  );
}

module.exports = show;
