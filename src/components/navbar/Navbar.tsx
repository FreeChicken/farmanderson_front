import navlogo from '../../assets/Farmanderson_logo_branco.svg';
import { Link, useNavigate } from 'react-router-dom'



function Navbar() {
  const navigate = useNavigate()
  

  return (
    <>
     <div className='w-full bg-cyan-600 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
          <Link to='/home'>
          <img src={navlogo} alt="Farmanderson" className="h-12 w-auto" />
          </Link>

            <div className='flex gap-4'>
              <Link to='/categorias' className='hover:underline'>Categorias</Link>
              <div className='hover:underline'>Cadastrar Produto</div>
              <Link to='cadastroCategoria' className='hover:underline'>Cadastrar Categoria</Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar