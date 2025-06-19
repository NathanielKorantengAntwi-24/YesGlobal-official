import React from 'react';
import pic1 from "../components/Images/pic1.avif";
import pic from "../components/Images/pic.avif";
import nat from "../components/Images/nat.jpg"

function Slider() {
  return (
  <div className='d-none d-md-block'> 
  <div  id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel">
    
    <div className="carousel-inner" style={{height:'450px'}}>   
      <div className="carousel-item active">
        <img src={pic} style={{width:"100%"}} alt="Image1"/>
       
      </div>
      <div className="carousel-item">
        <img src={pic1} style={{width:"100%"}} alt="Image2"/>
      </div>
      <div className="carousel-item ">
        <img src={nat} style={{width:"100%", height:"auto"}} alt="Image2"/>
      </div>
     </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <marquee className="text-capitalize fw-bold" style={{fontSize:'20px',color:'green'}}>Welcome to the Official Page of YesGlobal Consult</marquee>
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button  className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span  class="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
      <marquee className="text-capitalize fw-bold" style={{fontSize:'20px', color:'yellow'}}>Welcome to the Official Page of YesGlobal Consult</marquee>
    </button>
  </div>
</div>    
 
  );
}

export default Slider;
