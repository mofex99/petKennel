import React from 'react';

class ChildComponent extends React.Component {
  render() {
    const { id, name, image, status, onAction } = this.props;

    return (
      <div className="child-card">
        <h2>{name}</h2>
        <img src={image} alt={name} />
        <p>{status}</p>
        <button onClick={() => onAction(id)}>Change mood</button>
      </div>
    );
  }
}

export default ChildComponent;
