import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import {formSchema } from "@/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import "./Form.scss"



export default function SignUpFrom() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: ""
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

return (
  <div className="accept">
    <img className="image" src="" alt="" />
    <Form {...form}>
  
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 test">

       
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="..." {...field} />
              </FormControl>
              <FormDescription>
                 This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="..." {...field} />
              </FormControl>
              <FormDescription>
                Type in your Email, and ensure it's correct
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="btn">
        <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
    </div>
  )
  
    

}

