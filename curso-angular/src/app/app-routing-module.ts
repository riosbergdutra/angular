//NgModule é uma função decoradora do Angular que define um módulo.
//RouterModule é um módulo do Angular responsável pelo gerenciamento de rotas.
//Routes é uma interface do Angular que define as configurações das rotas
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// as rotas criadas no componente lá abaixo
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";
import { ItemDetailComponent } from "./components/item-detail/item-detail.component";
// criação de uma constante com rotas para caa componente
const routes: Routes = [
    {path: '', component: FirstComponentComponent},
    //outra rota abaixo
    {path: 'list', component: ListRenderComponent},
    {path: 'list/:id', component: ItemDetailComponent}// desta maneira com /:id cria-se uma rota dinamica (estou dizendo que a rota vai mudar toda vez que será acessada), aqui eles fazem que todos as minhas arrays me levem a esta página
] // const é uma variavel na qual n pode ser mudada
// este é uma array de objetos
// o "path" no TypeScript serve para especificar a localização correta de arquivos e diretórios, permitindo que você importe e utilize recursos de outros arquivos em seu projeto. Isso ajuda a manter seu código organizado e facilita a reutilização de código em diferentes partes do projeto.
//path: Indica o caminho (URL) associado a um determinado componente. Por exemplo, o caminho vazio '' representa a rota raiz, enquanto 'list' representa o caminho '/list'.

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)], // aqui diz que as rotas começam do routes que é a raiz
    exports: [RouterModule]
}) 
//Decorador @NgModule:
//É usado para definir as configurações do módulo appRoutingModule.
//declarations é um array vazio porque não estamos declarando nenhum componente neste módulo.
//imports inclui o RouterModule.forRoot(routes), onde routes é o array de rotas definido anteriormente. Isso configura as rotas principais da aplicação.
//exports exporta o RouterModule, para que outros módulos possam importar e usar as rotas definidas aqui.

export class appRoutingModule {} // para poder exporta-la