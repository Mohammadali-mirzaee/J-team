import styled from '@emotion/styled';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Message from './Message';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import { useSelector } from 'react-redux';
import AOS from 'aos';
import 'aos/dist/aos.css';
import dayjs from 'dayjs';

const Main = () => {
  const [toggle, setToggle] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const users = useSelector((state) => state.reducer.users);

  function toggleMessage(userId) {
    setToggle(true);
    setSelectedUserId(userId);
  }

  const closeModal = () => {
    setToggle(false);
    setSelectedUserId(null);
  };

  const userLenth = users.length;

  useEffect(() => {
    AOS.init({
      duration: 2000,
      delay: 0,
    });
    AOS.refresh();
  }, []);

  const date = dayjs().format('YYYY-MM-DD');
  console.log();

  return (
    <Wrapper>
      <article>
        <div>
          <h1>People</h1>
          <p>{userLenth}</p>
        </div>
        <div>
          <h1 className="ji-team">JiTeam</h1>
        </div>
      </article>

      {toggle && (
        <Modal>
          <div className="overlay" onClick={closeModal}></div>
          <Message userId={selectedUserId} />
        </Modal>
      )}

      <div className="all-card">
        <Day>{date}</Day>

        <Admin>
          {users.slice(0, 1).map((x) => (
            <div className="admin-person">
              <Image height={60} width={60} src={x.image} />
              <p>{x.name}</p>
              <p>Admin</p>
              <div className={x.status ? 'status-color' : 'circle-status'}>
                <DoneOutlinedIcon
                  style={{ fill: x.status ? 'green' : 'white' }}
                />
              </div>
              <button onClick={() => toggleMessage(x.id)}>
                <p>contact</p>
              </button>
            </div>
          ))}
        </Admin>

        <Container>
          <div data-aos={'fade-right'} className="wrap-card">
            {users.slice(1, 4).map((x) => (
              <div>
                <div className="circle-person">
                  <Image height={100} width={100} src={x.image} />
                </div>
                <p>{x.name}</p>
                <div className={x.status ? 'status-color' : 'circle-status'}>
                  <DoneOutlinedIcon
                    style={{ fill: x.status ? 'green' : 'white' }}
                  />
                </div>
                <button onClick={() => toggleMessage(x.id)}>
                  <p>Send</p>
                </button>
              </div>
            ))}
          </div>
        </Container>
        <Container>
          <div data-aos={'fade-right'} className="wrap-card">
            {users.slice(4, 7).map((x) => (
              <div>
                <div className="circle-person">
                  <Image height={100} width={100} src={x.image} />
                </div>
                <p>{x.name}</p>
                <div className={x.status ? 'status-color' : 'circle-status'}>
                  <DoneOutlinedIcon
                    style={{ fill: x.status ? 'green' : 'white' }}
                  />
                </div>
                <button onClick={() => toggleMessage(x.id)}>
                  <p>Send</p>
                </button>
              </div>
            ))}
          </div>
        </Container>
        <Container>
          <div data-aos={'fade-right'} className="wrap-card">
            {users.slice(7, 8).map((x) => (
              <div>
                <div className="circle-person">
                  <Image height={100} width={100} src={x.image} />
                </div>
                <p>{x.name}</p>
                <div className={x.status ? 'status-color ' : 'circle-status'}>
                  <DoneOutlinedIcon
                    style={{ fill: x.status ? 'green' : 'white' }}
                  />
                </div>
                <button onClick={() => toggleMessage(x.id)}>
                  <p>Send</p>
                </button>
              </div>
            ))}
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
    width: 100%;
    max-width: 100%;
  }
  article {
    margin-top: 5rem;
    height: 100px;
    max-width: 100%;
    width: 100%;
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
      &:hover {
        h1 {
          color: red;
        }
      }
      p {
        padding-left: 1.2rem;
        font-size: 1.8rem;
        color: red;
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
      transition: 0.3s ease-in-out;

      &:hover {
        div {
          transform: scale(0.9);
        }
      }

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
        display: flex;

        img {
          border-radius: 50%;
        }
      }
      .circle-status {
        height: 30px;
        width: 30px;
        border-radius: 50px;
        background: #ff8787;
        opacity: 0.6;
        border: 1px solid red;
      }
      .status-color {
        height: 30px;
        width: 30px;
        border-radius: 50px;
        background: #a9fccd;
        border: 1px solid green;
      }
      button {
        margin-top: 20px;
        width: 70%;
        height: 40px;
        border-radius: 50px;
        border: none;
        background: #6b6b6b;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        cursor: pointer;
      }
      button:hover {
        outline: none;
        background: #b81519;
        box-shadow: 0 5px 15px rgba(242, 97, 103, 0.4);
      }
    }
  }
`;
const Admin = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding-top: 1rem;
  align-items: center;
  justify-content: left;
  padding-left: 5rem;
  padding-right: 5rem;
  display: flex;
  @media (max-width: 768px) {
    display: flex;
    justify-content: left;
    padding-left: 0;
  }
  .admin-person {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    p {
      padding-top: 0;
      margin-top: 0;
      margin-bottom: 0;
      font-weight: 500;
    }
    img {
      border-radius: 50%;
    }
    .circle-status {
      height: 25px;
      width: 25px;
      border-radius: 50px;
      background: #ff8787;
      opacity: 0.6;
      border: 1px solid red;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .status-color {
      height: 30px;
      width: 30px;
      border-radius: 50px;
      background: #a9fccd;
      border: 1px solid green;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    button {
      margin-top: 10px;
      width: 100%;
      height: 30px;
      border-radius: 0.5rem;
      border: none;
      background: #6b6b6b;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.9rem;
    }
    button:hover {
      background: red;
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

const Day = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  height: 2rem;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  color: #eeeeee;
  background: #e41513;
  border-bottom: 1px solid #111;
  @media (max-width: 768px) {
    padding-right: 0;
  }
`;
