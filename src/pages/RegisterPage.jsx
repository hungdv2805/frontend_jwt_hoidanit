import React from "react";
import { Button, Form, Input, notification } from "antd";
import { createUserAPI } from "../ultil/api";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
    const [form] = Form.useForm();
    const navigation = useNavigate()

    const onFinish = async (values) => {
        const { name, email, password } = values;
        const res = await createUserAPI(name, email, password)

        if(res && res.EC === 0){
            notification.success({
                message: "Register Success",
                description: "You have registered successfully",
                duration: 2,
            })
            navigation('/login')
        }
        else{
            const errorMessage = res?.EM ?? "Failed to register. Please try again later";
            notification.error({
                message: "Register Failed",
                description: errorMessage,
                duration: 2,
            })
            form.setFields([
                {
                    name: 'email', // Giả sử lỗi liên quan đến trường email
                    errors: [errorMessage],
                },
            ]);
        }
        //console.log("res:", res);
    };
        const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    return ( 
        <div style={{margin: 50}}>
            <Form
                form={form}
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
            <Form.Item
                label="Name"
                name="name"
                rules={[
                    {
                    required: true,
                    message: "Please input your name!",
                    },
                ]}
            >
            <Input />
            </Form.Item>
            <Form.Item>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
            </Form.Item>
        </Form>
        </div>
     );
}

export default RegisterPage;