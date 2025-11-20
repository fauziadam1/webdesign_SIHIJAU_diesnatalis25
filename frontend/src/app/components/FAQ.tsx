import { Accordion } from "./ui/Accordion";

const faqs = [
    {
        question: "Apa itu Bank Sampah?",
        answer: "Bank Sampah adalah sistem pengelolaan sampah berbasis komunitas yang memberikan nilai ekonomis pada sampah. Konsepnya mirip dengan bank konvensional, di mana nasabah 'menabung' sampah dan mendapatkan saldo yang dapat ditarik menjadi uang tunai atau ditukar dengan kebutuhan sehari-hari."
    },
    {
        question: "Bagaimana cara mendaftar menjadi anggota?",
        answer: "Pendaftaran sangat mudah! Anda hanya perlu membawa fotokopi KTP/KK, mengisi formulir pendaftaran, dan membayar biaya administrasi sebesar Rp 10.000 untuk buku tabungan. Setelah itu, Anda langsung bisa mulai menabung sampah."
    },
    {
        question: "Jenis sampah apa saja yang diterima?",
        answer: "Kami menerima berbagai jenis sampah anorganik seperti plastik (botol, gelas, kantong), kertas (koran, majalah, kardus), logam (kaleng, aluminium, tembaga), dan elektronik (kabel, PCB, baterai). Sampah harus dalam kondisi bersih dan kering."
    },
    {
        question: "Berapa harga sampah per kilogram?",
        answer: "Harga bervariasi tergantung jenis dan kualitas: Plastik PET Rp 3.000-5.000/kg, Plastik PP Rp 2.000-3.000/kg, Kertas HVS Rp 2.500/kg, Kardus Rp 1.500/kg, Kaleng Rp 5.000/kg, Besi Rp 3.000/kg, Aluminium Rp 15.000/kg, Tembaga Rp 55.000/kg. Harga dapat berubah mengikuti harga pasar."
    },
    {
        question: "Kapan saya bisa menarik tabungan saya?",
        answer: "Anda dapat menarik saldo kapan saja tanpa batas minimum penarikan. Proses penarikan dilakukan setiap hari Senin-Jumat pukul 09.00-15.00. Uang akan langsung diberikan tunai atau transfer sesuai permintaan Anda."
    },
    {
        question: "Apakah ada batas minimum sampah yang harus disetor?",
        answer: "Tidak ada batas minimum! Anda bisa menyetor sampah mulai dari 1 kg. Namun untuk efisiensi, kami menyarankan mengumpulkan minimal 3-5 kg agar biaya transportasi lebih sepadan dengan hasil yang didapat."
    },
    {
        question: "Bagaimana cara memilah sampah dengan benar?",
        answer: "Pisahkan sampah anorganik dari organik. Untuk anorganik: bersihkan dari sisa makanan/minuman, keringkan, dan pisahkan berdasarkan jenisnya. Lepas label dari botol plastik, lipat kardus agar tidak memakan tempat. Hindari mencampur sampah basah dengan kering."
    },
    {
        question: "Apakah ada layanan jemput sampah?",
        answer: "Ya! Kami menyediakan layanan jemput sampah gratis untuk wilayah dalam radius 3 km dari bank sampah, dengan minimal setoran 10 kg. Untuk lokasi lebih jauh, kami kenakan biaya transportasi sesuai jarak. Hubungi CS kami untuk jadwal jemput."
    },
    {
        question: "Apa saja manfaat bergabung dengan Bank Sampah?",
        answer: "Manfaat bergabung: mendapat penghasilan tambahan dari sampah, membantu menjaga kebersihan lingkungan, mengurangi volume sampah di TPA, berkontribusi pada ekonomi sirkular, mendapat edukasi pengelolaan sampah, dan bergabung dalam komunitas peduli lingkungan."
    },
    {
        question: "Bagaimana jika sampah saya ditolak?",
        answer: "Sampah akan ditolak jika: kotor atau bercampur makanan, basah atau berjamur, tercampur sampah B3 (limbah berbahaya), atau kualitas terlalu rendah. Tim kami akan menjelaskan alasan penolakan dan memberi panduan cara memilah yang benar agar bisa diterima di setoran berikutnya."
    }
];

export default function FAQ() {
    return (
        <section className="py-20 lg:py-32 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center space-y-4 mb-12">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                            Pertanyaan yang Sering Diajukan
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Temukan jawaban untuk pertanyaan umum seputar Bank Sampah
                        </p>
                    </div>

                    <Accordion items={faqs} />
                </div>
            </div>
        </section>
    );
};