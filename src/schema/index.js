
 
import { z } from "zod"
 
const formSchema = z.object({
  fullName: z.string().min(2).max(50),
  email: z.email().min(2).max(30),
})