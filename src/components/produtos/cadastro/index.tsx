import { Layout } from "components";

export const CadastroProdutos: React.FC = () =>{
    return(
        <Layout titulo="Cadastro de Produtos" >
            <div className="columns">
                <div className="field is-half column">
                    <label className="label" htmlFor="inputSku">SKU: *</label>
                    <div className="control">
                        <input className="input" id="inputSku"
                                                type="text" 
                                                placeholder="Digite o SKU do produto"/>
                    </div>
                </div>

                <div className="field is-half column">
                    <label className="label" htmlFor="inputPreco">Preço: *</label>
                    <div className="control">
                        <input className="input" id="inputPreco"
                                                type="number" 
                                                placeholder="Digite o Preço do produto"/>
                    </div>
                </div>
            </div>
            <div className="field">
                <label className="label" htmlFor="inputNome">Nome: *</label>
                <div className="control">
                    <input className="input" id="inputNome"
                                             type="text" 
                                             placeholder="Digite o Nome do produto"/>
                </div>
            </div>

            <div className="columns">
                <div className="field column is-full">
                    <label className="label" htmlFor="inputDesc">Descrição: *</label>
                    <div className="control">
                        <textarea className="textarea" id="inputDesc"
                                                placeholder="Digite a Descrição do produto"/>
                    </div>
                </div>
            </div>

            <div className="columns">
                <div className="field is-grouped column is-full">
                    <div className="control">
                        <button className="button is-link">Salvar</button>
                    </div>
                    <div className="control">
                        <button className="button is-link is-light">Voltar</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}