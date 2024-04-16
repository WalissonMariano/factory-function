function criaCalculadora() {
    return {

        display: document.querySelector('.display'),
       
        inicia() {
            this.cliqueBotoes();
        },
        
        realizaConta(){
            let conta = this.display.value; 

            try {
                conta = eval(conta);

                if(!conta){
                    alert('Conta inválida.');
                    return;
                }

                this.display.value = String(conta);
            } catch (e) {
               alert('Conta inválida.'); 
               return;
            }
        },

        clearDisplay(){
            this.display.value = '';
        },

        cliqueBotoes() {
            
            document.addEventListener('click', function(e){
               
                const el = e.target;
                
                if(el.classList.contains('btn_num')){
                    
                    this.btnParaDisplay(el.innerText);
                    
                }

                if(el.classList.contains('btn_clear')){
                    this.clearDisplay();
                }

                if(el.classList.contains('btn_result')){
                    this.realizaConta();
                }
            }.bind(this));
            
        },

        btnParaDisplay(valor) {
            this.display.value += valor; 
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();