/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Footer extends Component {
    static Proptypes = {
        name: PropTypes.string.isRequired
    }
    render() {
        
        const {name, year} = this.props;
        return(
        <footer>
           {name} Soy El footer -
            {year}
        </footer>
        )
        
    }
}

export default Footer;