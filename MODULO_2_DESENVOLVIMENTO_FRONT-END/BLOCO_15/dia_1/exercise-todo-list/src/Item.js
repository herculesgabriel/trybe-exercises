import React from 'react';
import PropTypes from 'prop-types'

function Item(props) {
  const { content, onSelectedTask } = props
  return (
    <div className="Item" onClick={onSelectedTask} >
      {content}
    </div>
  );
}

export default Item;

Item.propTypes = {
  content: PropTypes.string.isRequired,
}
