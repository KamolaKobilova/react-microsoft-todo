import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Routes, Route, NavLink} from 'react-router-dom';
import Important from '../Important/Important';
import ImportantDetails from '../ImportantDetails/ImporDetails';
import MyDay from '../MyDay/MyDay';
import Planned from '../Planned/Planned';
import Tasks from '../Tasks/Tasks';



function Sidebar() {
    return (
        <div>
            <div className="text">
               <h2 className='h2'>My Day</h2>
               <ul className="ul2">
                   {/* <li className="li_items"><NavLink style={({isActive}) => isActive ? {color: 'red'}:{}} className={({isActive})} to="/myDay"><p><i class="fas fa-sun"></i> MyDay</p></NavLink></li> */}
                   <li className="li_items"><NavLink className={({isActive})=> isActive ? 'nav-active': ''} to="/myDay"><p><i class="fas fa-sun"></i> My Day</p></NavLink></li>
                   <li className="li_items"><NavLink className={({isActive})=> isActive ? 'nav-active': ''} to="/important"><p><i class="fas fa-star"></i> Important</p></NavLink></li>
                   <li className="li_items"><NavLink className={({isActive})=> isActive ? 'nav-active': ''} to="/important"><p><i class="fas fa-star"></i> ImporDetails</p></NavLink></li>
                   <li className="li_items"><NavLink className={({isActive})=> isActive ? 'nav-active': ''} to="/planned"><p><i class="fas fa-calendar"></i> Planned</p></NavLink></li>
                   <li className="li_items"><NavLink className={({isActive})=> isActive ? 'nav-active': ''} to="/assignToMe"><p><i class="fas fa-user"></i> AssignedToMe</p></NavLink></li>
                   <li className="li_items"><NavLink to="/Tasks"><p><i class="fas fa-home"></i> Tasks</p></NavLink></li>
                   <li className="li_items news"><NavLink className={({isActive})=> isActive ? 'nav-active': ''} to="/news"><p><i class="fas fa-plus"></i> New list</p></NavLink></li>
                 
               </ul>
             <Routes>
                 <Route path="/myDay" element={<MyDay/>}/>
                 <Route path="/important" element={<Important/>}/>
                 <Route path="/important/:userId" element={<ImportantDetails/>}/>
                 {/* <Route path="planned" element={<Planned/>}/> */}
                 {/* <Route path="assignToMe" element={<AssignedToMe/>}/> */}
                 {/* <Route path="Tasks" element={<Tasks/>}/> */}
                 
             </Routes>
               

            </div>
            
        </div>
    )
}

export default Sidebar
