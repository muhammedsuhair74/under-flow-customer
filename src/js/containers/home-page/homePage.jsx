import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button } from 'app/components';

import styles from './styles.scss';

const HomePage = (props) => {
  const [isButtonClicked, toggleButtonClick] = useState(false);

  const fetchDummyApi = () => {
    props.fetchDummyApi();
    toggleButtonClick(true);
  };

  const { dummyData } = props;
  return (
    <div className={styles.container}>
      Home page
    </div>
  );
};


HomePage.propTypes = {
  fetchDummyApi: PropTypes.func.isRequired,
  dummyData: PropTypes.shape().isRequired
};

export default HomePage;
