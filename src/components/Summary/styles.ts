import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -5rem;

  div {
    background: var(--shapePrincipal);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--title);

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: normal;
      line-height: 3rem;
    }

    &.total {
      background: var(--green);
      color: var(--shapePrincipal);
    }
  }
`;
