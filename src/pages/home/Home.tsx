import homeLogo from '../../assets/Farma_branco.svg'
import './Home.css';

function Home() {
    return (
        <>
        <div className="bg-cyan-500 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Os melhores preços!</h2>
              <p className='text-xl'>Caiu hoje do caminhão.</p>
  
              
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/6'/>
      
            </div>
          </div>
        </div>
      
      </>
    );
}

export default Home;