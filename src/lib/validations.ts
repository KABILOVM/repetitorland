import { z } from "zod";

export const leadSchema = z.object({
  name: z
    .string()
    .min(2, "Имя должно содержать минимум 2 символа")
    .max(100, "Имя слишком длинное"),
  phone: z
    .string()
    .min(9, "Введите корректный номер телефона")
    .max(20, "Номер слишком длинный")
    .regex(
      /^[\d\s+()-]+$/,
      "Номер может содержать только цифры, пробелы, +, (, ), -"
    ),
  course_id: z.string(),
  branch_id: z.string(),
  message: z.string().max(500, "Сообщение слишком длинное"),
});

export type LeadFormData = z.infer<typeof leadSchema>;
