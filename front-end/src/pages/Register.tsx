// import React from "react";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input, Button, Modal } from "antd";
import { useRegister } from "../hooks/useRegister";
import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";


interface valuesInterface {
  fullname: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string
}

const Register = () => {

  const { mutate: register, isPending, isError, error, data } = useRegister();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values: valuesInterface) => {
    const data = {
      fullname: values.fullname,
      email: values.email,
      username: values.username,
      password: values.password
    }
    register(data);

  };

  useEffect(() => {
    if (isError) {
      setIsModalVisible(true);
    }
  }, [isError]);

  useEffect(() => {
    if (data) {
      navigate({ to: "/register-done" });
    }
  }, [data, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <Form layout="vertical" onFinish={onFinish} autoComplete="off"
          initialValues={{ fullname: "John Doe", email: "1@gmail.com", username: "bainary", password: "password", confirmPassword: "password" }}
        >
          <Form.Item
            label="Full Name"
            name="fullname"
            rules={[
              { required: true, message: "Please enter your full name!" },
            ]}
          >
            <Input placeholder="Full Name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Invalid email format!" },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please enter your username!" }]}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match!"));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm Password" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2"
              loading={isPending}
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Modal
        title="Error"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        closable={false}
        footer={[
          <Button key="close" type="primary" onClick={() => setIsModalVisible(false)}>
            Close
          </Button>
        ]}
      >
        <p>{error?.message || "An unknown error occurred."}</p>
      </Modal>
    </div>
  );
};

export default Register;
