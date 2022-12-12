import { assert, expect, test } from "vitest";
import User from "../../../src/domain/User";

test("Create a new user instance with correct data", () => {
  const userTest = User.create(
    "eduardo",
    "eduardo1@hotmail.com",
    "AqwefqwonF123"
  );
  expect(userTest.name).toBe("eduardo");
});

test("should not crate a new user instance with incorrect name", async () => {
  try {
    User.create("2", "2", "AqwefqwonF123");
  } catch (error: any) {
    expect(error.message).toBe("O nome deve estar entre 4 a 40 caracteres");
  }
});
