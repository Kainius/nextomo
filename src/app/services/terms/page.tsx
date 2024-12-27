import styles from "./page.module.css";

export const metadata = {
  title: "이용약관 | NEXTOMO",
  description: "NEXTOMO 이용약관.",
};

export default function Terms() {
  //   return (
  //     <div className={styles.container}>
  //       <h1 className={styles.title}>Terms | 이용약관 페이지 공사중...</h1>
  //     </div>
  //   );
  // }
  return (
    <div className={styles.container}>
      <h1>이용약관</h1>

      <section className={styles.section}>
        <p className={styles.lastUpdate}>최종 수정일: 2024년 1월 1일</p>
        <p className={styles.intro}>
          본 약관은 나윱이라네(이하 "회사")가 제공하는 서비스의 이용조건 및
          절차, 회사와 회원 간의 권리, 의무 및 책임사항을 규정함을 목적으로
          합니다.
        </p>
      </section>

      <section className={styles.section}>
        <h2>제1조 (용어의 정의)</h2>
        <p>이 약관에서 사용하는 용어의 정의는 다음과 같습니다:</p>
        <ul>
          <li>"서비스"란 회사가 제공하는 모든 서비스를 의미합니다.</li>
          <li>"회원"이란 회사와 서비스 이용계약을 체결한 개인을 의미합니다.</li>
          <li>
            "아이디(ID)"란 회원의 식별과 서비스 이용을 위하여 회원이 설정하고
            회사가 승인한 문자와 숫자의 조합을 의미합니다.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>제2조 (약관의 효력 및 변경)</h2>
        <p>
          1. 이 약관은 서비스 화면에 게시하거나 기타의 방법으로 회원에게
          공지함으로써 효력이 발생합니다.
          <br />
          2. 회사는 필요한 경우 이 약관을 변경할 수 있으며, 변경된 약관은
          제1항과 같은 방법으로 공지함으로써 효력이 발생합니다.
        </p>
      </section>

      <section className={styles.section}>
        <h2>제3조 (이용계약의 체결)</h2>
        <p>
          1. 이용계약은 회원이 되고자 하는 자가 약관의 내용에 동의를 하고 회사가
          정한 가입 양식에 따라 회원정보를 기입하여 가입을 신청하고, 회사가 이를
          승낙함으로써 체결됩니다.
          <br />
          2. 회사는 다음 각 호에 해당하는 신청에 대하여는 승낙을 하지 않을 수
          있습니다:
        </p>
        <ul>
          <li>실명이 아니거나 타인의 명의를 이용한 경우</li>
          <li>
            허위의 정보를 기재하거나, 회사가 제시하는 내용을 기재하지 않은 경우
          </li>
          <li>
            관련법령에 위배되거나 사회의 안녕질서 또는 미풍양속을 저해할
            목적으로 신청한 경우
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>제4조 (회원정보의 변경)</h2>
        <p>
          회원은 개인정보관리화면을 통하여 언제든지 본인의 개인정보를 열람하고
          수정할 수 있습니다. 단, 서비스 관리를 위해 필요한 실명, 아이디 등은
          수정이 불가능합니다.
        </p>
      </section>

      <section className={styles.section}>
        <h2>제5조 (회원의 의무)</h2>
        <p>회원은 다음 각 호의 행위를 하여서는 안 됩니다:</p>
        <ul>
          <li>신청 또는 변경 시 허위내용의 등록</li>
          <li>타인의 정보도용</li>
          <li>회사가 게시한 정보의 변경</li>
          <li>
            회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시
          </li>
          <li>회사와 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
          <li>회사 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
        </ul>
      </section>

      <footer className={styles.footer}>
        <p>본 약관은 2024년 12월 27일부터 시행됩니다.</p>
      </footer>
    </div>
  );
}
