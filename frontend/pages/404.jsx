import Link from 'next/link';
import {useEffect} from 'react';
import {useRouter} from 'next/router';


const NotFoundSite = () => {

    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/');
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <h1 className="relative pt-28">404</h1>
            <h2>Ta strona prawdopodbnie nie istnieje</h2>
            <p>Przejdź do strony głównej <Link href='/'>Strona główna</Link></p>
        </div>
    );
};

export default NotFoundSite;
