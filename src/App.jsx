import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { DiAtom } from "react-icons/di";
import { HiBars3CenterLeft } from "react-icons/hi2";
import React, { useRef } from 'react';


import './App.css'

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const myRef = useRef(null);

  const scrollToMyRef = () => {
    myRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  

  return (
    <>
    <div className='simplebar'>
      
        <body className='simplebar'>
           
        <div className="sidebar">
      <HiBars3CenterLeft className="toggle-button" onClick={toggleSidebar} />
      <nav className={`sidebar-nav ${showSidebar ? 'show' : ''}`}>
         
     <a href="#h11"> <input type='button' value={'INICIO'}/></a>
      <input type='button' onClick={scrollToMyRef} value={'SOBRE MIM'}/>
      <input type='button' value={'PROJETOS'}/>
            


      </nav>
    </div>
  


          <div className='navbar'>

       


          <nav>
            <h1 id='h11'> <span className='d1'>/* </span> EBERT <span className='d1'>*/</span></h1>
            <div className='botoes'>
            <button className='inicio' onClick={() => window.scrollTo(0, 0)}> <strong> INICIO </strong></button>
            <button className='sobre' onClick={scrollToMyRef}> <strong> SOBRE MIM </strong></button>
            <button className='projeto'> <strong> PROJETOS </strong></button>
            </div>
          



          </nav>
          </div> 
          <div className='name' id='name'>

               <h2>JOAO EBERT</h2>
               <h3>Desenvolverdor Web</h3>

           </div>  

          <main>
          <div className='icon'>
          <DiAtom className='DiAtom'></DiAtom>
          </div>


         
          </main>
<div className='sobremim' ref={myRef}>
  <h5 className='sobremim-title'>Sobre mim:</h5>
  <p className='sobremim-description'>
    Olá meu nome e João, tenho 16 anos e estou aprendendo a progamar em react,
    estou aprendendo a alguns meses e procuro me aprimorar melhor no futuro,
    quero conseguir um emprego de DevJunior para ganhar mais experiencia. Minha
    inspiraçao para o meu portifolio foi o do{" "}
    <a href='https://github.com/Math-Vieira/Portfolio2.0'>Matheus Vieira</a>{" "}
    apenas vendo a imagem do portifolio dele como ideia para o meu, nao usei
    nenhum codigo do dele. Comecei a "progamar" em março de 2022, porem nao
    foquei em apenas uma linguagem e acabei me perdendo, a alguns meses foquei
    em apenas uma linguagem javascript usando o biblioteca do react. estou
    aprendendo e gostando dessa area. obrigado por ler meu portifolio :)
  </p>
</div>






        </body>    
        </div>
    </>
  )
}

export default App
