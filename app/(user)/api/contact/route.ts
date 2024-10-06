//import { contactFormSchema } from '@/data/schemas/contact-form-schema'
import nodemailer, { SendMailOptions } from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 465,
  host: 'smtp.gmail.com',
  secure: true,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
})

const sendMail = (mailOptions: SendMailOptions) =>
  new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions)
  })

export async function POST(request: Request) {
  const formData = await request.json()

  console.log(formData)

  //const validatonResult = contactFormSchema.safeParse(formData);

  // if (!formData.success) {
  //   const error = formData.error.format()

  //   return Response.json(
  //     {
  //       success: false,
  //       reason: error,
  //     },
  //     {
  //       status: 422,
  //     },
  //   );
  // }

  const formattedText = Object.entries(formData)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');

  const mailOptions = {
    from: process.env.EMAIL_SENDER,
    to: process.env.EMAIL_DESTINATION,
    subject: 'お問い合わせの件',
    text: formattedText,
  }

  try {
    await sendMail(mailOptions);

    return Response.json({ success: true })
  } catch (error) {
    return Response.json(
      {
        success: false,
        reason: 'Server Error!',
      },
      {
        status: 500,
      },
    )
  }
}