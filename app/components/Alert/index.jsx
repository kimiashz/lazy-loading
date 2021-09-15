import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Alert.sass';

const BLOCK = 'alert';

function Alert({
    message,
    info,
    warning,
    success,
    error,
}) {
    if (!message) {
        return null;
    }

    var className = classNames({
        [BLOCK]: true,
        [`${BLOCK}--info`]: info,
        [`${BLOCK}--warning`]: warning,
        [`${BLOCK}--success`]: success,
        [`${BLOCK}--error`]: error,
    });

    return (
        <div className={className}>
            {message}
        </div>
    )
} 

Alert.defaultProps = {
    message: undefined,
    info: false,
    warning: false,
    success: false,
    error: false,
};
  
Alert.propTypes = {
    message: PropTypes.string,
    info: PropTypes.bool,
    warning: PropTypes.bool,
    success: PropTypes.bool,
    error: PropTypes.bool,
};

export default Alert;