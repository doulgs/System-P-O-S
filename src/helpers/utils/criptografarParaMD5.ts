import { enc, MD5 } from "crypto-js";

export const criptografarParaMD5 = async (toEncrypt: string): Promise<string> =>
  MD5(enc.Utf8.parse(toEncrypt)).toString(enc.Hex);
