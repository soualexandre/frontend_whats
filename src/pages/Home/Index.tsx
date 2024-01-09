import Footer from "../../components/Footer/Index";
import Header from "../../components/Header/Index";
import InputMessage from "../../components/ImputMessage/Index";
import UploadDocument from "../../components/UploadDocument/Index";
import UploadMedia from "../../components/UploadMedia/Index";

export default function Home() {
    return (
        <>
            <Header />
            <form action="" className='mb-20'>
                <UploadDocument />
                <UploadMedia />
                <InputMessage />
                <button type='submit' className='px-6 py-2 bg-green-600 text-white'>Enviar mensagem em massa</button>
            </form>
            <Footer />
        </>
    );
}