//import { contactFormSchema } from '@/data/schemas/contact-form-schema'
import nodemailer, { SendMailOptions } from 'nodemailer'

const keyTransform: { [key: string]: string} = {
  familyname: '姓',
  lastname: '名',
  email: 'メール',
  tel: '電話番号',
  companyname: '会社名',
  mainmessage: 'お問い合わせ内容',
}

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

  const formattedTextForContact = Object.entries(formData)
    .map(([key, value]) => `${keyTransform[key] || key}: ${value}`)
    .join('\n');

  const formattedTextForUser = 'お問い合わせありがとうございます。以下の内容で受け付けました。\n' + formattedTextForContact + '\n\n恒佳よりご連絡させていただきますので、しばらくお待ち下さい。\nよろしくお願いいたします。';

  const mailOptions = {
    from: process.env.EMAIL_SENDER,
    to: process.env.EMAIL_DESTINATION,
    subject: 'お問い合わせの件',
    text: formattedTextForContact,
  }

  const mailOptionsForUser = {
    from: process.env.EMAIL_SENDER,
    to: formData.email, // ユーザーのメールアドレス
    subject: 'お問い合わせありがとうございます',
    text: formattedTextForUser,
  }

  try {
    await sendMail(mailOptions);
    await sendMail(mailOptionsForUser);

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
