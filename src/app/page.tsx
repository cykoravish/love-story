"use client";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { showToast } from "@/components/LoveToast";

import { useRouter } from "next/navigation";
export default function SignupFormDemo() {
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let passwords = process.env.NEXT_PUBLIC_PASSWORDS?.split(",");
    if (passwords?.includes(password.toLowerCase())) {
      if (password.toLowerCase() === "red") {
        // Set a cookie after validating the password
        document.cookie = `username="Ravish"; Max-Age=2700`;
        
        localStorage.setItem("username", "Ravish");
        window.location.reload();
      } else {
        // Set a cookie after validating the password
      
        document.cookie = `username=Deepu; Max-Age=2700;`;
        localStorage.setItem("username", "Deepu");
        window.location.reload();
      }

      router.push("/show-notes");
      setPassword("");
      showToast("❤️successfully Logged In❤️", "success");
    } else {
      setPassword("");
      showToast("Incorrect Password", "error");
    }
  };
  return (
    <div className="flex justify-center">
      <div className="max-w-md w-full mx-2 rounded-lg md:rounded-lg p-4 md:p-8 shadow-input mt-52 bg-white dark:bg-black border border-pink-500">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-pink-500">
          Welcome to Sweet Notes
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          I wish you will guess the correct password. Good Luck !
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="password"
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </LabelInputContainer>
          </div>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Log In
            <BottomGradient />
          </button>
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
