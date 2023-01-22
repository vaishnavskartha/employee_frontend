import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import {  Table } from 'semantic-ui-react'
import './Read.css'



const Read = () => {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
                .then((response) => {
                    setAPIData(response.data);
                })
        
    }, [])

    return (
        <div  className='table'>
        <Table>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>ID</Table.HeaderCell>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Email</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {APIData.map((data) => {
                    return (
                    <Table.Row>
                        <Table.Cell>{data.id}</Table.Cell>
                        <Table.Cell>{data.name}</Table.Cell>
                        <Table.Cell>{data.email}</Table.Cell>

                    </Table.Row>
                )})}
            </Table.Body>
        </Table>
        </div>
    )
}
export default Read

