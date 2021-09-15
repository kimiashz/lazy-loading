import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Container.sass';

const BLOCK = 'container';

function Container({
    as: As,
    className: classNameProp,
    ...props
}) {
    const className = classNames(
        BLOCK,
        classNameProp,
    );
    return (
        <As
            className={className}
            {...props}
        />
    )
} 

Container.defaultProps = {
    as: 'div',
    className: undefined,
};
  
Container.propTypes = {
    as: PropTypes.elementType,
    className: PropTypes.string,
};

export default Container;