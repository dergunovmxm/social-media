"use client";

interface IAuth {
  type?: "login" | "register";
}

export function Auth({ type }: IAuth) {
  return (
    <div>
      <form></form>
    </div>
  );
}
