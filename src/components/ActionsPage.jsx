import React from 'react';
import { userType } from './propTypes';
import ShareStep from './ShareStep';
import SubscribeStep from './SubscribeStep';

const ActionsPage = (props) => {
  const { shared, email } = props.usr;
  return (
    <div className="page__content">
      <div className="page__row">
        <div className="page__col page__col--right">
          <span className="page__title">
            Чтобы выиграть<br />
            путешествие
          </span>
          <ShareStep done={shared} />
          <SubscribeStep email={email} />
        </div>
      </div>
    </div>
  );
};

ActionsPage.propTypes = {
  usr: userType.isRequired,
};

export default ActionsPage;
