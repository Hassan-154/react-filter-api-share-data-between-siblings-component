import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ComponentA = ({ shareRowdata, shareDataFromComponentB }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/users')
      .then((response) => {
        setData(response.data.users);
        console.log(response.data.users);
      })
      .catch((error) => {
        console.log('error fetching the data.' + error);
      });
  }, []);
  const filteredData = data.filter((user) => {
    const birthYear = user.birthDate.slice(0, 4);
    return birthYear <= 1998;
  });

  function SendDataToComponentB(item) {
    shareRowdata(item);
  }
  return (
    <div>
      <h1 className='text-2xl font-semibold'>Received Data from sibling component B.</h1>
      {shareDataFromComponentB ? (
        <table className=" ">
          <thead>
            <tr className="">
              <th className="py-2 px-4 border-b">First Name</th>
              <th className="py-2 px-4 border-b">Last Name</th>
              <th className="py-2 px-4 border-b">Date of Birth</th>
              <th className="py-2 px-4 border-b">City</th>
            </tr>
          </thead>
          <tbody>
            <tr className='' key={shareDataFromComponentB.id}>
              <td className="py-2 px-4 border-b">{shareDataFromComponentB.firstName}</td>
              <td className="py-2 px-4 border-b">{shareDataFromComponentB.lastName}</td>
              <td className="py-2 px-4 border-b">{shareDataFromComponentB.birthDate}</td>
              <td className="py-2 px-4 border-b">{shareDataFromComponentB.address.city}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Righe now there is no data received from component B.</p>
      )}
      <hr className='border-t-2 border-black my-2'></hr>
      <span className='text-2xl font-semibold'>Filter users based on birthdate from component A.</span>
      <ul>
        {filteredData.length > 0 ? (
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
              {filteredData.map((user) => (
                <tr className='' key={user.id}>
                  <td className="py-2 px-4 border-b">{user.firstName}</td>
                  <td className="py-2 px-4 border-b">{user.lastName}</td>
                  <td className="py-2 px-4 border-b">{user.birthDate}</td>
                  <td className="py-2 px-4 border-b">{user.address.city}</td>
                  <td className="py-2 px-4 border-b"><button className='border border-gray-300 p-0.5 cursor-pointer' onClick={() => SendDataToComponentB(user)}>Send Data</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>No users born in 1998 or earlier.</div>
        )}
      </ul>
    </div>
  );
};

export default ComponentA;
