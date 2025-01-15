"use client"
import { toast } from "sonner"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {CONTACTICONS, SOCIALMEDIAINFO} from "@/constants";
import Image from "next/image";
import React, {useEffect} from "react"
import {useSelector} from "react-redux";

const formSchema = z.object({
    name: z.string().min(2, { message: "Username must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email." }),
    content: z.string().min(1, { message: "Message cannot be empty." }),
    termsAccepted: z.boolean().refine((val) => val === true, {
        message: "You must accept the terms and conditions.",
    }),
});

export function ContactForm({role}) {
    const selectedData = useSelector((state: any) => state.progress.data);
    useEffect(() => {
        console.log(selectedData)
    }, [selectedData]);



    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            mobile: true,
        },
    });
    const router = useRouter();

    const onSubmit = async (data) => {
        const { termsAccepted, ...formDataToSend } = data;
        let response; 

        try {
            if (role === "service") {
                const updatedData = {
                    ...selectedData,
                    question: formDataToSend,
                };

                response = await fetch("http://localhost:8000/api/service", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatedData),
                });
            } else {
                response = await fetch("http://localhost:8000/api/question", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formDataToSend),
                });
                console.log(response);
            }

            if (response.ok) {
                toast("Ваше сообщение отправлено.");
            } else {
                toast("Что-то пошло не так...");
                const errorDetails = await response.text();
                throw new Error(`Error: ${response.status} ${response.statusText} - ${errorDetails}`);
            }

            const result = await response.json();
            console.log("Response from backend:", result);

            form.reset({
                name: "",
                email: "",
                content: "",
                termsAccepted: false,
            });
            router.push("/");
        } catch (error) {
            console.error("Error submitting form:", error);
            toast("Произошла ошибка при отправке формы.");
        }
    };


    return (
        <div className="max-container-width ">
            {
                role==="home"
                    ? (
                        <div className="w-200 h-[400px]  mt-[320px] -translate-x-20 absolute bg-blue5  rounded-full  neon-shadow-bg blur-100   ">
                        </div>

                    )
                    :null
            }

            <div className=" max-container">
                {
                    role==="home"
                        ? (
                            <h3 className="bold-500 pb-100 lg:text-lg lg:pb-6">
                                <span className="blue-main">Свяжитесь с нами</span> для<br />
                                расчета стоимости
                            </h3>

                        )
                        :null
                }
                <div className="flexBetween lg:block">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="w-[650px] lg:w-full">
                            <div className="flex gap-12 lg:gap-4">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    placeholder="Ваше имя"
                                                    {...field}
                                                    className=" border-0 border-b border-b-gray3 focus:border-white focus:ring-0 w-300 lg:w-[169px] text-xl lg:text-sm bold-500"
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
                                            <FormControl>
                                                <Input
                                                    placeholder="Ваше E-mail"
                                                    {...field}
                                                    className="border-0 border-b border-b-gray3 focus:border-white focus:ring-0 w-300 lg:w-[169px] text-xl lg:text-sm bold-500"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="content"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                placeholder="Напишите все что Вам нужно"
                                                {...field}
                                                className="w-full border-0 border-b border-b-gray3 focus:border-white focus:ring-0  mt-50 text-xl lg:text-sm bold-500"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="pt-50 flex items-center gap-3 lg:pt-6">
                                <FormField
                                    control={form.control}
                                    name="termsAccepted"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Checkbox
                                                    id="terms"
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                    className="rounded-[30px] w-[30px] h-[30px] lg:w-[14px] lg:h-[14px] border-[2px] border-blue-main"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <label
                                    htmlFor="terms"
                                    className="text-base bold-500 peer-disabled:cursor-not-allowed text-gray3 lg:text-[10px]"
                                >
                                    я принимаю Политику конфиденциальности
                                </label>
                            </div>


                            {
                                role==="home"
                                    ? (
                                        <div className="pt-50 flexBetween lg:pt-8">
                                            {SOCIALMEDIAINFO.map((item, key) => (
                                                <a href={item.linkTo} key={key}>
                                                    <div className="w-[180px] h-[100px] lg:w-100 lg:h-[56px] border-[1px] border-blue-main rounded-20 flex flexCol gap-1 lg:gap-0 justify-center items-center">
                                                        <Image src={item.icon} alt="icon" className="lg:w-[16px] lg:h-[16px]"/>
                                                        <p className="text-base lg:text-[10px]">{item.label}</p>
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    )
                                    :null
                            }


                            <Button
                                type="submit"
                                className="w-full h-[68px] lg:h-[47px] bg-blue-main text-white text-2xl lg:text-sm bold-500 rounded-[100px] mt-50 hover:bg-blue-main"
                            >
                                {role==="home"?
                                    "Подать заявку"
                                    :
                                    "Отправить"
                                }
                            </Button>
                        </form>
                    </Form>
                    <div>

                        {
                            role==="home"
                                ? (
                                    CONTACTICONS.map((item, index) => (
                                        <div key={index}>
                                            <Image
                                                src={item.imageUrl}
                                                alt="contact image"
                                            />
                                            {typeof item.label === 'string' ? (
                                                <p>{item.label}</p>
                                            ) : (
                                                Object.values(item.label).map((num, idx) => (
                                                    <p key={idx}>{num}</p>
                                                ))
                                            )}
                                        </div>
                                    ))
                                )
                                :null
                        }
                    </div>

                </div>
            </div>
        </div>

    );
}
