import React from 'react';
import { Icon } from '../../assets/svgs/Icon';
import './FooterDashboard.css';

function FooterDashboard(props) {
    var p = document.getElementsByClassName("ishidden");
    function isHidden() {
        for (var i = 0; i < p.length; i++) {
            if (p[i].style.display == "none") {
                p[i].style.display = "block";
            } else {
                p[i].style.display = "none";
            }
        }
    }
    return (
        <div className='footer'>
            <div className='charts__workflows'>
                <div className='charts__workflows_wraper'>
                    <div className='charts__workflows__title'>
                        <h3>Workflows</h3>
                        <button>See Active Workflows {'>'}</button>
                    </div>
                    <div className='charts__workflows__content'>
                        <div className='content__left'>
                            <h1>26</h1>
                            <p className='p1'>Active Worklows</p>
                            <p><button>434</button>Onboarding {'>'}</p>
                            <p><button>13</button>Vendor Risk Assesment {'>'}</p>
                            <div id='ishidden'>
                                <p className='ishidden '><button>56</button>Attestation Report {'>'}</p>
                                <p className='ishidden '><button>11</button>Attestation Report {'>'}</p>
                            </div>
                            <span onClick={isHidden}>See all</span>
                        </div>
                        <div className='content__right'>
                            <h1>8</h1>
                            <p className='p1'>Draft Worklows</p>
                            <p><button>24</button>Onboarding {'>'}</p>
                            <p id='ishidden1'><button>759</button>Vendor Risk Assesment {'>'}</p>
                            <span>See all</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='charts__mytasks'>
                <div className='charts__workflows'>
                    <div className='charts__workflows_wraper'>
                        <div className='charts__workflows__title'>
                            <h3>My Tasks</h3>
                            <button>See All {'>'}</button>
                        </div>
                        <div className='charts__mytasks__line1'>
                            <Icon.TP75 />
                            <div className='type_p'>
                                <p className='p1_1'>Onboarding Salsabila Hampton {'>'}</p>
                                <p id='ishidden2'><Icon.Check />Provision access for Basecamps</p>
                                <p id='ishidden2'><Icon.Check />Provision access for Zeplin</p>
                            </div>
                        </div>
                        <hr />
                        <div className='charts__mytasks__line2'>
                            <Icon.TP50 />
                            <div className='type_p'>
                                <p className='p1_1'>Onboarding Salsabila Hampton {'>'}</p>
                                <p id='ishidden3'><Icon.Check />Provision access for Basecamps</p>
                                <p id='ishidden3'> <Icon.Check />Provision access for Zeplin</p>
                                <span>3 additional tasks</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default FooterDashboard;