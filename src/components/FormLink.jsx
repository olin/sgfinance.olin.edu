import React, { Component } from 'react';

export default class FormLink extends Component {
    render() {
        const { name, link, description } = this.props;

        return (
            <div className="form-link">
                <div className="form-name">
                    <a href={link} target="_blank">{name}</a>
                </div>
                <div className="form-description">{description}</div>
            </div>
        );
    }
}
