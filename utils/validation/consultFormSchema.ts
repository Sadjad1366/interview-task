import { z } from "zod"

export const consultantFormSchema = z.object({
  name: z.string().min(1, "نام الزامی است"),
  email: z.string().email("ایمیل معتبر نیست"),
  phone: z.string().min(1, "شماره تماس الزامی است"),
  message: z.string().optional(),
  services: z.array(z.string()).min(1, "حداقل یک سرویس را انتخاب کنید"),
})

export type ConsultantFormData = z.infer<typeof consultantFormSchema>
