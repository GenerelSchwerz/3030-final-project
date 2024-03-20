// pages/LoginForm.js
"use client";
import { FormEvent, FormEventHandler, useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
    
export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can add logic to handle form submission, such as sending a request to your backend for authentication
    console.log('Submitted:', { email, password });
    // Redirect to another page after form submission
    router.push('/'); // Replace '/dashboard' with the path to your dashboard page
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}
