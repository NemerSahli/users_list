import React from 'react';

export default function User(props) {
  return (
    <tr>
      <td>{props.userName}</td>
      <td>{props.email}</td>
      <td>{props.city}</td>
      <td>
        <div className="row justify-content-end">
          <i
            className=" fas fa-user-edit mr-3"
            onClick={props.openUpdateModalHandler}
            style={{ cursor: 'pointer' }}
          />

          <i
            className=" fas fa-user-times"
            onClick={props.deleteUserHandler.bind(this, props.id)}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </td>
    </tr>
  );
}
