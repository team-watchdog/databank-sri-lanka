import { FunctionComponent } from "react";
import Image from 'next/image';
import Link from "next/link";
import { useRouter } from "next/router";

// icons
import { WrenchIcon } from '../icons/Wrench';

// assets
import logo from '../public/logo.svg';
import Button from '../components/Button';

// styles
import styles from '../styles/Home.module.css'

const Header: FunctionComponent = () => {
    const { push } = useRouter();

    return (
        <>
            <header className="py-4 text-white bg-blue-900">
                <div className={styles.container}>
                    <div className="flex flex-row justify-between">
                        <div className="w-[200px] h-fit overflow-hidden">
                            <Link href={"/"}>
                                <Image 
                                    src={logo}
                                    alt="Logo" 
                                    layout="responsive"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
            <div className="bg-slate-100 py-2 border-y-slate-200 border-y">
                <div className={styles.container}>
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row">
                            <ul className="flex flex-row gap-x-4 flex-wrap">
                                <li className="font-medium"><Link href="">Contribute Datasets</Link></li>
                                <li className="font-medium"><Link href="">Suggest Dataset</Link></li>
                                <li className="font-medium"><Link href="">About Databank</Link></li>
                            </ul>
                        </div>
                        <div>
                            <Button 
                                type="primary" 
                                onMouseDown={() => {
                                    push("/metadata-generator");
                                }}
                            ><WrenchIcon /> Metadata Generator</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;