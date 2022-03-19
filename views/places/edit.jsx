const React = require("react");
const Def = require("../default");

const editForm = (data) => {
  return (
    <Def>
      <main>
        <h1>Edit the Page</h1>
        <form method="POST" action={`/places/${data.id}?_method=PUT`}>
          <div className="row">
            <div className="form-group col-sm-6">
              <label htmlFor="name">Place Name</label>
              <input id="name" value={data.place.name} />
            </div>
            <div className="form-group col-sm-6">
              <label htmlFor="pic">Place Picture</label>
              <input id="pic" />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-sm-6">
              <label htmlFor="city">City</label>
              <input id="city" />
            </div>
            <div className="form-group col-sm-6">
              <label htmlFor="state">State</label>
              <input id="state" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="cuisines">Cuisines</label>
            <input
              className="form-control"
              id="cuisines"
              name="cuisines"
              required
            />
          </div>
          <input className="btn btn-primary" type="submit" value="Add Place" />
        </form>
      </main>
    </Def>
  );
};

module.exports = editForm;
