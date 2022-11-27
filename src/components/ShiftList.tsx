import React, { Fragment, useEffect, useState } from "react";
import axios, { AxiosResponse } from 'axios';
import DisplayShiftList from "./DisplayShiftList";

interface Shift{
  id:number;
  name:string;
}


const ShiftList: React.FC = (props) =>{

  const [data, setData]  = useState<Shift>();

  useEffect(() => {
    axios({
      withCredentials: false,
      method:"get",
      url: "http://localhost:9000/api/v1/employees",
      
    }).then((response: AxiosResponse) => {
        console.log(response.data);
        setData( response.data );
    }).catch((error) => {
    console.log(error);
    });
   }, []);

        
return (
  <Fragment>
    <DisplayShiftList items={[]} {...data}/>
  </Fragment>
)
}


export default ShiftList



