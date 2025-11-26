import { Target, Users, Heart, Lightbulb } from "lucide-react";
import { Card, CardContent } from "./ui/Card";

const AboutUs = () => {
    const values = [
        {
            icon: Target,
            title: "Visi Kami",
            description: "Mewujudkan lingkungan bersih dan sehat melalui pengelolaan sampah yang berkelanjutan, serta meningkatkan kesadaran masyarakat akan pentingnya daur ulang."
        },
        {
            icon: Heart,
            title: "Misi Kami",
            description: "Memberikan solusi pengelolaan sampah yang menguntungkan masyarakat, mengedukasi pentingnya reduce-reuse-recycle, dan berkontribusi terhadap ekonomi sirkular."
        },
        {
            icon: Users,
            title: "Tim Profesional",
            description: "Didukung oleh tim yang terlatih dan berpengalaman dalam pengelolaan sampah, kami memastikan setiap transaksi berjalan transparan dan akurat."
        },
        {
            icon: Lightbulb,
            title: "Inovasi Berkelanjutan",
            description: "Kami terus berinovasi dalam metode pengolahan sampah dan sistem reward untuk memberikan nilai maksimal bagi anggota dan lingkungan."
        }
    ];

    return (
        <section id="tentang" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 animate-fade-in">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Tentang Kami
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Bank Sampah yang berkomitmen mengubah sampah menjadi berkah dan lingkungan bersih menjadi kenyataan
                    </p>
                </div>

                <div className="mb-10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                    <Card variant="outline" shadow="none" className="overflow-hidden">
                        <CardContent className="p-8 md:p-12">
                            <div className="prose prose-lg max-w-none">
                                <p className="text-foreground/90 leading-relaxed mb-6">
                                    Bank Sampah kami didirikan dengan semangat untuk menciptakan perubahan positif bagi lingkungan dan masyarakat.
                                    Berawal dari kepedulian terhadap penumpukan sampah yang semakin meningkat, kami hadir sebagai solusi yang tidak
                                    hanya mengatasi masalah sampah, tetapi juga memberikan manfaat ekonomi langsung kepada masyarakat.
                                </p>
                                <p className="text-foreground/90 leading-relaxed mb-6">
                                    Dengan sistem yang transparan dan mudah dipahami, kami memfasilitasi masyarakat untuk menyetorkan sampah
                                    anorganik yang dapat didaur ulang. Setiap kilogram sampah yang disetor akan ditimbang, dicatat, dan dihargai
                                    sesuai dengan harga pasar yang berlaku. Dana yang terkumpul dapat ditabung atau dicairkan kapan saja sesuai
                                    kebutuhan anggota.
                                </p>
                                <p className="text-foreground/90 leading-relaxed">
                                    Hingga saat ini, kami telah melayani ribuan anggota dan berhasil mengumpulkan ratusan ton sampah untuk didaur
                                    ulang. Pencapaian ini tidak lepas dari dukungan dan partisipasi aktif masyarakat yang peduli lingkungan.
                                    Bersama-sama, kita wujudkan lingkungan yang lebih bersih, sehat, dan berkelanjutan untuk generasi mendatang.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {values.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <Card
                                variant="outline"
                                shadow="none"
                                key={index}
                                className="hover:shadow-eco transition-all duration-300 animate-fade-in hover-scale"
                                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                            >
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                            <Icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-foreground mb-2">
                                                {value.title}
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {value.description}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
