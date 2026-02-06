import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { user_name, user_email, message } = body;

        // Validation
        if (!user_name || !user_email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const serviceId = process.env.EMAILJS_SERVICE_ID;
        const templateId = process.env.EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.EMAILJS_PUBLIC_KEY;
        const privateKey = process.env.EMAILJS_PRIVATE_KEY; // Optional, boosts security if enabled in EmailJS

        if (!serviceId || !templateId || !publicKey) {
            console.error('EmailJS Env Vars Missing');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        const emailData = {
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            accessToken: privateKey, // Required if you enabled 'Private Key' in Security
            template_params: {
                user_name,
                user_email,
                message,
            },
        };

        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(emailData),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('EmailJS Error:', errorText);
            return NextResponse.json(
                { error: 'Failed to send email' },
                { status: response.status }
            );
        }

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
