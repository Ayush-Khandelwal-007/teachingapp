import React from 'react'
import Header from './Header'
import './DashboardComponents/Dashboard.css'
import Syllabus from './Syllabus'

function Dashboard() {
    return (
        <div className="Dashboard">
            <Header/>
            <Syllabus/>
        </div>
    )
}

export default Dashboard
