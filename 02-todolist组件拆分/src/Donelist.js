import React, {Component} from 'react';

class Donelist extends Component {
    constructor(props) {
        super(props);
        this.LiClick = this.LiClick.bind(this);
    }

    LiClick() {
        this.props.deleteItem(this.props.index);
    }

    render() {
        return <li
            onClick={this.LiClick.bind(this)}
            dangerouslySetInnerHTML={{__html: this.props.item}}
        >

        </li>

    }
}

export default Donelist;
