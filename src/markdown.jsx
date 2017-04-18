import React, { Component } from 'react';
import marked from 'marked';


class Textform extends Component {
  constructor(props) {
    super(props);
    this.state={
      value:'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*',
    };
    this.handleChange=this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    return (
      <div>
      <form onChange={this.handleChange}>
      <label>

      <textarea value={this.state.value} onChange={this.handleChange} />
      </label>
      </form>
      <div className="preview" dangerouslySetInnerHTML={{ __html: marked(this.state.value)}} />
      </div>
    );
  }
}


export default Textform;
