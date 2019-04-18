import React from 'react';

export default (props) => {
  const {
    tel,
    email,
    handleChange,
  } = props;
  return (
    <form>
    Telephone:
      <br />
      <input
        type="text"
        name="telephone"
        value={tel}
        onChange={e => handleChange(e.target.name, e.target.value)}
      />
      <br />
    Email:
      <br />
      <input
        type="text"
        name="email"
        value={email}
        onChange={e => handleChange(e.target.name, e.target.value)}
      />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};
