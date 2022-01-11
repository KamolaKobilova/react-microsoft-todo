import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export default function ImporDetails(props) {
  console.log(props);
  const [users, setUsers] = useState({});
  const params = useParams();
  console.log(params);

  const fetchUsersById = (userId) => {
    fetch("https://jsonplaceholder.typicode.com/users/" + userId)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    fetchUsersById();
  }, []);
  console.log(users);
  return (
    <div className="h5">
    
      <h4>{users.name}</h4>
      <h4>{users.email}</h4>
    </div>
  );
}
