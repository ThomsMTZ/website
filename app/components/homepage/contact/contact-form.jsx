"use client";
// @flow strict
import {isValidEmail} from "@/utils/check-email";
import { useTranslation } from "@/utils/i18n";
import axios from "axios";
import {useEffect, useState} from "react";
import {TbMailForward} from "react-icons/tb";
import {toast} from "react-toastify";

function ContactForm() {
    const { t } = useTranslation();
    const [error, setError] = useState({email: false, required: false});
    const [isLoading, setIsLoading] = useState(false);
    const [mountedAt, setMountedAt] = useState(0); // timestamp anti-bot
    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        message: "",
        hp: "", // honeypot (doit rester vide)
    });

    useEffect(() => {
        setMountedAt(Date.now());
    }, []);

    const checkRequired = () => {
        if (userInput.email && userInput.message && userInput.name) {
            setError((e) => ({...e, required: false}));
        }
    };

    const handleSendMail = async (e) => {
        e.preventDefault();

        if (!userInput.email || !userInput.message || !userInput.name) {
            setError((e) => ({...e, required: true}));
            return;
        }
        if (error.email) return;
        setError((e) => ({...e, required: false}));

        try {
            setIsLoading(true);
            const payload = {
                name: userInput.name,
                email: userInput.email,
                message: userInput.message,
                ts: mountedAt,
                hp: userInput.hp, // reste vide si humain
            };

            await axios.post(`/api/contact`, payload);

            toast.success(t.contact.form.success);
            setUserInput({name: "", email: "", message: "", hp: ""});
        } catch (err) {
            const msg =
                err?.response?.data?.message ||
                err?.response?.data?.error ||
                t.contact.form.error;
            toast.error(msg);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
                {t.contact.heading}
            </p>
            <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
                <p className="text-sm text-[#d3d8e8]">
                    {t.contact.description}
                </p>
                <form className="mt-6 flex flex-col gap-4" onSubmit={handleSendMail}>
                    <div className="flex flex-col gap-2">
                        <label className="text-base" htmlFor="name">{t.contact.form.name} </label>
                        <input
                            id="name"
                            name="name"
                            className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                            type="text"
                            maxLength={100}
                            autoComplete="name"
                            required
                            value={userInput.name}
                            onChange={(e) => setUserInput((v) => ({...v, name: e.target.value}))}
                            onBlur={checkRequired}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-base" htmlFor="email">{t.contact.form.email} </label>
                        <input
                            id="email"
                            name="email"
                            className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                            type="email"
                            maxLength={100}
                            autoComplete="email"
                            required
                            value={userInput.email}
                            onChange={(e) => setUserInput((v) => ({...v, email: e.target.value}))}
                            onBlur={() => {
                                checkRequired();
                                setError((e) => ({...e, email: !isValidEmail(userInput.email)}));
                            }}
                        />
                        {error.email && (
                            <p className="text-sm text-red-400">{t.contact.form.invalidEmail}</p>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-base" htmlFor="message">{t.contact.form.message} </label>
                        <textarea
                            id="message"
                            name="message"
                            className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                            maxLength={500}
                            required
                            rows={4}
                            value={userInput.message}
                            onChange={(e) => setUserInput((v) => ({...v, message: e.target.value}))}
                            onBlur={checkRequired}
                        />
                    </div>

                    {/* Honeypot caché (ne pas retirer) */}
                    <input
                        name="hp"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        value={userInput.hp}
                        onChange={(e) => setUserInput((v) => ({...v, hp: e.target.value}))}
                        aria-hidden="true"
                        style={{position: "absolute", left: "-9999px", height: 0, width: 0, opacity: 0}}
                    />

                    <div className="flex flex-col items-center gap-3">
                        {error.required && (
                            <p className="text-sm text-red-400">{t.contact.form.required}</p>
                        )}
                        <button
                            type="submit"
                            className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
                            disabled={isLoading}
                            aria-busy={isLoading}
                        >
                            {isLoading ? (
                                <span>{t.contact.form.sending}</span>
                            ) : (
                                <span className="flex items-center gap-1">
                  {t.contact.form.send}
                  <TbMailForward size={20} />
                </span>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
