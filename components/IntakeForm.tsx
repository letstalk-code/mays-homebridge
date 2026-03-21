'use client';

import { useState, FormEvent } from 'react';
import styles from './IntakeForm.module.css';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function IntakeForm() {
    const [formState, setFormState] = useState<FormState>('idle');
    const [errorMsg, setErrorMsg] = useState('');
    const [hasAssets, setHasAssets] = useState('');

    const today = new Date().toISOString().split('T')[0];

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setFormState('submitting');
        setErrorMsg('');

        const form = e.currentTarget;
        const get = (name: string) =>
            (form.elements.namedItem(name) as HTMLInputElement | null)?.value ?? '';
        const getRadio = (name: string) => {
            const checked = form.querySelector<HTMLInputElement>(`input[name="${name}"]:checked`);
            return checked?.value ?? '';
        };

        const data = {
            // Personal
            firstName: get('firstName'),
            lastName: get('lastName'),
            dob: get('dob'),
            phone: get('phone'),
            email: get('email'),
            address: get('address'),
            city: get('city'),
            state: get('state'),
            zip: get('zip'),
            // Identification
            dlNumber: get('dlNumber'),
            ssn: get('ssn'),
            // Employment
            employer: get('employer'),
            jobTitle: get('jobTitle'),
            monthlyIncome: get('monthlyIncome'),
            // Financial
            savings: get('savings'),
            loanAmount: get('loanAmount'),
            downPayment: get('downPayment'),
            // Property
            commercialInterest: getRadio('commercialInterest'),
            residentialInterest: getRadio('residentialInterest'),
            moveInDate: get('moveInDate'),
            preferredLocation: get('preferredLocation'),
            // Experience
            firstTimeBuyer: getRadio('firstTimeBuyer'),
            creditAssistance: getRadio('creditAssistance'),
            hasAssets: getRadio('hasAssets'),
            assetsDescription: get('assetsDescription'),
            // Referral
            referral: get('referral'),
        };

        try {
            const res = await fetch('/api/intake', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
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
                <h3>Application Received!</h3>
                <p>
                    Thank you for completing your home application. May will review your
                    information and be in touch with you shortly.
                </p>
            </div>
        );
    }

    const disabled = formState === 'submitting';

    return (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>

            {/* PERSONAL INFORMATION */}
            <p className={styles.sectionTitle}>Personal Information</p>

            <div className={styles.row}>
                <div className={styles.formGroup}>
                    <label htmlFor="firstName">First Name *</label>
                    <input type="text" id="firstName" name="firstName" placeholder="Jane" required disabled={disabled} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="lastName">Last Name *</label>
                    <input type="text" id="lastName" name="lastName" placeholder="Smith" required disabled={disabled} />
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.formGroup}>
                    <label htmlFor="dob">Date of Birth <span className={styles.optional}>(optional)</span></label>
                    <input type="date" id="dob" name="dob" disabled={disabled} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" placeholder="(251) 555-0000" required disabled={disabled} />
                </div>
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" name="email" placeholder="jane@email.com" required disabled={disabled} />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="address">Street Address</label>
                <input type="text" id="address" name="address" placeholder="123 Main St" disabled={disabled} />
            </div>

            <div className={styles.row3}>
                <div className={styles.formGroup}>
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" name="city" placeholder="Mobile" disabled={disabled} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="state">State</label>
                    <input type="text" id="state" name="state" placeholder="AL" maxLength={2} disabled={disabled} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="zip">Zip Code</label>
                    <input type="text" id="zip" name="zip" placeholder="36601" disabled={disabled} />
                </div>
            </div>

            {/* IDENTIFICATION */}
            <p className={styles.sectionTitle}>Identification</p>

            <div className={styles.row}>
                <div className={styles.formGroup}>
                    <label htmlFor="dlNumber">Driver&apos;s License #</label>
                    <input type="text" id="dlNumber" name="dlNumber" placeholder="DL12345678" disabled={disabled} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="ssn">Social Security # <span className={styles.optional}>(last 4 digits)</span></label>
                    <input type="text" id="ssn" name="ssn" placeholder="XXXX" maxLength={4} disabled={disabled} />
                </div>
            </div>

            {/* EMPLOYMENT */}
            <p className={styles.sectionTitle}>Employment</p>

            <div className={styles.row}>
                <div className={styles.formGroup}>
                    <label htmlFor="employer">Place of Employment</label>
                    <input type="text" id="employer" name="employer" placeholder="Acme Corp" disabled={disabled} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="jobTitle">Job Title</label>
                    <input type="text" id="jobTitle" name="jobTitle" placeholder="Manager" disabled={disabled} />
                </div>
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="monthlyIncome">Monthly Income</label>
                <input type="text" id="monthlyIncome" name="monthlyIncome" placeholder="$0,000" disabled={disabled} />
            </div>

            {/* FINANCIAL */}
            <p className={styles.sectionTitle}>Financial Information</p>

            <div className={styles.row3}>
                <div className={styles.formGroup}>
                    <label htmlFor="savings">Amount in Savings</label>
                    <input type="text" id="savings" name="savings" placeholder="$0,000" disabled={disabled} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="loanAmount">Desired Loan Amount</label>
                    <input type="text" id="loanAmount" name="loanAmount" placeholder="$000,000" disabled={disabled} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="downPayment">Desired Down Payment</label>
                    <input type="text" id="downPayment" name="downPayment" placeholder="$0,000" disabled={disabled} />
                </div>
            </div>

            {/* PROPERTY INTEREST */}
            <p className={styles.sectionTitle}>Property Interest</p>

            <div className={styles.row}>
                <div className={styles.formGroup}>
                    <label>Interested in Commercial Property?</label>
                    <div className={styles.radioGroup}>
                        <label className={styles.radioLabel}>
                            <input type="radio" name="commercialInterest" value="Yes" disabled={disabled} /> Yes
                        </label>
                        <label className={styles.radioLabel}>
                            <input type="radio" name="commercialInterest" value="No" disabled={disabled} /> No
                        </label>
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <label>Interested in Residential Property?</label>
                    <div className={styles.radioGroup}>
                        <label className={styles.radioLabel}>
                            <input type="radio" name="residentialInterest" value="Yes" disabled={disabled} /> Yes
                        </label>
                        <label className={styles.radioLabel}>
                            <input type="radio" name="residentialInterest" value="No" disabled={disabled} /> No
                        </label>
                    </div>
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.formGroup}>
                    <label htmlFor="moveInDate">Desired Move-In Date</label>
                    <input type="date" id="moveInDate" name="moveInDate" disabled={disabled} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="preferredLocation">Preferred City &amp; State</label>
                    <input type="text" id="preferredLocation" name="preferredLocation" placeholder="Mobile, AL" disabled={disabled} />
                </div>
            </div>

            {/* HOME BUYING EXPERIENCE */}
            <p className={styles.sectionTitle}>Home Buying Experience</p>

            <div className={styles.formGroup}>
                <label>First time purchasing a home?</label>
                <div className={styles.radioGroup}>
                    <label className={styles.radioLabel}>
                        <input type="radio" name="firstTimeBuyer" value="Yes" disabled={disabled} /> Yes
                    </label>
                    <label className={styles.radioLabel}>
                        <input type="radio" name="firstTimeBuyer" value="No" disabled={disabled} /> No
                    </label>
                </div>
            </div>

            <div className={styles.formGroup}>
                <label>Do you need credit assistance?</label>
                <div className={styles.radioGroup}>
                    <label className={styles.radioLabel}>
                        <input type="radio" name="creditAssistance" value="Yes" disabled={disabled} /> Yes
                    </label>
                    <label className={styles.radioLabel}>
                        <input type="radio" name="creditAssistance" value="No" disabled={disabled} /> No
                    </label>
                </div>
            </div>

            <div className={styles.formGroup}>
                <label>Do you have any assets?</label>
                <div className={styles.radioGroup}>
                    <label className={styles.radioLabel}>
                        <input
                            type="radio"
                            name="hasAssets"
                            value="Yes"
                            disabled={disabled}
                            onChange={() => setHasAssets('Yes')}
                        /> Yes
                    </label>
                    <label className={styles.radioLabel}>
                        <input
                            type="radio"
                            name="hasAssets"
                            value="No"
                            disabled={disabled}
                            onChange={() => setHasAssets('No')}
                        /> No
                    </label>
                </div>
            </div>

            {hasAssets === 'Yes' && (
                <div className={styles.formGroup}>
                    <label htmlFor="assetsDescription">Please describe your assets</label>
                    <textarea
                        id="assetsDescription"
                        name="assetsDescription"
                        placeholder="List any vehicles, real estate, investments, etc."
                        disabled={disabled}
                    />
                </div>
            )}

            {/* REFERRAL */}
            <p className={styles.sectionTitle}>Referral</p>

            <div className={styles.formGroup}>
                <label htmlFor="referral">How were you referred to May&apos;s HomeBridge?</label>
                <input type="text" id="referral" name="referral" placeholder="Friend, social media, Google…" disabled={disabled} />
            </div>

            {/* AGREEMENT */}
            <p className={styles.sectionTitle}>Agreement</p>

            <div className={styles.checkboxGroup}>
                <input type="checkbox" id="certify" name="certify" required disabled={disabled} />
                <label htmlFor="certify">
                    I certify that all information provided on this application is accurate and true to the best of my knowledge.
                </label>
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="submitDate">Date</label>
                <input type="date" id="submitDate" name="submitDate" defaultValue={today} readOnly disabled={disabled} />
            </div>

            {formState === 'error' && (
                <div className={styles.errorMsg}>{errorMsg}</div>
            )}

            <button
                type="submit"
                className={`btn-primary ${styles.submitBtn}`}
                disabled={disabled}
            >
                {disabled ? (
                    <>Submitting… <span className={styles.spinner} /></>
                ) : (
                    <>Submit Application <span className="arrow">→</span></>
                )}
            </button>
        </form>
    );
}
