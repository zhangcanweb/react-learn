import React, { Component, Fragment } from "react";
import { Input, Button, List } from "antd";

// 无状态组件  只是一个函数组成 只含有render函数 性能高
// const TodoListUi = props => {
//   return (
//     <Fragment>
//       <div style={{ marginTop: "10px", marginLeft: "20px" }}>
//         <Input
//           placeholder="todo info"
//           value={props.inputValue}
//           style={{ width: "500px", marginRight: "20px" }}
//           onChange={props.handleChang}
//         />
//         <Button type="primary" onClick={props.handleBtnClick}>
//           提交
//         </Button>
//       </div>
//       <List
//         style={{ width: "500px", marginTop: "10px", marginLeft: "20px" }}
//         bordered
//         dataSource={props.list}
//         renderItem={(item, index) => (
//           <List.Item onClick={index => props.handleDeleteClick(index)}>
//             {item}
//           </List.Item>
//         )}
//       />
//     </Fragment>
//   );
// };
//UI组件
class TodoListUi extends Component {
  render() {
    return (
      <Fragment>
        <div style={{ marginTop: "10px", marginLeft: "20px" }}>
          <Input
            placeholder="todo info"
            value={this.props.inputValue}
            style={{ width: "500px", marginRight: "20px" }}
            onChange={this.props.handleChang}
          />
          <Button type="primary" onClick={this.props.handleBtnClick}>
            提交
          </Button>
        </div>
        <List
          style={{ width: "500px", marginTop: "10px", marginLeft: "20px" }}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (
            <List.Item onClick={index => this.props.handleDeleteClick(index)}>
              {item}
            </List.Item>
          )}
        />
      </Fragment>
    );
  }
}

export default TodoListUi;
