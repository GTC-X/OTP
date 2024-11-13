// // src/app/api/otpStorage.js
// import fs from 'fs';
// import path from 'path';
// const otpFilePath = path.resolve(process.cwd(),'public','otps', 'otp.json');

// // Helper function to read the current contents of otp.json
// function readOtpFile() {
//   try {
//     const data = fs.readFileSync(otpFilePath, 'utf8');
//     return JSON.parse(data);
//   } catch (error) {
//      return {}; // Return an empty object if there's an error
//   }
// }

// // Helper function to write data to otp.json
// function writeOtpFile(data) {
//   try {
//     // Synchronously write to ensure data is flushed to disk immediately
//     fs.writeFileSync(otpFilePath, JSON.stringify(data, null, 2), 'utf8');
//   } catch (error) {
//   }
// }

// // Function to store OTP for a given phone number
// export function storeOtp(phoneNumber, otp) {
//   const otpData = readOtpFile();
//   otpData[phoneNumber] = otp;
//   writeOtpFile(otpData);
// }

// // Function to retrieve the OTP for a given phone number
// export function getOtp(phoneNumber) {
//   const otpData = readOtpFile();
//   return otpData[phoneNumber];
// }

// // Function to delete the OTP for a given phone number
// export function deleteOtp(phoneNumber) {
//   const otpData = readOtpFile();
//   delete otpData[phoneNumber];
//   writeOtpFile(otpData);
// }



// src/app/api/otpStorage.js
import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL); // REDIS_URL is your Redis connection string

// Store OTP for a given phone number
export async function storeOtp(phoneNumber, otp) {
  await redis.set(phoneNumber, otp, 'EX', 300); // Expire in 5 minutes
}

// Retrieve the OTP for a given phone number
export async function getOtp(phoneNumber) {
  return await redis.get(phoneNumber);
}

// Delete the OTP for a given phone number
export async function deleteOtp(phoneNumber) {
  await redis.del(phoneNumber);
}
