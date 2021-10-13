import styled from '@emotion/styled';
import Image from 'next/image';

const Main = () => {
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

      <div className="all-card">
        <Container>
          <div className="wrap-card">
            <div>
              <div className="circle-person">
                <Image height={100} width={100} src="/images/roy.jpg" />
              </div>
              <p>Roy josefsson</p>
              <div className="circle-status"></div>

              <button>
                <p>Send</p>
              </button>
            </div>
            <div>
              <div className="circle-person">
                <Image height={100} width={100} src="/images/martin.jpg" />
              </div>
              <p>Martin Lindström</p>
              <div className="circle-status"></div>
              <button>
                <p>Send</p>
              </button>
            </div>
            <div>
              <div className="circle-person">
                <Image height={100} width={100} src="/images/joel.jpg" />
              </div>
              <p>Joel Nord</p>
              <div className="circle-status"></div>
              <button>
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
              <button>
                <p>Send</p>
              </button>
            </div>
            <div>
              <div className="circle-person">
                <Image height={100} width={100} src="/images/farid.jpg" />
              </div>
              <p>Farid Bokhaled</p>
              <div className="circle-status"></div>
              <button>
                <p>Send</p>
              </button>
            </div>
            <div>
              <div className="circle-person">
                <Image height={100} width={100} src="/images/mohammad.jpg" />
              </div>
              <p>Mohammadali Mirzaee</p>
              <div className="circle-status"></div>
              <button>
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
  display: flex;
  flex-direction: column;
  article {
    margin-top: 5rem;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #000;
    padding-bottom: 5rem;
    > div {
      display: flex;
      padding-left: 5rem;
      justify-content: space-around;
      align-items: center;
      > h1 {
        font-size: 2rem;
        font-weight: 500;
      }
      p {
        padding-left: 1.2rem;
        font-size: 1.8rem;
      }
    }
    div {
      padding-right: 5rem;
      .ji-team {
        font-size: 5rem;
        font-weight: 100;
      }
    }
  }

  .all-card {
    padding-bottom: 10rem;
  }
`;
const Container = styled.div`
  width: 100%;
  .wrap-card {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 5rem;

    div {
      width: 14rem;
      height: 20rem;
      background: #eeeeee;
      border-radius: 10%;
      display: flex;
      align-items: center;
      flex-direction: column;

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
        background: red;
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
