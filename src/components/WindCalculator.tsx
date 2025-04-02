import { Button } from "@/components/ui/button"
// import CalculateWindPressures from "@/components/CalculateWindPressures";
import TabMenu from "@/components/TabMenu";
import Header from "@/components/Header";


const WindCalculator = () => {  
    const isDarkMode = document.body.classList.contains('dark');  
  
    return (  
      <div className="flex justify-center w-full">  
        <div className={`container rounded-xl shadow-lg shadow-blue-500/10 p-4 max-w-[750px] mx-auto my-10 border md:p-5 md:m-5 ${isDarkMode ? 'dark' : 'light'}`}>  
        <Header></Header>
        <TabMenu />
        {/* <CalculateWindPressures></CalculateWindPressures> */}
        <Button>Click me</Button> 
        </div>  
      </div>  
    );  
  };  
  
  export default WindCalculator;