import React, { useEffect } from 'react'
import { CheckLogin } from '../../shared/CommonFunction';
import LoginService from '../../services/LoginService';

const Dashboard = () => {
    useEffect(() => {
        CheckLogin();
    }, []);

    const click = () =>{
        LoginService();
    }
    
    return (
        <div>
            Dash board
            <button onClick={click}>Click</button>
        </div>
    )
}

export default Dashboard;