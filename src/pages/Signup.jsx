import Confirm from "../components/signup/Confirm";
import Details from "../components/signup/Details";
import Form from "../components/signup/Form";
import Header from "../components/signup/Header";
import Main from "../components/signup/Main";

function Signup() {
  return (
    <div className="gradient-2 min-h-dvh">
      <Header />
      <Main>
        <Details />
        <Form />
      </Main>
      {/* <Confirm /> */}
    </div>
  );
}

export default Signup;
