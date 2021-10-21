import styled from '@emotion/styled';
import Image from 'next/image';
const Header = () => {
  return (
    <Head>
      <Logo>
        <Image
          src="/logotyp-jiroy.svg"
          height={25}
          width={25}
          layout="responsive"
          alt="jiroy"
        />
      </Logo>
    </Head>
  );
};

export default Header;

const Head = styled.header`
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6rem;
  width: 100%;
  max-width: 100%;
  background: #111;
  color: #fff;
  @media (max-width: 768px) {
    padding: 0;
  }
`;
const Logo = styled.div`
  width: 80px;
  height: 80px;
`;
