export class Init {
    load() {
      if(localStorage.getItem('candidatos') === null || localStorage.getItem('candidatos') == undefined) {
        let candidatos = [
          {
            nome: 'John Von Neumann'
          }, 
          {
            text: 'Grace Hopper'
          }, 
          {
            text: 'Alan Turing'
          }
        ];
  
        localStorage.setItem('candidatos', JSON.stringify(candidatos));
        return 
      } else {
        console.log('...');
      }
    }
  }