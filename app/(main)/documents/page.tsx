import type { Metadata } from 'next';
import DocumentUploadForm from '@/components/DocumentUploadForm';
import styles from './documents.module.css';

export const metadata: Metadata = {
    title: 'Upload Documents | May\'s HomeBridge',
    description: 'Securely upload your supporting documents for May\'s HomeBridge.',
    robots: 'noindex',
};

export default function DocumentsPage() {
    return (
        <main>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <p className="section-label fade-in">Secure Upload</p>
                    <h1 className="fade-in stagger-1">Upload Your Documents</h1>
                    <div className="gold-line-center fade-in stagger-2" />
                    <p className="fade-in stagger-2">
                        Please upload the required documents below. All files are stored
                        securely and only accessible by May&apos;s HomeBridge.
                    </p>
                </div>
            </section>

            <section className={styles.formSection}>
                <DocumentUploadForm />
            </section>
        </main>
    );
}
