import PropTypes from 'prop-types';
import { ButtonsList, ButtonsItem, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsList>
      {options.map((option, index) => {
        return (
          <ButtonsItem key={index}>
            <Button type="button" name={option} onClick={onLeaveFeedback}>
              {option}
            </Button>
          </ButtonsItem>
        );
      })}
    </ButtonsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
