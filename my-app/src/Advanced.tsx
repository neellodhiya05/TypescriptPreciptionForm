import React ,{ChangeEvent, Component, FormEvent, useState}from "react";
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { Accordion, makeStyles } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export function Advanced(){
  const classes = useStyles();
 
    
      const [name, setName] = useState<string>('');

      const[extrainfo,setextrainfo]=useState<string>("");

      const[pupilpre,setpupilpre]=useState<string>("")

      const [distancerightSphere, setdistancerightSphere] = useState<string>('');
    const[distanceleftSphere,setdistanceLeftSphere] =useState<string>("");
    const[distancerightCylinder,setdistancerightCylinder] =useState<string>("");
    const[distanceleftCylinder,setdistanceLeftCylinder] =useState<string>("");
    const[distancerightAxis,setdistancerightAxis]=useState<string>("");
    const[distanceleftAxis,setdistanceleftAxis]=useState<string>("");

    const [interrightSphere, setinterrightSphere] = useState<string>('');
    const[interleftSphere,setinterLeftSphere] =useState<string>("");
    const[interrightCylinder,setinterrightCylinder] =useState<string>("");
    const[interleftCylinder,setinterLeftCylinder] =useState<string>("");
    const[interrightAxis,setinterrightAxis]=useState<string>("");
    const[interleftAxis,setinterleftAxis]=useState<string>("");
    const[interrightNearAdd,setinterrightNearAdd]=useState<string>("");
    const[interleftNearAdd,setinterleftNearAdd]=useState<string>("");

    const [nearrightSphere, setnearrightSphere] = useState<string>('');
    const[nearleftSphere,setnearLeftSphere] =useState<string>("");
    const[nearrightCylinder,setnearrightCylinder] =useState<string>("");
    const[nearleftCylinder,setnearLeftCylinder] =useState<string>("");
    const[nearrightAxis,setnearrightAxis]=useState<string>("");
    const[nearleftAxis,setnearleftAxis]=useState<string>("");
    const[nearrightNearAdd,setnearrightNearAdd]=useState<string>("");
    const[nearleftNearAdd,setnearleftNearAdd]=useState<string>("");
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('name:',name)

        console.log('ExtraInfo:',extrainfo)
        console.log('pupilpre:',pupilpre)

        console.log('DistancerightSphere:',distancerightSphere)
       console.log('DistanceLeftSphere:',distanceleftSphere)
       console.log('DistanceRightCyl:',distancerightCylinder)
       console.log('DistanceLeftCyl:',distanceleftCylinder)
       console.log('DistanceRightAxis:',distancerightAxis)

       console.log('interleftAxis:',interleftAxis)
       console.log('interrightSphere:',interrightSphere)
       console.log('interLeftSphere:',interleftSphere)
       console.log('interRightCyl:',interrightCylinder)
       console.log('interLeftCyl:',interleftCylinder)
       console.log('interRightAxis:',interrightAxis)
       console.log('interleftAxis:',interleftAxis)
       console.log('interRightNeadAdd:',interrightNearAdd)
       console.log('interLeftNearAdd:',interleftNearAdd)

       console.log('nearleftAxis:',nearleftAxis)
       console.log('nearrightSphere:',nearrightSphere)
       console.log('nearLeftSphere:',nearleftSphere)
       console.log('nearRightCyl:',nearrightCylinder)
       console.log('nearLeftCyl:',nearleftCylinder)
       console.log('nearRightAxis:',nearrightAxis)
       console.log('nearleftAxis:',nearleftAxis)
       console.log('nearRightNeadAdd:',nearrightNearAdd)
       console.log('nearLeftNearAdd:',nearleftNearAdd)
      }

      const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };


    const onDistanceRightSpherChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setdistancerightSphere(event.target.value);
  };
  const onDistanceLeftSphereChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setdistanceLeftSphere(event.target.value);
  };
  const onDistanceRightCylinderChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setdistancerightCylinder(event.target.value);
};
const onDistanceLeftCylinderChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setdistanceLeftCylinder(event.target.value);
};
    const onPupilPreChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setpupilpre(event.target.value);
  };
    const onExtraInfoChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setextrainfo(event.target.value);
  };
  const onDistanceRightAxisChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setdistancerightAxis(event.target.value);
};
const onDistanceLeftAxisChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setdistanceleftAxis(event.target.value);
};


const onInterRightNearAddChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setinterrightNearAdd(event.target.value);
};
const onInterLeftNearAddChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setinterleftNearAdd(event.target.value);
};
const onInterRightSpherChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setinterrightSphere(event.target.value);
};
const onInterLeftSphereChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setinterLeftSphere(event.target.value);
};
const onInterRightCylinderChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
setinterrightCylinder(event.target.value);
};
const onInterLeftCylinderChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
setinterLeftCylinder(event.target.value);
};
const onInterRightAxisChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
setinterrightAxis(event.target.value);
};
const onInterLeftAxisChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
setinterleftAxis(event.target.value);
};



const onNearRightNearAddChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setnearrightNearAdd(event.target.value);
};
const onNearLeftNearAddChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setnearleftNearAdd(event.target.value);
};
const onNearRightSpherChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setnearrightSphere(event.target.value);
};
const onNearLeftSphereChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setnearLeftSphere(event.target.value);
};
const onNearRightCylinderChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
setnearrightCylinder(event.target.value);
};
const onNearLeftCylinderChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
setnearLeftCylinder(event.target.value);
};

const onNearRightAxisChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
setnearrightAxis(event.target.value);
};
const onNearLeftAxisChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
setnearleftAxis(event.target.value);
};


  const option =require("./data.json")
  const nearAdd = require("./NearAddData.json")
  const Pupilpre = require("./PupilPreData.json")
        return(
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
                <input  id="name" type="text" name="userId"   value={name} onChange={onNameChange}required ></input>
            <hr></hr>
            {/* According */}
            <div className={classes.root}>
              {/*Distance According */}
      <Accordion style={{background:"lightgrey"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Distance</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
                <div className="col" ></div>
            </div>
            {/* Distnce right and left eye */}
            <div className="row">
                <div className="col" style={{fontSize:20}}>
                <select onChange={onDistanceRightSpherChange}>
              {option.value.map((item: { id: React.Key | null | undefined; name: {} | null | undefined; }) => (
                  <option key={item.id} >
                       {item.name} 
                  </option>
              ))}
             </select>
                </div>
                <div className="col">  </div>
                <div className="col" style={{fontSize:20}}>
                <select onChange={onDistanceLeftSphereChange}>
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
                <div className="col "></div>
             </div>
             {/* distance left and right eye cylinder */}
             <div className="row">
                <div className="col" style={{fontSize:20}}>
                <select onChange={onDistanceRightCylinderChange}>
              {option.value.map((item: { id: React.Key | null | undefined; name: {} | null | undefined; }) => (
                  <option key={item.id} >
                       {item.name} 
                  </option>
              ))}
             </select>
                </div>
                <div className="col">  </div>
                <div className="col" style={{fontSize:20}}>
                <select onChange={onDistanceLeftCylinderChange}>
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
                <div className="col" ></div>
             </div>
             {/*distance right and left axis */}
             <div className="row">
                <div className="col" style={{fontSize:20}}>
                <input  id="rightAxis" type="number" name="rightAxis" value={distancerightAxis} onChange={onDistanceRightAxisChange}></input>
                </div>
                <div className="col">  </div>
                <div className="col"style={{fontSize:20}} >
                <input  id="rightAxis" type="number" name="rightAxis" value={distanceleftAxis} onChange={onDistanceLeftAxisChange}></input>  
                </div>
             </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/*Intermidiate According */}
      <Accordion style={{background:"lightgrey"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Intermidiate</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              {/*intermidiate right and left eye heading*/}
              <div className="row">
                <div className="col" style={{fontSize:20}}>Right Eye</div>
                <div className="col">  </div>
                <div className="col" style={{fontSize:20}}>Left Eye</div>
             </div>

             {/* intermidiate right and left eye sphere*/}
            <hr></hr>
             <div className="row">
                <div className="col" style={{ fontSize: " calc(1em + 1vw)" }}>Sphere(SPH)</div>
                <div className="col">  </div>
                <div className="col" ></div>
            </div>
            {/* intermidiate Distnce right and left eye */}
            <div className="row">
                <div className="col" style={{fontSize:20}}>
                <select onChange={onInterRightSpherChange}>
              {option.value.map((item: { id: React.Key | null | undefined; name: {} | null | undefined; }) => (
                  <option key={item.id} >
                       {item.name} 
                  </option>
              ))}
             </select>
                </div>
                <div className="col">  </div>
                <div className="col" style={{fontSize:20}}>
                <select onChange={onInterLeftSphereChange}>
              {option.value.map((item: { id: React.Key | null | undefined; name: {} | null | undefined; }) => (
                  <option key={item.id} >
                       {item.name} 
                  </option>
              ) )}
             </select>
                </div>
             </div>
             <hr></hr>
                 {/*intermidiate right and left eye cylinder heading*/}
                 <div className="row">
                <div className="col" style={{ fontSize: " calc(1em + 1vw)" }}>Cylinder(CYL)</div>
                <div className="col">  </div>
                <div className="col "></div>
             </div>
             {/* intermdiaite left and right eye cylinder */}
             <div className="row">
                <div className="col" style={{fontSize:20}}>
                <select onChange={onInterRightCylinderChange}>
              {option.value.map((item: { id: React.Key | null | undefined; name: {} | null | undefined; }) => (
                  <option key={item.id} >
                       {item.name} 
                  </option>
              ))}
             </select>
                </div>
                <div className="col">  </div>
                <div className="col" style={{fontSize:20}}>
                <select onChange={onInterLeftCylinderChange}>
              {option.value.map((item: { id: React.Key | null | undefined; name: {} | null | undefined; }) => (
                  <option key={item.id} >
                       {item.name} 
                  </option>
              ) )}
             </select>
                </div>
             </div>
             <hr></hr>
              {/* intermidate right and left eye axis heading*/}
            
              <div className="row">
                <div className="col" style={{ fontSize: " calc(1em + 1vw)" }}>Axis</div>
                <div className="col">  </div>
                <div className="col" ></div>
             </div>
             {/*intermidiate right and left axis */}
             <div className="row">
                <div className="col" style={{fontSize:20}}>
                <input  id="rightAxis" type="number" name="rightAxis" value={interrightAxis} onChange={onInterRightAxisChange}></input>
                </div>
                <div className="col">  </div>
                <div className="col"style={{fontSize:20}} >
                <input  id="rightAxis" type="number" name="rightAxis" value={interleftAxis} onChange={onInterLeftAxisChange}></input>  
                </div>
             </div>
               {/* Intermidiate right and left eye Near addition heading*/}
               <div className="row">
                <div className="col" style={{ fontSize: " calc(1em + 1vw)" }}>Near Add</div>
                <div className="col">  </div>
                <div className="col" ></div>
             </div>
                {/*intermidate right and left eye near add */}
             <div className="row">
                <div className="col" style={{fontSize:20}}>
                <select onChange={onInterRightNearAddChange}>
              {nearAdd.value.map((item: { id: React.Key | null | undefined; name: {} | null | undefined; }) => (
                  <option key={item.id} >
                       {item.name} 
                  </option>
              ))}
             </select>
                </div>
                <div className="col">  </div>
                <div className="col" style={{fontSize:20}}>
                <select onChange={onInterLeftNearAddChange}>
              {nearAdd.value.map((item: { id: React.Key | null | undefined; name: {} | null | undefined; }) => (
                  <option key={item.id} >
                       {item.name} 
                  </option>
              ))}
             </select>
                </div>
             </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{background:"lightgrey"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Near</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
              {/*Near right and left eye heading*/}
              <div className="row">
                <div className="col" style={{fontSize:20}}>Right Eye</div>
                <div className="col">  </div>
                <div className="col" style={{fontSize:20}}>Left Eye</div>
             </div>

             {/* Near  right and left eye sphere heading*/}
            <hr></hr>
             <div className="row">
                <div className="col" style={{ fontSize: " calc(1em + 1vw)" }}>Sphere(SPH)</div>
                <div className="col">  </div>
                <div className="col" ></div>
            </div>
            {/*Near Distnce right and left eye */}
            <div className="row">
                <div className="col" style={{fontSize:20}}>
                <select onChange={onNearRightSpherChange}>
              {option.value.map((item: { id: React.Key | null | undefined; name: {} | null | undefined; }) => (
                  <option key={item.id} >
                       {item.name} 
                  </option>
              ))}
             </select>
                </div>
                <div className="col">  </div>
                <div className="col" style={{fontSize:20}}>
                <select onChange={onNearLeftSphereChange}>
              {option.value.map((item: { id: React.Key | null | undefined; name: {} | null | undefined; }) => (
                  <option key={item.id} >
                       {item.name} 
                  </option>
              ) )}
             </select>
                </div>
             </div>
             <hr></hr>
                 {/*Near right and left eye cylinder heading*/}
                 <div className="row">
                <div className="col" style={{ fontSize: " calc(1em + 1vw)" }}>Cylinder(CYL)</div>
                <div className="col">  </div>
                <div className="col "></div>
             </div>
             {/* intermdiaite left and right eye cylinder */}
             <div className="row">
                <div className="col" style={{fontSize:20}}>
                <select onChange={onNearRightCylinderChange}>
              {option.value.map((item: { id: React.Key | null | undefined; name: {} | null | undefined; }) => (
                  <option key={item.id} >
                       {item.name} 
                  </option>
              ))}
             </select>
                </div>
                <div className="col">  </div>
                <div className="col" style={{fontSize:20}}>
                <select onChange={onNearLeftCylinderChange}>
              {option.value.map((item: { id: React.Key | null | undefined; name: {} | null | undefined; }) => (
                  <option key={item.id} >
                       {item.name} 
                  </option>
              ) )}
             </select>
                </div>
             </div>
             <hr></hr>
              {/* Near right and left eye axis heading*/}
            
              <div className="row">
                <div className="col" style={{ fontSize: " calc(1em + 1vw)" }}>Axis</div>
                <div className="col">  </div>
                <div className="col" ></div>
             </div>
             {/*Near right and left axis */}
             <div className="row">
                <div className="col" style={{fontSize:20}}>
                <input  id="rightAxis" type="number" name="rightAxis" value={nearrightAxis} onChange={onNearRightAxisChange}></input>
                </div>
                <div className="col">  </div>
                <div className="col"style={{fontSize:20}} >
                <input  id="rightAxis" type="number" name="rightAxis" value={nearleftAxis} onChange={onNearLeftAxisChange}></input>  
                </div>
             </div>
               {/* Near right and left eye Near addition heading*/}
               <div className="row">
                <div className="col" style={{ fontSize: " calc(1em + 1vw)" }}>Near Add</div>
                <div className="col">  </div>
                <div className="col" ></div>
             </div>
                {/*iNear right and left eye near add */}
             <div className="row">
                <div className="col" style={{fontSize:20}}>
                <select onChange={onNearRightNearAddChange}>
              {nearAdd.value.map((item: { id: React.Key | null | undefined; name: {} | null | undefined; }) => (
                  <option key={item.id} >
                       {item.name} 
                  </option>
              ))}
             </select>
                </div>
                <div className="col">  </div>
                <div className="col" style={{fontSize:20}}>
                <select onChange={onNearLeftNearAddChange}>
              {nearAdd.value.map((item: { id: React.Key | null | undefined; name: {} | null | undefined; }) => (
                  <option key={item.id} >
                       {item.name} 
                  </option>
              ))}
             </select>
                </div>
             </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
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
