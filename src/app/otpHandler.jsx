'use client'
import { useState } from 'react';

export default function OtpComponent() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [status, setStatus] = useState('');

    const sendOtp = async () => {
        try {
            const response = await fetch('/api/sentOtp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phoneNumber }),
            });
            const data = await response.json();
            console.log(data.message);
        } catch (error) {
            console.error('Error sending OTP:', error);
        }
    };

    const verifyOtp = async () => {
        try {
            const response = await fetch('/api/verifyOtp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phoneNumber, otp }),
            });
            const data = await response.json();
            console.log(data.message);
        } catch (error) {
            console.error('Error verifying OTP:', error);
        }
    };



    function handleSendOtp() {
        // Define the API endpoint and product token
        const url = "https://gw.cmtelecom.com/v1.0/message";

        // Define the payload
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
                                "number": "00971501573274"
                            }
                        ],
                        body: {
                            "type": "auto",
                            "content": "My first CM.com message"
                        },
                        reference: "my_reference_123"
                    }
                ]
            }
        };

        // Send the request using fetch
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
            .then(response => response.json())
            .then(data => {
                // Check if the message was sent successfully
                console.log("Response:", data);
                if (data.error) {
                    console.error("Error sending message:", data.error);
                } else {
                    console.log("OTP message sent successfully!");
                }
            })
            .catch(error => {
                console.error("Request failed:", error);
            });

    }


    return (
        <div className="p-4">
            <h2>Send and Verify OTP</h2>
            <button onClick={handleSendOtp}>Send OTP</button>

            <div className="flex flex-col gap-4 mt-4">
                <input
                    type="text"
                    placeholder="Enter phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="border p-2 rounded"
                />
                <button onClick={sendOtp} className="bg-blue-500 text-white p-2 rounded">
                    Send OTP
                </button>
                <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="border p-2 rounded"
                />
                <button onClick={verifyOtp} className="bg-green-500 text-white p-2 rounded">
                    Verify OTP
                </button>
                {status && <p className="mt-4">{status}</p>}
            </div>
        </div>
    );
}
