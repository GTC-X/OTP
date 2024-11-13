import GradientButton from '../common/GradientButton'

const CrisisManagementSection = () => {
    return (
        <section className="bg-white px-4 py-16 text-center">
            <div className=' max-w-[42rem] mx-auto'>
                <h2 className="text-4xl font-bold mb-6">Fintech is Our DNA!</h2>
                <p className="text-lg mb-8">
                    We are the experts you trust, delivering unparalleled <br />
                    consultancy services exclusively to the world of online trading.
                </p>
                <GradientButton href="/contact" text="Get Started Today" />
            </div>
        </section>
    );
};

export default CrisisManagementSection;
