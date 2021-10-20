import styled from '@emotion/styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserToGreenAction } from '../../redux/action';

const Message = ({ userId }) => {
  const [valid, setValid] = useState(false);
  const [about, setAbout] = useState('');
  const [message, setMessage] = useState('');
  const [priority, setPriority] = useState(-1);
  const [name, setName] = useState('');
  const [prioColor, setPrioColor] = useState(false);
  const dispatch = useDispatch();

  /*  const users = useSelector((state) => state.reducer.users);

  console.log(users.map((x) => x.status));
 */
  /*   const validatAbout = (e) => {
    const about = e.target.value;
    if (about === '') {
      setValid(false);
      return;
    }
    setAbout(about);
  }; */

  const onNameChange = (e) => {
    const name = e.target.value;
    setName(name);
    if (message === '') {
      setValid(false);
    }
    return setValid(true);
  };

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
      prio: 'Prio 1',
      value: 1,
    },
    {
      prio: 'Prio 2',
      value: 2,
    },
    {
      prio: 'Prio 3',
      value: 3,
    },
  ];

  const onChangePriority = (e, priority) => {
    e.preventDefault();
    setPriority(priority);
    setPrioColor(true);
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
          name: name,
        }),
      }
    );
    dispatch(setUserToGreenAction(userId));
    const data = await response.json();
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
            className={prioColor ? 'prioColor' : 'priority '}
            value={x.value}
          >
            {x.prio}
          </button>
        ))}
      </div>

      <div className="message-area">
        <p>Name</p>
        <input value={name} onChange={onNameChange} placeholder="Your Name" />
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
    width: 320px;
    height: 400px;
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
    .prioColor {
      width: 100%;
      height: 2.5rem;
      border-radius: 1rem;
      background: green;
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

    > p {
      margin-top: 0.5rem;
      padding-left: 1px;
      font-size: small;
      font-weight: 500;
      padding-left: 5px;
      margin-bottom: 0.5rem;
    }
    input {
      margin-top: 0;
      width: 50%;
      height: 2rem;
      border: none;
      border-radius: 0.5rem;
    }
    input:focus {
      outline: none;
    }

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

    @media (max-width: 768px) {
      margin-top: 2rem;
    }
  }
  button:hover {
    background: #e41513;
  }
`;
