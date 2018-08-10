import React from 'react';
import { string } from 'prop-types';
import { userType } from '../components/propTypes';
import ActionsPage from '../components/ActionsPage';
import FinalPage from '../components/FinalPage';

const Page = (props) => {
  const page = (props.page) === 'actions' ? (
    <ActionsPage usr={props.usr} />
  ) : (
    <FinalPage />
  );

  return (
    <div className={`app page page--${props.page}`}>
      {page}
    </div>
  );
};

Page.propTypes = {
  page: string.isRequired,
  usr: userType.isRequired,
};

export default Page;
