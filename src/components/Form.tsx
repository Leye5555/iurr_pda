import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { formSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import "./Form.scss";

export default function SignUpFrom() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="accept">
      <div className="mobile-bg md:hidden">
        <svg className="svg-1" width="76" height="74" viewBox="0 0 76 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="66.5" cy="15.5" rx="66.5" ry="58.5" fill="url(#paint0_linear_111_47)" />
          <defs>
            <linearGradient id="paint0_linear_111_47" x1="66.5" y1="-43" x2="66.5" y2="74" gradientUnits="userSpaceOnUse">
              <stop stop-color="#8433FF" />
              <stop offset="0.585" stop-color="#126EB0" />
              <stop offset="0.94" stop-color="#AE12B0" />
            </linearGradient>
          </defs>
        </svg>

        <svg className="svg-2" width="38" height="59" viewBox="0 0 38 59" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.4341 -8.75034C18.295 -11.361 21.9544 -11.9954 24.2808 -9.7894C28.2617 -6.01447 31.4629 -1.4816 33.6694 3.54541C36.6515 10.3392 37.7008 17.771 36.7013 25.0192C35.7017 32.2674 32.6924 39.0498 28.0058 44.6166C23.3192 50.1835 17.1379 54.318 10.1451 56.5633C3.15238 58.8085 -4.37948 59.0769 -11.6179 57.339C-18.8564 55.601 -25.5195 51.9242 -30.8708 46.7151C-36.2221 41.506 -40.0532 34.9675 -41.9405 27.8222C-43.3054 22.655 -43.6154 17.3161 -42.8759 12.1178C-42.4082 8.83013 -38.977 7.06299 -35.8169 8.08366C-32.7264 9.08189 -31.0782 12.3842 -31.3498 15.6206C-31.6153 18.7848 -31.3366 21.9987 -30.5112 25.1236C-29.1792 30.1664 -26.4754 34.7809 -22.6988 38.4572C-18.9221 42.1335 -14.2197 44.7283 -9.11116 45.9549C-4.00266 47.1815 1.31292 46.992 6.24801 45.4075C11.1831 43.8229 15.5455 40.905 18.8531 36.9762C22.1606 33.0474 24.2845 28.2608 24.9899 23.1454C25.6953 18.03 24.9548 12.7851 22.8502 7.99039C21.5222 4.9649 19.6837 2.19302 17.4287 -0.209786C15.2348 -2.54759 14.5731 -6.13968 16.4341 -8.75034Z" fill="url(#paint0_linear_111_52)" />
          <defs>
            <linearGradient id="paint0_linear_111_52" x1="-36.0975" y1="-4.87135" x2="29.8997" y2="42.174" gradientUnits="userSpaceOnUse">
              <stop stop-color="#8433FF" />
              <stop offset="0.585" stop-color="#126EB0" />
              <stop offset="0.94" stop-color="#AE12B0" />
            </linearGradient>
          </defs>
        </svg>

        <svg className="svg-3" width="128" height="34" viewBox="0 0 128 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.44783 47.136C1.39442 49.6094 -2.03819 43.7035 3.22918 39.8284C26.1133 22.993 56.8619 1.46284 62.506 0.867648C71.2974 -0.0594327 80.7007 1.6063 89.6769 5.68073C98.653 9.75515 106.852 16.0795 113.368 23.9548C119.884 31.8302 124.463 40.9496 126.599 50.3054C128.735 59.6612 128.345 68.8887 125.472 76.9682C122.598 85.0477 117.354 91.6642 110.317 96.0868C103.281 100.509 94.7276 102.565 85.6018 102.028C78.2782 101.596 70.8152 99.5081 63.7464 95.9405C60.7345 94.4204 59.6683 90.7455 61.0837 87.6829C62.777 84.0189 67.2962 82.7246 71.0324 84.2522C75.067 85.9018 79.2275 86.8785 83.3262 87.12C89.7667 87.4993 95.8033 86.0483 100.769 82.9271C105.735 79.8059 109.436 75.1363 111.464 69.4343C113.492 63.7322 2.483 62.7013 0.97553 56.0985C-0.531947 49.4957 98.792 33.1907 94.1933 27.6327C89.5946 22.0747 101.491 38.6 95.1556 35.7245C88.8208 32.849 50.1468 44.5923 43.9423 45.2466C38.0847 45.8643 15.4457 43.0736 9.35989 46.1183C8.7136 46.4416 8.11679 46.8626 7.44783 47.136Z" fill="url(#paint0_linear_111_51)" />
          <defs>
            <linearGradient id="paint0_linear_111_51" x1="44.7001" y1="77.4666" x2="109.95" y2="16.1291" gradientUnits="userSpaceOnUse">
              <stop stop-color="#8433FF" />
              <stop offset="0.585" stop-color="#126EB0" />
              <stop offset="0.94" stop-color="#AE12B0" />
            </linearGradient>
          </defs>
        </svg>

        <svg className="svg-4" width="27" height="80" viewBox="0 0 27 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-46.5001 34.9245C-49.661 34.3884 -51.8279 31.3721 -50.8573 28.3165C-49.1964 23.0877 -46.5134 18.2301 -42.952 14.0521C-38.1389 8.40568 -31.9087 4.22032 -24.9502 1.95869C-17.9918 -0.302939 -10.5759 -0.552761 -3.52244 1.23684C3.53104 3.02643 9.94746 6.78575 15.0176 12.0993C20.0877 17.4128 23.6141 24.0735 25.2069 31.3453C26.7997 38.6171 26.397 46.2166 24.0432 53.304C21.6894 60.3914 17.4762 66.6905 11.8694 71.5051C7.81477 74.9868 3.14553 77.5942 -1.85485 79.1958C-5.0174 80.2087 -8.10403 77.8917 -8.56371 74.6029C-9.01327 71.3864 -6.76033 68.463 -3.72949 67.296C-0.766268 66.155 2.00433 64.5025 4.4564 62.3969C8.41342 58.999 11.3868 54.5534 13.048 49.5515C14.7092 44.5497 14.9934 39.1863 13.8693 34.0543C12.7452 28.9223 10.2564 24.2215 6.67823 20.4715C3.10002 16.7215 -1.42834 14.0684 -6.4063 12.8054C-11.3843 11.5424 -16.6179 11.7187 -21.5289 13.3148C-26.4398 14.911 -30.8367 17.8648 -34.2335 21.8497C-36.377 24.3642 -38.0695 27.2276 -39.2484 30.3047C-40.3953 33.2985 -43.3392 35.4606 -46.5001 34.9245Z" fill="url(#paint0_linear_111_48)" />
          <defs>
            <linearGradient id="paint0_linear_111_48" x1="-20.0994" y1="80.5053" x2="-6.54654" y2="0.597815" gradientUnits="userSpaceOnUse">
              <stop stop-color="#8433FF" />
              <stop offset="0.585" stop-color="#126EB0" />
              <stop offset="0.94" stop-color="#AE12B0" />
            </linearGradient>
          </defs>
        </svg>

        <svg className="svg-5" width="30" height="80" viewBox="0 0 30 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M55.1494 70.3239C56.4764 73.2425 55.1921 76.7273 52.1174 77.6354C46.8559 79.1894 41.3291 79.6888 35.8731 79.0798C28.4994 78.2569 21.5419 75.4415 15.7698 70.9451C9.99768 66.4486 5.63567 60.4461 3.16592 53.6011C0.696157 46.7561 0.214856 39.3351 1.77519 32.1584C3.33553 24.9817 6.87675 18.3288 12.0074 12.9351C17.1381 7.54143 23.6584 3.61698 30.8476 1.59556C38.0368 -0.425866 45.615 -0.465531 52.7444 1.48094C57.9001 2.88854 62.6759 5.29514 66.8042 8.53952C69.4152 10.5915 69.2255 14.4463 66.7589 16.6698C64.3466 18.8444 60.6629 18.6162 57.9981 16.7597C55.3927 14.9446 52.4716 13.5756 49.3537 12.7244C44.3221 11.3507 38.9738 11.3787 33.9001 12.8053C28.8263 14.2319 24.2246 17.0015 20.6037 20.8081C16.9828 24.6147 14.4836 29.3099 13.3824 34.3748C12.2812 39.4397 12.6208 44.6771 14.3639 49.5079C16.1069 54.3388 19.1853 58.575 23.259 61.7484C27.3326 64.9217 32.2428 66.9086 37.4468 67.4894C40.7305 67.8559 44.0505 67.6536 47.2597 66.9059C50.3822 66.1784 53.8224 67.4054 55.1494 70.3239Z" fill="url(#paint0_linear_111_50)" />
          <defs>
            <linearGradient id="paint0_linear_111_50" x1="78.1113" y1="22.9176" x2="4.33102" y2="56.464" gradientUnits="userSpaceOnUse">
              <stop stop-color="#8433FF" />
              <stop offset="0.585" stop-color="#126EB0" />
              <stop offset="0.94" stop-color="#AE12B0" />
            </linearGradient>
          </defs>
        </svg>

      </div>
      <div className="flex-1 grid place-content-center relative z-10">
        <div className=" parent max-w-sm flex flex-col gap-40">
          <div className="logo">
            <img src="src\assets\Logo medium.svg"
              alt="" />
          </div>
          <Form {...form}>

            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 mx-auto w-full px-4 "
            >


              <img src="src\assets\Group 6.svg" alt="" />

              <div className="name">
                <label htmlFor="name"><img src="src\assets\Frame 52.svg" alt="" /></label>
                <input className="p-2 rounded-md " type="text" name="name" id="name" placeholder="Enter your name" />
              </div>

              <div className="email">
                <label htmlFor="name"><img src="src\assets\Name.svg" alt="" /></label>
                <input className="p-2 rounded-md " type="text" name="name" id="name" placeholder="Enter your email" />
              </div>


              <button className="p-2 rounded-md btn flex items-center justify-center w-full" type="submit">Accept</button>


            </form>
          </Form>



        </div>

      </div>
      <div className="md:flex-1"> <img
        className="image"
        src="src\assets\chris-lee-70l1tDAI6rM-unsplash 1.svg"
        alt=""
      /></div>






    </div>
  );
}
