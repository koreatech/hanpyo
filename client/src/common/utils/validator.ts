// 한표(한기대 포털 이메일) 아이디 제약조건
// 영소문자, 숫자, _ 로만 조합된 문자열만 가능
// 최소 1자리 이상 12자리 이하

// 한표 패스워드 제약조건
// 8자 이상 12자 이하
// 영문, 특수문자, 숫자 모두 최소 1개 이상 포함

// 한표 이름 제약조건
// 2자 이상
// 한글만 가능

const REGEX = {
  EMAIL_ID: /^[a-z0-9_][a-z0-9_]{0,11}$/,
  PASSWORD: /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,12}$/,
  NAME: /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,}$/,
};

const isEmailID = (formValue: string): boolean => {
  return REGEX.EMAIL_ID.test(formValue);
};

const isPassword = (formValue: string): boolean => {
  return REGEX.PASSWORD.test(formValue);
};

const isName = (formValue: string): boolean => {
  return REGEX.NAME.test(formValue);
};

export { isEmailID, isPassword, isName };
