window.onload=function(){
    var spanList=document.getElementsByTagName('span')[0];
    var form=document.getElementById('rootForm');
    spanList.onclick=function(){
        this.style.display="none";
        createInputLista(form);
    }
    
    function createInputLista(form){
        var conteinerList=document.createElement('div');
        conteinerList.classList.add('conteiner');
        form.appendChild(conteinerList);
        
        var inputList=document.createElement('input')
        inputList.setAttribute("type","text");
        inputList.setAttribute("id","input")
        inputList.setAttribute("placeholder", "Añadir una Lista");
        conteinerList.appendChild(inputList);

        var saveButton=document.createElement('button');
        txtSaveButton=document.createTextNode('Guardar');
        saveButton.appendChild(txtSaveButton);
        conteinerList.appendChild(saveButton);
        desabled(saveButton);
       
        var deleteButton=document.createElement('i');
        deleteButton.classList.add('fa','fa-times');
        conteinerList.appendChild(deleteButton);
        
        inputList.addEventListener("keyup",function(){
            if(this.value==""){
                desabled(saveButton);        
            }else{
                enabled(saveButton);
            }
        })
        
        saveButton.addEventListener("click",function(){
            var newForm=document.createElement('div');
            newForm.setAttribute("class","inlineFlex");
            
            var task= document.getElementById('task');
            task.appendChild(newForm);
            
            var newDiv=document.createElement('div')
            newDiv.classList.add('conteiner');
            newForm.appendChild(newDiv);
            task.insertBefore(newForm,form);
            
            var tittleList=document.createElement("label");
            tittleList.setAttribute("type","text");
            tittleList.setAttribute("class","block");
            newDiv.appendChild(tittleList);
            
            var txtTittle=document.createTextNode(inputList.value);
            tittleList.appendChild(txtTittle);
            
            var addList=document.createElement('a');
            addList.setAttribute("class","block");
            txtAddList=document.createTextNode('Agregar Lista..');
            addList.setAttribute("href","#");
            addList.appendChild(txtAddList);
            newDiv.appendChild(addList);

            addList.addEventListener("click",function(){
                this.style.display="none";
                var textareaList=document.createElement('textarea');
                textareaList.setAttribute("class","textarea");
                textareaList.setAttribute("class","block");
                newDiv.appendChild(textareaList);
        
                var addButton=document.createElement('button');
                txtAddButton=document.createTextNode('Añadir');
                addButton.appendChild(txtAddButton);
                newDiv.appendChild(addButton);

                addButton.addEventListener("click",function(){
                    var newTextareaList=document.createElement('textarea');
                    newTextareaList.setAttribute("class","textarea");
                    newTextareaList.setAttribute("class","block");
                    newDiv.insertBefore(newTextareaList,addButton);
                });
            });

        });

    }

    function desabled(button){
        button.disabled=true;
    }
    function enabled(button){
        button.disabled=false;
    }
    
}

