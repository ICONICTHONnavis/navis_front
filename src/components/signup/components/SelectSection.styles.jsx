import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 20px;
  }

  select {
    width: 585px;
    padding: 15px;
    margin-bottom: 16px;
    border-radius: 4px;
    border: 1px solid #ccc;

    appearance: none;

    &:disabled {
      background-color: #f0f0f0;
      cursor: not-allowed;
    }

    &:focus {
      outline-color: #007bff;
    }
  }
`;
