import DynamicForm from "../../components/dynamic-form/DynamicForm";

const Login = () => {
  const signInHandleData = (data) => {
    console.log(data);
  }
  return (
    <div>
      <DynamicForm 
      title ='Sign in'
      handleForm={signInHandleData}
      ></DynamicForm>
    </div>
  );
};

export default Login;