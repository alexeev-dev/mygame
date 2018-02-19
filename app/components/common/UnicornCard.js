import React, { Component } from 'react';

const exampleUnicorn = {
  id: 345890012, // DB id
  chain: '0x090900000000334f024547021e0a01a0a204afb...',
  owner_id: 4509,
  name: 'Mr. Incredible',
  birthday: '2018-02-19T14:26:42.931Z', // Date.toJSON()
  fertility: 'fast',
  energy: 'extra',
  stats: {
    strength: 2,
    agility: 2,
    speed: 8,
    intellect: 3,
    charisma: 4
  },
  sell_price: 'none', // 'none' - если не продаётся, число - продаётся по этой цене
  breed_price: 0.03, // 'none' - если не участвует в таких делах и предпочитает жить спокойно
  likes_count: 1293,
  views_count: 3281,
  is_relax: true, // Если true, то не может участвовать в разведении
  is_like_toggled: false // Поставил ли лайк пользователь, запрашивающий единорожка
}

class Card extends Component {
  constructor(props) {
    super(props)
    this.handleLike = this.handleLike.bind(this)
    this.handleComment = this.handleComment.bind(this)
  }

  handleLike() {
    const { id } = this.props.unicorn.id
    try {
      this.props.onClick(id, 'like');
    } catch (e) {
      //console.log(e);
    }
  }

  handleComment() {
    const { id } = this.props.unicorn.id
    try {
      this.props.onClick(id, 'comment');
    } catch (e) {
      //console.log(e);
    }
  }

  render() {
    const unicorn = this.props.unicorn

    // const tags = unicorn.tags.map((tag) => (
    //   <a key={tag} href="#" className="be-post-tag">{tag}</a>
    // ))

    const stats = Object.keys(unicorn.stats).map((stat) => (
      <a key={stat} href="#" className={"be-post-tag " + stat}><span>{stat.substring(0, 3)}</span><span>{unicorn.stats[stat]}</span></a>
    ))

    return (
      <div className="be-post">
        <div className="info-block">
          <span><i className="fa fa-tag"></i> {unicorn.sell_price} <i className="fa fa-btc"></i></span>
          <span>{unicorn.fertility} <i className="fa fa-info-circle"></i><i className="fa fa-venus-mars"></i></span><span>{unicorn.breed_price} <i className="fa fa-btc"></i></span>
        </div>
        <a href="#" className="be-img-block">
          <img src="img/p1.jpg" alt="omg" />
        </a>
        <a href="page1.html" className="be-post-title">{unicorn.name}</a>
        <span><i className="fa fa-venus-mars"></i> {unicorn.birthday}</span>
        <span><i className="fa fa-line-chart"></i> {unicorn.energy}</span>
        <span><i className="fa fa-venus-mars"></i> {unicorn.is_relax ? ('relax') : ''}</span>
        {/* <span className="just_part">
          <span><i className="fa fa-line-chart"></i> +{unicorn.popularity}</span>
          <span><i className="fa fa-cubes"></i> Gen-{unicorn.generation}</span>
        </span> */}
        <span>
          {stats}
        </span>
        <div className="author-post">
          <img src="img/a1.png" alt="" className="ava-author" />
          {/* <span>by <a href={unicorn.owner.url}>{unicorn.owner.name} <span><i className="fa fa-globe"></i> {unicorn.country}</span></a></span> */}
          <span>by <a href="#">{unicorn.owner_id} <span><i className="fa fa-globe"></i> {unicorn.country}</span></a></span>
        </div>
        <div className="info-block">
          <span onClick={this.handleLike}><i className="fa fa-heart-o" aria-hidden="true"></i> {unicorn.likes_count}</span>
          <span><i className="fa fa-eye"></i> {unicorn.views_count}</span>
          {/* <span onClick={this.handleComment}><i className="fa fa-comment-o"></i> {unicorn.counters.comments}</span> */}
        </div>
      </div>
    );
  }
}

export default Card;
