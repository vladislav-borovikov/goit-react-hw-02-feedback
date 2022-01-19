import React from 'react';
import PropTypes from "prop-types";



const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <>
        <p>good: {good}</p>
        <p>neutral: {neutral}</p>
        <p>bad: {bad}</p>
        <p>total feedback: {total} </p>
        <p>Positive feedback: {positivePercentage}%</p>
    </>

)

export default Statistics

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.func,
    positivePercentage: PropTypes.func
}