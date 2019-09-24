import React, {Component} from 'react';
import PropTypes from 'prop-types';

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
            // dangerouslySetInnerHTML={{__html: this.props.item}}
        >
            {this.props.item}+{this.props.test}
        </li>

    }
}

Todoitem.propTypes={
    test:PropTypes.number,
    item:PropTypes.string,
    deleteItem:PropTypes.func,
    index:PropTypes.number,
};

Todoitem.defaultProps={
    test:'1234'
};

export default Todoitem;
