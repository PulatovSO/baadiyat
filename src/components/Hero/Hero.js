import { StyledContainer } from "./StyledHero/Container.styled";
import { StyledHeader } from "./StyledHero/Hero.styled";
import { Link } from "react-router-dom";
import Nav from "./Nav/Nav";
import Showcase from "./Showcase/Showcase";

function Hero() {
  return (
    <StyledHeader>
        <Nav />
      <StyledContainer>
        <Showcase />
      </StyledContainer>
      <Link to="/sign-up">Sign up page</Link>
    </StyledHeader>
  );
}

export default Hero;
