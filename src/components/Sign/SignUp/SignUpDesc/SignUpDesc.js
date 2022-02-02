import { React, useState  } from "react";
import { StyledSignUpDesc } from "./Styled/SignUpDesc.styled";
import { Link } from "react-router-dom";
import Input from "../../Input/Input";
import Button from "../../Button/Button";

let border = '';

function SignUpDesc({}) {

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
        <h2 className="header">Sign up</h2>
        <p className="slogan">
          Already have an account? 
          <Link className="link" to="/sign-in"> Sign In</Link>
        </p>
        <form className='form'>
          <Input onChange={inputCheckHandler} border={border} type={'text'} name="firstName" placeholder={'First name'} />
          <Input onChange={inputCheckHandler} border={border} type={'text'} name="lastName" placeholder={'Last name'} />
          <Input onChange={inputCheckHandler} type={'number'} border={border} name="phone" placeholder={'Phone'} />
          <Input onChange={inputCheckHandler} type={'Email'} border={border} name="email" placeholder={'Email'} />
          <Input onChange={inputCheckHandler} type={'password'} border={border} name="password" placeholder={'Password'} />
          <Button type="submit" text={'Next Step'} />
        </form>
      </div>
    </StyledSignUpDesc>
  );
}

export default SignUpDesc;
