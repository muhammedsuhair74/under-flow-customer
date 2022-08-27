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
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <img src="assets/logo.svg" className={styles.logo} alt="logo" />
          <div> Welcome to React </div>
        </div>
        <p className={styles.intro}>
          {`Start building with new <React />  and <Boilerplate />`}
        </p>
        <Button
          label="Click Me!"
          onClick={fetchDummyApi}
        />
      </div>
      {isButtonClicked
        && (
          <div className={styles.responseWrapper}>
            {dummyData.message
              ? (
                <table>
                  <tbody>
                    <tr>
                      <td>Status:</td>
                      <td><span className={styles.responseValue}>{dummyData.status}</span></td>
                    </tr>
                    <tr>
                      <td>Message:</td>
                      <td><span className={styles.responseValue}>{dummyData.message}</span></td>
                    </tr>
                  </tbody>

                </table>
              )
              : 'API fetching...'}
          </div>
        )}
    </div>
  );
};


HomePage.propTypes = {
  fetchDummyApi: PropTypes.func.isRequired,
  dummyData: PropTypes.shape().isRequired
};

export default HomePage;
