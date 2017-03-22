import '../style.scss';

import React, { Component } from 'react';

import BudgetChart from './BudgetChart';
import SpendingChart from './SpendingChart';

class Title extends Component {
    render() {
        return (
            <div className="title">OLIN STUDENT GOVERNMENT FINANCE</div>
        );
    }
}

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Title/>
                <div className="charts">
                    <BudgetChart/>
                    <SpendingChart/>
                    <div className="budget-link">
                        <div className=""></div>
                    </div>
                </div>
            </div>
        );
    }
}
