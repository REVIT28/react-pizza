import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="283" rx="10" ry="10" width="280" height="30" />
    <rect x="0" y="333" rx="26" ry="26" width="280" height="91" />
    <circle cx="141" cy="136" r="120" />
    <rect x="2" y="447" rx="14" ry="14" width="90" height="46" />
    <rect x="124" y="445" rx="18" ry="18" width="157" height="49" />
  </ContentLoader>
);

export default Skeleton;
