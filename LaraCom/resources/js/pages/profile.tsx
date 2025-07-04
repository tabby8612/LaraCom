import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import LoginForm from '@/components/selfUI/LoginForm';
import ScrollProgress from '@/components/selfUI/ScrollProgress';
import SignupForm from '@/components/selfUI/SignupForm';
import TailingCursor from '@/components/selfUI/TailingCursor';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Profile() {
    const [loginForm, showLoginForm] = useState(true);

    function switchForm() {
        showLoginForm(!loginForm);
    }

    return (
        <>
            <TailingCursor />
            <Head title="LARACOM - Profile" />
            <NavBar />
            <ScrollProgress>
                <div className="flex h-screen items-center justify-center">
                    {loginForm ? <LoginForm title="Log In" formHandlerFn={switchForm} /> : <SignupForm title="Sign Up" formHandlerFn={switchForm} />}
                </div>
            </ScrollProgress>
            <Footer />
        </>
    );
}
