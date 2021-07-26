import React from 'react';
import PropTypes from 'prop-types'
import style from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const { good, neutral, bad } = options;
    return (
        <div className={style.btnList}>
            <button
                className={style.button}
                type="button"
                onClick={onLeaveFeedback}
                name="good"
                data-value={good}
            >
                Good
            </button>

            <button
                className={style.button}
                type="button"
                onClick={onLeaveFeedback}
                name="neutral"
                data-value={neutral}
            >
                Neutral
            </button>

            <button
                className={style.button}
                type="button"
                onClick={onLeaveFeedback}
                name="bad"
                data-value={bad}
            >
                Bad
            </button>

        </div>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

