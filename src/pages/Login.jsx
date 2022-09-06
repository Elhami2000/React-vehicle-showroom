import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: /*linear-gradient(rgba(255,255,255,0.5), (255,255,255,0.5))*/ url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/458ea69a-2c5f-4ca4-9d25-0fcae6fda909/d4ahjde-473aaca7-9b28-401c-a9dc-1aec53946216.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ1OGVhNjlhLTJjNWYtNGNhNC05ZDI1LTBmY2FlNmZkYTkwOVwvZDRhaGpkZS00NzNhYWNhNy05YjI4LTQwMWMtYTlkYy0xYWVjNTM5NDYyMTYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.56qwcgAk9DmAgI5Wa-jnW62JxXHvZwx0dU6thx3enhE) center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: "75%" })};
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`;


const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    font-color: white;
    cursor: pointer;
    margin-bottom: 10px;
`;

const Links = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Sign in</Title>
            <Form>
            <Input placeholder="username"/>
            <Input placeholder="password"/>
            <Link to="/"><Button>LOG IN </Button></Link>
            <Links>FORGOT YOUR PASSWORD?</Links>
            <Link to="Register"><Links>CREATE A NEW ACCOUNT</Links></Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login