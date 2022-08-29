import React from 'react';
import { BiUserCircle, BiDollarCircle, BiUserVoice } from 'react-icons/bi';
import { FiArrowRight } from 'react-icons/fi';
import './Dashboard.css';

const DashboardAdmin = (props) => {
    return (
        <li className='dashboard__content-admin-box grid'>
            <BiUserCircle className='dashboard__content-admin-icon' />
            <div className='dashboard__content-admin-desc'>
                <p className='dashboard__content-admin-title'>{props.titleAdmin}</p>
                <h4 className='dashboard__content-admin-quantity'>{props.quantityAdmin}</h4>
            </div>
        </li>
    )
}

const Dashboard = () => {
    return (
        <section className='dashboard section'>
            <div className='dashboard__header grid'>
                <div>
                    <div className='section__title'>Dashboard</div>
                    <div className='section__subtitle'>User Quantity</div>
                </div>

                <a href='#' className='dashboard__crm'>
                    <span>Go to CRM</span>
                    <FiArrowRight className='dashboard__crm-icon' />
                </a>
            </div>

            <div className='dashboard__content grid'>

                {/* ============= DASHBOARD USER ============= */}
                <ul className='dashboard__content-user grid'>
                    <li className='dashboard__content-user-box'>
                        <BiUserCircle className='dashboard__content-user-icon' />
                        <h3 className='dashboard__content-user-quantity'>9832</h3>
                        <p className='dashboard__content-user-title'>User</p>
                    </li>

                    <li className='dashboard__content-user-box'>
                        <BiDollarCircle className='dashboard__content-user-icon' />
                        <h3 className='dashboard__content-user-quantity'>243</h3>
                        <p className='dashboard__content-user-title'>Borrower</p>
                    </li>

                    <li className='dashboard__content-user-box'>
                        <BiUserVoice className='dashboard__content-user-icon' />
                        <h3 className='dashboard__content-user-quantity'>56</h3>
                        <p className='dashboard__content-user-title'>Loan Adviser</p>
                    </li>
                </ul>

                {/* ============= DASHBOARD ADMIN ============= */}

                <ul className='dashboard__content-admin grid'>
                    <DashboardAdmin titleAdmin="Admin Office" quantityAdmin="4" />
                    <DashboardAdmin titleAdmin="Principle" quantityAdmin="12" />
                    <DashboardAdmin titleAdmin="Author" quantityAdmin="6" />
                    <DashboardAdmin titleAdmin="Super Admin" quantityAdmin="3" />
                    <DashboardAdmin titleAdmin="Principle MLI" quantityAdmin="11" />
                    <DashboardAdmin titleAdmin="BDE" quantityAdmin="7" />
                    <DashboardAdmin titleAdmin="Bank Officer" quantityAdmin="124" />
                    <DashboardAdmin titleAdmin="Bank Admin" quantityAdmin="210" />
                    <DashboardAdmin titleAdmin="Bank Principle" quantityAdmin="36" />
                </ul>
            </div>
        </section>
    )
}

export default Dashboard