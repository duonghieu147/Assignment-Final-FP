import React from 'react';
import Test from './Test';

function Charts(props) {
    return (
        <div>
            <div className="container">
                <div className="sidebar ">sidebar</div>
                <div className="content">
                    <div className="header">header
                    </div>
                    <div className="dashboard">
                        <h1>Dashboard</h1>
                        <div className='dashboard__customize'>
                            <p>Good to see you again, James</p>
                            <p>Customize</p>
                        </div>
                    </div>
                    <div className='charts'>
                        <div className='charts__title'>
                            <p>App Spent Summary</p>
                            <button>Filter</button>
                            <button>Monthly</button>
                        </div>
                        <div className='charts__chart'>
                        </div>
                        <div className='charts__details'>
                            <h3>$328</h3>
                            <p>Spent this month <span>56%</span></p>
                            <button>All Spent Summary {'>'}</button>
                            <h3>36</h3>
                            <p><span>8</span>paid <span>24</span> free</p>
                            <button>All Apps {'>'}</button>
                        </div>
                        <div className='charts__workflows'>charts__workflows</div>
                        <div className='charts__mytasks'>charts__mytasks</div>
                        <Test/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Charts;