import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

var Index = React.createClass({
  render:function(){
    return (
      <div className="main">
      </div>
    );
  }
});

render(
  <Index />,
  document.getElementById('root')
)
