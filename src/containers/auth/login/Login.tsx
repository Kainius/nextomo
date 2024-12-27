"use client";

import styles from "./Login.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h1>로그인</h1>
        <form>
          <div className={styles.inputGroup}>
            <label htmlFor="userId">아이디</label>
            <input type="text" id="userId" placeholder="아이디를 입력하세요" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              placeholder="비밀번호를 입력하세요"
              required
            />
          </div>
          <button type="submit" className={styles.loginButton}>
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}
