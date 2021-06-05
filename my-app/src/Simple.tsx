import {ChangeEvent, Component, FormEvent, useState}from "react";

import * as React from 'react'
export function Simple(){
     
       
        
    const [name, setName] = useState<string>('');
    const [rightSphere, setrightSphere] = useState<string>('');
    const[leftSphere,setLeftSphere] =useState<string>("");
    const[rightCylinder,setrightCylinder] =useState<string>("");
    const[leftCylinder,setLeftCylinder] =useState<string>("");
    const[rightAxis,setrightAxis]=useState<string>("");
    const[leftAxis,setleftAxis]=useState<string>("");
    const[rightNearAdd,setrightNearAdd]=useState<string>("");
    const[leftNearAdd,setleftNearAdd]=useState<string>("");
    const[pupilpre,setpupilpre]=useState<string>("")
    const[extrainfo,setextrainfo]=useState<string>("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('name:',name)
       console.log('rightSphere:',rightSphere)
       console.log('LeftSphere:',leftSphere)
       console.log('RightCyl:',rightCylinder)
       console.log('LeftCyl:',leftCylinder)
       console.log('RightAxis:',rightAxis)
       console.log('leftAxis:',leftAxis)
       console.log('RightNeadAdd:',rightNearAdd)
       console.log('LeftNearAdd:',leftNearAdd)
       console.log('pupilpre:',pupilpre)
       console.log('ExtraInfo:',extrainfo)
    };

    const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };
    const onRightSpherChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setrightSphere(event.target.value);
    };
    const onLeftSphereChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setLeftSphere(event.target.value);
    };
    const onRightCylinderChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setrightCylinder(event.target.value);
    };
    const onLeftCylinderChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setLeftCylinder(event.target.value);
    };
    const onRightNearAddChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setrightNearAdd(event.target.value);
    };
    const onLeftNearAddChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setleftNearAdd(event.target.value);
    };
    const onRightAxisChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setrightAxis(event.target.value);
    };
    const onLeftAxisChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setleftAxis(event.target.value);
    };
    const onPupilPreChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setpupilpre(event.target.value);
    };
    const onExtraInfoChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setextrainfo(event.target.value);
    };


   const option =require("./data.json")
  const nearAdd = require("./NearAddData.json")
      const Pupilpre = require("./PupilPreData.json")
    return(
       //heading
        <div className="container">
        <div className="row">
          <div className="cols">
                <div className="heading" >Enter new prescription</div>
                <p  style={{textAlign:"center"}}>Enter your prescription below</p>
            <p style={{ fontFamily: "Arial" }}>
                All prescriptions will be checked by one of our opticians and verified for any potential errors or delays,
                and they may contact you if they need to discuss your details any further.
            </p>
 
            <form onSubmit={handleSubmit}>
           {/*name input field*/}
            <label className="name" > Prescription Name:</label>
                <input  id="name" type="text" name="userId"  value={name} onChange={onNameChange} required ></input>
            <hr></hr>
                
            {/* right and left eye heading*/}
            <div className="row">
                <div className="col" style={{fontSize:20}}>Right Eye</div>
                <div className="col">  </div>
                <div className="col" style={{fontSize:20}}>Left Eye</div>
             </div>

             {/* right and left eye sphere*/}
            <hr></hr>
            <div className="row">
                <div className="col" style={{ fontSize: " calc(1em + 1vw)" }}>Sphere(SPH)</div>
                <div className="col">  </div>
                <div className="col"style={{ fontSize: " calc(1em + 1vw)" }} >Sphere(SPH)</div>
             </div>

             <div className="row">
                <div className="col" style={{fontSize:20}}>
                <select onChange={onRightSpherChange}>
              {option.value.map((item: { id: React.Key | null | undefined; name: {} | null | undefined; }) => (
                  <option key={item.id} >
                       {item.name} 
                  </option>
              ))}
             </select>
                </div>
                <div className="col">  </div>
                <div className="col" style={{fontSize:20}}>
                <select onChange={onLeftSphereChange}>
              {option.value.map((item: { id: React.Key | null | undefined; name: {} | null | undefined; }) => (
                  <option key={item.id} >
                       {item.name} 
                  </option>
              ) )}
             </select>
                </div>
             </div>
             <hr></hr>
                 {/* right and left eye cylinder*/}
             <div className="row">
                <div className="col" style={{ fontSize: " calc(1em + 1vw)" }}>Cylinder(CYL)</div>
                <div className="col">  </div>
                <div className="col"style={{ fontSize: " calc(1em + 1vw)" }} >Cylinder(CYL)</div>
             </div>

             <div className="row">
                <div className="col" style={{fontSize:20}}>
                <select onChange={onRightCylinderChange}>
              {option.value.map((item: { id: React.Key | null | undefined; name: {} | null | undefined; }) => (
                  <option key={item.id} >
                       {item.name} 
                  </option>
              ))}
             </select>
                </div>
                <div className="col">  </div>
                <div className="col" style={{fontSize:20}}>
                <select onChange={onLeftCylinderChange}>
              {option.value.map((item: { id: React.Key | null | undefined; name: {} | null | undefined; }) => (
                  <option key={item.id} >
                       {item.name} 
                  </option>
              ) )}
             </select>
                </div>
             </div>
             <hr></hr>
                {/* right and left eye axis*/}
            
             <div className="row">
                <div className="col" style={{ fontSize: " calc(1em + 1vw)" }}>Axis</div>
                <div className="col">  </div>
                <div className="col"style={{ fontSize: " calc(1em + 1vw)" }} >Axis</div>
             </div>
           
             <div className="row">
                <div className="col" style={{fontSize:20}}>
                <input  id="rightAxis" type="number" name="rightAxis" value={rightAxis} onChange={onRightAxisChange}></input>
                </div>
                <div className="col">  </div>
                <div className="col"style={{fontSize:20}} >
                <input  id="rightAxis" type="number" name="rightAxis" value={leftAxis} onChange={onLeftAxisChange}></input>  
                </div>
             </div>
                <hr></hr>

                {/* right and left eye Near addition*/}
                <div className="row">
                <div className="col" style={{ fontSize: " calc(1em + 1vw)" }}>Near Add</div>
                <div className="col">  </div>
                <div className="col"style={{ fontSize: " calc(1em + 1vw)" }} >Near Add</div>
             </div>

             <div className="row">
                <div className="col" style={{fontSize:20}}>
                <select onChange={onRightNearAddChange}>
              {nearAdd.value.map((item: { id: React.Key | null | undefined; name: {} | null | undefined; }) => (
                  <option key={item.id} >
                       {item.name} 
                  </option>
              ))}
             </select>
                </div>
                <div className="col">  </div>
                <div className="col" style={{fontSize:20}}>
                <select onChange={onLeftNearAddChange}>
              {nearAdd.value.map((item: { id: React.Key | null | undefined; name: {} | null | undefined; }) => (
                  <option key={item.id} >
                       {item.name} 
                  </option>
              ))}
             </select>
                </div>
             </div>
             <hr></hr>
            
            <p >For prescriptions with a Sphere value stronger than +/- 8, we may still be able to supply your glasses. Please call us on 01793 746601 to discuss your options.</p>
           <hr></hr>

           {/* Pupil prescription*/}
           <div className="row">
                <div className="col">
                <label className="name">Pupil Prescription</label>
                </div>
                <div className="col"></div>
                <div className="col">
                <select onChange={onPupilPreChange}>
              {Pupilpre.value.map((item: { id: React.Key | null | undefined; name: {} | null | undefined; }) => (
                  <option key={item.id} >
                       {item.name} 
                  </option>
              ))}
             </select>
                </div>
             </div>
             <div>
                    <span >The distance between your pupils, select "Average / Don't Know" if you are unsure and we'll be in touch if necessary<p>For prescriptions with a Sphere value stronger than +/- 8, we may still be able to supply your glasses. Please  call us on 01793 746601 to discuss your options.</p></span>
                </div>
             <hr></hr>
                {/*Extra information*/}
             <div className="row">
                <div className="col">
                <label className="name">Extra Information:</label>
                </div>
                <div className="col"></div>
                <div className="col">
                <input  id="extrainfo"  type="text-area" name="extraInfo" value={extrainfo} onChange={onExtraInfoChange}></input>
                </div>
             </div>
             
           <hr></hr>
                {/*Checkbox*/}
            <input type="checkbox" required />
            <label >
                I confirm that I've read and agree to the Terms and Conditions I certify that the wearer is over 16 years old and that they are not registered blind or partially sighted. I also confirm that the prescription details above have been entered correctly and I am happy that no errors have been made.
            </label>    
            <hr></hr> 
            {/* Sumbit button*/}
            <div className="heading" >
                 <button className="btn-btn sucess" type="submit">Add Prescription</button>
            </div>
            <hr></hr>


            

            </form>
            </div>
        </div>
         </div>
    )

}


