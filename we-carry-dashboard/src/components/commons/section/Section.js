import React from 'react';
import './Section.css';

class Section extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className={this.props.className}>
        <h1>{this.props.name}</h1>
        <div className="ui-section-content">
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default Section;
