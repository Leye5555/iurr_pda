
import { z } from "zod"
 
export const formSchema = z.object({
  fullName: z.string().min(2).max(50),
  email: z.string().email().min(2).max(30),
})

