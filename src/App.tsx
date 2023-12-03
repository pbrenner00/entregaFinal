import React, { useState } from 'react';
import ImgProduto from "./img/battefiled.png";
import './App.css';
import Header from "./pages/Header";
import Avaliacao from "./components/Avaliacao";
import './css/style.css';
import './css/style2.css';


interface Jogo {
    nome: string;
    categoria: string;
    estrelas: number;

    // Adicione outras propriedades conforme necessário
}

const App: React.FC = () => {
    const [categoriaAtiva, setCategoriaAtiva] = useState<string>('todos');

    const filtrarPorCategoria = (categoria: string) => {
        setCategoriaAtiva(categoria);
    };

    const jogos: Jogo[] = [
        // Adicione detalhes dos jogos aqui
        { nome: 'Battlefield 4™', categoria: 'jogando', estrelas: 3 },
        // Adicione mais jogos conforme necessário
    ];

    const jogosFiltrados = categoriaAtiva === 'todos'
        ? jogos
        : jogos.filter(jogo => jogo.categoria === categoriaAtiva);

    return (
        <div>
            <Header/>
            <div className="add-jogo">
                <a href="pages/cadatro_jogo.html">
                    <button className="btn orange text-center">Clique aqui e adicione seu Jogo</button>
                </a>
                <br />
            </div>
            <br />
            <main>
                <br />
                <div className="container main">
                    <div className="categorias">
                        <p>Categorias </p>
                        <div className="menucategorias">
                            <button className="btn info" data-categoria="jogando" onClick={() => filtrarPorCategoria('jogando')}>
                                Jogando
                            </button>
                            <br />
                            <button className="btn success" data-categoria="jogado" onClick={() => filtrarPorCategoria('jogado')}>
                                Jogado
                            </button>
                            <br />
                            <button className="btn warning" data-categoria="zerados" onClick={() => filtrarPorCategoria('zerados')}>
                                Zerados
                            </button>
                            <br />
                            <button
                                className="btn danger"
                                data-categoria="nao_recomendo"
                                onClick={() => filtrarPorCategoria('nao_recomendo')}
                            >
                                Não Recomendados
                            </button>
                        </div>
                    </div>
                    <div className="produtos">
                        {jogosFiltrados.map((jogo, index) => (
                            <div key={index} className="cards">
                                <img src={process.env.PUBLIC_URL + '/img/battefiled.png'} className="card-imgs" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{jogo.nome}</h5>
                                </div>
                                <Avaliacao isRated={jogo.estrelas} texto="sem classificações" />
                                <div className="informacoes">
                                    <span className="desconto">{"jogo.desconto"}</span>
                                    <span className="valor">{"jogo.valor"}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <br />
            <footer id="footer">
                <div className="footer-top">
                    <div className="footer-column">
                        <h3>Valores</h3>
                        <p>Trabalho duro</p>
                        <p>Integridade</p>
                        <p>Inovação</p>
                    </div>
                    <div className="footer-column">
                        <h3>Ajuda</h3>
                        <p><a href="#">Central de Atendimento</a></p>
                        <p><a href="#">Tutoriais</a></p>
                        <p><a href="#">Blog</a></p>
                    </div>
                    <div className="footer-column">
                        <h3>Segurança</h3>
                        <p><a href="#">Política de Privacidade</a></p>
                        <p><a href="#">Política de Segurança</a></p>
                        <p><a href="#">Suporte à Vítimas de Cibercrime</a></p>
                    </div>
                    <div className="footer-column">
                        <h3>Redes Sociais</h3>
                        <p><a href="#">Facebook</a></p>
                        <p><a href="#">Twitter</a></p>
                        <p><a href="#">Instagram</a></p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2023 - Strong Games. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    );
};

export default App;
