import { SignUpStyled } from './Styled/SignUp.Styled';
import SignImage from '../signImage/SignImage';
import SignUpDesc from './SignUpDesc/SignUpDesc';
import SignUpImage from '../../../assets/images/sign-up.svg';

function SignUp() {
  return (
    <SignUpStyled>
      <SignImage image={SignUpImage} />
      <SignUpDesc />
    </SignUpStyled>
  );
}

export default SignUp;
