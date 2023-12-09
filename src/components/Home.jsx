import img from "../assets/img/a.png";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E] ">
      <div className=" w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0">
        <h1 className="font-semibold text-5xl text-center lg:text-start leading-tight">
          Start your day with a steaming cup of coffee
        </h1>
        <p>
          Boost your productivity and build your mood with a cup of coffee in
          the morning
        </p>

        <div className=" flex flex-row gap-6">
          <Button title="SEE MORE" />
        </div>
      </div>

      <div className="relative">
        <img src={img} alt="img" />

       

        
      </div>
    </div>
  );
};

export default Home;
