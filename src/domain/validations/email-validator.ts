export default class EmailValidator {
  valid(email: string) {
    const ragEmail = /^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$/i;
    const valid = ragEmail.test(email);

    if (!valid) {
      throw new Error("O email está invalido");
    }
  }
}
