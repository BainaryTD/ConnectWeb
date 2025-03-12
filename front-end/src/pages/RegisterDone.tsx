import { Button, Result } from "antd";
import { useRouter } from "@tanstack/react-router";

const RegisterDone: React.FC = () => {
    const router = useRouter();

    return (
        <Result
            status="success"
            title="Registration Successful"
            subTitle="Your account has been created successfully. You can now log in."
            extra={
                <Button type="primary" onClick={() => router.navigate({ to: "/login" })}>
                    Go to Login
                </Button>
            }
        />
    );
};

export default RegisterDone;