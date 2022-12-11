import ValidatorUser from "./validations/user-validator";

export default class User {
  public name: string;
  public email: string;
  public password: string;
  constructor(name: string, email: string, password: string) {
    const validateValue = new ValidatorUser().valid(name, email, password);
    if (validateValue) throw new Error(validateValue);
    this.name = name;
    this.email = email;
    this.password = password;
  }
  hashPassword(){
    this.password
  }
}
