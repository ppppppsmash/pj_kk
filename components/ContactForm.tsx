'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Check, Loader2 } from 'lucide-react'

import { cn } from '@/lib/utils'
import { contactSchema, type ContactInput } from '@/lib/contact-schema'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { PillLink } from '@/components/ui/pill-link'

type Status = 'idle' | 'submitting' | 'success' | 'error'

function Required({ optional }: { optional?: boolean }) {
  return (
    <span
      className={cn(
        'ml-2 rounded-full px-2 py-0.5 text-[11px] font-medium tracking-wider',
        optional ? 'bg-neutral-100 text-neutral-500' : 'bg-kouka/10 text-kouka'
      )}
    >
      {optional ? '任意' : '必須'}
    </span>
  )
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  const form = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      familyname: '',
      lastname: '',
      email: '',
      tel: '',
      companyname: '',
      mainmessage: '',
      website: '',
    },
  })

  const onSubmit = async (values: ContactInput) => {
    setStatus('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data.success) throw new Error(data.reason ?? `HTTP ${res.status}`)
      setStatus('success')
      form.reset()
    } catch (error) {
      console.error('[contact] submit failed', error)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="fade-up-in mx-auto max-w-[36em] py-10 text-center" role="status" aria-live="polite">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-kouka text-white">
          <Check className="h-8 w-8" aria-hidden="true" />
        </span>
        <h2 className="mt-6 text-2xl font-bold text-neutral-900">送信が完了しました</h2>
        <p className="mt-4 leading-[1.9] text-neutral-600">
          お問い合わせありがとうございます。確認メールをお送りしましたので、ご確認ください。
          <br />
          内容を確認のうえ、担当者よりご連絡いたします。
        </p>
        <div className="mt-10">
          <PillLink href="/" variant="dark">ホームへ戻る</PillLink>
        </div>
      </div>
    )
  }

  const submitting = status === 'submitting'

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="space-y-7">
        <div className="grid gap-7 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="familyname"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-bold">姓<Required /></FormLabel>
                <FormControl>
                  <Input placeholder="山田" autoComplete="family-name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-bold">名<Required /></FormLabel>
                <FormControl>
                  <Input placeholder="太郎" autoComplete="given-name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-bold">メールアドレス<Required /></FormLabel>
              <FormControl>
                <Input type="email" inputMode="email" autoComplete="email" placeholder="example@kouka.co.jp" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-7 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="tel"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-bold">電話番号<Required optional /></FormLabel>
                <FormControl>
                  <Input type="tel" inputMode="tel" autoComplete="tel" placeholder="03-1234-5678" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="companyname"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-bold">会社名<Required optional /></FormLabel>
                <FormControl>
                  <Input autoComplete="organization" placeholder="株式会社〇〇" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="mainmessage"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-bold">お問い合わせ内容<Required /></FormLabel>
              <FormControl>
                <Textarea rows={8} placeholder="商品について、健康相談、ビジネスパートナーのご希望など、ご自由にお書きください。" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Honeypot: hidden from people, visible to bots */}
        <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
          <label>
            Website
            <input type="text" tabIndex={-1} autoComplete="off" {...form.register('website')} />
          </label>
        </div>

        {status === 'error' && (
          <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-relaxed text-red-700">
            送信に失敗しました。時間をおいて再度お試しいただくか、お電話（0493-27-5122）でお問い合わせください。
          </p>
        )}

        <div className="pt-2">
          <button
            type="submit"
            disabled={submitting}
            className={cn(
              'group inline-flex h-14 min-w-[220px] items-center justify-center gap-2 rounded-full bg-kouka px-8 text-sm font-bold tracking-[.2em] text-white',
              'transition-[transform,background-color,opacity] duration-200 ease-out-strong hover:bg-[#7a2a7e] active:scale-[0.97]',
              'disabled:pointer-events-none disabled:opacity-70'
            )}
          >
            {submitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                送信中
              </>
            ) : (
              <>
                送信する
                <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out-strong group-hover:translate-x-0.5" aria-hidden="true" />
              </>
            )}
          </button>
          <p className="mt-4 text-xs leading-relaxed text-neutral-500">
            ご入力いただいた内容は、お問い合わせへの回答のみに使用します。
          </p>
        </div>
      </form>
    </Form>
  )
}
