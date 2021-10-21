import styled from '@emotion/styled';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);
  return (
    <FooterWrap>
      <div>
        <Image
          data-aos={'fade-right'}
          alt="jiroy"
          src="/logotyp-jiroy.svg"
          height={300}
          width={300}
        />
      </div>
      <b className="logo"></b>
    </FooterWrap>
  );
};
export default Footer;

const FooterWrap = styled.footer`
  background: #111;
  padding-left: 5rem;
  padding-right: 5rem;
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  div {
    padding-top: 5rem;
    @media (max-width: 768px) {
      padding-top: 2rem;

      img {
        width: 150px;
        height: 150px;
      }
    }
  }
  .logo {
    height: 400px;
    width: 400px;
    border: 3vw solid white;
    border-radius: 50%;
    background: #e41513;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.7s ease-in-out;

    &:hover {
      .logo {
        transform: rotate(360deg);
      }
    }
    @media (max-width: 768px) {
      height: 150px;
      width: 150px;
      border: 3.9vw solid white;
    }
    &:after {
      content: '';
      height: 200px;
      width: 200px;
      background: white;
      border-radius: 50%;
      z-index: 2;
      @media (max-width: 768px) {
        height: 75px;
        width: 75px;
      }
    }
  }
`;
