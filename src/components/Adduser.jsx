import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Adduser = () => {
    const [data,setdata] = useState(
        {
            
            "emaild": "",
            "password": ""
    
        }
    )
    const inputhandler=(event)=>{
        setdata({...data,[event.target.name]:event.target.value})
    }
    const readvalue=()=>{
        console.log(data)
        axios.post("http://localhost:8080/signin",data).then(
            (response)=>{
                if (response.data.status == "success") {
                    console.log(response.data)
                    alert("succesfully logined")
                    
                } else {
                    alert("error")
                    
                }

            }
        ).catch(
           
        ).finally()
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form label">
                                email
                            </label>
                            <input type="text" className="form-control" name='emaild' value={data.emaild} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form form">password</label>
                            <input type="password" name="password" id="" className="form-control" value={data.password} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readvalue}>login</button>
                            <a href=''>click to signin</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Adduser