import React from 'react';

const SmoothScrollLink: React.FC<{ targetId: string }> = ({ targetId }) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <a href={`#${targetId}`} onClick={handleClick}>
      Scroll vers {targetId}
    </a>
  );
};

export default SmoothScrollLink;
