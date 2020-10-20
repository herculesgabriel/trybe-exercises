import React from "react";
import PropTypes from "prop-types";

const Pokemon = (props) => {
  const {
    name,
    type,
    averageWeight: { value, measurementUnit },
    image,
  } = props.pokemon;

  return (
    <div className="pokemon">
      <div className="properties">
        <p>{name}</p>
        <p>{type}</p>
        <p>{value + measurementUnit}</p>
      </div>
      <p className="brand">GO</p>
      <img src={image} alt={`${name} pokémon`} />
    </div>
  );
};

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }),
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Pokemon;
