import React, { Component } from 'react';

class Tags extends Component {
  render() {
    return (
      <div className="tags_block clearfix">
        <ul>
          <li><a href="#" className="be-post-tag">Nice</a> </li>
          <li><a href="#" className="be-post-tag">Gute</a> </li>
          <li><a href="#" className="be-post-tag">Usual</a></li>
          <li><a href="#" className="be-post-tag">Just</a> </li>
          <li><a href="#" className="be-post-tag">Angry</a></li>
        </ul>
      </div>
    );
  }
}

export default Tags;
