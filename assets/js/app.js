window.onload=function(){
    var spanList=document.getElementsByTagName('span')[0];
    var form=document.getElementById('rootForm');
    spanList.onclick=function(){
        this.style.display="none";
        form.style.backgroundColor="rgb(229, 232, 232)";
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
        deleteButton.classList.add('fa','fa-times','cancela');
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
            newForm.setAttribute("class","inlineBlock");
            newForm.setAttribute("class","newForm")
            var task= document.getElementById('task');
            task.appendChild(newForm);
            
            var newDiv=document.createElement('div')
            newDiv.classList.add('conteiner');
            newForm.appendChild(newDiv);
            task.insertBefore(newForm,form);
            
            var tittleList=document.createElement("label");
            tittleList.setAttribute("class","block");
            newDiv.appendChild(tittleList);
            
            var txtTittle=document.createTextNode(inputList.value);
            tittleList.appendChild(txtTittle);
            
            var addList=document.createElement('a');
            addList.setAttribute("class","block");
            txtAddList=document.createTextNode('Agregar Lista..');
            addList.setAttribute("href","#");
            addList.appendChild(txtAddList);
            newForm.appendChild(addList);
            inputList.value="";
            desabled(this);

            addList.addEventListener("click",function(){
                this.style.display="none";
                var textareaList=document.createElement('textarea');
                textareaList.setAttribute("class","block");
                newDiv.appendChild(textareaList);
        
                var addButton=document.createElement('button');
                var txtAddButton=document.createTextNode('Añadir');
                addButton.appendChild(txtAddButton);
                newDiv.appendChild(addButton);
                desabled(addButton);
                var deleteButton2=document.createElement('i');
                deleteButton2.classList.add('fa','fa-times','cancela');
                newDiv.appendChild(deleteButton2);
                
                textareaList.addEventListener("keyup",function(){
                    if(this.value==""){
                        desabled(addButton);        
                    }else{
                        enabled(addButton);
                        autosize(textareaList);
                        
                    }
                });
                addButton.addEventListener("click",function(){
                    var divTextarea=document.createElement("div");
                    divTextarea.setAttribute("id","divTextarea")
                    newDiv.insertBefore(divTextarea,textareaList);
                    
                    var pTextarea=document.createElement("p");
                    pTextarea.setAttribute("id","pTextarea");
                    divTextarea.appendChild(pTextarea);

                    var txtPtextarea=document.createTextNode(textareaList.value)
                    pTextarea.appendChild(txtPtextarea);

                    var iTextarea=document.createElement("i");
                    iTextarea.classList.add("fa","fa-pencil","edit")
                    divTextarea.appendChild(iTextarea);
                    textareaList.value="";
                    autosize(textareaList);
                    desabled(addButton);
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
    function autosize(el){
        setTimeout(function(){
            el.style.cssText = 'height:auto; padding:0';
            el.style.cssText = 'height:' + el.scrollHeight + 'px';
        },0);
    }
    
}

