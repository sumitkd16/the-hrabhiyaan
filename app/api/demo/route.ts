export const runtime = 'nodejs';

import { NextRequest, NextResponse } from 'next/server';
import * as nodemailer from 'nodemailer';

interface DemoFormData {
  companyName: string;
  firstName: string;
  lastName: string;
  companyEmail: string;
  countryCode: string;
  mobileNumber: string;
  employeeCount: string;
  website: string;
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const data: DemoFormData = await request.json();

    if (!data.companyName || !data.firstName || !data.lastName || !data.companyEmail || !data.mobileNumber || !data.employeeCount || !data.website) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const logoUrl = process.env.EMAIL_LOGO_URL || 'https://res.cloudinary.com/da00qz5zp/image/upload/v1776686174/HRabhiyaan_Logo_1-removebg-preview_1_dikx1u.png';

    const htmlEmail = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Demo Request</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
    <tr>
      <td style="padding: 40px 20px; background: linear-gradient(135deg, #1e3a5f 0%, #0d2137 100%);">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; margin: 0 auto;">
          <tr>
            <td style="text-align: center;">
              <img src="${logoUrl}" alt="HRabhiyaan" width="180" style="display: block; margin: 0 auto; background: white; padding: 10px; border-radius: 8px;">
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <tr>
      <td style="padding: 40px 20px; background-color: #ffffff;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; margin: 0 auto;">
          <tr>
            <td style="padding-bottom: 30px; border-bottom: 2px solid #e0e0e0;">
              <h1 style="margin: 0; font-size: 28px; color: #1e3a5f; font-weight: 600;">New Demo Request Received! 🎉</h1>
              <p style="margin: 10px 0 0 0; color: #666; font-size: 16px;">A potential client is interested in HRabhiyaan</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <tr>
      <td style="padding: 30px 20px; background-color: #ffffff;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; margin: 0 auto;">
          <tr>
            <td style="padding: 25px; background-color: #f8f9fa; border-radius: 12px; border-left: 4px solid #1e3a5f;">
              <h2 style="margin: 0 0 20px 0; font-size: 18px; color: #1e3a5f; text-transform: uppercase; letter-spacing: 1px;">Contact Information</h2>

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e8e8e8;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td width="40%" style="color: #888; font-size: 14px;">Full Name</td>
                        <td width="60%" style="color: #1e3a5f; font-size: 16px; font-weight: 600;">${data.firstName} ${data.lastName}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e8e8e8;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td width="40%" style="color: #888; font-size: 14px;">Email</td>
                        <td width="60%"><a href="mailto:${data.companyEmail}" style="color: #2563eb; font-size: 16px; text-decoration: none;">${data.companyEmail}</a></td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td width="40%" style="color: #888; font-size: 14px;">Phone</td>
                        <td width="60%" style="color: #1e3a5f; font-size: 16px; font-weight: 600;">${data.countryCode} ${data.mobileNumber}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <tr>
      <td style="padding: 0 20px 30px 20px; background-color: #ffffff;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; margin: 0 auto;">
          <tr>
            <td style="padding: 25px; background-color: #f8f9fa; border-radius: 12px; border-left: 4px solid #22c55e;">
              <h2 style="margin: 0 0 20px 0; font-size: 18px; color: #1e3a5f; text-transform: uppercase; letter-spacing: 1px;">Company Details</h2>

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e8e8e8;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td width="40%" style="color: #888; font-size: 14px;">Company Name</td>
                        <td width="60%" style="color: #1e3a5f; font-size: 16px; font-weight: 600;">${data.companyName}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e8e8e8;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td width="40%" style="color: #888; font-size: 14px;">Website</td>
                        <td width="60%"><a href="${data.website}" style="color: #2563eb; font-size: 16px; text-decoration: none;">${data.website}</a></td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td width="40%" style="color: #888; font-size: 14px;">Team Size</td>
                        <td width="60%" style="color: #1e3a5f; font-size: 16px; font-weight: 600;">${data.employeeCount} employees</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <tr>
      <td style="padding: 30px 20px; background-color: #f5f5f5;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; margin: 0 auto;">
          <tr>
            <td style="text-align: center; color: #888; font-size: 14px;">
              <p style="margin: 0 0 10px 0;">This request was submitted through the HRabhiyaan website.</p>
              <p style="margin: 0; font-size: 12px; color: #aaa;">© 2026 HRabhiyaan. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim();

    await transporter.sendMail({
      from: `"HRabhiyaan Website" <${process.env.SMTP_USER}>`,
      to: process.env.DEMO_RECIPIENT || process.env.SMTP_USER,
      subject: `New Demo Request: ${data.companyName} - ${data.firstName} ${data.lastName}`,
      html: htmlEmail,
    });

    return NextResponse.json(
      { message: 'Demo request submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Demo form submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit demo request' },
      { status: 500 }
    );
  }
}
