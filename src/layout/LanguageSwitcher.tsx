import { useTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';

export function LanguageSwitcher() {
    const { i18n } = useTranslation();

    return (
        <div className="d-flex gap-2">
            <Button size="sm" variant="outline-secondary" onClick={() => i18n.changeLanguage('en')}>EN</Button>
            <Button size="sm" variant="outline-secondary" onClick={() => i18n.changeLanguage('pl')}>PL</Button>
        </div>
    );
}