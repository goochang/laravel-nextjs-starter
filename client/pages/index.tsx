/*
|--------------------------------------------------------------------------
| The home page.
|--------------------------------------------------------------------------
|
| The home page of your application.
|
<H1 center={true} withMargin={true}>
    Welcome to the Laravel Next.js Starter Kit
</H1>

<p className="text-center mb-4 mt-12">
    What do you want to do?
</p>
<div className="flex justify-between items-center text-blue-500 underline">
    <Link href="https://github.com/NiclasTimmeDev/laravel-nextjs-starter">
        <a target="_blank">Documentation</a>
    </Link>
    <Link href="/user/login">Login</Link>
    <Link href="/user/register">Register</Link>
</div>
*/
// import Link from "next/link";
// import { H1 } from "./../components/Typography/Headers";
import React from 'react';
import { FullPage, Slide } from 'react-full-page';
export default function Home() {
    
    return (
        <FullPage>
            <Slide>
                <section className='s1'>
                    <h1>Test</h1>
                </section>
            </Slide>
            <Slide>
                <section className='s2'>
                    <h1>Test</h1>
                </section>
            </Slide>
            <Slide>
                <section className='s3'>
                    <h1>Test</h1>
                </section>
            </Slide>
            <Slide>
                <section className='s4'>
                    <h1>Test</h1>
                </section>
            </Slide>
        </FullPage>
    );
}
