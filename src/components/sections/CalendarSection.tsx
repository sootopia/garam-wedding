/** @jsxImportSource @emotion/react */
import * as S from './CalendarSection.styles';
import { useTheme } from '@emotion/react';
import { useEffect, useState, useMemo } from 'react';

const CalendarSection = () => {
  const theme = useTheme();

  const weddingDate: Date = new Date('2025-03-15 11:00:00');
  const [now, setNow] = useState<Date>(new Date());

  const setToMidnight = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  };

  const today = setToMidnight(new Date());

  useEffect(() => {
    const updateTimer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(updateTimer);
  }, [now]);

  const computedDatas = useMemo(() => {
    const diff = weddingDate.getTime() - today.getTime();
    const diffNow = weddingDate.getTime() - now.getTime();
    const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor((diffNow % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffNow % (1000 * 60 * 60)) / (1000 * 60));
    const diffSeconds = Math.floor((diffNow % (1000 * 60)) / 1000);
    let message;

    if (diffDays > 0) {
      message = `기도 ❤️ 가람 결혼식까지 <strong>${Math.abs(diffDays)}일</strong> 남았어요.`;
    } else if (diffDays < 0) {
      message = `기도 ❤️ 가람 결혼식일로부터 <strong>${Math.abs(diffDays)}일</strong> 지났어요.`;
    } else {
      message = `기도 ❤️ 가람 결혼식 당일이에요. 많은 축하 부탁드려요.`;
    }

    return { diffDays, diffHours, diffMinutes, diffSeconds, message };
  }, [now]);

  return (
    <section css={S.calendarSection}>
      <div className="container">
        {/* 달력 영역 */}
        <div css={S.calendarWrapper(theme)}>
          <h2>2025. 03. 15</h2>
          <div>
            <div css={S.calendarHeader} className="grid grid-cols-7">
              <div>일</div>
              <div>월</div>
              <div>화</div>
              <div>수</div>
              <div>목</div>
              <div>금</div>
              <div>토</div>
            </div>
            <div css={S.calendarDays} className="grid grid-cols-7">
              <div className="sunday other__month">
                <span>23</span>
              </div>
              <div className="other__month">
                <span>24</span>
              </div>
              <div className="other__month">
                <span>25</span>
              </div>
              <div className="other__month">
                <span>26</span>
              </div>
              <div className="other__month">
                <span>27</span>
              </div>
              <div className="other__month">
                <span>28</span>
              </div>
              <div>
                <span>1</span>
              </div>
              <div className="sunday">
                <span>2</span>
              </div>
              <div>
                <span>3</span>
              </div>
              <div>
                <span>4</span>
              </div>
              <div>
                <span>5</span>
              </div>
              <div>
                <span>6</span>
              </div>
              <div>
                <span>7</span>
              </div>
              <div>
                <span>8</span>
              </div>
              <div className="sunday">
                <span>9</span>
              </div>
              <div>
                <span>10</span>
              </div>
              <div>
                <span>11</span>
              </div>
              <div>
                <span>12</span>
              </div>
              <div>
                <span>13</span>
              </div>
              <div>
                <span>14</span>
              </div>
              <div className="active">
                <span>15</span>
              </div>
              <div className="sunday">
                <span>16</span>
              </div>
              <div>
                <span>17</span>
              </div>
              <div>
                <span>18</span>
              </div>
              <div>
                <span>19</span>
              </div>
              <div>
                <span>20</span>
              </div>
              <div>
                <span>21</span>
              </div>
              <div>
                <span>22</span>
              </div>
              <div className="sunday">
                <span>23</span>
              </div>
              <div>
                <span>24</span>
              </div>
              <div>
                <span>25</span>
              </div>
              <div>
                <span>26</span>
              </div>
              <div>
                <span>27</span>
              </div>
              <div>
                <span>28</span>
              </div>
              <div>
                <span>29</span>
              </div>
              <div className="sunday">
                <span>30</span>
              </div>
              <div>
                <span>31</span>
              </div>
              <div className="other__month">
                <span>1</span>
              </div>
              <div className="other__month">
                <span>2</span>
              </div>
              <div className="other__month">
                <span>3</span>
              </div>
              <div className="other__month">
                <span>4</span>
              </div>
              <div className="other__month sunday">
                <span>5</span>
              </div>
            </div>
          </div>
        </div>
        {/* 달력 영역 */}

        {/* 카운트다운 영역 */}
        <div css={S.countdownWrapper} className="flex justify-center gap-[22px]">
          <div css={S.countdownItem} data-aos="fade-up">
            <span>DAYS</span>
            <div css={S.countdownCircle}>{computedDatas.diffDays}</div>
          </div>
          <div css={S.countdownItem} data-aos="fade-up" data-aos-delay="100">
            <span>HOUR</span>
            <div css={S.countdownCircle}>{computedDatas.diffHours}</div>
          </div>
          <div css={S.countdownItem} data-aos="fade-up" data-aos-delay="200">
            <span>MIN</span>
            <div css={S.countdownCircle}>{computedDatas.diffMinutes}</div>
          </div>
          <div css={S.countdownItem} data-aos="fade-up" data-aos-delay="300">
            <span>SEC</span>
            <div css={S.countdownCircle}>{computedDatas.diffSeconds}</div>
          </div>
        </div>
        {/* 카운트다운 영역 */}

        <p
          css={S.bottomText}
          data-aos="fade-up"
          dangerouslySetInnerHTML={{ __html: computedDatas.message }}
        ></p>
      </div>
    </section>
  );
};

export default CalendarSection;
