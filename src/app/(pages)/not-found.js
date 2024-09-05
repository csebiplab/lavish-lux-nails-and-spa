"use client";

import { Button } from '@material-tailwind/react';
import Link from 'next/link';
import { Suspense } from 'react';

export default function NotFound() {
    return (
        <Suspense>
            <div className='w-full mx-auto flex justify-center items-center h-screen'>
                <div className='text-center'>
                    <h1>Not found – 404!</h1>
                    <div>
                        <Link href="/">
                            <Button className='bg-cyan-50 hover:bg-cyan-500'>Go back to Home</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </Suspense>)

}