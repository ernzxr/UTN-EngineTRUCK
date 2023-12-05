import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useFormik } from 'formik';
import { LoginUsers } from '../services/interfaces/users';
import { userLogin } from '../services/modules/users';
import { useRouter } from 'next/navigation';

const Form = () => {

  const router = useRouter();

  const loginFormik = useFormik({
    initialValues: {
      user:'',
      password:'',
    },
    onSubmit: values => {
      console.log(values);
      login(values);
    }
  }); 

  const login = (values:LoginUsers) => {
        userLogin(values).then((data:any) => {
        localStorage.setItem('user', JSON.stringify(data.data.user));
        localStorage.setItem('token', data.data.token);
        router.push('/admin/dashboard');
      }).catch((error) => { console.log(error)}); 
  }

  return (
    <form className="flex max-w-md flex-col gap-4 m-auto mt-[10%]" onSubmit={loginFormik.handleSubmit}>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="user" value="Usuario" />
        </div>
        <TextInput id="user" type="user" name="user" required onChange={loginFormik.handleChange} value={loginFormik.values.user} />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Your password"/>
        </div>
        <TextInput id="password" type="password" name="password" required onChange={loginFormik.handleChange} value={loginFormik.values.password}/>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default Form;