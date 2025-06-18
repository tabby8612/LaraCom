import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import LoginForm from '@/components/selfUI/LoginForm';
import SignupForm from '@/components/selfUI/SignupForm';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Profile() {
    const [loginForm, showLoginForm] = useState(true);

    function switchForm() {
        showLoginForm(!loginForm);
    }

    return (
        <>
            <Head title="LARACOM - Profile" />
            <NavBar />
            <div className="flex h-screen items-center justify-center">
                {loginForm ? <LoginForm title="Log In" formHandlerFn={switchForm} /> : <SignupForm title="Sign Up" formHandlerFn={switchForm} />}
            </div>
            <Footer />
        </>
    );
}
