import { SiFujifilm, SiKodak, SiLeica, SiNikon, SiSamsung, SiSony } from "react-icons/si";

const Brand = () => {
    return (
        <div className="px-6 py-8">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 text-pink-950">
                <SiSony size="auto" className="m-auto w-16 sm:w-20 md:w-24" />
                <SiFujifilm size="auto" className="m-auto w-16 sm:w-20 md:w-24" />
                <SiLeica size="auto" className="m-auto w-12 sm:w-16 md:w-20" />
                <SiKodak size="auto" className="m-auto w-12 sm:w-16 md:w-20" />
                <SiSamsung size="auto" className="m-auto w-16 sm:w-20 md:w-24" />
                <SiNikon size="auto" className="m-auto w-16 sm:w-20 md:w-24" />
            </div>
        </div>
    );
};

export default Brand;
