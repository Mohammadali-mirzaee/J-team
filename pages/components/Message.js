import styled from '@emotion/styled';
import { useState } from 'react';
const Message = () => {
  const [valid, setValid] = useState(false);

  const validatAbout = (e) => {
    setValid(e.taget.value !== '');
  };
  /**
   * const validatAbout = () => {
   * const about = e.target.value
   * if(about === ''){
   *  setValid(false)
   * return
   * }
   * setValid(true)
   * }
   */

  const sendMessage = async () => {
    console.log('Send');
    const response = await fetch(
      'https://hooks.slack.com/services/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',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ text: 'Test' }),
      }
    );
    const data = await response.json();
    console.log(data);
  };
  return (
    <MessageCard>
      <div>
        <p>About</p>
        <input onChange={validatAbout} type="text" placeholder="About"></input>
      </div>
      <div className="message-area">
        <p>Message</p>
        <textarea placeholder="Your Massage"></textarea>
      </div>
      <button onClick={sendMessage}>Send</button>
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
