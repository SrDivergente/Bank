import ValidatorUser from "./validations/user-validator";

export default class User {
  static create(name: string, email: string, password: string) {
    const validateValue = new ValidatorUser().valid(name, email, password);
    if (validateValue) throw new Error(validateValue);
    return new User(name, email, password);
  }
  private constructor(
    public name: string,
    public email: string,
    public password: string
  ) {}

  hashPassword() {
    this.password;
  }
}
