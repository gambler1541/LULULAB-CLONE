import styled from 'styled-components';

export const AppointmentWrap = styled.div`
  .appointContainer {
    .appointHeader {
      max-width: 68.75rem;
      margin: 0 auto;
      margin-top: 0.938rem;
      margin-bottom: 3rem;
      border-bottom: 0.063rem solid black;
      text-align: center;

      .title {
        margin-bottom: 0.938rem;

        .titleFont {
          font-size: 1.563rem;
        }
      }
    }

    .appointContents {
      max-width: 68.75rem;
      margin: 0 auto;
      border: 0.063rem solid black;
      border-radius: 0.313rem;

      display: flex;

      .calendarBox {
        width: 45%;

        // 박명배 추가
        .highlight {
          background: red;
          color: yellow;
        }

        .react-calendar {
          margin-left: 3rem;
          margin-top: 3rem;
          margin-bottom: 3rem;
        }
      }

      .appointBody {
        width: 55%;

        .appointBtn {
          width: 15.625rem;
          height: 12.5rem;
          margin-top: 3rem;
          margin-right: 50px;
          text-align: center;
          display: inline-block;
          border: 0.063rem solid grey;
          border-radius: 0.625rem;
          cursor: pointer;

          .appointBtnTitle {
            margin-top: 0.938rem;
            margin-bottom: 0.938rem;
            font-size: 1.25rem;
            font-weight: 600;
            display: block;
          }

          img {
            width: 3.125rem;
            margin-bottom: 0.938rem;
          }

          .appointBtnText {
            font-size: 1.063rem;
            display: block;
          }
        }

        .notice {
          margin-top: 2rem;
          padding-right: 2.9rem;
          font-size: 1.438rem;
          text-align: center;
        }
      }
    }
  }
`;
