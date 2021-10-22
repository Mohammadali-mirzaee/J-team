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
      <div data-aos={'fade-right'}>
        <Image
          src="/jiTeam.svg"
          height={50}
          width={50}
          layout="responsive"
          alt="jiroy"
        />
        <h1>JIROY</h1>
      </div>
      <b data-aos={'fade-right'} className="logo"></b>
    </FooterWrap>
  );
};
export default Footer;

const FooterWrap = styled.footer`
  background: #111;
  padding-left: 7rem;
  padding-right: 7rem;
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
    width: 300px;
    height: 300px;
    color: #eeeeee;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > img {
      width: 80px;
      padding-right: 2rem;
      @media (max-width: 768px) {
        height: 10px;
        width: 0;
        padding: 0;
      }
    }

    h1 {
      font-size: 5rem;
      font-weight: 400;
      @media (max-width: 768px) {
        font-size: 4rem;
      }
    }
  }
  .logo {
    margin-top: 4rem;
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
      display: none;
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
