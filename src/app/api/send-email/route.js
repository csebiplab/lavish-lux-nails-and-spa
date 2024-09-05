import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
    try {
        const { subject, message, customerEmail } = await request.json();

        const transporter = nodemailer.createTransport({
            service: process.env.SERVICE,
            // host: 'smtpro.zoho.in',
            // port: 465,
            secure: Boolean(process.env.SECURE),
            auth: {
                user: process.env.USER,
                pass: process.env.PASS
            }
        })

        const mailOptions = {
            from: process.env.APP_USER,
            to: customerEmail,
            subject: "Boilagbe Email Verification",
            text: `Please click the following link to verify your email: `,
        }

        await transporter.sendMail(mailOptions)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}