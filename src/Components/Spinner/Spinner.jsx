import { RingLoader } from 'react-spinners';

const Spinner = () => {
    return (
        <div  className="container mx-auto font-bold flex justify-center items-center text-center my-20">
             <RingLoader
                color={`#FF444A`}
                loading={`loading`}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              /> 
            
        </div>
    );
};

export default Spinner;