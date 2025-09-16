"use client";

import { useEffect } from "react";
import Image from "next/image";

const characters = [
  { name: "갈고리", src: "/characters/갈고리.png", side: "left" as const },
  { name: "빗자루", src: "/characters/빗자루.png", side: "right" as const },
  { name: "집게", src: "/characters/집게.png", side: "left" as const },
  { name: "집게봉", src: "/characters/집게봉.png", side: "right" as const },
  { name: "테리", src: "/characters/테리.png", side: "left" as const },
];

export default function Home() {
  // 스크롤 등장(좌우 슬라이드 + 팝) & 약한 패럴랙스
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
      <br></br>    
      <br></br>
      <br></br>
      <br></br>
     

      <section className="hero">
        <div className="hero__titlewrap">
            {/* 캐릭터 이미지 여러 군데 배치 */}
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
              {/* 좌상단 갈고리 */}
              <Image
                src="/characters/갈고리.png"
                alt="갈고리"
                width={70}
                height={70}
                style={{
                  position: "absolute",
                  top: "2vw",
                  right: "-10vw",
                  transform: "rotate(-18deg) scale(1.1)",
                }}
              />
              {/* 우상단 빗자루 */}
              <Image
                src="/characters/빗자루.png"
                alt="빗자루"
                width={60}
                height={60}
                style={{
                  position: "absolute",
                  top: "30vw",
                  right: "-10vw",
                  transform: "rotate(22deg) scale(0.95)",
                }}
              />
              {/* 좌하단 집게 */}
              <Image
                src="/characters/집게.png"
                alt="집게"
                width={75}
                height={65}
                style={{
                  position: "absolute",
                  bottom: "20vw",
                  left: "7vw",
                  transform: "rotate(-12deg) scale(1)",
                }}
              />
              {/* 우하단 집게봉 */}
              <Image
                src="/characters/집게봉.png"
                alt="집게봉"
                width={100}
                height={60}
                style={{
                  position: "absolute",
                  bottom: "40vw",
                  right: "8vw",
                  transform: "rotate(15deg) scale(1.05)",
                }}
              />
              {/* 중앙 아래 테리 */}
              <Image
                src="/characters/테리.png"
                alt="테리"
                width={75}
                height={75}
                style={{
                  position: "absolute",
                  bottom: "2vw",
                  left: "-4vw",
                  transform: "translateX(-50%) rotate(-8deg) scale(1.15)",
                }}
              />
            </div>
          {/* 짜잔(파워웨이브) : 타이틀 아래, 하단 고정 + 살짝 패럴랙스 */}
          <div className="hero__boom" data-speed="-0.03" aria-hidden>
            <Image
              src="/characters/파워웨이브.png"
              alt="파워웨이브"
              fill
              sizes="100vw"
              priority
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </div>

          {/* 로고는 fill 쓰지 말고 고정 크기로 중앙 배치 */}
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
              뜨거워진 축제를 식혀주는 <b>쿨~한 우리!</b>
            </span>
          </p>
        </div>

        <div className="scroll-indicator" aria-hidden>
          SCROLL <span className="scroll-indicator__arrow">↓</span>
        </div>
      </section>


      {/* 카드뉴스 세로 배치 */}
      <section className="cardnews" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "32px", margin: "48px 0" }}>
        <Image src="/card/card1.png" alt="카드뉴스1" width={360} height={640} style={{ maxWidth: "100%", height: "auto", borderRadius: "16px", boxShadow: "0 4px 24px #0002" }} />
        <Image src="/card/card2.png" alt="카드뉴스2" width={360} height={640} style={{ maxWidth: "100%", height: "auto", borderRadius: "16px", boxShadow: "0 4px 24px #0002" }} />
        <Image src="/card/card3.png" alt="카드뉴스3" width={360} height={640} style={{ maxWidth: "100%", height: "auto", borderRadius: "16px", boxShadow: "0 4px 24px #0002" }} />
        <Image src="/card/card4.png" alt="카드뉴스4" width={360} height={640} style={{ maxWidth: "100%", height: "auto", borderRadius: "16px", boxShadow: "0 4px 24px #0002" }} />
        {/* 인스타그램 링크 버튼 */}
        <a
          href="https://www.instagram.com/fireworks_seoul/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0 2px 12px #0001",
            padding: "12px 24px",
            margin: "24px 0 0 0",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "1.1rem",
            color: "#222",
            transition: "box-shadow 0.2s",
          }}
          onMouseOver={e => (e.currentTarget.style.boxShadow = "0 4px 24px #e1306c55")}
          onMouseOut={e => (e.currentTarget.style.boxShadow = "0 2px 12px #0001")}
        >
          {/* 인스타그램 공식 SVG 아이콘 */}
          <span style={{ display: "inline-block", width: "28px", height: "28px" }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#e1306c" width="28" height="28">
              <rect width="448" height="512" rx="100" fill="#fff" />
              <path d="M224 123c-54.7 0-99 44.3-99 99s44.3 99 99 99 99-44.3 99-99-44.3-99-99-99zm0 163c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zm146.4-101.6c0 14.1-11.5 25.6-25.6 25.6s-25.6-11.5-25.6-25.6 11.5-25.6 25.6-25.6 25.6 11.5 25.6 25.6zm76.1 25.6c-1.7-35.3-9.9-66.7-36.2-92.9S370.3 49.7 335 48c-35.3-1.7-141.3-1.7-176.6 0-35.3 1.7-66.7 9.9-92.9 36.2S49.7 141.7 48 177c-1.7 35.3-1.7 141.3 0 176.6 1.7 35.3 9.9 66.7 36.2 92.9s57.6 34.5 92.9 36.2c35.3 1.7 141.3 1.7 176.6 0 35.3-1.7 66.7-9.9 92.9-36.2s34.5-57.6 36.2-92.9c1.7-35.3 1.7-141.3 0-176.6zM398.8 388c-7.8 19.6-22.9 34.7-42.5 42.5-29.5 11.7-99.5 9-132.3 9s-102.8 2.6-132.3-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.5-9-99.5-9-132.3s-2.6-102.8 9-132.3c7.8-19.6 22.9-34.7 42.5-42.5 29.5-11.7 99.5-9 132.3-9s102.8-2.6 132.3 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.5 9 99.5 9 132.3s2.6 102.8-9 132.3z" />
            </svg>
          </span>
          불꽃살림단 인스타그램
        </a>
      </section>


      {/* ===== CTA ===== */}
      <section className="cta reveal">
        <h3>불꽃은 5분, 쓰레기는 수백 년</h3>
        <p>지금 함께 행동하면 축제를 더 멋지게 만들 수 있어요.</p>
        <a className="btn btn--primary" href="#">
          참여 신청하기
        </a>
      </section>
      

    </div>
  );
}
