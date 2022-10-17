import { React, useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { AppointmentWrap } from './Appointment.styled';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

const Appointment = () => {
  const [appointList, setAppointList] = useState([]); // 전체 예약 데이터
  const [appointDateList, setAppointDateList] = useState([]); // 예약된 날짜의 모든 데이터
  const [filterDateList, setFilterDateList] = useState([]); // 예약이 꽉 찬 날짜 데이터
  const navigate = useNavigate();

  const GoToRegistration = () => {
    navigate('/registration');
  };

  const countByElement = (arr, val) => {
    // 배열에 담긴 val 값이 몇개 있는지 확인하는 함수
    return arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
  };

  const convertDigitIn = str => {
    // 2022/10/22 => 22-10-2022
    return str.split('/').reverse().join('-');
  };

  const getDate = (arr, newArr) => {
    // newArr의 최종모습은 => ['2022/10/07', '2022/10/08'..]
    arr.map(item => {
      newArr.push(item.appointmentDate);
    });
    return newArr;
  };

  const Message = date => {
    if (filterDateList.find(x => x === moment(date).format('DD-MM-YYYY'))) {
      alert('예약이 가득찼습니다.');
    }
  };

  useEffect(() => {
    fetch('/data/Appointment.json')
      .then(res => res.json())
      .then(data => {
        setAppointList(data.appointment);
        setAppointDateList(getDate(data.appointment, []));
      });
  }, []);

  useEffect(() => {
    let filterDate = [];
    appointDateList.map(item => {
      if (countByElement(appointDateList, item) == 9) {
        filterDate.push(convertDigitIn(item));
      }
      // 중복된 날짜 제거
      setFilterDateList(() =>
        filterDate.filter((el, index) => filterDate.indexOf(el) === index)
      );
    });
  }, [appointList]);

  return (
    <AppointmentWrap>
      <div className="appointContainer">
        <div className="appointHeader">
          <div className="title">
            <span className="titleFont">온라인 예약</span>
          </div>
        </div>
        <div className="appointContents">
          <div className="calendarBox">
            <Calendar
              tileClassName={({ date }) => {
                if (
                  filterDateList.find(
                    x => x === moment(date).format('DD-MM-YYYY')
                  )
                ) {
                  return 'highlight';
                }
              }}
              onChange={Message}
            />
          </div>
          <div className="appointBody">
            <div className="appointBtn" onClick={GoToRegistration}>
              <span className="appointBtnTitle">진료예약</span>
              <img src="/images/document.png" />
              <span className="appointBtnText">
                원하시는 날짜를 선택 후
                <br />
                예약 해주세요.
              </span>
            </div>
            <div className="appointBtn">
              <span className="appointBtnTitle">상담예약</span>
              <img src="/images/telephone.png" />
              <span className="appointBtnText">
                전문상담원이
                <br />
                의료진 추천을 도와드립니다.
              </span>
            </div>
            <p className="notice">
              예약은 약속 입니다.
              <br />
              병원도 고객도 약속시간을 지키려는 노력이 중요합니다.
            </p>
          </div>
        </div>
      </div>
    </AppointmentWrap>
  );
};

export default Appointment;
