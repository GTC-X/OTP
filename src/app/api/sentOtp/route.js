// // src/app/api/proxySendOtp/route.js
// import { NextResponse } from 'next/server';
// import axios from 'axios';

// function generateOtp(length = 6) {
//   return Math.floor(10 ** (length - 1) + Math.random() * 9 * 10 ** (length - 1)).toString();
// }

// export async function POST(req) {
//   const { phoneNumber, otpContent } = await req.json();

//   if (!phoneNumber) {
//     return new Response(JSON.stringify({ message: 'Phone number is required' }), {
//       status: 400,
//       headers: { 'Content-Type': 'application/json' },
//     });
//   }

//   const otp = generateOtp();
//   try {
//     // Parse the request body
//     const productToken = "82f5555b-184d-4140-8741-b802ff743cd8";
//     const sender = "6d7f6877-ddb1-4003-a2f5-18ce7baa95c3"

//     // Prepare the payload for CM.com
//     const payload = {
//       messages: {
//         authentication: {
//           productToken: "82f5555b-184d-4140-8741-b802ff743cd8"
//         },
//         msg: [
//           {
//             from: "GTC",
//             to: [
//               {
//                 "number": phoneNumber
//               }
//             ],
//             body: {
//               "type": "auto",
//               "content": `My first CM.com message ${otp}`
//             },
//             reference: "my_reference_123"
//           }
//         ]
//       }
//     };

//     // Send the request to CM.com
//     const response = await axios.post(
//       'https://gw.cmtelecom.com/v1.0/message',
//       payload,
//       { headers: { 'Content-Type': 'application/json' } }
//     );

//     // Return a successful response
//     return NextResponse.json({ success: true, data: response.data, otp: otp }, { status: 200 });
//   } catch (error) {
//     console.error('Error in proxySendOtp API route:', error.message);

//     // Return an error response
//     return NextResponse.json(
//       { success: false, message: 'Failed to send OTP', error: error.message },
//       { status: 500 }
//     );
//   }
// }



// src/app/api/sendOtp/route.js

// import axios from 'axios';
// import { storeOtp, deleteOtp } from '../otpStorage';

// function generateOtp(length = 6) {
//   return Math.floor(10 ** (length - 1) + Math.random() * 9 * 10 ** (length - 1)).toString();
// }

// export async function POST(request) {
//   const { phoneNumber } = await request.json();

//   if (!phoneNumber) {
//     return new Response(JSON.stringify({ message: 'Phone number is required' }), {
//       status: 400,
//       headers: { 'Content-Type': 'application/json' },
//     });
//   }

//   const otp = generateOtp();
//   const apiKey = process.env.NEXT_PUBLIC_INFOBIP_API_KEY;
//   const baseUrl = process.env.NEXT_PUBLIC_INFOBIP_API_BASE_URL;
//   const sender = process.env.NEXT_PUBLIC_INFOBIP_SENDER;

//   try {
//     // Send OTP via Infobip API
//     await axios.post(
//       `${baseUrl}/sms/2/text/advanced`,
//       {
//         messages: [
//           {
//             from: sender,
//             destinations: [{ to: phoneNumber }],
//             text: `Your OTP code is: ${otp}`,
//           },
//         ],
//       },
//       {
//         headers: {
//           Authorization: `App ${apiKey}`,
//           'Content-Type': 'application/json',
//         },
//       }
//     );

//     // Store OTP in shared otpStorage
//     storeOtp(phoneNumber, otp);

//     // Set a timeout to delete OTP after 5 minutes
//     setTimeout(() => deleteOtp(phoneNumber), 5 * 60 * 1000);

//     return new Response(JSON.stringify({ success: true, message: 'OTP sent successfully' }), {
//       status: 200,
//       headers: { 'Content-Type': 'application/json' },
//     });
//   } catch (error) {
//     console.error('Error sending OTP:', error);
//     return new Response(JSON.stringify({ success: false, message: 'Failed to send OTP' }), {
//       status: 500,
//       headers: { 'Content-Type': 'application/json' },
//     });
//   }
// }



// src/app/api/proxySendOtp/route.js
import { NextResponse } from 'next/server';
import axios from 'axios';
import { storeOtp, deleteOtp } from '../otpStorage';

  
function generateOtp(length = 6) {
  return Math.floor(10 ** (length - 1) + Math.random() * 9 * 10 ** (length - 1)).toString();
}

export async function POST(req) {
  const { phoneNumber } = await req.json();

  if (!phoneNumber) {
    return new Response(JSON.stringify({ message: 'Phone number is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const otp = generateOtp();
  const otpExpiration = 300; // OTP expiry time in seconds (5 minutes)

  try {
    // Prepare the payload for CM.com
    const payload = {
      messages: {
        authentication: {
          productToken: "82f5555b-184d-4140-8741-b802ff743cd8"
        },
        msg: [
          {
            from: "GTC",
            to: [
              {
                "number": phoneNumber
              }
            ],
            body: {
              "type": "auto",
              "content": `My first CM.com message ${otp}`
            },
            reference: "my_reference_123"
          }
        ]
      }
    };

    // Send the request to CM.com
    const response = await axios.post(
      'https://gw.cmtelecom.com/v1.0/message',
      payload,
      { headers: { 'Content-Type': 'application/json' } }
    );

    // Store OTP in Redis with an expiration
    storeOtp(phoneNumber, otp);
    // Return a successful response
    return NextResponse.json({ success: true, data: response.data, otp }, { status: 200 });
  } catch (error) {
    console.error('Error in proxySendOtp API route:', error.message);

    // Return an error response
    return NextResponse.json(
      { success: false, message: 'Failed to send OTP', error: error.message },
      { status: 500 }
    );
  }
}
