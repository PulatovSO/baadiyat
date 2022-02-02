import { SignInImageStyled } from "./Styled/SigninImage.styled";

function SignImage({image}) {
  return (
    <SignInImageStyled>
      <img src={image} alt="sign-up image" />
    </SignInImageStyled>
  );
}

export default SignImage;
