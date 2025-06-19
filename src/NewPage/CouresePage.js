import React, {useState} from "react";
import './NePageStyle.css';
import data from "../TemplateData.json";




function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  return (

    <div class="row mt-5">
      <div class="col-lg col-md col-sm"></div>
      <div class="col-lg col-md col-sm">
        <div className="templateContainer  text-center">
      <div className="sticky-top"> 
      <input  id="searchInput" type="text" placeholder="Search Here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
       
      </div>
      <div className="flex-container d-flex justify-content-center pt-5">
            {
              data
                .filter((val) => {
                  if(searchTerm === ""){
                    return val;
                  }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val;
                  }
                })
                .map((val) => {
                  return(
                    <div style={{padding:"5px", color:'grey'}} key={val.id}>
                        <img style={{width:"200px",padding:"10px"}} src={val.image} alt="" />
                        <h3 style={{padding:"30px"}}>{val.title}</h3>
                        <p style={{padding:"10px"}} >{val.duration}</p>
                        <p style={{padding:"10px"}} >{val.link}</p>
                    </div>
                  )
                })
            }
          </div>
        </div>
      </div>
      <div class="col-lg col-md col-sm"></div>
    </div>
  


  )
}

export default CoursesPage;
