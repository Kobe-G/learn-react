import React, {Component, Fragment} from 'react';
import Todoitem from './unFinishItem';
import Donelist from './Donelist';
import axios from 'axios';
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

        const value = e.target.value;

        this.setState(() => ({inputValue: value}))

    }


    BtnClick() {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }))

    }

    DoneLiClick(index) {

        this.setState((prevState)=>{
            const doneList = [...prevState.doneList];
            doneList.splice(index, 1);
            return {
                doneList: doneList,
            }
        })
    }


    LiClick(index) {

        this.setState((prevState)=>{
            const list = [...prevState.list];
            const doneList = list.splice(index, 1);
            return {
                list: list,
                doneList: [...prevState.doneList, doneList]
            }
        })
    }

    componentDidMount(){
        // axios.get('./spi').then(()=>{alert(1)}).catch(()=>{alert(2)});
    }

    render() {
        return (
            <>
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
            </>

        )
    };
}

export default Todolist;