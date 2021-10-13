import styled from '@emotion/styled';
import Image from 'next/image';
const Header = () => {
  return (
    <Head>
      <Logo>
        <Image
          src="/logotyp-jiroy.svg"
          height={20}
          width={20}
          layout="responsive"
        />
      </Logo>
    </Head>
  );
};

export default Header;

const Head = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  width: 100%;
  max-width: 100%;
  background: #111;
  color: #fff;
`;
const Logo = styled.div`
  width: 60px;
  height: 60px;
`;
