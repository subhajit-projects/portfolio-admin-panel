import React, { useEffect } from 'react'
import LoginService from '../../services/LoginService';

const Dashboard = () => {
    useEffect(() => {

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