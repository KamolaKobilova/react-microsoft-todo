import React from 'react';
import {BsGrid3X3Gap} from 'react-icons/bs'

import '../style.css';

  function Header(props) {
    console.log(props);
     return (
         <div>
         
           <div className="main_body">
             <ul id="main_item">
                 <li className="items">
<button type="button"  class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
 <BsGrid3X3Gap size={20} />
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       <div className="microsoft">
           <h2>Microsoft 365</h2>
           
       </div>
      </div>
     
    </div>
  </div>
</div></li>
                 <li className="items"><h4>To Do</h4></li>
                 
             </ul>
             
                <h4><input type="text"  className='itemss' placeholder='search' /> </h4> 
             
             
          </div> 
        </div>
    )
}

export default Header
