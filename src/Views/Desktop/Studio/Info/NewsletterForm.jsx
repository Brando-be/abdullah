import { useState } from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  font-family: Suisse Works, Serif;
  margin-bottom: -8px;
  font-size: 2.6rem;
  @media (max-width: 860px) {
    font-size: 2rem;
  }
`;

const NewsLetterInput = styled.input`
  font-family: Base Grotesk, sans-serif;
  display: block;
  width: 400px;
  padding-left: 0px;
  padding-bottom: 4px;
  background: transparent;
  outline: none;
  border: none;
  border-bottom: 2px solid black;
  margin-top: 5px;
  font-size: 2rem;
  border-radius: 0;
  ::-webkit-input-placeholder {
    color: #ababab;
  }
  @media (max-width: 1000px) {
    width: 300px;
  }
  @media (max-width: 450px) {
    width: 200px;
  }
`;

const MsgCom = styled.p`
  font-size: 1.4rem;
  margin: 1rem 8rem 0 0;
  padding-bottom: 1rem;
`;

const PaddingDiv = styled.div`
  display: block;
  @media (max-width: 860px) {
    padding-bottom: 4rem;
  }
`;

const invalidEmailMsg = 'Please enter a valid email address';

const NewsletterForm = ({ status, message, subscribe }) => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (!email) return setError(invalidEmailMsg);

    subscribe({ EMAIL: email });
  };

  return (
    <PaddingDiv>
      <form
        onSubmit={handleFormSubmit}
        style={{
          display: 'flex',
          gap: '1.5rem',
          alignItems: 'end',
        }}
      >
        <div>
          <NewsLetterInput
            placeholder='E-Mail'
            type='email'
            onChange={(event) => setEmail(event?.target?.value ?? '')}
          />
        </div>
        <Btn type='Submit'>Send</Btn>
      </form>
      {'sending' === status && <MsgCom>{status}...</MsgCom>}
      {('error' === status || error) && (
        <MsgCom dangerouslySetInnerHTML={{ __html: error || message }} />
      )}
      {'success' === status && 'error' !== status && !error && (
        <MsgCom dangerouslySetInnerHTML={{ __html: message }} />
      )}
    </PaddingDiv>
  );
};

export default NewsletterForm;
