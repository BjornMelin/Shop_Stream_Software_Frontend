import React from 'react';

const Table = ({ result }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>nameFirst</th>
          <th>nameLast</th>
          <th>companyName</th>
          <th>email</th>
          <th>phoneNum</th>
        </tr>
      </thead>
      <tbody>
      { (result.length > 0) ? result.map( (result, index) => {
           return (
            <tr key={ index }>
              <td>{ result.nameFirst }</td>
              <td>{ result.nameLast }</td>
              <td>{ result.companyName}</td>
              <td>{ result.email }</td>
              <td>{ result.phoneNum }</td>
            </tr>
          )
         }) : <tr><td colSpan="5">Loading...</td></tr> }
      </tbody>
    </table>
  );
}

export default Table