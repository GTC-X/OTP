// src/app/api/otpStorage.js
import fs from 'fs/promises';  // Using async file operations
import path from 'path';

const otpFilePath = path.resolve('/tmp', 'otp.json');

// Helper function to read the current contents of otp.json
async function readOtpFile() {
  try {
    const data = await fs.readFile(otpFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading OTP file:", error);
    return {};  // Return an empty object if there's an error
  }
}

// Helper function to write data to otp.json
async function writeOtpFile(data) {
  try {
    await fs.writeFile(otpFilePath, JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    console.error("Error writing OTP file:", error);
  }
}

// Function to store OTP for a given phone number
export async function storeOtp(phoneNumber, otp) {
  console.log("Storing OTP", { otp, phoneNumber });
  const otpData = await readOtpFile();
  otpData[phoneNumber] = { otp, timestamp: Date.now() }; // Adds a timestamp
  await writeOtpFile(otpData);
}

// Function to retrieve the OTP for a given phone number
export async function getOtp(phoneNumber) {
  const otpData = await readOtpFile();
  const otpEntry = otpData[phoneNumber];
  console.log("otpEntry", otpEntry);
  if (otpEntry) {
    console.log("Retrieving OTP", { phoneNumber, otp: otpEntry.otp });
    return otpEntry.otp;
  }else{
    console.warn("OTP not found for phone number:", phoneNumber);
    return null;
  }
}

// Function to delete the OTP for a given phone number
export async function deleteOtp(phoneNumber) {
  const otpData = await readOtpFile();
  if (otpData[phoneNumber]) {
    delete otpData[phoneNumber];
    await writeOtpFile(otpData);
    console.log("OTP deleted for phone number:", phoneNumber);
  } else {
    console.warn("No OTP to delete for phone number:", phoneNumber);
  }
}




// // src/app/api/otpStorage.js
// import Redis from 'ioredis';

// const redis = new Redis(process.env.NEXT_PUBLIC_REDIS_URL); // REDIS_URL is your Redis connection string

// // Store OTP for a given phone number
// export async function storeOtp(phoneNumber, otp) {
//   console.log(`going to set otp ${otp}`);
//   let isSet = await redis.set(phoneNumber, otp, 'EX', 300); // Expire in 5 minutes
//   console.log(`value is set ${isSet}`);
// }

// // Retrieve the OTP for a given phone number
// export async function getOtp(phoneNumber) {
//   console.log("get otp in",phoneNumber)
//   let value =  await redis.get(phoneNumber);
//   console.log(`got otp ${value}`);
//   return value;
// }

// // Delete the OTP for a given phone number
// export async function deleteOtp(phoneNumber) {
//   await redis.del(phoneNumber);
// }
