import styled from '@emotion/styled';
import Image from 'next/image';
const Footer = () => {
  return (
    <FooterWrap>
      <div>
        <Image src="/logotyp-jiroy.svg" height={300} width={300} />
      </div>
      <b className="logo">
        {/*   <div>
          <div></div>
        </div> */}
      </b>
    </FooterWrap>
  );
};
export default Footer;

const FooterWrap = styled.footer`
  background: #111;
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
    /*  padding-top: 5rem;
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
    } */
    height: 400px;
    width: 400px;
    border: 3vw solid white;
    border-radius: 50%;
    background: #e41513;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    &:after {
      content: '';
      height: 200px;
      width: 200px;
      background: white;
      border-radius: 50%;
      z-index: 2;
    }
  }
`;
