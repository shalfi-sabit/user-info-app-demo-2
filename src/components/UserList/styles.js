import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 1.5em;
  max-width: 600px;
  width: 100%;
  padding: 2em;
  border-radius: 40px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  padding: 0.8em 0;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const H3 = styled.h3`
  margin: 0;
  padding: 0;
`;

export const P = styled.div``;
