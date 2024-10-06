'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Textarea } from "@/components/ui/textarea"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import useSubmitContactForm from '@/hooks/use-submit-contact-form'

const formSchema = z.object({
  familyname: z.string().min(2, {
    message: '必須項目です.',
  }),
  lastname: z.string().min(2, {
    message: '必須項目です.',
  }),
  email: z.string().min(2, {
    message: '必須項目です.',
  }),
  tel: z.string().min(2, {
    message: '必須項目です.',
  }),
  companyname: z.string().min(2, {
    message: '必須項目です.',
  }),
  mainmessage: z.string().min(2, {
    message: '請填寫您想詢問的內容.',
  }),
})

export function ContactForm() {
  const { isLoading, submitForm } = useSubmitContactForm()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      familyname: '',
      lastname: '',
      email: '',
      tel: '',
      companyname: '',
      mainmessage: ''
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    await submitForm(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name="familyname"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[18px]"><strong>姓</strong></FormLabel>
              <FormControl>
                <Input
                  className="rounded-sm"
                  placeholder="姓を入力してください."
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[18px]"><strong>名</strong></FormLabel>
              <FormControl>
                <Input
                  className="rounded-sm"
                  placeholder="名を入力してください."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[18px]"><strong>E-mail</strong></FormLabel>
              <FormControl>
                <Input
                  className="rounded-sm"
                  placeholder="メールアドレスを入力してください."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tel"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[18px]"><strong>電話番号</strong></FormLabel>
              <FormControl>
                <Input
                  className="rounded-sm"
                  placeholder="電話番号を入力してください."
                  {...field}
                />
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
              <FormLabel className="text-[18px]"><strong>会社名</strong></FormLabel>
              <FormControl>
                <Input
                  className="rounded-sm"
                  placeholder="会社名を入力してください."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="mainmessage"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[18px]"><strong>お問い合わせ内容</strong></FormLabel>
              <FormControl>
                <Textarea
                  className="resize-none rounded-sm"
                  rows={10}
                  placeholder="お問い合わせ内容を入力してください."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="w-[220px] mx-auto mt-6">
          <span className="mx-auto">
            <button
              className="h-[55px] w-[220px] rounded-[40px] sm:rounded-[50px] bg-black text-white relative
                flex flex-wrap items-center justify-center tracking-[.5em] text-sm pl-[10px] hover:bg-kouka duration-500 delay-100"
              type="submit"
            >
              送信
            </button>
          </span>
        </div>
      </form>
    </Form>
  )
}
