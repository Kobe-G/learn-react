import React, {Component, Fragment} from 'react';
import Todoitem from './unFinishItem';
import Donelist from './Donelist';

class Todolist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: ['学习英语', '学习语文'],
            doneList: [],
        };

        this.InputChange = this.InputChange.bind(this);
        this.BtnClick = this.BtnClick.bind(this);
        this.LiClick = this.LiClick.bind(this);
        this.DoneLiClick = this.DoneLiClick.bind(this);


    }

    InputChange(e) {

        this.setState({
            inputValue: e.target.value,
        })


    }


    BtnClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })

    }

    DoneLiClick(index) {
        const doneList = [...this.state.doneList];
        doneList.splice(index, 1);
        this.setState({
            doneList: doneList,
        })
    }


    LiClick(index) {
        const list = [...this.state.list];
        const doneList = list.splice(index, 1);
        this.setState({
            list: list,
            doneList: [...this.state.doneList, doneList]
        })
    }

    render() {
        return (
            <Fragment>
                {/*下面是一个输入框*/}
                <div>
                    <label htmlFor="insertArea">输入内容</label>
                    <input type="text"
                           value={this.state.inputValue}
                           onChange={this.InputChange}
                           className="input"
                           id="insertArea"
                    />
                    <button onClick={this.BtnClick}>提交</button>
                </div>

                {/*这是未完成的*/}
                <h4>未完成</h4>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return < Todoitem
                                item={item}
                                index={index}
                                deleteItem={this.LiClick}
                                key={index}
                            />

                        })
                    }
                </ul>

                {/*已完成*/}
                <h4>已完成</h4>
                <ul>
                    {
                        this.state.doneList.map((item, index) => {
                            return < Donelist
                                item={item}
                                index={index}
                                deleteItem={this.DoneLiClick}
                                key={index}
                            />
                        })
                    }
                </ul>
            </Fragment>

        )
    };
}

export default Todolist;