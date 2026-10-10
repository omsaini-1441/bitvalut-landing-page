import {
  createCipheriv,
  createDecipheriv,
  randomBytes,
} from "node:crypto";

const ALGORITHM = "aes-256-gcm";
const IV_LENGTH = 12;
const TAG_LENGTH = 16;

export type RecoveryKeyEnvelope = {
  ciphertext: string;
  dataIv: string;
  dataTag: string;
  wrappedKey: string;
  keyIv: string;
  keyTag: string;
  keyVersion: number;
};

function encode(value: Buffer) {
  return value.toString("base64");
}

function decode(value: string) {
  return Buffer.from(value, "base64");
}

function encrypt(value: Buffer, key: Buffer) {
  const iv = randomBytes(IV_LENGTH);
  const cipher = createCipheriv(ALGORITHM, key, iv, {
    authTagLength: TAG_LENGTH,
  });
  const ciphertext = Buffer.concat([cipher.update(value), cipher.final()]);
  return { ciphertext, iv, tag: cipher.getAuthTag() };
}

function decrypt(ciphertext: Buffer, iv: Buffer, tag: Buffer, key: Buffer) {
  const decipher = createDecipheriv(ALGORITHM, key, iv, {
    authTagLength: TAG_LENGTH,
  });
  decipher.setAuthTag(tag);
  return Buffer.concat([decipher.update(ciphertext), decipher.final()]);
}

export function parseKek(encodedKey: string) {
  const key = decode(encodedKey);
  if (key.length !== 32) {
    throw new Error("RECOVERY_KEY_KEK must be a base64-encoded 32-byte key.");
  }
  return key;
}

export function encryptRecoveryKey(
  recoveryKey: string,
  encodedKek: string,
): RecoveryKeyEnvelope {
  const kek = parseKek(encodedKek);
  const dataKey = randomBytes(32);
  const encryptedValue = encrypt(Buffer.from(recoveryKey, "utf8"), dataKey);
  const encryptedDataKey = encrypt(dataKey, kek);
  dataKey.fill(0);

  return {
    ciphertext: encode(encryptedValue.ciphertext),
    dataIv: encode(encryptedValue.iv),
    dataTag: encode(encryptedValue.tag),
    wrappedKey: encode(encryptedDataKey.ciphertext),
    keyIv: encode(encryptedDataKey.iv),
    keyTag: encode(encryptedDataKey.tag),
    keyVersion: 1,
  };
}

export function decryptRecoveryKey(
  envelope: RecoveryKeyEnvelope,
  encodedKek: string,
) {
  const kek = parseKek(encodedKek);
  const dataKey = decrypt(
    decode(envelope.wrappedKey),
    decode(envelope.keyIv),
    decode(envelope.keyTag),
    kek,
  );

  try {
    return decrypt(
      decode(envelope.ciphertext),
      decode(envelope.dataIv),
      decode(envelope.dataTag),
      dataKey,
    ).toString("utf8");
  } finally {
    dataKey.fill(0);
  }
}
