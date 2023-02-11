import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  .week {
    display: grid;
    grid-template-rows: repeat(7, minmax(0, 1fr));
    gap: 12px;
    grid-auto-flow: row;
    .week-day {
      color: #a1a1aa;
      font-size: 20px;
      width: 40px;
      height: 40px;
      justify-content: center;
      align-items: center;
      display: flex;
      font-weight: bold;
    }
  }
  .habit-table {
    display: grid;
    grid-template-rows: repeat(7, minmax(0, 1fr));
    gap: 12px;
    grid-auto-flow: column;
    .habit-placeholder {
      width: 40px;
      height: 40px;
      background-color: #18181b;
      border: 2px solid #27272a;
      border-radius: 8px;
      opacity: 30%;
      cursor: not-allowed;
    }
  }
`;
