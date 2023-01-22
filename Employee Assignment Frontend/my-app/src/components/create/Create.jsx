import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Button, Form } from 'semantic-ui-react'
import './Create.css'


function Create(){
    return (
        <>
        <div>
        <Form className='form'>
            <Form.Field>
                <label>Name</label>
                <input name='name' placeholder='Name'/>
            </Form.Field>
            <Form.Field>
                <label>Designation</label>
                <input name='designation' placeholder='Designation'/>
            </Form.Field>
            <Form.Field>
                <label>Location</label>
                <input name='location' placeholder='Location'/>
            </Form.Field>
            <Form.Field>
                <label>Salary</label>
                <input name='salary' placeholder='Salary'/>
            </Form.Field>
            <Button type='submit' color='blue'>Submit</Button>
        </Form>
        </div>
        </> 
    )
}
export default Create