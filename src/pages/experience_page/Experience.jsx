import React, { Component, useEffect, useState } from "react";
import BasicTable from "../../components/tables/BasicTable";
import { Button, ToggleButton } from 'react-bootstrap';
import { getAllExperienceService } from "../../services/ExperienceService";
import { PromiseToast } from "../../shared/ToastMessage";
import Form from 'react-bootstrap/Form';

class Experience extends Component {

    constructor(props) {
        super(props);
        this.state = {
            experience: []
        }
        this.callApi = false;
    }

    getExperienceData = () => {
        if(this.callApi == false) {
            this.callApi = true
            const resp = getAllExperienceService('/experience/');
            PromiseToast(resp);
            resp.then(r => {
                console.log(r);
                const copy = {...this.state}
                r.data.data.map((d, key) => {
                    const data = [];
                    data.push(key+1)
                    data.push(d.designation)
                    data.push(d.company_name)
                    data.push(<Form.Check type="switch" id="custom-switch" checked="true" disabled />)
                    data.push(<><Button variant="success" size="sm" >Edit</Button> &nbsp;
                        {d.is_continue ? 
                            <><Button variant="danger" size="sm">Resigned</Button> &nbsp;</>
                            :
                            <><Button variant="warning" size="sm">Working</Button> &nbsp;</>
                        }
                        </>);
                    copy.experience.push({data: data});
                    this.setState(copy)
                });
            }).catch(e => {
                console.log("Error", e);
            }).finally(() => {
                this.callApi = false;
            })
        }
    }

    componentDidMount() {
        // console.log("adadadasd");
        this.getExperienceData()
    }
    render () {
        const tableHeader = [
            {
                name: "sl_no",
                title: "Sl No.",
                style: {width: '150px', textAlign: 'center'}
            },
            {
                name: "designation",
                title: "Designation",
                style: {}
            },
            {
                name: "company",
                title: "Company",
                style: {}
            },
            {
                name: "status",
                title: "Status",
                style: {}
            },
            {
                name: "action",
                title: "Actions",
                style: {width: '220px'}
            }
        ];
    
        
        const tableData = this.state.experience/*[
            {
                data: [
                    1,
                    'Test',
                    <><Button variant="success" size="sm" >Edit</Button> &nbsp;
                    <Button variant="danger" size="sm">In Active</Button> &nbsp;
                    <Button variant="warning" size="sm">Active</Button> &nbsp;</>
                ],
    
            },
            {
                data: [
                    2,
                    'Test',
                    <><Button variant="success" size="sm" >Edit</Button> &nbsp;
                    <Button variant="danger" size="sm">In Active</Button> &nbsp;
                    <Button variant="warning" size="sm">Active</Button> &nbsp;</>
                ],
    
            },
            {
                data: [
                    2,
                    'Test',
                    <><Button variant="success" size="sm" >Edit</Button> &nbsp;
                    <Button variant="danger" size="sm">In Active</Button> &nbsp;
                    <Button variant="warning" size="sm">Active</Button> &nbsp;</>
                ],
    
            }
        ]*/
        return (
            <div>
                <BasicTable
                    header={tableHeader}
                    data={tableData}
                />
            </div>
        )
    }
}

export default Experience;