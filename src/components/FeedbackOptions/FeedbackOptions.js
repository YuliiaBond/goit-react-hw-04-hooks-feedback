import React from 'react';
import PropTypes from 'prop-types'
import style from './FeedbackOptions.module.css'

const FeedbackOptions = ({ onLeaveFeedback }) => {
    return (
        <div className={style.btnList}>
            <button
                className={style.button}
                type="button"
                onClick={onLeaveFeedback}
                name="good"
            >
                Good
            </button>

            <button
                className={style.button}
                type="button"
                onClick={onLeaveFeedback}
                name="neutral"
            >
                Neutral
            </button>

            <button
                className={style.button}
                type="button"
                onClick={onLeaveFeedback}
                name="bad"
            >
                Bad
            </button>

        </div>
    );
};

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

