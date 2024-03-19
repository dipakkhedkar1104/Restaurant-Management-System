import { Button } from 'bootstrap'
import React from 'react'
import axios from 'axios';

const forgetpass = () => {

    const onSubmit = () => {
        const url = `${URL}/customers/forgot-password`;
        axios.put(url).then(response => {
            const result = response.data;

        });
    };
  return (    <div>----Reset passward---
        <form onSubmit={onSubmit()}>
        <div>
            <input className='form-control'>Enter new password</input>
        </div>
        <div>
            <input className='form-control'>Confirm password</input>
        </div>
        <div>
            <button type='submit' className='btn btn-primary'>Submit</button>
        </div>
        </form>
      
    </div>
  )
}

export default forgetpass;
