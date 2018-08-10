import React from 'react';
import { bool } from 'prop-types';
import ShareButtons from './ShareButtons';

const ShareStep = (props) => {
  const stepDoneClassName = props.done ? 'page__step--done' : '';
  return (
    <div className={['page__step', stepDoneClassName].join(' ')}>
      <span data-number="1." className="page__label">
        Поделись с&nbsp;друзьями:
      </span>
      <ShareButtons isActionsPage />
    </div>
  );
};

ShareStep.propTypes = {
  done: bool.isRequired,
};

export default ShareStep;
