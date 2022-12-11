export default class PasswordValidator {
  valid(password: string) {
    const regPassword = /^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$/;
    const valid = regPassword.test(password);
    if (!valid) {
      throw new Error("A senha está invalido");
    }
  }
}
