export default class EmailValidator {
  valid(email: string) {
    const ragemail = /^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$/i;
    const valid = ragemail.test(email);
    console.log(valid);

    if (!valid) {
      throw new Error("O email está invalido");
    }
  }
}
