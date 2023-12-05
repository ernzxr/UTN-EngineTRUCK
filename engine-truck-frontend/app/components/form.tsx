import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useFormik } from 'formik';
import { LoginUsers } from '../services/interfaces/users';
import { getUser } from '../services/modules/users';

const Form = () => {
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
        getUser(values).then((data) => {
        console.log(data)
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