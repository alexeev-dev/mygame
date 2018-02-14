import React, { Component } from 'react';

import UnicornPreview from '../components/unicorn/Preview';
import SidebarMenu from '../components/ui/SidebarMenu';
import Card from '../components/Card';

import Search from '../common/Search';
import Dropdown from '../common/Dropdown';
import SideBlock from '../components/ui/SideBlock';
import Tags from '../components/ui/Tags';
import SelectColor from '../components/ui/SelectColor';
import FilterControls from '../components/ui/FilterControls';

const unicorns = [{
  id: 153330988,
  dna: 8890509998,
  name: 'Mr. Incredible Unicorn',
  price: 0.042,
  reproduction: {
    type: 'extra',
    price: 0.00093
  },
  popularity: 23.4453,
  generation: 1,
  tags: ['Nice', 'Gute', 'Usual', 'Just', 'Angry'],
  owner: {
    name: 'Alex Alexeev',
    url: '/alex_alexeev'
  },
  country: 'USA',
  counters: {
    likes: 50,
    views: 150,
    comments: 20
  }
}, {
  id: 153330990,
  dna: 8890677998,
  name: 'Testable unicorn',
  price: 0.082,
  reproduction: {
    type: 'extra',
    price: 0.00052
  },
  popularity: 203.51,
  generation: 3,
  tags: ['Nice', 'Gute', 'Usual', 'Just', 'Angry'],
  owner: {
    name: 'Fe Shallow',
    url: '/fe_shallow'
  },
  country: 'RU',
  counters: {
    likes: 1,
    views: 500,
    comments: 4
  }
}]

//Заглушка для Dropdown
const dropDownList = [
  {id: 0, value: 'All Gens'},
  {id: 1, value: 'Gen - 0'},
  {id: 2, value: 'Gen - 1'},
  {id: 3, value: 'Gen - 2'},
];

//Заглушка для SideBarMenu
const SideBarMenuList = [
  {id: -1, value: 'All'},
  {id: 0, value: 'Fast'},
  {id: 1, value: 'Swift'},
  {id: 2, value: 'Snappy'},
  {id: 3, value: 'Brisk'},
  {id: 4, value: 'Plodding'},
];

//Заглушка для Tags
const TagsList = [
  {id: -1, value: 'All'},
  {id: 0, value: 'Nice'},
  {id: 1, value: 'Gute'},
  {id: 2, value: 'Usual'},
  {id: 3, value: 'Just'},
  {id: 4, value: 'Angry'},
];

class Filter extends Component {
  constructor(props) {
    super(props)
    this.initState = {
      updated: 0,
      drop1: dropDownList[0],
      drop2: dropDownList[0],
      sidebar: SideBarMenuList[0],
      tag: TagsList[0],
      color: {index: 0},
    };
		this.state = this.initState;
    this.resetAll = this.resetAll.bind(this);
    this.resetItem = this.resetAll.bind(this);
    this.closeAll = this.closeAll.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }

  updateItem(obj){
    this.setState(obj);
  }

  resetAll(){
    this.setState(this.initState);
  }

  resetItem(item){
    this.setState(this.initState[item]);
  }

  closeAll(e){
    let activeElems = document.querySelectorAll('.closeall.active');
    [].forEach.call(activeElems, (elem) => {
      if(typeof elem.classList != 'undefined'){
        elem.classList.remove('active');
      }else if(typeof elem.className != 'undefined'){
        elem.className = cont.className.replace(/(\s)?active/i, '');
      }
    });
  }
  
  render() {
    return (
      <section onClick={this.closeAll}>
        <div className="container-fluid cd-main-content custom-container">
          <div className="row">
            <div className="col-md-2 left-feild">

              <Search onChange={(val) => {}}/>

            </div>
            <div className="col-md-10 ">
              <div className="for-be-dropdowns">
                <Dropdown iconClass="icon-creative" values={dropDownList} val={this.state.drop1} onChange={(obj) => {this.updateItem({drop1: obj})}}/>
                <Dropdown iconClass="icon-creative" values={dropDownList} val={this.state.drop2} onChange={(obj) => {this.updateItem({drop2: obj})}}/>
              </div>
            </div>
          </div>
        </div>
        <div className="s_keywords">
          <div className="container-fluid custom-container">
            <FilterControls rowClass="btn color-1 size-3 hover-10" icoClass="fa fa-trash-o" onClick={() => this.resetAll()} val="clear all filters" />
            <FilterControls rowClass="btn color-6 size-3 hover-10" icoClass="fa keyword fa-times" onClick={() => this.resetItem('drop1')} val={this.state.drop1.value} />
            <FilterControls rowClass="btn color-6 size-3 hover-10" icoClass="fa keyword fa-times" onClick={() => this.resetItem('drop2')} val={this.state.drop2.value} />
            <FilterControls rowClass="btn color-6 size-3 hover-10" icoClass="fa keyword fa-times" onClick={() => this.resetItem('sidebar')} val={this.state.sidebar.value} />
            <FilterControls rowClass="btn color-6 size-3 hover-10" icoClass="fa keyword fa-times" onClick={() => this.resetItem('tag')} val={this.state.tag.value} />
            <FilterControls rowClass="btn color-6 size-3 hover-10" icoClass="fa keyword fa-times" onClick={() => this.resetItem('color')} val={this.state.color.index} />
          </div> 
        </div>
        <div className="container-fluid custom-container">
          <div className="row">

            <div className="col-md-2 left-feild">

              <SideBlock title="Coldown">
                <SidebarMenu values={SideBarMenuList} val={this.state.sidebar} onChange={(obj) => {this.updateItem({sidebar: obj})}}/>
              </SideBlock>

              <SideBlock title="Popular Tags">
                <Tags values={TagsList} val={this.state.tag} onChange={(obj) => {this.updateItem({tag: obj})}}/>
              </SideBlock>

              <SideBlock title="More Filtres">
                <SelectColor onChange={(obj) => {this.updateItem({color: obj})}}/>
              </SideBlock>

            </div>

            <div className="col-md-10">
              <div id="container-mix"  className="row _post-container_">
                {unicorns.map((unicorn) => (
                  <div key={unicorn.id} className="category-1 mix custom-column-5">
                    <Card unicorn={unicorn}/>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
			</section>
    );
  }
}

export default Filter;
