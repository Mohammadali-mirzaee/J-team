import styled from '@emotion/styled';
const Message = () => {
  return (
    <MessageCard>
      <div>
        <p>About</p>
        <input type="text" placeholder="About"></input>
      </div>
      <div className="message-area">
        <p>Message</p>
        <textarea placeholder="Your Massage"></textarea>
      </div>
      <button>Send</button>
    </MessageCard>
  );
};
export default Message;

const MessageCard = styled.div`
  background: #eeeeee;
  width: 350px;
  height: 400px;
  border-radius: 1rem;
  border: 1px solid #c4c4c4;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: left;
  position: fixed;
  @media (max-width: 768px) {
    width: 300px;
    height: 350px;
  }
  > div {
    padding-left: 2rem;
    padding-right: 2rem;
    width: 100%;
    max-width: 100%;
    input {
      width: 100%;
      height: 2.5rem;
      border-radius: 0.5rem;
      border: none;
    }
    input:focus {
      outline: none;
    }
  }
  .message-area {
    textarea {
      width: 100%;
      border-radius: 0.5rem;
      height: 6rem;
    }
    textarea:focus {
      outline: none;
    }
  }
  button {
    margin-top: 3rem;
    height: 2.5rem;
    width: 50%;
    border-radius: 3rem;
    border: none;
    background: #c4c4c4;
    color: white;
  }
  button:hover {
    background: #e41513;
  }
`;
