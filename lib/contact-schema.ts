import { z } from 'zod'

/** Shared between the form (client) and the API route (server). */
export const contactSchema = z.object({
  familyname: z.string().trim().min(1, '姓を入力してください').max(50, '50文字以内で入力してください'),
  lastname: z.string().trim().min(1, '名を入力してください').max(50, '50文字以内で入力してください'),
  email: z.string().trim().min(1, 'メールアドレスを入力してください').email('メールアドレスの形式が正しくありません').max(254),
  tel: z
    .string()
    .trim()
    .max(20, '20文字以内で入力してください')
    .regex(/^[0-9+\-() ]*$/, '電話番号は数字とハイフンで入力してください'),
  companyname: z.string().trim().max(100, '100文字以内で入力してください'),
  mainmessage: z.string().trim().min(10, 'お問い合わせ内容は10文字以上で入力してください').max(2000, '2000文字以内で入力してください'),
  /** Honeypot: real users never see or fill this. The route silently drops filled submissions. */
  website: z.string().optional(),
})

export type ContactInput = z.infer<typeof contactSchema>

export const contactLabels: Record<keyof Omit<ContactInput, 'website'>, string> = {
  familyname: '姓',
  lastname: '名',
  email: 'メールアドレス',
  tel: '電話番号',
  companyname: '会社名',
  mainmessage: 'お問い合わせ内容',
}
