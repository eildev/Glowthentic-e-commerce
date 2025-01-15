import DynamicForm from "../../components/dynamic-form/DynamicForm";

const SignUp = () => {
  const signUpHandleData = (data) => {
    // handle form data here
    console.log(data);
  };
  return (
    <div>
     <DynamicForm
     title="Sign Up"
     handleForm={signUpHandleData}
     >

     </DynamicForm>
    </div>
  );
};

export default SignUp;