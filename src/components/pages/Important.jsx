import React  from 'react';
import { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';

export default function Important(props) {
    console.log(props)
    const [users, setUsers] = useState([]);
    const fetchUsers = ()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(err=> {
            console.error(err)
        });
    }
        useEffect(() =>{
            fetchUsers()
        },[])
     return (
        <div>
            <ul>
                {
                    users.map(item=>{
                       return (<li key={item.id}>
                            <Link to={`/Important/${item.id}`}>{`${item.name}`}</Link>
                        </li>)
                    })
                }
            </ul>
        </div>
    )
}
