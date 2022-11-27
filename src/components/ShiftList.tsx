import React from "react";
import axios from 'axios';

export default class ShiftList extends React.Component{
    state = {
        shift: []
      }
      
    componentDidMount(): any {
        //  axios.get('http://localhost:9000/api/v1/shift').then(res => {
        //      const shifts = res.data;
        //      this.setState({shifts})
        axios({
          withCredentials: false,
          method:"get",
          url: "http://localhost:9000/api/v1/employees",
          
        }).then((response)=>{
          this.setState({shift:response.data})
        })
    }
   render() {
    
     return<p></p>
   }

   }