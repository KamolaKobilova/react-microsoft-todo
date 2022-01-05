import React from 'react'

function Sidebar() {
    return (
        <div>
            <div className="text">
               <h2 className='h2'>My Day</h2>
               <ul className="ul2">
                   <li className="li_items"><p><i class="fas fa-sun"></i> My Day</p></li>
                   <li className="li_items"><p><i class="fas fa-star"></i> Important</p></li>
                   <li className="li_items"><p><i class="fas fa-calendar"></i> Planned</p></li>
                   <li className="li_items"><p><i class="fas fa-user"></i> Assigned to me</p></li>
                   <li className="li_items"><p><i class="fas fa-home"></i> Tasks</p></li>
                   <li className="li_items news"><p><i class="fas fa-plus"></i> New list</p></li>
               </ul>
             
               

            </div>
            
        </div>
    )
}

export default Sidebar
