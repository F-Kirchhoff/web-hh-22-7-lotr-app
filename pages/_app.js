import GlobalStyle from "../styles";
import styled from "styled-components";
export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}

const Container = styled.main`
  margin: 0 auto;
  max-width: 600px;
  padding: 20px;
  display: grid;
  min-height: 100vh;
  place-content: center;
  place-items: center;
`;
