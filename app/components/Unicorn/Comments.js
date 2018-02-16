import React, { Component } from 'react';

import Comment from '../Unicorn/Comment'

let textElem = {value: ''};

class Comments extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    const btn = e.target;
    btn.setAttribute('disabled', 'disabled');
    setTimeout(() => {btn.removeAttribute('disabled')}, 1000);
    try {
      this.props.onSubmit(textElem.value);
      textElem.value = '';
    } catch (e) {
      //console.log(e);
    }
  }

  render() {
    return (
      <div className="be-comment-block">
        <h1 className="comments-title">Comments ({this.props.items.length})</h1>
        <p className="about-comment-block">
          Price for comment is <a href="#" className="be-signup-link">{this.props.price} <i className="fa fa-btc"></i></a>
        </p>
        <form className="form-block">
          <div className="row">
            <div className="col-xs-12">
              <div className="form-group">
                <textarea className="form-input" required="" placeholder="Your text" onChange={e => textElem = e.target}></textarea>
              </div>
            </div>
            <a className="btn color-1 size-2 hover-1 pull-right" onClick={this.handleSubmit}>submit</a>
          </div>
        </form>

        {this.props.items.map((item, i) => (
          <Comment key={(item.id || i)} comment={item} />
        ))}

      </div>
    );
  }
}

export default Comments;
