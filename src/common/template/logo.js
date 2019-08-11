import React from 'react';

export default props => (
    <a href="index2.html" className="logo">
    {/*  mini logo for sidebar mini 50x50 pixels  */}
    <span className="logo-mini">{props.mine_label}</span>
    {/*  logo for regular state and mobile devices  */}
    <span className="logo-lg">{props.label}</span>
  </a>

)

