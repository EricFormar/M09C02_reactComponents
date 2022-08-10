import React from 'react';
import PropTypes from 'prop-types';


const Tablerow = ({title,length,rating,genres,awards}) => {
    return (
        <tr>
        <td>{title}</td>
        <td>{length}</td>
        <td>{rating}</td>
        <td>
            <ul>
            {genres.map((gen, i) => <li key={gen + i} >{gen}</li>)}
            </ul>
        </td>
        <td>{awards}</td>
      </tr>
    );
};


Tablerow.propTypes = {
    title : PropTypes.string,
    length : PropTypes.number,
    rating : PropTypes.number,
    genres : PropTypes.array,
    awards : PropTypes.number
};

Tablerow.defaultProps = {
    title : " ",
    length : " ",
    rating : "-",
    genres : ["no clasificada"],
    awards : 0
}

export default Tablerow;
