import '../style.scss';

import React, { Component } from 'react';

import BudgetChart from './BudgetChart';
import SpendingChart from './SpendingChart';
import FormLink from './FormLink'
import { formLinks } from '../constants';

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
                <div className="content">
                    <div className="charts">
                        <BudgetChart/>
                        <SpendingChart/>
                        <div className="budget-link">
                            <div className=""></div>
                        </div>
                    </div>
                    <div className="links">
                        {formLinks.map((form, index) =>
                            <FormLink key={index} {...form}/>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
