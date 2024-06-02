const operacion =document.querySelector(".operacion");
const botones=document.querySelectorAll(".btn");

botones.forEach(boton=> {
    boton.addEventListener("click", () =>{
        const botonApretado=boton.textContent;

        if(boton.id === "c") {
            operacion.textContent="0";
            return;
        }
        if(boton.id==="borrar") {
            if(operacion.textContent.length === 1 || operacion.textContent=== "Error!") {
                operacion.textContent="0";
            } else {
                operacion.textContent=operacion.textContent.slice(0,-1);
            }
            return;
        }

        if(boton.id==="igual") {
            try {
                operacion.textContent=eval(operacion.textContent);
            } catch {
                operacion.textContent="Error!";
            }
            return
        }

        if(operacion.textContent ==="0" || operacion.textContent=== "Error!" ) {
            operacion.textContent=botonApretado;
        } else{
            operacion.textContent +=botonApretado;
        }
    })

})