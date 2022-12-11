import EmailValidator from "./email-validator";
import NameValidator from "./name-validator";
import PasswordValidator from "./password-validator";

export default class ValidatorUser {
  valid(name: string, email: string, password: string) {
    try {
      new NameValidator().valid(name);
      new EmailValidator().valid(email);
    //   new PasswordValidator().valid(password);
    } catch (error: any) {
      return error.message;
    }
  }
}
