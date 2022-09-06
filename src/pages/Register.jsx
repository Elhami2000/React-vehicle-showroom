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
    width: 40%;
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
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    font-color: white;
    cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create an account</Title>
            <Form>
            <Input placeholder="name"/>
            <Input placeholder="last name"/>
            <Input placeholder="username"/>
            <Input placeholder="email"/>
            <Input placeholder="password"/>
            <Input placeholder="confirm password"/>
            <Agreement>
                By creating an account, I consent to the processing of my personal
                info and all that other jazz with the <b>PRIVACY POLICY</b>.
            </Agreement>
            <Button><Link to="/">CREATE</Link></Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register