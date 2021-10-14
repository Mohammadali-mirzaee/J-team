import styled from '@emotion/styled';
import Image from 'next/image';
import { useState } from 'react';
import Message from './Message';
const Main = () => {
  const [toggle, setToggle] = useState(false);
  function toggleMessage() {
    setToggle(true);
  }

  const closeModal = () => {
    setToggle(false);
  };

  return (
    <Wrapper>
      <article>
        <div>
          <h1>People</h1>
          <p>8</p>
        </div>
        <div>
          <h1 className="ji-team">JTeam</h1>
        </div>
      </article>

      <Admin>
        <div className="admin-person">
          <Image height={60} width={60} src="/images/jimi.jpg" />
          <p>Jimi Tadi</p>
          <p>Admin</p>
        </div>
      </Admin>

      {toggle && (
        <Modal>
          <div className="overlay" onClick={closeModal}></div>
          <Message />
        </Modal>
      )}

      <div className="all-card">
        <Container>
          <div className="wrap-card">
            <div>
              <div className="circle-person">
                <Image height={100} width={100} src="/images/roy.jpg" />
              </div>
              <p>Roy josefsson</p>
              <div className="circle-status"></div>

              <button onClick={toggleMessage}>
                <p>Send</p>
              </button>
            </div>
            <div>
              <div className="circle-person">
                <Image height={100} width={100} src="/images/martin.jpg" />
              </div>
              <p>Martin Lindström</p>
              <div className="circle-status"></div>
              <button onClick={toggleMessage}>
                <p>Send</p>
              </button>
            </div>
            <div>
              <div className="circle-person">
                <Image height={100} width={100} src="/images/joel.jpg" />
              </div>
              <p>Joel Nord</p>
              <div className="circle-status"></div>
              <button onClick={toggleMessage}>
                <p>Send</p>
              </button>
            </div>
          </div>
        </Container>
        <Container>
          <div className="wrap-card">
            <div>
              <div className="circle-person">
                <Image height={100} width={100} src="/images/john.jpg" />
              </div>
              <p>John Ghavamzadeh</p>
              <div className="circle-status"></div>
              <button onClick={toggleMessage}>
                <p>Send</p>
              </button>
            </div>
            <div>
              <div className="circle-person">
                <Image height={100} width={100} src="/images/farid.jpg" />
              </div>
              <p>Farid Bokhaled</p>
              <div className="circle-status"></div>
              <button onClick={toggleMessage}>
                <p>Send</p>
              </button>
            </div>
            <div>
              <div className="circle-person">
                <Image height={100} width={100} src="/images/jEric.jpg" />
              </div>
              <p>John-Eric Udd</p>
              <div className="circle-status"></div>
              <button onClick={toggleMessage}>
                <p>Send</p>
              </button>
            </div>
          </div>
        </Container>
        <Container>
          <div className="wrap-card">
            <div>
              <div className="circle-person">
                <Image height={100} width={100} src="/images/mohammad.jpg" />
              </div>
              <p>Mohammadali Mirzaee</p>
              <div className="circle-status"></div>
              <button onClick={toggleMessage}>
                <p>Send</p>
              </button>
            </div>
          </div>
        </Container>
      </div>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  padding-left: 5rem;
  padding-right: 5rem;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  article {
    margin-top: 5rem;
    height: 100px;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #000;
    padding-bottom: 5rem;
    @media (max-width: 768px) {
      margin-top: 2rem;
      padding-bottom: 3rem;
    }
    > div {
      display: flex;
      padding-left: 5rem;
      justify-content: space-around;
      align-items: center;
      @media (max-width: 768px) {
        padding: 0;
      }
      > h1 {
        font-size: 2rem;
        font-weight: 500;
        @media (max-width: 768px) {
          font-size: 1.6rem;
        }
      }
      p {
        padding-left: 1.2rem;
        font-size: 1.8rem;
        @media (max-width: 768px) {
          font-size: 1.5rem;
        }
      }
    }
    div {
      padding-right: 5rem;
      @media (max-width: 768px) {
        padding-right: 0;
      }
      .ji-team {
        font-size: 5rem;
        font-weight: 100;
        @media (max-width: 768px) {
          font-size: 3.5rem;
        }
      }
    }
  }

  .all-card {
    padding-bottom: 10rem;
  }
`;
const Container = styled.div`
  width: 100%;
  max-width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  .wrap-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    padding-top: 3rem;
    width: 70%;
    @media (max-width: 768px) {
      width: 100%;
      max-width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding-top: 0rem;
    }

    div {
      width: 14rem;
      height: 20rem;
      background: #eeeeee;
      border-radius: 1rem;
      display: flex;
      align-items: center;
      flex-direction: column;

      @media (max-width: 768px) {
        margin-top: 2rem;
      }
      p {
        font-weight: 500;
      }
      .circle-person {
        margin-top: 30px;
        height: 100px;
        width: 100px;
        border-radius: 50%;
        background: #c4c4c4;
        display: flex;

        img {
          border-radius: 50%;
        }
      }
      .circle-status {
        height: 30px;
        width: 30px;
        border-radius: 50px;
        background: #f9f9f9;
      }
      button {
        margin-top: 20px;
        width: 70%;
        height: 40px;
        border-radius: 1rem;
        border: none;
        background: #6b6b6b;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
      }
      button:hover {
        background: red;
      }
    }
  }
`;
const Admin = styled.div`
  margin-top: 2rem;
  align-items: center;
  justify-content: left;
  padding-left: 5rem;
  padding-right: 5rem;
  display: flex;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .admin-person {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    p {
      margin: 0;
      font-weight: 500;
    }
    img {
      border-radius: 50%;
    }
  }
`;
const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;

  .overlay {
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.2;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;