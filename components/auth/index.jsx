import Link from "next/link";
import Layout from "../shared/layout"
import { Button, Form, Input, Checkbox } from 'antd';
const Auth = ()=>{

    const [loginForm] = Form.useForm();   
    const [singupForm] = Form.useForm();   

    const singup = (value) =>{
     console.log(value)
    }

    const login = (value) =>{
        console.log(value)
    }



return(
    <Layout title="Login and SignUp">
     <section className="flex justify-center w-full mt-10 mb-20">
     <div className="grid max-lg:grid-cols-1 lg:grid-cols-2 w-[85%] gap-x-5">

        <div className=" mb-10">
        <h1 className="text-3xl font-bold mb-10">Login</h1>
        <div className="p-5 border rounded-lg">
        <Form form={loginForm} onFinish={login} layout="vertical" autoComplete="off">

<Form.Item name="email" label="Username or email address " className="text-2xl font-semibold" rules={[{ required: true,message:'Email Id Is Required',type: 'email' }]}>
  <Input  className="  h-[50px]" placeholder="Enter Your Email Id"/>
</Form.Item>


<Form.Item name="password" label="Password " className="text-xl mb-10 font-semibold" rules={[{ required: true,message:'Password Is Required' }]}>
<Input.Password  className=" h-[50px]" placeholder="Enter Your Password"/>
</Form.Item>


<Form.Item
      name="remember"
      valuePropName="checked"
    >
      <Checkbox className="font-semibold text-lg">Remember me</Checkbox>
    </Form.Item>



<Form.Item >
    <Button htmlType="submit" className="bg-blue-500 font-semibold text-white border-none w-[150px] hover:bg-[#231F40] h-[60px] text-lg">Log in</Button>
</Form.Item>
        </Form>

        <Link href="#" className="text-lg font-medium text-gray-500">Lost your password?</Link>


        </div>
       
        </div>
        <div>
        <h1 className="text-3xl font-bold mb-10">Register</h1>
        <div className="p-5 border rounded-lg">
        <Form form={singupForm} onFinish={singup} layout="vertical" autoComplete="off">

        <Form.Item name="name" label="Name " className="text-2xl font-semibold" rules={[{ required: true,message:'Name Is Required' }]}>
  <Input  className="h-[50px] " placeholder="Enter Your Name"/>
</Form.Item>

<Form.Item name="email" label="Email address " className="text-2xl font-semibold" rules={[{ required: true,message:'Email Id Is Required',type: 'email', }]}>
  <Input  className="  h-[50px]" placeholder="Enter Your Email Id"/>
</Form.Item>


<Form.Item name="password" label="Password " className="text-xl mb-5 font-semibold" rules={[{ required: true,message:'Password Is Required' }]}>
<Input.Password  className=" h-[50px]" placeholder="Enter Your Password"/>
</Form.Item>



<h1 className="text-lg font-medium text-gray-500 mb-5">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <Link href="#" className="text-lg font-medium text-gray-500">privacy policy.</Link></h1>



<Form.Item >
    <Button htmlType="submit" className="bg-blue-500 font-semibold text-white border-none w-[150px] hover:bg-[#231F40] h-[60px] text-lg">Register</Button>
</Form.Item>

  

        </Form>
        </div>
       
        </div>
     </div>
     </section>
   </Layout>
)
}
export default Auth