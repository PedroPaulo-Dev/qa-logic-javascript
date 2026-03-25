const LIST = [
    { id: 1, nome: 'Mestre Yoda', avatar: 'images/yoda.png' },
    { id: 2, nome: 'luke skywalker', avatar: 'images/luke.png' },
    { id: 3, nome: 'princesa leia', avatar: 'images/leia.png' },
    { id: 4, nome: 'Han Solo', avatar: 'images/hansolo.png' },
    { id: 5, nome: 'darth vader', avatar: 'images/vader.png' },
    { id: 6, nome: 'chewbacca', avatar: 'images/chewbacca.png' },
    { id: 7, nome: 'R2-D2', avatar: 'images/r2d2.png' },
    { id: 8, nome: 'C-3PO', avatar: 'images/c3po.png' }
]

const App = new Vue({
    el: '#app',
    data: {
        title: 'Star Wars Lego',
        userName: 'Pedro Paulo',
        Character: LIST, 
        searchName: ''
    },
    methods: {
        like(userName) {
            alert(`O personagem ${userName} recebeu um like!`);
        },

        remove(id) {
            const list = this.Character;

            const result = list.filter(item => {
                return item.id !== id
            })

            this.Character = result;
        },


        search() {

            if (this.searchName === '') {
                alert('O campo de busca é obrigatório!');
                return;
            }

            const list = this.Character = LIST;

            const result = list.filter((item) => {
                return item.nome.toLowerCase() === this.searchName.toLowerCase();
            })

            if (result.length <= 0) {
                alert('Personagem não encontrado!');
            } else {
                this.Character = result;
            }
        }
    } 
}); 

document.getElementById('user-name').innerHTML = App.userName;