/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input, Button, Card, Modal } from "antd";
import { Link, useNavigate } from "@tanstack/react-router";
import { useLogin } from "../hooks/useLogin";
import { useEffect, useState } from "react";

const Login = () => {
  const { mutate: login, isPending, isError, error, data } = useLogin();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    login(values);
  };

  useEffect(() => {
    if (isError) {
      setIsModalVisible(true);
    }
  }, [isError]);

  useEffect(() => {
    if (data?.access_token) {
      sessionStorage.setItem("access_token", data.access_token);
      navigate({ to: "/" });
    }
  }, [data, navigate]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-96 shadow-lg rounded-2xl">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <Form name="login" onFinish={onFinish} layout="vertical"
          initialValues={{ username: "bainary", password: "password" }}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input className="py-2" placeholder="Enter your username" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <div className="pb-2">
            <Link to="/register" className="text-lg">
              Register
            </Link>
          </div>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-blue-500 hover:bg-blue-600"
              loading={isPending} // ✅ แสดงโหลดระหว่าง login
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Modal
        title="Login Failed"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        closable={false}
        footer={[
          <Button key="close" type="primary" onClick={() => setIsModalVisible(false)}>
            Close
          </Button>,
        ]}
      >
        <p>{error?.message || "Invalid credentials. Please try again."}</p>
      </Modal>
    </div>
  );
};

export default Login;
