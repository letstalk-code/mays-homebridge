'use client';

import { useState, useRef, FormEvent, DragEvent } from 'react';
import styles from './DocumentUploadForm.module.css';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

function UploadField({
    id,
    name,
    label,
    accepts,
    disabled,
}: {
    id: string;
    name: string;
    label: string;
    accepts: string;
    disabled: boolean;
}) {
    const [fileName, setFileName] = useState('');
    const [dragOver, setDragOver] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    function handleChange() {
        const file = inputRef.current?.files?.[0];
        setFileName(file ? file.name : '');
    }

    function handleDragOver(e: DragEvent) {
        e.preventDefault();
        setDragOver(true);
    }

    function handleDragLeave() {
        setDragOver(false);
    }

    function handleDrop(e: DragEvent) {
        e.preventDefault();
        setDragOver(false);
        if (inputRef.current && e.dataTransfer.files.length > 0) {
            const dt = new DataTransfer();
            dt.items.add(e.dataTransfer.files[0]);
            inputRef.current.files = dt.files;
            setFileName(e.dataTransfer.files[0].name);
        }
    }

    return (
        <div className={styles.formGroup}>
            <label className={styles.uploadLabel} htmlFor={id}>
                {label}
                <span>{accepts}</span>
            </label>
            <div
                className={`${styles.uploadBox} ${dragOver ? styles.dragOver : ''}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <input
                    ref={inputRef}
                    type="file"
                    id={id}
                    name={name}
                    accept="image/*,.pdf"
                    onChange={handleChange}
                    disabled={disabled}
                    required
                />
                <span className={styles.uploadIcon}>☁️</span>
                <div className={styles.uploadBoxText}>Browse Files</div>
                <div className={styles.uploadBoxSubtext}>Drag and drop files here</div>
                {fileName && <div className={styles.fileName}>{fileName}</div>}
            </div>
        </div>
    );
}

export default function DocumentUploadForm() {
    const [formState, setFormState] = useState<FormState>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    const disabled = formState === 'submitting';

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setFormState('submitting');
        setErrorMsg('');

        const formData = new FormData(e.currentTarget);

        try {
            const res = await fetch('/api/documents', {
                method: 'POST',
                body: formData,
            });

            if (res.ok) {
                setFormState('success');
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
                <h3>Documents Received!</h3>
                <p>
                    Thank you for uploading your documents. May will review them and
                    reach out to you shortly.
                </p>
            </div>
        );
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>

            <p className={styles.sectionTitle}>Your Information</p>

            <div className={styles.row}>
                <div className={styles.formGroup}>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" placeholder="Jane" required disabled={disabled} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" placeholder="Smith" required disabled={disabled} />
                </div>
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="jane@email.com" required disabled={disabled} />
            </div>

            <p className={styles.sectionTitle}>Upload Documents</p>

            <UploadField
                id="proofOfId"
                name="proofOfId"
                label="Proof of ID"
                accepts="Driver's License, Passport, State ID, Military ID"
                disabled={disabled}
            />

            <UploadField
                id="proofOfSsn"
                name="proofOfSsn"
                label="Proof of SSN"
                accepts="Social Security Card, Pay Stub, W-2/1099"
                disabled={disabled}
            />

            <UploadField
                id="proofOfAddress"
                name="proofOfAddress"
                label="Proof of Billing / Address"
                accepts="Utility Bill (Water, Gas, Cable, Electricity, Phone), Bank Statement, Credit Union Statement"
                disabled={disabled}
            />

            {formState === 'error' && (
                <div className={styles.errorMsg}>{errorMsg}</div>
            )}

            <button
                type="submit"
                className={`btn-primary ${styles.submitBtn}`}
                disabled={disabled}
            >
                {disabled ? (
                    <>Uploading… <span className={styles.spinner} /></>
                ) : (
                    <>Submit Documents <span className="arrow">→</span></>
                )}
            </button>
        </form>
    );
}
