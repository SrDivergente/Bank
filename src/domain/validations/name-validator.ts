export default class NameValidator {
  valid(name: string) {
    if (name === null || name.length > 40 || name.length < 4) {
      throw new Error("O nome deve estar entre 4 a 40 caracteres");
    }
  }
}
