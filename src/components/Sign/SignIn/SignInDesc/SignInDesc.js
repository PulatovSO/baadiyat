import { useState } from "react";
import { StyledSignUpDesc } from "../../SignUp/SignUpDesc/Styled/SignUpDesc.styled";
import { Link } from "react-router-dom";
import Input from "../../Input/Input";
import Button from "../../Button/Button";

let border = '';

function SignInDesc() {

  const [inputValue, setinputValue] = useState('');
  const inputCheckHandler = (e) => {
    let inputName = e.target.name;
    let inputVal = e.target.value;
    let a = {[inputName] : inputVal}

    if (a[inputName] === '') border = '1px solid red';
    else border = '1px solid green';

    setinputValue( {[inputName] : inputVal} )
  }

  return (
    <StyledSignUpDesc>
      <div className="signUpDesc_inner">
        <h2 className="header">Sign in</h2>
        <p className="slogan">
          Do not you have an account? 
          <Link className="link" to="/sign-up"> Sign Up</Link>
        </p>
        <form className='form'>
          <Input onChange={inputCheckHandler} border={border} type={'Email'} name="email" placeholder={'Email'} />
          <Input onChange={inputCheckHandler} border={border} type={'password'} name="password" placeholder={'Password'} />
          <Button text={'Next step'} />
        </form>
      </div>
    </StyledSignUpDesc>
  );
}

export default SignInDesc;
