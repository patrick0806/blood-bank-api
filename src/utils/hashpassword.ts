import bcrypt from "bcryptjs";

const salt = 10;

export function hashPassword(password: string) {
  return bcrypt.hash(password, salt);
}

export function hashComparePassword(
  password: string,
  dataBasePassword: string
) {
  return bcrypt.compare(password, dataBasePassword, function (err, result) {
    if (result == true) {
      return true;
    }
    return false;
  });
}
