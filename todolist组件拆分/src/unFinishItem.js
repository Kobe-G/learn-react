import React, {Component} from 'react';

class Todoitem extends Component {
    constructor(props) {
        super(props);
        this.LiClick = this.LiClick.bind(this);
    }

    LiClick() {
        this.props.deleteItem(this.props.index);
    }

    render() {
        return <li
            onClick={this.LiClick}
            dangerouslySetInnerHTML={{__html: this.props.item}}
        >

        </li>

    }
}

export default Todoitem;
