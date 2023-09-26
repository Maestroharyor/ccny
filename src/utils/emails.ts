export function generateRegistrationSuccessHTMLToUser(data, title) {
  const { firstName, lastName, email, phoneNumber, uniqueCode } = data

  const html = `
    <html>
      <head>
        <title>${title}</title>
      <style>
 	body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
	table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
	img { -ms-interpolation-mode: bicubic; }
	img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
	table { border-collapse: collapse !important; }
	body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }
	a[x-apple-data-detectors] { color: inherit !important; text-decoration: none !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; }
	div[style*="margin: 16px 0;"] { margin: 0 !important; }
 	</style>
      </head>
      <body style="background-color: #f7f5fa; margin: 0 !important; padding: 0 !important;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <!-- Header -->
          <tr>
            <td bgcolor="#426899" align="center">
              <table border="0" cellpadding="0" cellspacing="0" width="480">
                <tr>
                  <td align="center" valign="top" style="padding: 40px 10px 40px 10px;">
                    <div style="display: block; font-family: Helvetica, Arial, sans-serif; color: #ffffff; font-size: 18px;" border="0">CCCNY</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Registration Success Message -->
          <tr>
            <td bgcolor="#426899" align="center" style="padding: 0px 10px 0px 10px;">
              <table border="0" cellpadding="0" cellspacing="0" width="480">
                <tr>
                  <td bgcolor="#ffffff" align="left" valign="top" style="padding: 30px 30px 20px 30px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; line-height: 48px;">
                    <h1 style="font-size: 32px; font-weight: 400; margin: 0;">${title}</h1>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- User Information -->
          <tr>
            <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;">
              <table border="0" cellpadding="0" cellspacing="0" width="480">
                <tr>
                  <td bgcolor="#ffffff" align="left">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td colspan="2" style="padding-left:30px;padding-right:15px;padding-bottom:10px; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
                          <p>We are delighted to inform you that your registration has been successfully processed. Thank you for registering</p>
                        </td>
                      </tr>
                      <tr>
                        <th align="left" valign="top" style="padding-left:30px;padding-right:15px;padding-bottom:10px; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">First Name</th>
                        <td align="left" valign="top" style="padding-left:15px;padding-right:30px;padding-bottom:10px;font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">${firstName}</td>
                      </tr>
                      <tr>
                        <th align="left" valign="top" style="padding-left:30px;padding-right:15px;padding-bottom:10px; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">Last Name</th>
                        <td align="left" valign="top" style="padding-left:15px;padding-right:30px;padding-bottom:10px;font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">${lastName}</td>
                      </tr>
                      <tr>
                        <th align="left" valign="top" style="padding-left:30px;padding-right:15px;padding-bottom:10px; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">Email</th>
                        <td align="left" valign="top" style="padding-left:15px;padding-right:30px;padding-bottom:10px;font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">${email}</td>
                      </tr>
                      <tr>
                        <th align="left" valign="top" style="padding-left:30px;padding-right:15px;padding-bottom:10px; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">Phone Number</th>
                        <td align="left" valign="top" style="padding-left:15px;padding-right:30px;padding-bottom:10px;font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">${phoneNumber}</td>
                      </tr>
                      <tr>
                        <th align="left" valign="top" style="padding-left:30px;padding-right:15px;padding-bottom:50px; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">Unique Code</th>
                        <td align="left" valign="top" style="padding-left:15px;padding-right:30px;padding-bottom:10px;font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">${uniqueCode}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Additional Content -->
          <tr>
            <td bgcolor="#f4f4f4" align="center" style="padding: 0px 20px 0px 20px;">
              <table border="0" cellpadding="0" cellspacing="0" width="480">
                <tr>
                  <td bgcolor="#f4f4f4" align="left" style="padding: 50px 50px 50px 50px; color: #666666; font-family: Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
                    <!-- Additional content can be added here if needed -->
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `

  return html
}

export function generateRegistrationSuccessHTMLToAdmin(data, title) {
  const { firstName, lastName, email, phoneNumber, uniqueCode } = data

  const html = `
    <html>
      <head>
        <title>${title}</title>
      <style>
 	body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
	table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
	img { -ms-interpolation-mode: bicubic; }
	img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
	table { border-collapse: collapse !important; }
	body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }
	a[x-apple-data-detectors] { color: inherit !important; text-decoration: none !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; }
	div[style*="margin: 16px 0;"] { margin: 0 !important; }
 	</style>
      </head>
      <body style="background-color: #f7f5fa; margin: 0 !important; padding: 0 !important;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <!-- Header -->
          <tr>
            <td bgcolor="#426899" align="center">
              <table border="0" cellpadding="0" cellspacing="0" width="480">
                <tr>
                  <td align="center" valign="top" style="padding: 40px 10px 40px 10px;">
                    <div style="display: block; font-family: Helvetica, Arial, sans-serif; color: #ffffff; font-size: 18px;" border="0">CCCNY</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Registration Success Message -->
          <tr>
            <td bgcolor="#426899" align="center" style="padding: 0px 10px 0px 10px;">
              <table border="0" cellpadding="0" cellspacing="0" width="480">
                <tr>
                  <td bgcolor="#ffffff" align="left" valign="top" style="padding: 30px 30px 20px 30px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; line-height: 48px;">
                    <h1 style="font-size: 32px; font-weight: 400; margin: 0;">${title}</h1>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- User Information -->
          <tr>
            <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;">
              <table border="0" cellpadding="0" cellspacing="0" width="480">
                <tr>
                  <td bgcolor="#ffffff" align="left">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td colspan="2" style="padding-left:30px;padding-right:15px;padding-bottom:10px; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
                          <p>There is a new registration on the platform</p>
                        </td>
                      </tr>
                      <tr>
                        <th align="left" valign="top" style="padding-left:30px;padding-right:15px;padding-bottom:10px; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">First Name</th>
                        <td align="left" valign="top" style="padding-left:15px;padding-right:30px;padding-bottom:10px;font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">${firstName}</td>
                      </tr>
                      <tr>
                        <th align="left" valign="top" style="padding-left:30px;padding-right:15px;padding-bottom:10px; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">Last Name</th>
                        <td align="left" valign="top" style="padding-left:15px;padding-right:30px;padding-bottom:10px;font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">${lastName}</td>
                      </tr>
                      <tr>
                        <th align="left" valign="top" style="padding-left:30px;padding-right:15px;padding-bottom:10px; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">Email</th>
                        <td align="left" valign="top" style="padding-left:15px;padding-right:30px;padding-bottom:10px;font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">${email}</td>
                      </tr>
                      <tr>
                        <th align="left" valign="top" style="padding-left:30px;padding-right:15px;padding-bottom:10px; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">Phone Number</th>
                        <td align="left" valign="top" style="padding-left:15px;padding-right:30px;padding-bottom:10px;font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">${phoneNumber}</td>
                      </tr>
                      <tr>
                        <th align="left" valign="top" style="padding-left:30px;padding-right:15px;padding-bottom:50px; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">Unique Code</th>
                        <td align="left" valign="top" style="padding-left:15px;padding-right:30px;padding-bottom:10px;font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">${uniqueCode}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Additional Content -->
          <tr>
            <td bgcolor="#f4f4f4" align="center" style="padding: 0px 20px 0px 20px;">
              <table border="0" cellpadding="0" cellspacing="0" width="480">
                <tr>
                  <td bgcolor="#f4f4f4" align="left" style="padding: 50px 50px 50px 50px; color: #666666; font-family: Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
                    <!-- Additional content can be added here if needed -->
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `

  return html
}

export function generatePasswordResetHTML(email, resetCode) {
  const html = `
    <html>
      <head>
        <title>Password Reset Request</title>
          <style>
 	body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
	table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
	img { -ms-interpolation-mode: bicubic; }
	img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
	table { border-collapse: collapse !important; }
	body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }
	a[x-apple-data-detectors] { color: inherit !important; text-decoration: none !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; }
	div[style*="margin: 16px 0;"] { margin: 0 !important; }
 	</style>
      </head>
      <body style="background-color: #f7f5fa; margin: 0 !important; padding: 0 !important;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <!-- Header -->
          <tr>
            <td bgcolor="#426899" align="center">
              <table border="0" cellpadding="0" cellspacing="0" width="480">
                <tr>
                  <td align="center" valign="top" style="padding: 40px 10px 40px 10px;">
                    <div style="display: block; font-family: Helvetica, Arial, sans-serif; color: #ffffff; font-size: 18px;" border="0">CCCNY</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Password Reset Message -->
          <tr>
            <td bgcolor="#426899" align="center" style="padding: 0px 10px 0px 10px;">
              <table border="0" cellpadding="0" cellspacing="0" width="480">
                <tr>
                  <td bgcolor="#ffffff" align="left" valign="top" style="padding: 30px 30px 20px 30px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; line-height: 48px;">
                    <h1 style="font-size: 32px; font-weight: 400; margin: 0;">Password Reset Request</h1>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Reset Code and Instructions -->
          <tr>
            <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;">
              <table border="0" cellpadding="0" cellspacing="0" width="480">
                <tr>
                  <td bgcolor="#ffffff" align="left">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="padding-left:30px;padding-right:15px;padding-bottom:10px; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
                          <p>We have received a request to reset your password. Below is your reset code:</p>
                        </td>
                      </tr>
                      <tr>
                        <th align="left" valign="top" style="padding-left:30px;padding-right:15px;padding-bottom:10px; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">Email</th>
                        <td align="left" valign="top" style="padding-left:15px;padding-right:30px;padding-bottom:10px;font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">${email}</td>
                      </tr>
                      <tr>
                        <th align="left" valign="top" style="padding-left:30px;padding-right:15px;padding-bottom:10px; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">Reset Code</th>
                        <td align="left" valign="top" style="padding-left:15px;padding-right:30px;padding-bottom:10px;font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">${resetCode}</td>
                      </tr>
                      <tr>
                        <td style="padding-left:30px;padding-right:15px;padding-bottom:50px; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
                          <p>Please use this code to reset your password. If you did not request this reset, please disregard this message.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Additional Content -->
          <tr>
            <td bgcolor="#f4f4f4" align="center" style="padding: 0px 20px 0px 20px;">
              <table border="0" cellpadding="0" cellspacing="0" width="480">
                <tr>
                  <td bgcolor="#f4f4f4" align="left" style="padding: 50px 50px 50px 50px; color: #666666; font-family: Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
                    <!-- Additional content can be added here if needed -->
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `

  return html
}

export function generatePasswordResetSuccessHTML(loginLink) {
  const html = `
    <html>
      <head>
        <title>Password Reset Successful</title>
             <style>
 	body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
	table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
	img { -ms-interpolation-mode: bicubic; }
	img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
	table { border-collapse: collapse !important; }
	body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }
	a[x-apple-data-detectors] { color: inherit !important; text-decoration: none !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; }
	div[style*="margin: 16px 0;"] { margin: 0 !important; }
 	</style>
      </head>
      <body style="background-color: #f7f5fa; margin: 0 !important; padding: 0 !important;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <!-- Header -->
          <tr>
            <td bgcolor="#426899" align="center">
              <table border="0" cellpadding="0" cellspacing="0" width="480">
                <tr>
                  <td align="center" valign="top" style="padding: 40px 10px 40px 10px;">
                    <div style="display: block; font-family: Helvetica, Arial, sans-serif; color: #ffffff; font-size: 18px;" border="0">CCCNY</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Password Reset Success Message -->
          <tr>
            <td bgcolor="#426899" align="center" style="padding: 0px 10px 0px 10px;">
              <table border="0" cellpadding="0" cellspacing="0" width="480">
                <tr>
                  <td bgcolor="#ffffff" align="left" valign="top" style="padding: 30px 30px 20px 30px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; line-height: 48px;">
                    <h1 style="font-size: 32px; font-weight: 400; margin: 0;">Password Reset Successful</h1>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Reset Success Instructions -->
          <tr>
            <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;">
              <table border="0" cellpadding="0" cellspacing="0" width="480">
                <tr>
                  <td bgcolor="#ffffff" align="left">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="padding-left:30px;padding-right:15px;padding-bottom:10px; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
                          <p>Your password has been successfully reset. You can now log in using the link below:</p>
                        </td>
                      </tr>
                      <tr>
                        <td align="center" style="padding: 20px;">
                          <a href="${loginLink}" style="display: inline-block; padding: 15px 30px; background-color: #426899; color: #ffffff; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 600; text-decoration: none; border-radius: 4px;">Log In</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-left:30px;padding-right:15px;padding-bottom:50px; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
                          <p>If you did not reset your password, please contact our support team immediately.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Additional Content -->
          <tr>
            <td bgcolor="#f4f4f4" align="center" style="padding: 0px 20px 0px 20px;">
              <table border="0" cellpadding="0" cellspacing="0" width="480">
                <tr>
                  <td bgcolor="#f4f4f4" align="left" style="padding: 50px 50px 50px 50px; color: #666666; font-family: Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
                    <!-- Additional content can be added here if needed -->
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `

  return html
}
