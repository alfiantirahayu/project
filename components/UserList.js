import React, { Component } from 'react';

class UserList extends Component {
    handleRemove=(index)=>{
        this.props.onRemove(index);
    }
    render(){
        const showList = this.props.data.userLists.map((users, index)=>
        <tr key={index}>
        <td>{index + 1}</td>
        <td>{users.nama}</td>
        <td>{users.address}</td>
        <td>{users.email}</td>
        <td>
          <button className="btn btn-success" onClick={this.edit}>edit</button> &nbsp;
          <button className="btn btn-danger" onClick={()=>{this.handleRemove(index);}}>remove</button>&nbsp;
        </td>
        </tr>
      );
      return(
 <div className="panel panel-default">
<div className="panel-heading">
  <h2 clasName="panel-title">List of Users</h2>
  </div>
  <div className="panel-body">
  <table className="table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Address</th>
                      <th>Email</th>
                      <th></th>
                    </tr>
</thead>
<tbody>
  {showList}
</tbody>
                </table>
                </div>
                </div>
                
    );
  }
}
export default UserList;
