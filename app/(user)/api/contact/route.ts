import nodemailer from 'nodemailer'

import { contactLabels, contactSchema } from '@/lib/contact-schema'

export const runtime = 'nodejs'
export const maxDuration = 20

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
})

export async function POST(request: Request) {
  let json: unknown
  try {
    json = await request.json()
  } catch {
    return Response.json({ success: false, reason: 'Invalid JSON' }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(json)
  if (!parsed.success) {
    return Response.json(
      { success: false, reason: 'Validation failed', issues: parsed.error.flatten().fieldErrors },
      { status: 400 }
    )
  }

  const { website, ...data } = parsed.data

  // Bots fill the hidden field; pretend it worked and send nothing.
  if (website) {
    return Response.json({ success: true })
  }

  const summary = (Object.keys(contactLabels) as (keyof typeof contactLabels)[])
    .map((key) => `${contactLabels[key]}: ${data[key] || '-'}`)
    .join('\n')

  const sender = process.env.EMAIL_SENDER
  const destination = process.env.EMAIL_DESTINATION

  if (!sender || !destination) {
    console.error('[contact] EMAIL_SENDER / EMAIL_DESTINATION are not configured')
    return Response.json({ success: false, reason: 'Server Error' }, { status: 500 })
  }

  try {
    await transporter.sendMail({
      from: sender,
      to: destination,
      replyTo: data.email,
      subject: `【お問い合わせ】${data.familyname} ${data.lastname} 様`,
      text: summary,
    })

    await transporter.sendMail({
      from: sender,
      to: data.email,
      subject: 'お問い合わせありがとうございます｜恒佳株式会社',
      text:
        `${data.familyname} ${data.lastname} 様\n\n` +
        'お問い合わせありがとうございます。以下の内容で受け付けました。\n\n' +
        `${summary}\n\n` +
        '内容を確認のうえ、担当者よりご連絡いたしますので、しばらくお待ちください。\n' +
        '恒佳株式会社',
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error('[contact] sendMail failed', error)
    return Response.json({ success: false, reason: 'Server Error' }, { status: 500 })
  }
}
