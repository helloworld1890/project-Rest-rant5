const React = require('react');
const Def = require('../default');

const index = (data) => {
let placesFormatted = data.places.map((places) => {
    return (
        <div>
            <h2>{places.name}</h2>
            <img src={places.pic} alt={places.name} />
        </div>
    )
});
return (
    <Def>
        <main>
            <h1>Places Index Page</h1>
            {placesFormatted}
        </main>
    </Def>
)
}

module.exports = index;