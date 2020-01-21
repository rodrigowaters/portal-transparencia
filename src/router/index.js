import Vue       from 'vue'
import VueRouter from 'vue-router'
import Home      from '../views/Home.vue'

Vue.use(VueRouter);

let hasAuthenticated = (to, from, next) =>
{

    let isAuthenticated = true;

    if (!isAuthenticated)
    {
        next('/sem-login');
    }
    else
    {
        next();
    }

};

const routes = [
    // Utilidade
    {path: '/', name: 'home', component: Home},
    {path: '/acesso_informacao', component: () => import('../views/acesso_informacao/Index')},
    {path: '/acesso_informacao/solicitar', component: () => import('../views/acesso_informacao/Solicitar')},
    {path: '/acesso_informacao/consultar', component: () => import('../views/acesso_informacao/Consultar')},
    {path: '/relatorio_acesso_informacao', component: () => import('../views/acesso_informacao/Relatorio')},
    {path: '/faleconosco', component: () => import('../views/Fale_Conosco')},
    {path: '/mapa-do-site', component: () => import('../views/Mapa-Do-Site')},
    {path: '/busca-rapida', component: () => import('../views/Busca-Rapida.vue')},
    {path: '/busca-rapida/:query', component: () => import('../views/Busca-Rapida.vue'), props: true},
    {path: '/faq', component: () => import('../views/faq/Consulta')},
    {path: '/faq/perguntar', component: () => import('../views/faq/Perguntar')},
    {path: '/glossario', component: () => import('../views/Glossario')},
    {path: '/solicitar_senha', component: () => import('../views/Solicitar_Senha')},
    // Consultas que precisam de Login
    {path: '/contra_cheque', component: () => import('../views/Contra_Cheque'), beforeEnter: hasAuthenticated},
    {path: '/rendimentos', component: () => import('../views/Rendimentos'), beforeEnter: hasAuthenticated},
    {path: '/sem-login', component: () => import('../views/Sem_Login')},
    // Consultas que não precisam de Login
    {path: '/contrato', component: () => import('../views/Contrato')},
    {path: '/consulta_imoveis_veiculos', component: () => import('../views/Consulta_Imoveis_Veiculos')},
    {path: '/contas_publicas', component: () => import('../views/contas_publicas/Index')},
    {path: '/contas_publicas/balanco_orcamentario', component: () => import('../views/contas_publicas/Balanco_Orcamentario')},
    {path: '/contas_publicas/demonstrativo_anual_receita_despesa', component: () => import('../views/contas_publicas/Demonstrativo_Anual_Receita_Despesa')},
    {path: '/contas_publicas/execucao_orcamentos', component: () => import('../views/contas_publicas/Execucao_Orcamentos')},
    {path: '/contas_publicas/orcamentos_anuais', component: () => import('../views/contas_publicas/Orcamentos_Anuais')},
    {path: '/contas_publicas/tributos_arrecadados', component: () => import('../views/contas_publicas/Tributos_Arrecadados')},
    {path: '/contas_publicas/recursos_recebidos', component: () => import('../views/contas_publicas/Recursos_Recebidos')},
    {path: '/contas_publicas/compras', component: () => import('../views/contas_publicas/Compras')},
    {path: '/contas_publicas/resumo_contratos_aditivos', component: () => import('../views/contas_publicas/Resumo_Contratos_Aditivos')},
    {path: '/contas_publicas/resumo_contratos_aditivos_obras_servicos_engenharia', component: () => import('../views/contas_publicas/Resumo_Contratos_Aditivos_Obras_Servicos_Engenharia')},
    {path: '/despesas', component: () => import('../views/despesas/Index')},
    {path: '/despesas/diarias', component: () => import('../views/despesas/Diarias')},
    {path: '/despesas/passagens', component: () => import('../views/despesas/Passagens')},
    {path: '/despesas/empenho', component: () => import('../views/despesas/Empenho')},
    {path: '/despesas/por_categoria', component: () => import('../views/despesas/Por_Categoria')},
    {path: '/despesas/funcao_subfuncao', component: () => import('../views/despesas/Funcao_Subfuncao')},
    {path: '/despesas/extra', component: () => import('../views/despesas/Extra')},
    {path: '/despesas/relacao_cronologica_para_pagamento', component: () => import('../views/despesas/Relacao_Cronologica_Para_Pagamento')},
    {path: '/folha_pagamento', component: () => import('../views/Folha_Pagamento')},
    {path: '/licitacoes/info_licitacao', component: () => import('../views/licitacoes/Info_Licitacao')},
    {path: '/receitas', component: () => import('../views/Receitas')},
    {path: '/restos_pagar', component: () => import('../views/Restos_Pagar')},
    {path: '/ordem_pagamento', component: () => import('../views/Ordem_Pagamento')},
    {path: '/quadro_funcional', component: () => import('../views/Quadro_Funcional')},
    {path: '/servidores_salarios', component: () => import('../views/Servidores_Salarios')},
    {path: '/setor', component: () => import('../views/Setores')},
    // Dinamicas
    {path: '/dinamico/:page_id', component: () => import('../views/Dinamico.vue'), props: true},
    // Não encontrado
    {
        path     : "*",
        name     : "not-found",
        component: () =>
            import("../views/Not-Found.vue"),
        meta     : {
            visible: false
        }
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
