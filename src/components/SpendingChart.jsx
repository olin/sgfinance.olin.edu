import React, { Component } from 'react';

export default class SpendingChart extends Component {
    render() {
        return (
            <iframe
                className="chart"
                width="529"
                height="314"
                seamless
                frameBorder="0"
                scrolling="no"
                src="https://docs.google.com/spreadsheets/d/1fDr4dIlQt67DNxkLKb4O2dkc0JzhDrfXKwvJjctYbyI/pubchart?oid=744810443&amp;format=interactive">
            </iframe>
        );
    }
}
