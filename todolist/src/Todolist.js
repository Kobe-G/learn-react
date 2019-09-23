import React, {Component, Fragment} from 'react';

class Todolist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: ['学习英语', '学习语文'],
            doneList: [],
        }

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
        // console.log(this);
        // console.log(this.state.list);

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
                           onChange={this.InputChange.bind(this)}
                           className="input"
                           id="insertArea"
                    />
                    <button onClick={this.BtnClick.bind(this)}>提交</button>
                </div>
                {/*这是未完成的*/}
                <h4>未完成</h4>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index} onClick={this.LiClick.bind(this, index)}
                                       dangerouslySetInnerHTML={{__html: item}}>
                            </li>
                        })
                    }
                </ul>
                {/*已完成*/}
                <h4>已完成</h4>
                <ul>
                    {
                        this.state.doneList.map((item, index) => {
                            return <li key={index} onClick={this.DoneLiClick.bind(this, index)}
                                       dangerouslySetInnerHTML={{__html: item}}>
                            </li>
                        })
                    }
                </ul>
            </Fragment>

        )
    };
}

export default Todolist;
