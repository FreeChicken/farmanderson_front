import navlogo from '../../assets/Farmanderson_logo_branco.svg';

function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-cyan-600 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
          <img src={navlogo} alt="Farmanderson" className="h-12 w-auto" />

            <div className='flex gap-4'>
              <div className='hover:underline'>Home</div>
              <div className='hover:underline'>Categorias</div>
              <div className='hover:underline'>Cadastrar Produto</div>
              <div className='hover:underline'>Cadastrar Categoria</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar