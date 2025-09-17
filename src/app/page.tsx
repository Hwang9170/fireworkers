
"use client";

import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import { useForm, ValidationError } from "@formspree/react";
export default function Home() {
  // QNA 데이터


  const qnaList = [
    {
      q: '참여 인원에 제한이 있나요?',
      a: '9월 20일(토) 남산편 - 남자 30명, 여자 30명\n9월 28일(일) 불꽃축제편 - 100명'
    },
    {
      q: '참여 신청 후 확인은 어떻게 하나요?',
      a: '입력해주신 개인정보로 신청 확정 문자가 발송됩니다.\n(9월 25일(목)까지 최종 문자 발송)'
    },
    {
      q: '후원 등 기타 문의는 어디로 하면 되나요?',
      a: '불꽃살림단 대표 이메일 fireworks_seoul@onair168.com 또는 02-706-0168로 연락주세요.'
    },
  ];

  // QNA 아코디언 컴포넌트
  function QnaAccordion() {
    const [openIdx, setOpenIdx] = React.useState(0);
    return (
      <div style={{ padding: '0 18px' }}>
        {qnaList.map((item, idx) => (
          <div key={idx} style={{ background: '#fff', borderRadius: 12, marginBottom: 16, boxShadow: '0 2px 8px #0001', overflow: 'hidden' }}>
            <button
              onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
              style={{
                width: '100%', textAlign: 'left', background: 'none', border: 'none', outline: 'none',
                padding: '18px 16px', fontWeight: 700, fontSize: '1.08rem', color: '#222', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer'
              }}
              aria-expanded={openIdx === idx}
            >
              <span style={{ color: '#2266e3', fontWeight: 900, marginRight: 8 }}>Q</span>
              <span style={{ flex: 1 }}>{item.q}</span>
              <span style={{ color: '#2266e3', fontSize: '1.3em', marginLeft: 8 }}>{openIdx === idx ? '▴' : '▾'}</span>
            </button>
            {openIdx === idx && (
              <div style={{ borderTop: '1px solid #e3f2fd', padding: '18px 16px', color: '#222', fontSize: '1.02rem', background: '#fafdff' }}>
                <div style={{ marginBottom: 8, fontWeight: 700, color: '#2266e3' }}>A</div>
                <div>{item.a}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
  // Formspree hook
  const [state, handleSubmit] = useForm("mgvljyne"); 

  // 스크롤 등장 & 패럴랙스
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.2 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    const onScroll = () => {
      const y = window.scrollY;
      document.querySelectorAll<HTMLElement>("[data-speed]").forEach((el) => {
        const s = Number(el.dataset.speed || 0);
        el.style.transform = `translate3d(0, ${y * s}px, 0)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div>
      {/* ===== HERO ===== */}
      <br /><br /><br /><br />
  <section className="hero" style={{ position: 'relative', overflow: 'hidden', isolation: 'isolate' }}>
        <div className="hero__titlewrap">
          {/* 캐릭터 배치 */}
          <div
            className="hero__characters"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              left: 0,
              top: 0,
              pointerEvents: "none",
              zIndex: 1,
            }}
          >
            <Image src="/characters/갈고리.png" alt="갈고리" width={60} height={70}
              style={{ position: "absolute", top: "2vw", right: "-10vw", transform: "rotate(-18deg) scale(1.1)" }} />
            <Image src="/characters/빗자루.png" alt="빗자루" width={60} height={60}
              style={{ position: "absolute", top: "30vw", right: "-10vw", transform: "rotate(22deg) scale(0.95)" }} />
            <Image src="/characters/집게.png" alt="집게" width={85} height={65}
              style={{ position: "absolute", bottom: "20vw", left: "7vw", transform: "rotate(-12deg) scale(1)" }} />
            <Image src="/characters/집게봉.png" alt="집게봉" width={100} height={60}
              style={{ position: "absolute", bottom: "40vw", right: "8vw", transform: "rotate(15deg) scale(1.05)" }} />
            <Image src="/characters/테리.png" alt="테리" width={75} height={75}
              style={{ position: "absolute", bottom: "2vw", left: "-4vw", transform: "translateX(-50%) rotate(-8deg) scale(1.15)" }} />
          </div>

          {/* 파워웨이브 */}
          <div className="hero__boom" data-speed="-0.03" aria-hidden>
            <Image src="/characters/파워웨이브.png" alt="파워웨이브" fill sizes="100vw" priority
              style={{ objectFit: "contain", objectPosition: "center" }} />
          </div>

          {/* 로고 */}
          <Image
            src="/mainlogo.png"
            alt="불꽃 살림단 로고"
            width={420}
            height={130}
            priority
            sizes="(max-width: 480px) 72vw, 420px"
            className="hero__logo reveal"
          />
          <p className="hero__subtitle reveal">
            <span style={{ color: "black" }}>
              불꽃은 9월에 피지만, <b> 변화는 지금입니다</b>
            </span>
          </p>
        </div>

        <div className="scroll-indicator" aria-hidden>
          SCROLL <span className="scroll-indicator__arrow">↓</span>
        </div>
      </section>

      {/* ===== 카드뉴스 ===== */}
      <section className="cardnews" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "32px", margin: "48px 0" }}>
        <Image src="/card/card1.png" alt="카드뉴스1" width={360} height={640} style={{ maxWidth: "100%", height: "auto", borderRadius: "16px", boxShadow: "0 4px 24px #0002" }} />
        <Image src="/card/card2.png" alt="카드뉴스2" width={360} height={640} style={{ maxWidth: "100%", height: "auto", borderRadius: "16px", boxShadow: "0 4px 24px #0002" }} />
        <Image src="/card/card3.png" alt="카드뉴스3" width={360} height={640} style={{ maxWidth: "100%", height: "auto", borderRadius: "16px", boxShadow: "0 4px 24px #0002" }} />
        <Image src="/card/card4.png" alt="카드뉴스4" width={360} height={640} style={{ maxWidth: "100%", height: "auto", borderRadius: "16px", boxShadow: "0 4px 24px #0002" }} />

        {/* 인스타 링크 버튼 */}
        <a
          href="https://www.instagram.com/fireworks_seoul/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex", alignItems: "center", gap: "10px",
            background: "#fff", borderRadius: "12px", boxShadow: "0 2px 12px #0001",
            padding: "12px 24px", margin: "24px 0 0 0", textDecoration: "none",
            fontWeight: 600, fontSize: "1.1rem", color: "#222", transition: "box-shadow 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.boxShadow = "0 4px 24px #e1306c55")}
          onMouseOut={(e) => (e.currentTarget.style.boxShadow = "0 2px 12px #0001")}
        >
          <span style={{ display: "inline-block", width: 28, height: 28 }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#e1306c" width="28" height="28">
              <rect width="448" height="512" rx="100" fill="#fff" />
              <path d="M224 123c-54.7 0-99 44.3-99 99s44.3 99 99 99 99-44.3 99-99-44.3-99-99-99zm0 163c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zm146.4-101.6c0 14.1-11.5 25.6-25.6 25.6s-25.6-11.5-25.6-25.6 11.5-25.6 25.6-25.6 25.6 11.5 25.6 25.6zm76.1 25.6c-1.7-35.3-9.9-66.7-36.2-92.9S370.3 49.7 335 48c-35.3-1.7-141.3-1.7-176.6 0-35.3 1.7-66.7 9.9-92.9 36.2S49.7 141.7 48 177c-1.7 35.3-1.7 141.3 0 176.6 1.7 35.3 9.9 66.7 36.2 92.9s57.6 34.5 92.9 36.2c35.3 1.7 141.3 1.7 176.6 0 35.3-1.7 66.7-9.9 92.9-36.2s34.5-57.6 36.2-92.9c1.7-35.3 1.7-141.3 0-176.6zM398.8 388c-7.8 19.6-22.9 34.7-42.5 42.5-29.5 11.7-99.5 9-132.3 9s-102.8 2.6-132.3-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.5-9-99.5-9-132.3s-2.6-102.8 9-132.3c7.8-19.6 22.9-34.7 42.5-42.5 29.5-11.7 99.5-9 132.3-9s102.8-2.6 132.3 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.5 9 99.5 9 132.3s2.6 102.8-9 132.3z" />
            </svg>
          </span>
          불꽃살림단 인스타그램
        </a>
      </section>

      <section className="cardnews" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "32px", margin: "48px 0" }}>

        <Image src="/run.png" alt="카드뉴스1" width={360} height={640} style={{ maxWidth: "100%", height: "auto", borderRadius: "16px", boxShadow: "0 4px 24px #0002" }} />

      
    </section>

      {/* ===== 신청 섹션 (카드뉴스 다음) ===== */}
      <section id="signup" className="signup reveal">
  <h3 style={{ color: "#222" }}>불꽃달림단 남산편 참가 신청</h3>
        <p className="signup__meta">
            일시: <b style={{ color: "#222" }}>2025년 9월 20일(토) 오전 10시</b> • 정원: 남자 30명 / 여자 30명<br />
          코스: 후암동 · 충무로 · 녹사평 출발 → 남산타워 도착
        </p>

        {state.succeeded ? (
          <div className="signup__success">
            <h4>신청이 접수되었습니다 🎉</h4>
            <p>모집 마감 전 안내 문자로 상세 정보를 보내드릴게요. 함께 걸을 날을 기다릴게요!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="signup__form" noValidate>
            {/* 숨김 필드(이벤트 메타) */}
            <input type="hidden" name="event" value="불꽃달림단 남산편" />
            <input type="hidden" name="event_date" value="2025-09-20 10:00 KST" />
            <input type="hidden" name="subject" value="불꽃달림단 남산편 참가 신청" />

            {/* 이름 */}
            <label className="field">
              <span>이름 <em>*</em></span>
                <input name="이름" type="text" placeholder="홍길동" required style={{ color: "#222" }} />
            </label>

            {/* 성별 */}
            <fieldset className="field">
              <legend>성별 <em>*</em></legend>
              <div className="choices">
                  <label style={{ color: "#222" }}><input type="radio" name="성별" value="남자" required /> 남자</label>
                  <label style={{ color: "#222" }}><input type="radio" name="성별" value="여자" required /> 여자</label>
              </div>
            </fieldset>

            {/* 연락처 */}
            <label className="field">
              <span>연락처(휴대폰) <em>*</em></span>
                <input name="연락처" type="tel" inputMode="tel" placeholder="010-1234-5678" pattern="^[0-9+\-\s()]{8,}$" required style={{ color: "#222" }} />
              <small className="hint">숫자/하이픈만 입력해도 돼요.</small>
            </label>

            {/* 출발 장소 */}
            <fieldset className="field">
              <legend>원하는 출발장소 <em>*</em></legend>
              <div className="choices">
                  <label style={{ color: "#222" }}><input type="radio" name="출발장소" value="후암동" required /> 후암동</label>
                  <label style={{ color: "#222" }}><input type="radio" name="출발장소" value="충무로" required /> 충무로</label>
                  <label style={{ color: "#222" }}><input type="radio" name="출발장소" value="녹사평" required /> 녹사평</label>
              </div>
            </fieldset>

            {/* 개인정보 수집·이용 동의 */}
            <details className="policy">
              <summary>개인정보 수집·이용 동의 전문 펼치기</summary>
              <div className="policy__box">
                <p><b>[개인정보 수집·이용 동의]</b><br />
                불꽃달림단 남산편 참가 신청과 운영을 위해 아래와 같이 개인정보를 수집·이용합니다.</p>
                <p>수집 항목 : 성명, 성별, 연락처(휴대전화)</p>
                <p>수집 목적 : 참가자 모집·관리, 행사 진행 안내, 보험 가입 및 안전관리, 추후 활동 안내</p>
                <p>보유 및 이용기간 : 행사 종료 후 3개월 이내 파기 (단, 법령에 따라 보존할 필요가 있는 경우 해당 기간까지 보관)</p>
                <p>동의 거부권 및 불이익 : 개인정보 수집·이용에 동의하지 않을 수 있으며, 이 경우 참가 신청이 제한될 수 있습니다.</p>
                <p>위 내용을 충분히 이해하였으며, 개인정보 수집·이용에 동의합니다.</p>
              </div>
            </details>
            <label className="field inline">
              <input type="checkbox" name="개인정보_동의" value="동의함" required /> 동의함 <em>*</em>
            </label>

            {/* 스팸 방지(허니팟) */}
            <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

            <button type="submit" className="btn btn--primary" disabled={state.submitting}>
              {state.submitting ? "제출 중..." : "신청하기"}
            </button>

            <ValidationError errors={state.errors} />
          </form>
        )}
      </section>

{/* 고정 하단 CTA */}
<div className="floating-cta" aria-live="polite">
  <a href="#signup" className="floating-cta__inner" aria-label="남산런 신청하러 가기">
    <strong>남산런 신청하러 가기 !</strong>
    <span className="floating-cta__arrow">↗</span>
  </a>
</div>

      {/* ===== QNA 섹션 ===== */}
      <section className="qna-section" style={{ maxWidth: 600, margin: '56px auto', background: '#f6fafd', borderRadius: 18, boxShadow: '0 4px 24px #0001', padding: '32px 0' }}>
        <h2 style={{ textAlign: 'center', color: '#2266e3', fontWeight: 900, fontSize: '2.2rem', marginBottom: '24px', letterSpacing: '-1px' }}>QNA</h2>
        <QnaAccordion />
      </section>

      {/* QNA 아코디언 컴포넌트 */}

      {/* ===== 푸터 ===== */}
      <footer className="sfoc-footer" style={{ background: 'rgba(255, 0, 0, 1)', color: '#fff', textAlign: 'center', padding: '48px 0 32px', marginTop: '64px' }}>
        <div style={{ marginBottom: '18px' }}>
          <img src="/mainlogo.png" alt="불꽃살림단 로고" style={{ height: '48px', marginBottom: '12px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
          <div style={{ fontSize: '1rem', opacity: 0.85 }}>불꽃은 9월에 피지만, 변화는 지금입니다
</div>
        </div>
        <div style={{ fontSize: '1rem', lineHeight: 1.7, marginBottom: '18px' }}>
          이메일 : fireworks_seoul@onair168.com<br />
          전화번호 : 02-706-0168
        </div>
        <div style={{ fontSize: '0.95rem', opacity: 0.7, marginBottom: '18px' }}>
          © 불꽃 살림단. All Rights Reserved.
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '18px', marginTop: '12px' }}>
          <a href="https://www.youtube.com/@fireworks_seoul" target="_blank" rel="noopener noreferrer" aria-label="유튜브" style={{ background: '#fff', borderRadius: '8px', padding: '8px', display: 'inline-block' }}>
            <img src="/youtube.png" alt="유튜브" style={{ width: '40px', height: '28px' }} />
          </a>
          <a href="https://www.instagram.com/fireworks_seoul" target="_blank" rel="noopener noreferrer" aria-label="인스타그램" style={{ background: '#fff', borderRadius: '8px', padding: '8px', display: 'inline-block' }}>
            <img src="/insta.png" alt="인스타그램" style={{ width: '28px', height: '28px' }} />
          </a>
        </div>
      </footer>

      {/* 스타일(섹션 한정) */}
      <style jsx>{`
        .signup {
          max-width: 760px;
          margin: 56px auto 32px;
          padding: 28px;
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.08);
          border: 1px solid #eee;
        }
        .signup h3 { font-size: 1.6rem; margin: 0 0 8px; }
        .signup__meta { color: #555; line-height: 1.6; margin-bottom: 18px; }
        .signup__form { display: grid; gap: 16px; }
        .field { display: flex; flex-direction: column; gap: 8px; }
        .field.inline { flex-direction: row; align-items: center; gap: 8px; }
        .field span, .field legend { font-weight: 600; }
        .field em { color: #d00; font-style: normal; margin-left: 4px; }
        .choices { display: flex; gap: 16px; flex-wrap: wrap; }
        input[type="text"], input[type="tel"] {
          padding: 12px 14px; border: 1px solid #ddd; border-radius: 10px; font-size: 1rem;
        }
        input[type="text"]:focus, input[type="tel"]:focus {
          outline: none; border-color: #111; box-shadow: 0 0 0 3px rgba(0,0,0,0.06);
        }
        .policy { margin-top: 4px; }
        .policy__box {
          margin-top: 10px; padding: 12px; background: #fafafa; border: 1px solid #eee; border-radius: 12px;
          color: #333; line-height: 1.6;
        }
        .btn.btn--primary {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 12px 18px; border-radius: 12px; background: #111; color: #fff;
          border: 1px solid #111; font-weight: 700; cursor: pointer; transition: transform .05s ease;
        }
        .btn.btn--primary:disabled { opacity: .5; cursor: not-allowed; }
        .btn.btn--primary:active { transform: translateY(1px); }
        .signup__success {
          padding: 18px; border-radius: 12px; background: #f6fff6; border: 1px solid #d7f2d7; color: #0f6a0f;
        }
        .error { color: #b00020; font-weight: 600; }
        /* ===== 고정 하단 CTA ===== */
.floating-cta{
  position:fixed;
  left:50%;
  bottom:clamp(10px, env(safe-area-inset-bottom, 0px) + 10px, 24px);
  transform:translateX(-50%);
  z-index:9999;
  width:min(95vw, 900px);       /* 넓게 */
  pointer-events:none;          /* 컨테이너는 클릭 차단 */
}

.floating-cta__inner{
  pointer-events:auto;          /* 링크만 클릭 가능 */
  display:flex; align-items:center; justify-content:center; gap:10px;
  width:100%;
  padding:16px 22px;
  border-radius:18px;
  font-weight:900; letter-spacing:.02em; text-decoration:none;
  color:#001;

  /* 스티커/배너 느낌 */
  background:
    radial-gradient(circle at 12% 50%, rgba(255,255,255,.6) 0 18%, transparent 19%) no-repeat,
    radial-gradient(circle at 88% 50%, rgba(255,255,255,.6) 0 18%, transparent 19%) no-repeat,
    linear-gradient(90deg, #44e07c, #39c964);
  box-shadow:var(--shadow), 0 12px 30px rgba(0,0,0,.18);
  outline:3px solid #193a21;
  outline-offset:-6px;
  transition:transform .12s ease, box-shadow .12s ease;
}

.floating-cta__inner:hover{ transform:translateY(-2px); box-shadow:var(--shadow), 0 16px 36px rgba(0,0,0,.22); }
.floating-cta__arrow{ font-size:1.25rem; line-height:1; }

/* 다크/핑크 배경 위에서도 읽히도록 */
@media (min-width: 768px){
  .floating-cta{ width:min(92vw, 960px); }
}
      `}</style>
    </div>
  );
}
