"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginUserFormSchema = z.object({
  username: z.string().min(3, "O usuário deve ser informado").toLowerCase(),
  password: z.string().min(8),
});

type loginUserFormData = z.infer<typeof loginUserFormSchema>;
const Login = () => {
  const [output, setOutput] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginUserFormData>({
    resolver: zodResolver(loginUserFormSchema),
  });

  const onSubmit = (data: any) => {
    setOutput(JSON.stringify(data, null, 2));
  };

  return (
    <main className='h-screen bg-zinc-950 text-zinc-300 flex flex-col items-center justify-center w-2/4'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-4 w-screen max-w-sm'>
        <div className='flex flex-col gap-1'>
          <label htmlFor=''>Usuário</label>
          <input
            className='h-10 rounded p-2'
            type='text'
            {...register("username")}
            placeholder='username'
          />
          {errors.username && <span>{errors.username.message}</span>}
        </div>

        <div className='flex flex-col gap-1'>
          <label htmlFor=''>Senha</label>
          <input
            className='h-10 rounded p-2'
            type='password'
            {...register("password")}
            placeholder='password'
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <button
          className='bg-emerald-500 hover:bg-emerald-600 h-10 text-white rounded-md'
          type='submit'>
          Entrar
        </button>
      </form>

      <pre>{output}</pre>
    </main>
  );
};

export default Login;
