import React from 'react';
import PropTypes from 'prop-types';

/**
 * Card component for displaying content in a styled container
 * @param {Object} props - Component props
 * @param {string} props.title - Card title
 * @param {React.ReactNode} props.children - Card content
 * @returns {JSX.Element} - Card component
 */
const Card = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 border border-gray-200 dark:border-gray-700 ${className}`}>
      {title && (
        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
          {title}
        </h3>
      )}
      <div className="text-gray-700 dark:text-gray-300">
        {children}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;
