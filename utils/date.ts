import { DateTime } from "luxon";

export function isValidDate(input: string) {
  return DateTime.fromFormat(input, "dd/MM/yyyy").isValid;
}

export function isValidDatetime(input: string) {
  return DateTime.fromFormat(input, "dd/MM/yyyy HH:mm").isValid;
}
