import type { Metadata } from 'next';
import IntakeForm from '@/components/IntakeForm';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Home Application | May\'s HomeBridge',
    description: 'Complete your home application form for May\'s HomeBridge. Required after your initial payment.',
    robots: 'noindex',
};

export default function IntakePage() {
    return (
        <main>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <p className="section-label fade-in">Client Intake</p>
                    <h1 className="fade-in stagger-1">Home Application Form</h1>
                    <div className="gold-line-center fade-in stagger-2" />
                    <p className="fade-in stagger-2">
                        Please fill out all sections as accurately as possible. This information
                        helps May prepare the best strategy for your home buying journey.
                    </p>
                </div>
            </section>

            <section className={styles.formSection}>
                <IntakeForm />
            </section>
        </main>
    );
}
