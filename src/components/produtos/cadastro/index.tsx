'use client';
import { Layout, Input } from "components";
import {useState} from 'react';

export const CadastroProdutos: React.FC = () =>{
    
    const [sku, setSku] = useState<string>('');
    const [preco, setPreco] = useState<string>('');
    const [nome, setNome] = useState<string>('');  
    const [descricao, setDescricao] = useState<string>('');

    function submit (){
        const produto = {
            sku, preco, nome, descricao
        }
        console.log(produto);
    }

    return(
        <Layout titulo="Cadastro de Produtos" >
            <div className="columns">
                <Input label="SKU: *" columClasses="is-half" onChange={setSku} value={sku} id="inputSku" placeholder="Digite o SKU do produto"/>
                {/* <div className="field is-half column">
                    <label className="label" htmlFor="inputSku">SKU: *</label>
                    <div className="control">
                        <input className="input" id="inputSku"
                                                type="text" 
                                                placeholder="Digite o SKU do produto"
                                                value={sku}
                                                onChange={e => setSku(e.target.value)}/>
                    </div>
                </div> */}

                <Input label="Preço: *" columClasses="is-half" onChange={setPreco} value={preco} id="inputPreco" placeholder="Digite o Preço do produto" type="number"/>

            </div>
            <div className="columns">
                <Input label="Nome: *" columClasses="is-full" onChange={setNome} value={nome} id="inputNome" placeholder="Digite o Nome do produto"/>
            </div>

            <div className="columns">
                <div className="field column is-full">
                    <label className="label" htmlFor="inputDesc">Descrição: *</label>
                    <div className="control">
                        <textarea className="textarea" id="inputDesc"
                                                placeholder="Digite a Descrição do produto"
                                                value={descricao}
                                                onChange={e => setDescricao(e.target.value)}/>
                    </div>
                </div>
            </div>

            <div className="columns">
                <div className="field is-grouped column is-full">
                    <div className="control">
                        <button className="button is-link" onClick={submit}>Salvar</button>
                    </div>
                    <div className="control">
                        <button className="button is-link is-light">Voltar</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}