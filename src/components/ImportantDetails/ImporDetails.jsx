import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export default function ImporDetails(props) {
  console.log(props);
  const [user, setUser] = useState({});
  const {userId} = useParams();
  console.log(userId);

  const fetchUserById = (userId) => {
    fetch("https://jsonplaceholder.typicode.com/users/" + userId)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    fetchUserById(userId);
  }, [userId]);
  

  return (
    <div className="h5">
    
      <h4>{user.name}</h4>
      <h4>{user.email}</h4>
      <h4>{user.company?.name}</h4>
    </div>
  );
}
