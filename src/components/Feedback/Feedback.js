import PropTypes from 'prop-types';
import css from './Feedback.module.css';

const Feedback = ({ onLeaveFeedback, options }) => {
  return (
    <div>
      {options.map(option => (
        <button
          className={css.button}
          key={option}
          name={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

Feedback.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default Feedback;
