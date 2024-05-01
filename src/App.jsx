import ButtonGradient from "@/assets/svg/ButtonGradient";
import Button from "./components/Button";

const App = () => {
  return (
    <>
      <h1 className="mt-20">Brainwave</h1>
      <div className="pt-[4.7rem] lg:pt-[5.25rem] overflow-hidden">
        <Button className="mt-10" href="#login">
          Something
        </Button>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
