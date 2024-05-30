import React, { useEffect } from 'react'
import { CheckLogin } from '../../shared/CommonFunction';

const Dashboard = () => {
    useEffect(() => {
        CheckLogin();
    }, []);
    
    return (
        <div>
            Dash board
        </div>
    )
}

export default Dashboard;