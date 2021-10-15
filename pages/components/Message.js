import styled from '@emotion/styled';
import { useState } from 'react';
const Message = ({ userId }) => {
  const [valid, setValid] = useState(false);
  const [about, setAbout] = useState('');
  const [message, setMessage] = useState('');
  const [priority, setPriority] = useState(-1);

  /*   const validatAbout = (e) => {
    const about = e.target.value;
    if (about === '') {
      setValid(false);
      return;
    }
    setAbout(about);
  }; */

  const onMessageChange = (e) => {
    const message = e.target.value;
    setMessage(message);

    if (message === '') {
      setValid(false);
    }
    return setValid(true);
  };

  const priorit = [
    {
      name: 'Prio 1',
      value: 1,
    },
    {
      name: 'Prio 2',
      value: 2,
    },
    {
      name: 'Prio 3',
      value: 3,
    },
  ];
  const onChangePriority = (e, priority) => {
    e.preventDefault();
    setPriority(priority);
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
    console.log({ userId, about, message });
    const response = await fetch(
      'https://api.jiroy.com/api/slack/sendPrivateMessage',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          id: userId,
          message: message,
          priority: priority,
        }),
      }
    );
    const data = await response.json();

    // Add userId to Redux array
    console.log(data);
  };

  return (
    <MessageCard>
      <div className="p-text">
        <p>Prioritera</p>
      </div>
      <div className="priorit-box">
        {priorit.map((x) => (
          <button
            onClick={(e) => onChangePriority(e, x.value)}
            className="priority"
            value={x.value}
          >
            {x.name}
          </button>
        ))}
      </div>
      <div className="message-area">
        <p>Agenda</p>
        <textarea
          value={message}
          onChange={onMessageChange}
          type="buttton"
          placeholder="Agenda"
          className="message-Fields"
        ></textarea>
      </div>
      <button className="send-btn" onClick={sendMessage}>
        Send
      </button>
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

  .priorit-box {
    padding-left: 2rem;
    padding-right: 2rem;
    width: 100%;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .priority {
      width: 100%;
      height: 2.5rem;
      border-radius: 1rem;
      background: #c4c4c4;
      margin-right: 1rem;
      border: none;
    }
    .priority:hover {
      border: 1px solid #e41513;
      background: #c4c4c4;
    }
  }
  .message-area {
    padding-left: 2rem;
    padding-right: 2rem;
    width: 100%;
    max-width: 100%;

    .message-Fields {
      width: 100%;
      border-radius: 0.5rem;
      height: 6rem;
      border: none;
    }
    .message-Fields:focus {
      outline: none;
    }

    .success {
      border-color: #198754;
    }
    .error {
      border-color: #dc3545;
    }
  }
  .send-btn {
    margin-top: 2rem;
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
