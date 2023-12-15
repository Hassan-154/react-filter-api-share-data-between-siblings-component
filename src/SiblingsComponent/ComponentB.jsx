import React from 'react';

function ComponentB({ receivedData, sendDataToParent }) {
  function sendToParent(){
    sendDataToParent(receivedData);
  }

  return (
    <div className='componentB'>
      <h1>Received Data from sibling component A.</h1>
      {receivedData ? (
        <table className=" ">
          <thead>
            <tr className="">
              <th className="py-2 px-4 border-b">First Name</th>
              <th className="py-2 px-4 border-b">Last Name</th>
              <th className="py-2 px-4 border-b">Date of Birth</th>
              <th className="py-2 px-4 border-b">City</th>
              <th className="py-2 px-4 border-b">Share Data</th>
            </tr>
          </thead>
          <tbody>
            <tr className='' key={receivedData.id}>
              <td className="py-2 px-4 border-b">{receivedData.firstName}</td>
              <td className="py-2 px-4 border-b">{receivedData.lastName}</td>
              <td className="py-2 px-4 border-b">{receivedData.birthDate}</td>
              <td className="py-2 px-4 border-b">{receivedData.address.city}</td>
              <td className="py-2 px-4 border-b">
                <button className='border border-gray-300 p-0.5 cursor-pointer' onClick={sendToParent}>
                  Send data
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default ComponentB;
