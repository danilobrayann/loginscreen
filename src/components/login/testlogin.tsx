import React from "react";
import { TextField, Button, Checkbox } from "@mui/material";
import Image from "next/image";
import ImageLogin from "../../assets/Frame 91773.png";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  password: z.string().min(8, { message: "A senha deve conter no mínimo 8 caracteres" }),
});

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'all',
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-1/2 h-full flex flex-col items-center">
        <Image src={ImageLogin} alt="ImageLogin" className="h-full w-full" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 flex justify-center items-center flex-col p-20">
        <h3 className="mb-4 font-semibold text-blue-800">
          Módulo administrativo
        </h3>
        <div className="w-3/6 flex flex-col items-center">
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            {...register("email")}
            className="mb-4"
            fullWidth
          />
          {errors.email && <p className="text-red-500">{}</p>}
          <TextField
            label="Senha"
            variant="outlined"
            type="password"
            {...register("password")}
            className="mb-4"
            fullWidth
          />
          {errors.password && <p className="text-red-500">{}</p>}
          <div className="mb-6 flex items-center ">
            <Checkbox />
            <Link
              href="#"
              className="ml-2 font-medium text-xs text-blue-800  mr-32"
            >
              Lembre-me
            </Link>
            <Link href="#" className="ml-2 font-semibold text-xs text-blue-500">
              Esqueci a senha
            </Link>
          </div>
          <div className="flex flex-col gap-5 w-50 h-28">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="w-60 bg-blue-800 rounded-full"
            >
              Acessar
            </Button>
            <Button
              variant="outlined"
              color="primary"
              className="bg-white rounded-full"
            >
              <Link href="/register">Cadastrar</Link>
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
