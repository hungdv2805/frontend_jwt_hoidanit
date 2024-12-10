import { message, Table } from "antd";
import { useState, useEffect } from "react";
import { getUserAPI } from "../ultil/api";
import { notification } from "antd";
const UserPage = () => {
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await getUserAPI()
            if(!res?.message){
                setDataSource(res)
            }else{
                notification.error({
                    message:"Unauthorized",
                    description: res.message,
                    duration: 3,
                })
            }
        }
        fetchUser()
    },[])
      
      const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
        },
        {
          title: 'Email',
          dataIndex: 'email'
        },
        {
          title: 'Name',
          dataIndex: 'name'
        },
        {
            title: 'Role',
            dataIndex: 'role'
        }
    ];
      
    return(
        <div style={{padding:30}}> 
            <Table bordered dataSource={dataSource} columns={columns} rowKey={"_id"}/>
        </div>
    )
}
export default UserPage