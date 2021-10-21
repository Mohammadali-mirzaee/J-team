import styled from '@emotion/styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserToGreenAction } from '../../redux/action';
import Snackbar from '@mui/material/Snackbar';

const Message = ({ userId }) => {
  const [valid, setValid] = useState(false);
  const [message, setMessage] = useState('');
  const [priority, setPriority] = useState(-1);
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const [snackbar, setSnackbar] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = snackbar;

  const priorit = useSelector((state) => state.reducer.priorit);

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

  const onChangePriority = (e, priority) => {
    e.preventDefault();
    setPriority(priority);
    setSnackbar({ ...snackbar, open: true });
  };

  const handleClose = () => {
    setSnackbar({ ...snackbar, open: false });
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
    if (priority < 0) {
      alert('Välj prioritet');
      return;
    }
    if (message === '') {
      alert('Skriv din agenda');
      return;
    }
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

  const getColorClassName = (index) => {
    /* if (index !== priority) {
      return '';
    } */
    switch (index) {
      case 1:
        return 'color-red';
      case 2:
        return 'color-blue';
      case 3:
        return 'color-yellow';
      default:
        return '';
    }
  };

  return (
    <MessageCard>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="You Are Clicked"
        key={vertical + horizontal}
      />
      <div className="p-text">
        <p>Prioritera</p>
      </div>
      <div className="priorit-box">
        {priorit.map((x) => (
          <button
            onClick={(e) => onChangePriority(e, x.value)}
            className={getColorClassName(x.value)}
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

  .MuiPaper-root {
    background: #eeeeee;
    display: flex;
    justify-content: center;
    font-size: 16px;
  }
  .MuiSnackbarContent-message {
    color: #111;
  }
  .priorit-box {
    padding-left: 2rem;
    padding-right: 2rem;
    width: 100%;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      width: 100%;
      height: 2.5rem;
      border-radius: 1rem;
      margin-right: 1rem;
      background: #c4c4c4;
      border: none;
      color: #111;
      cursor: pointer;
    }
    button:hover {
      border: 1px solid #eeeeee;
    }
    .color-red {
      width: 100%;
      height: 2.5rem;
      border-radius: 1rem;
      background: red;
      margin-right: 1rem;
      border: none;
    }
    .color-blue {
      width: 100%;
      height: 2.5rem;
      border-radius: 1rem;
      background: green;
      margin-right: 1rem;
      border: none;
      background: blue;
    }
    .color-yellow {
      width: 100%;
      height: 2.5rem;
      border-radius: 1rem;
      background: green;
      margin-right: 1rem;
      border: none;
      background: yellow;
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
    font-size: 1.4rem;

    @media (max-width: 768px) {
      margin-top: 2rem;
    }
  }
  .send-btn:hover {
    background: #e41513;
  }
`;
