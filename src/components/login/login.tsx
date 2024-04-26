import React from "react";
import { TextField, Button, Checkbox } from "@mui/material";
import Image from "next/image";
import ImageLogin from "../../assets/Frame 91773.png";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type FormData = {
  email: string;
  password: string;
};

export default function Login() {
  const schema: ZodType<FormData> = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });

  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <div className=" lg:w-1/2 h-full flex flex-col items-center   xs:w-0 ">
        <Image
          src={ImageLogin}
          alt="ImageLogin"
          className="h-full w-full xs:h-0 lg:h-full"
        />
      </div>
      <form className="w-1/2 flex justify-center items-center flex-col p-20">
        <h3 className="mb-4 font-semibold text-blue-800">
          Módulo administrativo
        </h3>
        <div className="w-3/6 flex flex-col items-center md:w-80 sm:w-80">
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            className="mb-4"
            fullWidth
          />
          <TextField
            label="Senha"
            variant="outlined"
            type="password"
            className="mb-4"
            fullWidth
          />
          <div className="mb-6 flex items-center  ">
            <Checkbox />
            <Link
              href="#"
              className="ml-2  w-28 font-medium text-xs text-blue-800"
            >
              Lembre-me
            </Link>
            <Link
              href="#"
              className=" w-28 ml-14 font-semibold text-xs text-blue-500 "
            >
              Esqueci a senha
            </Link>
          </div>
          <div className="flex flex-col gap-5 w-50 h-28">
            <Button
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
