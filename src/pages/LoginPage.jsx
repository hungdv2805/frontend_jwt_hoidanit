import React from "react";
import { Button, Form, Input, notification } from "antd";
import { loginUserAPI } from "../ultil/api";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const navigation = useNavigate()

    const onFinish = async (values) => {
        const { email, password } = values;
        const res = await loginUserAPI( email, password)

        if(res && res.EC === 0){
            localStorage.setItem('access_token', res.access_token)
            notification.success({
                message: "Login Success",
                description: "You have login successfully",
                duration: 2,
            })
            navigation('/')
        }
        else{
            notification.error({
                message: "Login Failed",
                description: res?.EM ?? 'error',
                duration: 2,
            })
        }
        //console.log("res:", res);
    };
        const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    return ( 
        <div style={{margin: 50}}>
            <Form
                name="basic"
                labelCol={{
                span: 8,
            }}
            wrapperCol={{span: 16,}}
            style={{maxWidth: 600,}}
            initialValues={{
            remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
            >
            <Form.Item
                label="Email"
                name="email"
                rules={[
                    {
                    required: true,
                    message: "Please input your email!",
                    },
                ]}
            >
            <Input />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                    required: true,
                    message: "Please input your password!",
                    },
                ]}
            >
            <Input.Password />
            </Form.Item>
            <Form.Item>
            <Button type="primary" htmlType="submit">
                Login
            </Button>
            </Form.Item>
        </Form>
        </div>
     );
}

export default LoginPage;