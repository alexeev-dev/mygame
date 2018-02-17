import React, { Component } from 'react';

import Comment from '../Unicorn/Comment'

class Comments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({value: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    const btn = e.target
    btn.setAttribute('disabled', 'disabled')
    setTimeout(() => {btn.removeAttribute('disabled')}, 1000)
    try {
      this.props.onSubmit(this.state.value)
      this.setState({value: ''})
    } catch (e) {
      //console.log(e);
    }
  }

  render() {
    const {items, price} = this.props
    return (
      <div className="be-comment-block">
        <h1 className="comments-title">Comments ({items.length})</h1>
        <p className="about-comment-block">
          Price for comment is <a href="#" className="be-signup-link">{price} <i className="fa fa-btc"></i></a>
        </p>
        <form className="form-block">
          <div className="row">
            <div className="col-xs-12">
              <div className="form-group">
                <textarea
                  className="form-input"
                  placeholder="Your text"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <a className="btn color-1 size-2 hover-1 pull-right" onClick={this.handleSubmit}>submit</a>
          </div>
        </form>

        {items.map((item, i) => (
          <Comment key={(item.id || i)} comment={item} />
        ))}

      </div>
    );
  }
}

export default Comments;
