
import React,{Component} from 'react'
import {Table,Input,Button,Form} from 'antd'
import TreeList from './Modal/treeList'
import 'antd/dist/antd.css'
import '../css/datasheet.css'
const FormItem = Form.Item;
@Form.create({

})
export default class index extends Component{
    constructor(props, context) {
        super(props)
        this.state = {
            editRemark: false,
        };
        this.data ={
            list : [
                {
                    key:"1",
                    id:"1111",
                    name:"ID",
                    type:"number",
                    firstData:"28323",
                    remark:"序号",
                    newRemark:"1",
                },
                {
                    key:"2",
                    id:"2222",
                    name:"333",
                    type:"number",
                    firstData:"28323",
                    remark:"序号",
                    newRemark:"2",
                }
            ]
        }

        this.handles = this.handles.bind(this)
        this.query = this.query.bind(this)
    }
    handles(){
        if(this.state.editRemark){
            this.setState ({
                editRemark:false
            })
        }else{
            this.setState ({
                editRemark:true
            })
        }
    }
    // 确认
    query(){
        this.props.form.validateFields((err, values) => {
            if(err){
                alert("错误");
            }
            const getFileArr = [];
            const getFileData = {};
            for(let key in values){
                getFileData.id = key;
                getFileData.newRemark = values[key];
                getFileArr.push(getFileData)
            }
            console.log(getFileArr)
        })
    }
    columns(){
        const self = this;
        const { getFieldDecorator } = self.props.form
        return [
            {
                title:"名称",
                dataIndex:"name",
                key:"name",
            },{
                title:"类型",
                dataIndex:"type",
                key:"type",
            },{
                title:"第一行数据",
                dataIndex:"firstData",
                key:"firstData",
            },{
                title:"备注",
                dataIndex:"remark",
                key:"remark",
            },{
                title:"新增备注",
                dataIndex:"newRemark",
                key:"newRemark",
                render:function (text,record) {
                    return self.state.editRemark ?
                        (
                        <FormItem>
                            {getFieldDecorator(`${record.id}`,{
                                initialValue:record.newRemark
                            })(
                                <Input/>
                            )}
                        </FormItem>
                        )
                        :
                        `${text}`
                }
            }
        ]
    }

    render() {
        return (
            <div className="container">
                <TreeList

                />
                <div className="container-right">
                    <Form>
                        <Table
                            ref="table"
                            columns={this.columns()}
                            dataSource={this.data.list}
                        />
                        <Button onClick={this.handles}>切换</Button>
                        <Button onClick={this.query}>确认</Button>
                    </Form>
                </div>
            </div>
        );
    }
}