import SignImage from '../signImage/SignImage';
import SignInDesc from './SignInDesc/SignInDesc';
import SignUpImage from '../../../assets/images/sign-in.svg';
import { SignUpStyled } from '../SignUp/Styled/SignUp.Styled';

function SignIn() {
  return (
    <SignUpStyled>
      <SignImage image={SignUpImage} />
      <SignInDesc />
    </SignUpStyled>
  );
}

export default SignIn;
