import React, { useState,useEffect } from 'react';
import classnames from "classnames"
import {ReactComponent as One}from "./images/one.svg"
import {ReactComponent as Two}from "./images/two.svg"
import {ReactComponent as Three}from "./images/three.svg"
import {ReactComponent as Blobe}from "./images/blob.svg"
import {ReactComponent as Google}from "./images/google.svg"
import './index.css';


export default function TodoList() {
    const [items, setItems] = useState([
        {   id: 1,
            title:'Find Nearby Doctors and Nurse',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, tenetur!' ,
            color:'red',
            svg:<One/>
        },
        { 
            id: 2, 
            title:'Find the best Docotor and Book an appintement',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, tenetur!' ,
            color:'blue',
            svg:<Two/>
        },
        { 
            id: 3, 
            title:'stay Safe , and your dorcot will come to you',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, tenetur!' ,
            color:'yellow',
            svg:<Three/>
        },
       
      ]);
      const [ids,setID] =useState(items[0].id)

      const slidIn =()=>{
          if(ids<items.length){
            setID(id=>id+1) 
          }

      }
     const  slidOut = ()=>{
        if(ids>1){
            setID(id=>id-1)
        }
      }

     

    
 
  return (
      <div className='container' >
         
            <div className='side'>
                <div className="blob_left">
                    <Blobe/>
                </div>
                <div className="blob_right">
                    <Blobe/>
                </div>
                <div className='side_one_container'>
                        {items.map(({ id,svg}) => (
                            <div className={classnames('child',{'slid-in':id==ids,'slid-out':ids>id, 'slid-out-in':ids<id})} >
                               {svg}
                            </div>
                        ))}                   
                </div>
                <div className="text_fade">
                        {items.map(({ id,text,title,svg}) => (
                            <div 
                                style={{
                                   
                                   opacity:id==ids?1:0,
                                   transition:'all 800ms ease-in-out'
                                }} 
                                className={classnames({'fade-in':id==ids,'fade-out':ids>id})}
                            >
                              <p>{title}</p>
                              <p >{text}</p> 
                            </div>
                        ))}    
                </div>
                <div className="indicator_container">
                   <button   onClick={slidOut}>
                      <i  style={{fontSize:24,color:'white'}} class="fas fa-chevron-left"></i>  
                    </button>
                    <div className="indicators">
                            {items.map(({ id}) => (
                                <div className={classnames({'scal-in':id==ids,'scal-out':ids>id})}></div>
                            ))}          
                    </div>
                    <button onClick={slidIn}>
                      <i  style={{fontSize:24,color:'white'}} class="fas fa-chevron-right"></i>  
                    </button>
                   
                </div>
               
               
               
            </div>
            <div className='side '>
                <div className='side_login'>
                    <div className="login">
                        <p style={{fontSize:40,margin:'12px 0 0',padding:0,fontWeight:'bold'}}>Login</p>
                        <p style={{fontSize:20}}>get healthy and stay safe</p>
                    </div>
                    <div className="google_div">
                        <button>
                            <div className="google_button">
                                <Google/>
                            </div>
                            <div>
                                <p>Sign in with Google</p>
                            </div>
                        </button>
                        <div className="or_email">
                            <div></div>
                            <div>
                                <p>or sign in with email</p>
                            </div>
                            <div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="email_pass">
                        <div className="input_div">
                            <label htmlFor="Email">Email*</label>
                            <input type="text"  placeholder='Enter your Email'/>
                        </div>
                        <div className="input_div">
                            <label htmlFor="password">Password*</label>
                            <input type="password"  placeholder='password'/>
                        </div>
                    </div>
                    <div className="remember_me">
                        <div>
                            <input type="checkbox" name="remember me" id="" />
                            <label htmlFor="">Remember Me</label>
                        </div>
                        <div>
                            <p>Forgot Password ?</p>
                        </div>
                       
                    </div>
                    <button className='login_button'>
                        Login
                    </button>
                    <div className='not_registerd'>
                            <p>Not Registred Yet ?<span>Create an Account</span></p>
                   </div>

                </div>
            </div>

           
    </div>
);
}


