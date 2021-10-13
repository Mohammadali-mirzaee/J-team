import styled from '@emotion/styled';
import Image from 'next/image';
const Footer = () => {
  return (
    <FooterWrap>
      <div>
        <Image src="/logotyp-jiroy.svg" height={300} width={300} />
      </div>
      <div className="logo">
        <div>
          <div></div>
        </div>
      </div>
    </FooterWrap>
  );
};
export default Footer;

const FooterWrap = styled.footer`
  background: #000;
  padding-left: 5rem;
  padding-right: 5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    padding-top: 5rem;
  }
  .logo {
    padding-top: 5rem;
    width: 500px;
    height: 500px;
    background: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    div {
      width: 350px;
      height: 350px;
      background: red;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      div {
        width: 200px;
        height: 200px;
        background: #fff;
        border-radius: 50%;
      }
    }
  }
`;
