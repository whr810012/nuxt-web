/**
 * AES加密工具
 * 实现与后端相同的AES/ECB/PKCS5Padding加密算法
 */

// 使用CryptoJS库进行AES加密
import CryptoJS from 'crypto-js';

// 与后端保持一致的加密配置
const ALGORITHM = 'AES';
const MODE = 'ECB';
const PADDING = 'Pkcs7'; // CryptoJS使用Pkcs7，与Java的PKCS5Padding兼容
const SECRET_KEY = 'abcdefghijklmnopabcdefghijklmnop'; // 与后端保持一致的密钥

/**
 * AES加密函数
 * @param plainText 要加密的明文
 * @returns 加密后的Base64字符串
 */
export function encrypt(plainText: string): string {
  if (!plainText) return '';
  
  // 创建密钥
  const key = CryptoJS.enc.Utf8.parse(SECRET_KEY);
  
  // 执行加密
  const encrypted = CryptoJS.AES.encrypt(plainText, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  
  // 返回Base64编码的密文
  return encrypted.toString();
}

/**
 * AES解密函数（如果需要的话）
 * @param cipherText 加密后的Base64字符串
 * @returns 解密后的明文
 */
export function decrypt(cipherText: string): string {
  if (!cipherText) return '';
  
  // 创建密钥
  const key = CryptoJS.enc.Utf8.parse(SECRET_KEY);
  
  // 执行解密
  const decrypted = CryptoJS.AES.decrypt(cipherText, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  
  // 返回UTF-8编码的明文
  return decrypted.toString(CryptoJS.enc.Utf8);
}