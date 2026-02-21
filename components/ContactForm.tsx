'use client';

import { useState, FormEvent } from 'react';
import styles from './ContactForm.module.css';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
    const [formState, setFormState] = useState<FormState>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setFormState('submitting');
        setErrorMsg('');

        const form = e.currentTarget;
        const data = {
            name: (form.elements.namedItem('name') as HTMLInputElement).value,
            email: (form.elements.namedItem('email') as HTMLInputElement).value,
            phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
            message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
            source: typeof window !== 'undefined' ? window.location.href : 'Website Contact Form',
        };

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setFormState('success');
                form.reset();
            } else {
                const json = await res.json();
                setErrorMsg(json.error || 'Something went wrong. Please try again.');
                setFormState('error');
            }
        } catch {
            setErrorMsg('Network error. Please check your connection and try again.');
            setFormState('error');
        }
    }

    if (formState === 'success') {
        return (
            <div className={styles.successBox}>
                <div className={styles.successIcon}>✓</div>
                <h3>Message Received!</h3>
                <p>
                    Thank you for reaching out. May will be in touch with you shortly.
                    In the meantime, feel free to{' '}
                    <a href="https://connect.mayshomebridgellc.com/strategy-session">
                        book your strategy session directly
                    </a>
                    .
                </p>
            </div>
        );
    }

    return (
        <form className={`${styles.form} fade-in-right`} onSubmit={handleSubmit} noValidate>
            <div className={styles.formGroup}>
                <label htmlFor="name">Name *</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    required
                    disabled={formState === 'submitting'}
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="email">Email *</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    disabled={formState === 'submitting'}
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="phone">Phone *</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(251) 350-9282"
                    required
                    disabled={formState === 'submitting'}
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="message">Message (optional)</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me a little about your situation..."
                    disabled={formState === 'submitting'}
                />
            </div>

            {formState === 'error' && (
                <div className={styles.errorMsg}>{errorMsg}</div>
            )}

            <button
                type="submit"
                className={`btn-primary ${styles.submitBtn}`}
                disabled={formState === 'submitting'}
            >
                {formState === 'submitting' ? (
                    <>Sending… <span className={styles.spinner} /></>
                ) : (
                    <>Send Message <span className="arrow">→</span></>
                )}
            </button>
        </form>
    );
}
