import styles from "./page.module.css";

export const metadata = {
  title: "개인정보처리방침 | NEXTOMO",
  description: "개인정보처리방침 페이지입니다.",
};

export default function Privacy() {
  return (
    <div className={styles.container}>
      <h1>개인정보처리방침</h1>

      <section className={styles.section}>
        <p className={styles.lastUpdate}>2024년 12월 27일</p>
        <p className={styles.intro}>
          나윱이라네(이하 '회사')는 회원의 개인정보를 중요시하며, 「개인정보
          보호법」등 관련 법령을 준수하고 있습니다.
        </p>
      </section>

      <section className={styles.section}>
        <h2>1. 수집하는 개인정보 항목</h2>
        <p>
          회사는 회원가입, 상담, 서비스 신청 등을 위해 아래와 같은 개인정보를
          수집하고 있습니다.
        </p>
        <ul>
          <li>필수항목: 이름, 아이디, 비밀번호, 이메일</li>
          <li>자동수집항목: IP주소, 접속 로그, 쿠키</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>2. 개인정보의 수집 및 이용목적</h2>
        <p>회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.</p>
        <ul>
          <li>
            회원 관리: 회원제 서비스 이용에 따른 본인확인, 개인식별, 불량회원의
            부정이용 방지
          </li>
          <li>서비스 제공: 콘텐츠 제공, 맞춤 서비스 제공</li>
          <li>
            마케팅 및 광고: 이벤트 등 광고성 정보 전달 (마케팅 정보 수신 동의
            시)
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>3. 개인정보의 보유 및 이용기간</h2>
        <p>
          회원의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면
          지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한
          기간 동안 보존합니다.
        </p>
        <ul>
          <li>보존 항목: 로그인 기록</li>
          <li>보존 기간: 3개월</li>
          <li>보존 이유: 부정 이용 방지</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>4. 개인정보의 파기절차 및 방법</h2>
        <p>
          회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당
          정보를 지체 없이 파기합니다.
        </p>
        <ul>
          <li>
            파기절차: 회원탈퇴 시 개인정보는 별도의 DB로 옮겨져 내부 방침 및
            기타 관련 법령에 따라 일정기간 저장된 후 파기됩니다.
          </li>
          <li>
            파기방법: 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는
            기술적 방법을 사용하여 삭제합니다.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>5. 개인정보 보호책임자</h2>
        <p>
          회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와
          관련한 정보주체의 불만처리 및 피해구제를 처리하기 위하여 아래와 같이
          개인정보 보호책임자를 지정하고 있습니다.
        </p>
        <div className={styles.contactInfo}>
          <p>▶ 개인정보 보호책임자</p>
          <p>이메일: vanahyui@gmail.com</p>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>본 방침은 2024년 12월 27일부터 시행됩니다.</p>
      </footer>
    </div>
  );
}
