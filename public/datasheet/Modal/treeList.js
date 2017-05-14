import React,{Component} from 'react'
import {Tree,Select} from 'antd'
import 'antd/dist/antd.css'
import '../../css/datasheet.css'
const Option = Select.Option;
export default class index extends Component{
    constructor(props, context) {
        super(props)
        this.state = {
        };

        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(value) {
        console.log(`selected ${value}`);
    }
    render() {
        return (
            <div className="container-left">
                <div className="dataSource">
                    <span>数据库</span>
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select a person"
                        optionFilterProp="children"
                        onChange={this.handleChange}
                        filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                </div>
            </div>
        );
    }
}